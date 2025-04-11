import nodemailer from 'nodemailer';
import { logger } from './logger';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  html?: string
): Promise<void> => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    logger.info(`Email sent to ${to}`);
  } catch (error) {
    logger.error(`Error sending email: ${error}`);
    throw error;
  }
};

export const sendVerificationEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
  const subject = 'Verify your email';
  const text = `Click the following link to verify your email: ${verificationUrl}`;
  const html = `
    <h1>Verify your email</h1>
    <p>Click the following link to verify your email:</p>
    <a href="${verificationUrl}">Verify Email</a>
  `;

  await sendEmail(email, subject, text, html);
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
  const subject = 'Reset your password';
  const text = `Click the following link to reset your password: ${resetUrl}`;
  const html = `
    <h1>Reset your password</h1>
    <p>Click the following link to reset your password:</p>
    <a href="${resetUrl}">Reset Password</a>
  `;

  await sendEmail(email, subject, text, html);
}; 