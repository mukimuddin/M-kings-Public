# M Kings Server

Backend server for the M Kings website built with Node.js, Express, TypeScript, and MongoDB.

## Features

- User authentication with JWT
- Role-based access control
- MongoDB database integration
- Error handling and logging
- TypeScript for type safety

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```
4. Update the `.env` file with your configuration
5. Start the development server:
   ```
   npm run dev
   ```

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot reloading
- `npm run build`: Build the TypeScript code
- `npm test`: Run tests
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## API Endpoints

### Authentication

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/login`: Login a user
- `GET /api/auth/verify-email/:token`: Verify email
- `POST /api/auth/forgot-password`: Request password reset
- `POST /api/auth/reset-password/:token`: Reset password

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
└── index.ts        # Entry point
```

## Error Handling

The server uses a centralized error handling system with custom error classes and middleware.

## Logging

Logging is implemented using Winston with different log levels and file outputs.

## License

MIT 