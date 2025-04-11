import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default error status and message
  let statusCode = 500;
  let status = 'error';
  let message = err.message || 'Internal server error';
  let stack = process.env.NODE_ENV === 'development' ? err.stack : undefined;

  // If it's our custom AppError, use its properties
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    status = err.status;
    message = err.message;
  }

  // Log error
  logger.error(`Error: ${message}`);
  if (stack) {
    logger.error(`Stack: ${stack}`);
  }

  // Send error response
  res.status(statusCode).json({
    status,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack })
  });
}; 