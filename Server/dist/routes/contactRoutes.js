"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const contactController_1 = require("../controllers/contactController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Validation middleware
const validateContact = [
    (0, express_validator_1.body)('name').trim().notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('email')
        .trim()
        .isEmail()
        .withMessage('Please provide a valid email'),
    (0, express_validator_1.body)('subject').trim().notEmpty().withMessage('Subject is required'),
    (0, express_validator_1.body)('message').trim().notEmpty().withMessage('Message is required'),
];
const validateStatus = [
    (0, express_validator_1.body)('status')
        .isIn(['pending', 'in-progress', 'resolved'])
        .withMessage('Invalid status'),
];
// Public routes
router.post('/', validateContact, contactController_1.submitContact);
// Protected routes (admin only)
router.use(auth_1.protect, (0, auth_1.restrictTo)('admin'));
router.get('/', contactController_1.getAllContacts);
router.get('/:id', contactController_1.getContact);
router.patch('/:id/status', validateStatus, contactController_1.updateContactStatus);
router.delete('/:id', contactController_1.deleteContact);
exports.default = router;
