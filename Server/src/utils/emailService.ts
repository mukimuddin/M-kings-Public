import nodemailer from 'nodemailer';
import { generateVerificationEmail, generatePasswordResetEmail } from './emailTemplates';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendVerificationEmail = async (to: string, name: string, verificationUrl: string): Promise<void> => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to,
    subject: 'Verify Your Email - M Kings',
    html: generateVerificationEmail(name, verificationUrl),
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (to: string, name: string, resetUrl: string): Promise<void> => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to,
    subject: 'Reset Your Password - M Kings',
    html: generatePasswordResetEmail(name, resetUrl),
  };

  await transporter.sendMail(mailOptions);
}; 