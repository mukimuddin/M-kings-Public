import nodemailer from 'nodemailer';
import { logger } from '../utils/logger';

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async ({ email, subject, message }: EmailOptions) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject,
      text: message,
      html: message,
    };

    await transporter.sendMail(mailOptions);
    logger.info(`Email sent to ${email}`);
  } catch (error) {
    logger.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}; 