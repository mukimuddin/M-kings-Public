import nodemailer from 'nodemailer';
import { config } from '../config';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.secure,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: EmailOptions): Promise<void> => {
  try {
    await transporter.sendMail({
      from: config.email.from,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export const generateVerificationEmail = (name: string, token: string): string => {
  const verificationUrl = `${config.clientUrl}/verify-email?token=${token}`;
  return `
    <h1>Welcome to M Kings!</h1>
    <p>Hello ${name},</p>
    <p>Please verify your email address by clicking the link below:</p>
    <a href="${verificationUrl}">Verify Email</a>
    <p>If you did not create an account, please ignore this email.</p>
  `;
};

export const generatePasswordResetEmail = (name: string, token: string): string => {
  const resetUrl = `${config.clientUrl}/reset-password?token=${token}`;
  return `
    <h1>Password Reset Request</h1>
    <p>Hello ${name},</p>
    <p>You have requested to reset your password. Click the link below to proceed:</p>
    <a href="${resetUrl}">Reset Password</a>
    <p>If you did not request a password reset, please ignore this email.</p>
    <p>This link will expire in 1 hour.</p>
  `;
}; 