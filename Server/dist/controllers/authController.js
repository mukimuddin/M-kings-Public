"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.verifyEmail = exports.getMe = exports.logout = exports.login = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const userModel_1 = require("../models/userModel");
const appError_1 = require("../utils/appError");
const email_1 = require("../utils/email");
const signToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        // Generate verification token
        const verificationToken = crypto_1.default.randomBytes(32).toString('hex');
        const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
        const user = await userModel_1.User.create({
            name,
            email,
            password,
            emailVerificationToken: verificationToken,
            emailVerificationExpires: verificationExpires,
        });
        // Send verification email
        await (0, email_1.sendVerificationEmail)(email, verificationToken);
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
                    isEmailVerified: user.isEmailVerified,
                },
            },
        });
    }
    catch (error) {
        if (error.code === 11000) {
            return next(new appError_1.AppError('Email already exists', 400));
        }
        next(error);
    }
};
exports.signup = signup;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new appError_1.AppError('Please provide email and password', 400));
        }
        const user = await userModel_1.User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return next(new appError_1.AppError('Incorrect email or password', 401));
        }
        if (!user.isEmailVerified) {
            return next(new appError_1.AppError('Please verify your email first', 401));
        }
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
                    isEmailVerified: user.isEmailVerified,
                },
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const logout = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully',
    });
};
exports.logout = logout;
const getMe = async (req, res, next) => {
    try {
        const user = await userModel_1.User.findById(req.user.id);
        res.status(200).json({
            status: 'success',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getMe = getMe;
const verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.params;
        const user = await userModel_1.User.findOne({
            emailVerificationToken: token,
            emailVerificationExpires: { $gt: Date.now() },
        });
        if (!user) {
            return next(new appError_1.AppError('Invalid or expired verification token', 400));
        }
        user.isEmailVerified = true;
        user.emailVerificationToken = undefined;
        user.emailVerificationExpires = undefined;
        await user.save();
        res.status(200).json({
            status: 'success',
            message: 'Email verified successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.verifyEmail = verifyEmail;
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await userModel_1.User.findOne({ email });
        if (!user) {
            return next(new appError_1.AppError('No user found with this email', 404));
        }
        const resetToken = crypto_1.default.randomBytes(32).toString('hex');
        const resetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        user.passwordResetToken = resetToken;
        user.passwordResetExpires = resetExpires;
        await user.save();
        await (0, email_1.sendPasswordResetEmail)(email, resetToken);
        res.status(200).json({
            status: 'success',
            message: 'Password reset email sent',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.forgotPassword = forgotPassword;
const resetPassword = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        const user = await userModel_1.User.findOne({
            passwordResetToken: token,
            passwordResetExpires: { $gt: Date.now() },
        });
        if (!user) {
            return next(new appError_1.AppError('Invalid or expired reset token', 400));
        }
        user.password = password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();
        res.status(200).json({
            status: 'success',
            message: 'Password reset successful',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.resetPassword = resetPassword;
