import { Request, Response, NextFunction } from 'express';
import { Service } from '../models/Service';
import { AppError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';

export const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, search, sort } = req.query;

    // Build query
    const query: any = { isActive: true };
    if (category) {
      query.category = category;
    }
    if (search) {
      query.$text = { $search: search as string };
    }

    // Build sort
    const sortOptions: any = {};
    if (sort === 'price-asc') {
      sortOptions.price = 1;
    } else if (sort === 'price-desc') {
      sortOptions.price = -1;
    } else {
      sortOptions.createdAt = -1;
    }

    const services = await Service.find(query).sort(sortOptions);

    res.status(200).json({
      status: 'success',
      results: services.length,
      data: {
        services,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return next(new AppError(404, 'Service not found'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        service,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        service,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!service) {
      return next(new AppError(404, 'Service not found'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        service,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!service) {
      return next(new AppError(404, 'Service not found'));
    }

    res.status(200).json({
      status: 'success',
      message: 'Service deactivated successfully',
    });
  } catch (error) {
    next(error);
  }
}; 