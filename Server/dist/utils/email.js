"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPasswordResetEmail = exports.sendVerificationEmail = exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_1 = require("./logger");
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const sendEmail = async (to, subject, text, html) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html,
        };
        await transporter.sendMail(mailOptions);
        logger_1.logger.info(`Email sent to ${to}`);
    }
    catch (error) {
        logger_1.logger.error(`Error sending email: ${error}`);
        throw error;
    }
};
exports.sendEmail = sendEmail;
const sendVerificationEmail = async (email, token) => {
    const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    const subject = 'Verify your email';
    const text = `Click the following link to verify your email: ${verificationUrl}`;
    const html = `
    <h1>Verify your email</h1>
    <p>Click the following link to verify your email:</p>
    <a href="${verificationUrl}">Verify Email</a>
  `;
    await (0, exports.sendEmail)(email, subject, text, html);
};
exports.sendVerificationEmail = sendVerificationEmail;
const sendPasswordResetEmail = async (email, token) => {
    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    const subject = 'Reset your password';
    const text = `Click the following link to reset your password: ${resetUrl}`;
    const html = `
    <h1>Reset your password</h1>
    <p>Click the following link to reset your password:</p>
    <a href="${resetUrl}">Reset Password</a>
  `;
    await (0, exports.sendEmail)(email, subject, text, html);
};
exports.sendPasswordResetEmail = sendPasswordResetEmail;
