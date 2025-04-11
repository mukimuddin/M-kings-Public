import { Request, Response } from 'express';
import { AppError } from './errorHandler';

export const notFound = (req: Request, res: Response) => {
  throw new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
}; 