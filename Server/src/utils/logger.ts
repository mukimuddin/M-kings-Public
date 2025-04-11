import winston from 'winston';
import path from 'path';

const logDir = 'logs';
const { combine, timestamp, printf, colorize } = winston.format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Create logger instance
export const logger = winston.createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    // Console transport with colors
    new winston.transports.Console({
      format: combine(
        colorize(),
        logFormat
      )
    }),
    // File transport for all logs
    new winston.transports.File({
      filename: path.join(logDir, 'combined.log')
    }),
    // File transport for error logs
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error'
    })
  ]
});

// Create a stream object for Morgan
export const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
}; 