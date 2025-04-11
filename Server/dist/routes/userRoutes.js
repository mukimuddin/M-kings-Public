"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Validation middleware
const validateUpdateProfile = [
    (0, express_validator_1.body)('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
    (0, express_validator_1.body)('email')
        .optional()
        .trim()
        .isEmail()
        .withMessage('Please provide a valid email'),
];
const validateChangePassword = [
    (0, express_validator_1.body)('currentPassword')
        .notEmpty()
        .withMessage('Current password is required'),
    (0, express_validator_1.body)('newPassword')
        .isLength({ min: 8 })
        .withMessage('New password must be at least 8 characters long'),
];
// Routes
router.patch('/profile', auth_1.protect, validateUpdateProfile, userController_1.updateProfile);
router.patch('/password', auth_1.protect, validateChangePassword, userController_1.changePassword);
router.delete('/account', auth_1.protect, userController_1.deleteAccount);
exports.default = router;
