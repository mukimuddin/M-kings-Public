"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const serviceController_1 = require("../controllers/serviceController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Validation middleware
const validateService = [
    (0, express_validator_1.body)('name').trim().notEmpty().withMessage('Service name is required'),
    (0, express_validator_1.body)('description')
        .trim()
        .notEmpty()
        .withMessage('Service description is required'),
    (0, express_validator_1.body)('price')
        .isFloat({ min: 0 })
        .withMessage('Price must be a positive number'),
    (0, express_validator_1.body)('duration')
        .trim()
        .notEmpty()
        .withMessage('Service duration is required'),
    (0, express_validator_1.body)('features')
        .isArray({ min: 1 })
        .withMessage('At least one feature is required'),
    (0, express_validator_1.body)('category')
        .isIn(['web', 'mobile', 'ai', 'cloud', 'marketing', 'consulting'])
        .withMessage('Invalid service category'),
];
// Public routes
router.get('/', serviceController_1.getAllServices);
router.get('/:id', serviceController_1.getService);
// Protected routes (admin only)
router.use(auth_1.protect, (0, auth_1.restrictTo)('admin'));
router.post('/', validateService, serviceController_1.createService);
router.patch('/:id', validateService, serviceController_1.updateService);
router.delete('/:id', serviceController_1.deleteService);
exports.default = router;
