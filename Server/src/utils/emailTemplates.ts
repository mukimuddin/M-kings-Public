export const generateVerificationEmail = (name: string, verificationUrl: string): string => {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #333; text-align: center;">Welcome to M Kings!</h1>
      <p style="color: #666;">Dear ${name},</p>
      <p style="color: #666;">Thank you for signing up! Please verify your email address by clicking the button below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
          Verify Email
        </a>
      </div>
      <p style="color: #666;">If the button doesn't work, you can also copy and paste this link into your browser:</p>
      <p style="color: #666; word-break: break-all;">${verificationUrl}</p>
      <p style="color: #666;">This link will expire in 24 hours.</p>
      <p style="color: #666;">Best regards,<br>The M Kings Team</p>
    </div>
  `;
};

export const generatePasswordResetEmail = (name: string, resetUrl: string): string => {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #333; text-align: center;">Reset Your Password</h1>
      <p style="color: #666;">Dear ${name},</p>
      <p style="color: #666;">We received a request to reset your password. Click the button below to create a new password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
          Reset Password
        </a>
      </div>
      <p style="color: #666;">If the button doesn't work, you can also copy and paste this link into your browser:</p>
      <p style="color: #666; word-break: break-all;">${resetUrl}</p>
      <p style="color: #666;">This link will expire in 1 hour.</p>
      <p style="color: #666;">If you didn't request this password reset, please ignore this email.</p>
      <p style="color: #666;">Best regards,<br>The M Kings Team</p>
    </div>
  `;
}; 