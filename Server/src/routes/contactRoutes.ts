import { Router } from 'express';
import { body } from 'express-validator';
import {
  submitContact,
  getAllContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController';
import { protect, restrictTo } from '../middleware/auth';

const router = Router();

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

const validateStatus = [
  body('status')
    .isIn(['pending', 'in-progress', 'resolved'])
    .withMessage('Invalid status'),
];

// Public routes
router.post('/', validateContact, submitContact);

// Protected routes (admin only)
router.use(protect, restrictTo('admin'));

router.get('/', getAllContacts);
router.get('/:id', getContact);
router.patch('/:id/status', validateStatus, updateContactStatus);
router.delete('/:id', deleteContact);

export default router; 