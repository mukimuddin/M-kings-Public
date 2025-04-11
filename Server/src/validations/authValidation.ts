import { z } from 'zod';

export const authValidation = {
  signup: z.object({
    body: z.object({
      name: z.string()
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name cannot be more than 50 characters'),
      email: z.string()
        .email('Please provide a valid email address')
        .toLowerCase(),
      password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    }),
  }),

  login: z.object({
    body: z.object({
      email: z.string()
        .email('Please provide a valid email address')
        .toLowerCase(),
      password: z.string()
        .min(1, 'Password is required'),
    }),
  }),

  verifyEmail: z.object({
    body: z.object({
      token: z.string()
        .min(1, 'Verification token is required'),
    }),
  }),

  forgotPassword: z.object({
    body: z.object({
      email: z.string()
        .email('Please provide a valid email address')
        .toLowerCase(),
    }),
  }),

  resetPassword: z.object({
    body: z.object({
      token: z.string()
        .min(1, 'Reset token is required'),
      password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    }),
  }),
}; 