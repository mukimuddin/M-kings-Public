import { Request, Response } from 'express';
import { AppError } from './errorHandler';

export const notFound = (_req: Request, res: Response) => {
  const error = new AppError(`Can't find ${_req.originalUrl} on this server!`, 404);
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message
  });
}; 