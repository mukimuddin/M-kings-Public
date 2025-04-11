import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { Service } from '../models/Service';
import { Contact } from '../models/Contact';
import { AppError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';

export const getDashboardStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const [
      totalUsers,
      totalServices,
      totalContacts,
      pendingContacts,
    ] = await Promise.all([
      User.countDocuments(),
      Service.countDocuments({ isActive: true }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'pending' }),
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        stats: {
          totalUsers,
          totalServices,
          totalContacts,
          pendingContacts,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { role, search, sort } = req.query;

    // Build query
    const query: any = {};
    if (role) {
      query.role = role;
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    // Build sort
    const sortOptions: any = {};
    if (sort === 'name-asc') {
      sortOptions.name = 1;
    } else if (sort === 'name-desc') {
      sortOptions.name = -1;
    } else {
      sortOptions.createdAt = -1;
    }

    const users = await User.find(query).sort(sortOptions);

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return next(new AppError(404, 'User not found'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return next(new AppError(404, 'User not found'));
    }

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
}; 