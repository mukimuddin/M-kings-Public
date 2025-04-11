import { Router } from 'express';
import { body } from 'express-validator';
import {
  getAllServices,
  getService,
  createService,
  updateService,
  deleteService,
} from '../controllers/serviceController';
import { protect, restrictTo } from '../middleware/auth';

const router = Router();

// Validation middleware
const validateService = [
  body('name').trim().notEmpty().withMessage('Service name is required'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Service description is required'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('duration')
    .trim()
    .notEmpty()
    .withMessage('Service duration is required'),
  body('features')
    .isArray({ min: 1 })
    .withMessage('At least one feature is required'),
  body('category')
    .isIn(['web', 'mobile', 'ai', 'cloud', 'marketing', 'consulting'])
    .withMessage('Invalid service category'),
];

// Public routes
router.get('/', getAllServices);
router.get('/:id', getService);

// Protected routes (admin only)
router.use(protect, restrictTo('admin'));

router.post('/', validateService, createService);
router.patch('/:id', validateService, updateService);
router.delete('/:id', deleteService);

export default router; 