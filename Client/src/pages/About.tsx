import React from 'react';
import { useSpring, animated } from '@react-spring/web';

// Custom hook for animations
const useAnimations = (count: number, delay: number = 200) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: delay,
  });

  const animations = Array(count).fill(null).map((_, index) => 
    useSpring({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      delay: delay * index,
    })
  );

  return { fadeIn, slideUp, animations };
};

const About: React.FC = () => {
  const { fadeIn, slideUp, animations: teamAnimations } = useAnimations(6);
  const { animations: valuesAnimations } = useAnimations(3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <animated.div style={fadeIn} className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">About M Kings</h1>
            <p className="text-xl text-gray-200">
              We are a team of passionate individuals dedicated to creating
              innovative solutions for businesses worldwide.
            </p>
          </animated.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4">
        <animated.div style={slideUp} className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Founded in 2024, M Kings has been at the forefront of digital
            innovation, helping businesses transform their operations through
            cutting-edge technology solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our journey began with a simple mission: to make technology
            accessible and beneficial for businesses of all sizes. Today, we
            continue to push boundaries and create solutions that drive growth
            and success.
          </p>
        </animated.div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'John Doe',
              role: 'CEO & Founder',
              image: '👨‍💼',
              bio: 'Visionary leader with 15+ years of experience in technology and business development.',
            },
            {
              name: 'Jane Smith',
              role: 'CTO',
              image: '👩‍💻',
              bio: 'Technical expert specializing in AI and machine learning solutions.',
            },
            {
              name: 'Mike Johnson',
              role: 'Lead Developer',
              image: '👨‍💻',
              bio: 'Full-stack developer with expertise in modern web technologies.',
            },
            {
              name: 'Sarah Williams',
              role: 'UX Designer',
              image: '👩‍🎨',
              bio: 'Creative designer focused on creating intuitive and beautiful user experiences.',
            },
            {
              name: 'David Brown',
              role: 'Marketing Director',
              image: '👨‍💼',
              bio: 'Marketing strategist with a passion for digital growth.',
            },
            {
              name: 'Emily Davis',
              role: 'Customer Success',
              image: '👩‍💼',
              bio: 'Dedicated to ensuring client satisfaction and success.',
            },
          ].map((member, index) => (
            <animated.div
              key={index}
              style={teamAnimations[index]}
              className="card text-center"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-accent mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </animated.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'We constantly push boundaries and explore new possibilities.',
                icon: '💡',
              },
              {
                title: 'Excellence',
                description:
                  'We strive for perfection in everything we do.',
                icon: '🏆',
              },
              {
                title: 'Integrity',
                description:
                  'We maintain the highest standards of honesty and transparency.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <animated.div
                key={index}
                style={valuesAnimations[index]}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </animated.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 