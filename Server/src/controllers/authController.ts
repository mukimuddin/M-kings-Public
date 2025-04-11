import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
import { sendVerificationEmail, sendPasswordResetEmail } from '../utils/emailService';
import { generateVerificationEmail, generatePasswordResetEmail } from '../utils/emailTemplates';
import { AppError } from '../utils/appError';
import { catchAsync } from '../utils/catchAsync';

const signToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  });
};

export const signup = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('Email already in use', 400);
  }

  // Create verification token
  const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: '24h',
  });

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    verificationToken,
    verificationTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  });

  // Send verification email
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`;
  await sendVerificationEmail(user.email, user.name, verificationUrl);

  // Generate token
  const token = signToken(user._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    throw new AppError('Please provide email and password', 400);
  }

  // Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Incorrect email or password', 401);
  }

  // Check if email is verified
  if (!user.isEmailVerified) {
    throw new AppError('Please verify your email first', 401);
  }

  // Generate token
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

export const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const { token } = req.body;

  // Find user with valid verification token
  const user = await User.findOne({
    verificationToken: token,
    verificationTokenExpiry: { $gt: Date.now() },
  });

  if (!user) {
    throw new AppError('Invalid or expired verification token', 400);
  }

  // Update user
  user.isEmailVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiry = undefined;
  await user.save();

  // Send welcome email using verification email function with a custom message
  const welcomeUrl = `${process.env.CLIENT_URL}/login`;
  await sendVerificationEmail(user.email, user.name, welcomeUrl);

  res.status(200).json({
    status: 'success',
    message: 'Email verified successfully',
  });
});

export const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;

  // Get user based on email
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError('User not found', 404);
  }

  // Generate reset token
  const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  // Save reset token to user
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  await user.save();

  // Send reset email
  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
  await sendPasswordResetEmail(user.email, user.name, resetUrl);

  res.status(200).json({
    status: 'success',
    message: 'Password reset token sent to email',
  });
});

export const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const { token, password } = req.body;

  // Find user with valid reset token
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new AppError('Invalid or expired reset token', 400);
  }

  // Update password
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  // Send confirmation email using verification email function with a custom message
  const loginUrl = `${process.env.CLIENT_URL}/login`;
  await sendVerificationEmail(user.email, user.name, loginUrl);

  res.status(200).json({
    status: 'success',
    message: 'Password reset successful',
  });
}); 