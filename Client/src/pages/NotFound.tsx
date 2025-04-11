import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const NotFound: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 200,
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <animated.div
        style={fadeIn}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
        <animated.div style={slideUp}>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="btn btn-primary w-full"
            >
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary w-full"
            >
              Go Back
            </button>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default NotFound; 