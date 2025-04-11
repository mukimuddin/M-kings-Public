"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const serviceSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
// Index for better search performance
serviceSchema.index({ name: 'text', description: 'text' });
exports.Service = mongoose_1.default.model('Service', serviceSchema);
