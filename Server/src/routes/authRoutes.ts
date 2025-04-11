import { Router } from 'express';
import { validateRequest } from '../middleware/validateRequest';
import { authValidation } from '../validations/authValidation';
import {
  signup,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
  logout
} from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/signup', validateRequest(authValidation.signup), signup);
router.post('/login', validateRequest(authValidation.login), login);
router.post('/verify-email', validateRequest(authValidation.verifyEmail), verifyEmail);
router.post('/forgot-password', validateRequest(authValidation.forgotPassword), forgotPassword);
router.post('/reset-password', validateRequest(authValidation.resetPassword), resetPassword);
router.post('/logout', protect, logout);

export default router; 