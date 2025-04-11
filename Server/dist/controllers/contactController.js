"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContactStatus = exports.getContact = exports.getAllContacts = exports.submitContact = void 0;
const Contact_1 = require("../models/Contact");
const errorHandler_1 = require("../middleware/errorHandler");
const nodemailer_1 = __importDefault(require("nodemailer"));
const submitContact = async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;
        // Create contact submission
        const contact = await Contact_1.Contact.create({
            name,
            email,
            subject,
            message,
        });
        // Send email notification
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
        };
        await transporter.sendMail(mailOptions);
        res.status(201).json({
            status: 'success',
            message: 'Contact form submitted successfully',
            data: {
                contact,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.submitContact = submitContact;
const getAllContacts = async (req, res, next) => {
    try {
        const { status, sort } = req.query;
        // Build query
        const query = {};
        if (status) {
            query.status = status;
        }
        // Build sort
        const sortOptions = {};
        if (sort === 'oldest') {
            sortOptions.createdAt = 1;
        }
        else {
            sortOptions.createdAt = -1;
        }
        const contacts = await Contact_1.Contact.find(query).sort(sortOptions);
        res.status(200).json({
            status: 'success',
            results: contacts.length,
            data: {
                contacts,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllContacts = getAllContacts;
const getContact = async (req, res, next) => {
    try {
        const contact = await Contact_1.Contact.findById(req.params.id);
        if (!contact) {
            return next(new errorHandler_1.AppError(404, 'Contact not found'));
        }
        res.status(200).json({
            status: 'success',
            data: {
                contact,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getContact = getContact;
const updateContactStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const contact = await Contact_1.Contact.findByIdAndUpdate(req.params.id, { status }, {
            new: true,
            runValidators: true,
        });
        if (!contact) {
            return next(new errorHandler_1.AppError(404, 'Contact not found'));
        }
        res.status(200).json({
            status: 'success',
            data: {
                contact,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateContactStatus = updateContactStatus;
const deleteContact = async (req, res, next) => {
    try {
        const contact = await Contact_1.Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return next(new errorHandler_1.AppError(404, 'Contact not found'));
        }
        res.status(200).json({
            status: 'success',
            message: 'Contact deleted successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteContact = deleteContact;
