# M Kings Next-Generation Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS, featuring a beautiful UI/UX design and advanced functionality.

## Features

- 🎨 Modern UI with dark/light mode support
- 🔐 Secure authentication system
- 💳 Payment integration
- 💬 Real-time chat system
- 🤖 AI-powered services
- 🌐 Multi-language support
- 🎭 Dynamic animations and interactions
- 🔍 SEO optimization
- 📊 Analytics and tracking

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- React Spring

### Backend
- Node.js
- Express.js
- MongoDB
- Firebase

### Additional Services
- EmailJS
- Stripe
- Twilio
- Nodemailer

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/m-kings-website.git
cd m-kings-website
```

2. Install dependencies:
```bash
# Install client dependencies
cd Client
npm install

# Install server dependencies
cd ../Server
npm install
```

3. Set up environment variables:
```bash
# Client/.env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

# Server/.env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

4. Start the development servers:
```bash
# Start client
cd Client
npm start

# Start server
cd ../Server
npm start
```

## Project Structure

```
m-kings-website/
├── Client/                 # Frontend React application
│   ├── public/            # Static files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store
│   │   ├── context/       # React context
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript types
│   │   └── assets/        # Images, fonts, etc.
│   └── package.json
│
└── Server/                # Backend Node.js application
    ├── src/
    │   ├── controllers/   # Route controllers
    │   ├── models/        # Database models
    │   ├── routes/        # API routes
    │   ├── middleware/    # Custom middleware
    │   ├── utils/         # Utility functions
    │   └── config/        # Configuration files
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)
- [Twilio](https://www.twilio.com/) 