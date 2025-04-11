import { Request, Response, NextFunction } from 'express';
import { Contact } from '../models/Contact';
import { AppError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';
import nodemailer from 'nodemailer';

export const submitContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create contact submission
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
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
  } catch (error) {
    next(error);
  }
};

export const getAllContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status, sort } = req.query;

    // Build query
    const query: any = {};
    if (status) {
      query.status = status;
    }

    // Build sort
    const sortOptions: any = {};
    if (sort === 'oldest') {
      sortOptions.createdAt = 1;
    } else {
      sortOptions.createdAt = -1;
    }

    const contacts = await Contact.find(query).sort(sortOptions);

    res.status(200).json({
      status: 'success',
      results: contacts.length,
      data: {
        contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return next(new AppError(404, 'Contact not found'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateContactStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return next(new AppError(404, 'Contact not found'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return next(new AppError(404, 'Contact not found'));
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact deleted successfully',
    });
  } catch (error) {
    next(error);
  }
}; 