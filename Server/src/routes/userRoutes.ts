import { Router } from 'express';
import { body } from 'express-validator';
import {
  updateProfile,
  changePassword,
  deleteAccount,
} from '../controllers/userController';
import { protect } from '../middleware/auth';

const router = Router();

// Validation middleware
const validateUpdateProfile = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email'),
];

const validateChangePassword = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters long'),
];

// Routes
router.patch('/profile', protect, validateUpdateProfile, updateProfile);
router.patch('/password', protect, validateChangePassword, changePassword);
router.delete('/account', protect, deleteAccount);

export default router; 