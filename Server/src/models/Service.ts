import mongoose from 'mongoose';

export interface IService extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  category: 'web' | 'mobile' | 'ai' | 'cloud' | 'marketing' | 'consulting';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Service description is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Service price is required'],
      min: [0, 'Price cannot be negative'],
    },
    duration: {
      type: String,
      required: [true, 'Service duration is required'],
      trim: true,
    },
    features: {
      type: [String],
      required: [true, 'Service features are required'],
    },
    category: {
      type: String,
      enum: ['web', 'mobile', 'ai', 'cloud', 'marketing', 'consulting'],
      required: [true, 'Service category is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better search performance
serviceSchema.index({ name: 'text', description: 'text' });

export const Service = mongoose.model<IService>('Service', serviceSchema); 