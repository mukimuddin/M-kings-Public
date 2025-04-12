import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'http';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

// Routes
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import chatRoutes from './routes/chatRoutes';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const httpServer = createServer(app);

// Socket.io setup
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { 
  stream: { 
    write: (message: string) => logger.info(message.trim()) 
  } 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Socket.io connection handling
io.on('connection', (socket) => {
  logger.info(`User connected: ${socket.id}`);

  socket.on('join_room', (roomId: string) => {
    socket.join(roomId);
    logger.info(`User ${socket.id} joined room ${roomId}`);
  });

  socket.on('leave_room', (roomId: string) => {
    socket.leave(roomId);
    logger.info(`User ${socket.id} left room ${roomId}`);
  });

  socket.on('message', (data) => {
    io.to(data.roomId).emit('message', data);
  });

  socket.on('disconnect', () => {
    logger.info(`User disconnected: ${socket.id}`);
  });
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/m-kings';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    httpServer.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  });

export default app; 