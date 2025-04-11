import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import connectDB from './config/database';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';
import { AppError } from './utils/appError';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  logger.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'M Kings API is running' });
});

app.use('/api/auth', authRoutes);

// 404 handler
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use(errorHandler);

// Create HTTP server
const server: http.Server = http.createServer(app);

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err: Error) => {
      logger.error(`UNHANDLED REJECTION! Shutting down...`);
      logger.error(`${err.name}: ${err.message}`);
      server.close(() => {
        process.exit(1);
      });
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (err: Error) => {
      logger.error(`UNCAUGHT EXCEPTION! Shutting down...`);
      logger.error(`${err.name}: ${err.message}`);
      process.exit(1);
    });

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Export server for Socket.IO
export { server }; 