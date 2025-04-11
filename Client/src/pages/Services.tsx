import React from 'react';
import { useSpring, animated } from '@react-spring/web';

// Custom hook for animations
const useAnimations = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 200,
  });

  // Create individual animations for services
  const serviceAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const serviceAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  const serviceAnimation3 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  const serviceAnimation4 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
  });

  const serviceAnimation5 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  const serviceAnimation6 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1200,
  });

  // Create individual animations for pricing plans
  const pricingAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const pricingAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  const pricingAnimation3 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  return {
    fadeIn,
    slideUp,
    serviceAnimations: [
      serviceAnimation1,
      serviceAnimation2,
      serviceAnimation3,
      serviceAnimation4,
      serviceAnimation5,
      serviceAnimation6,
    ],
    pricingAnimations: [pricingAnimation1, pricingAnimation2, pricingAnimation3],
  };
};

const Services: React.FC = () => {
  const { fadeIn, slideUp, serviceAnimations, pricingAnimations } = useAnimations();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <animated.div style={fadeIn} className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Discover our comprehensive range of services designed to help your
              business thrive in the digital age.
            </p>
          </animated.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description:
                'Custom web applications built with modern technologies for optimal performance and user experience.',
              icon: '🌐',
              features: [
                'Responsive Design',
                'Progressive Web Apps',
                'E-commerce Solutions',
                'API Integration',
              ],
            },
            {
              title: 'Mobile Development',
              description:
                'Native and cross-platform mobile applications for iOS and Android platforms.',
              icon: '📱',
              features: [
                'iOS & Android Apps',
                'React Native Development',
                'Mobile UI/UX Design',
                'App Store Optimization',
              ],
            },
            {
              title: 'AI Solutions',
              description:
                'Artificial Intelligence and Machine Learning solutions to automate and optimize business processes.',
              icon: '🤖',
              features: [
                'Machine Learning Models',
                'Natural Language Processing',
                'Computer Vision',
                'Predictive Analytics',
              ],
            },
            {
              title: 'Cloud Services',
              description:
                'Scalable cloud infrastructure and services for reliable and secure operations.',
              icon: '☁️',
              features: [
                'Cloud Migration',
                'Serverless Architecture',
                'DevOps Automation',
                'Cloud Security',
              ],
            },
            {
              title: 'Digital Marketing',
              description:
                'Comprehensive digital marketing strategies to increase online presence and engagement.',
              icon: '📈',
              features: [
                'SEO Optimization',
                'Social Media Marketing',
                'Content Strategy',
                'Analytics & Reporting',
              ],
            },
            {
              title: 'Consulting',
              description:
                'Expert guidance and strategic planning for digital transformation.',
              icon: '💡',
              features: [
                'Technology Assessment',
                'Digital Strategy',
                'Process Optimization',
                'Training & Support',
              ],
            },
          ].map((service, index) => (
            <animated.div
              key={index}
              style={serviceAnimations[index]}
              className="card"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </animated.div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$99',
                period: 'month',
                features: [
                  'Basic Website',
                  '5 Pages',
                  'Mobile Responsive',
                  'Basic SEO',
                  'Email Support',
                ],
                cta: 'Get Started',
              },
              {
                name: 'Professional',
                price: '$299',
                period: 'month',
                features: [
                  'Custom Website',
                  'Unlimited Pages',
                  'Advanced SEO',
                  'E-commerce Integration',
                  'Priority Support',
                  'Analytics Dashboard',
                ],
                cta: 'Get Professional',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'month',
                features: [
                  'Custom Solutions',
                  'Dedicated Team',
                  '24/7 Support',
                  'Advanced Security',
                  'Custom Integrations',
                  'Training & Support',
                ],
                cta: 'Contact Sales',
              },
            ].map((plan, index) => (
              <animated.div
                key={index}
                style={pricingAnimations[index]}
                className={`card relative ${
                  plan.popular
                    ? 'border-2 border-accent transform scale-105'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 bg-accent text-white text-center py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn w-full ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </button>
              </animated.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 