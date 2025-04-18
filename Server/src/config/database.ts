import mongoose from 'mongoose';
import { logger } from '../utils/logger';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/m-kings';
    await mongoose.connect(mongoURI);
    logger.info('MongoDB Connected...');
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB; 