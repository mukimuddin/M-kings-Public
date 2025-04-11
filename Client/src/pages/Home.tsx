import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

// Custom hook for animations
const useAnimations = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 400,
  });

  // Create individual animations for features
  const featureAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const featureAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  const featureAnimation3 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  const featureAnimation4 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
  });

  const featureAnimation5 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  const featureAnimation6 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1200,
  });

  return {
    fadeIn,
    slideUp,
    featureAnimations: [
      featureAnimation1,
      featureAnimation2,
      featureAnimation3,
      featureAnimation4,
      featureAnimation5,
      featureAnimation6,
    ],
  };
};

const Home: React.FC = () => {
  const { fadeIn, slideUp, featureAnimations } = useAnimations();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <animated.div style={fadeIn} className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to M Kings
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the future of digital solutions with our cutting-edge
              technology and innovative services.
            </p>
            <animated.div style={slideUp}>
              <Link
                to="/services"
                className="btn btn-primary text-lg px-8 py-3"
              >
                Explore Services
              </Link>
            </animated.div>
          </animated.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Solutions',
                description:
                  'Leverage the power of artificial intelligence for smarter business decisions.',
                icon: '🤖',
              },
              {
                title: 'Real-Time Analytics',
                description:
                  'Get instant insights with our advanced analytics platform.',
                icon: '📊',
              },
              {
                title: 'Secure Authentication',
                description:
                  'Enterprise-grade security with multi-factor authentication.',
                icon: '🔒',
              },
              {
                title: 'Cloud Integration',
                description:
                  'Seamless integration with major cloud platforms.',
                icon: '☁️',
              },
              {
                title: 'Mobile Responsive',
                description:
                  'Perfect experience across all devices and screen sizes.',
                icon: '📱',
              },
              {
                title: '24/7 Support',
                description:
                  'Round-the-clock technical support for all your needs.',
                icon: '🛠️',
              },
            ].map((feature, index) => (
              <animated.div
                key={index}
                style={featureAnimations[index]}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already experienced
            the M Kings difference.
          </p>
          <Link
            to="/contact"
            className="btn bg-white text-accent hover:bg-gray-100 text-lg px-8 py-3"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 