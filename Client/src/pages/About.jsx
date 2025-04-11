import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const coreValues = [
    { title: 'Innovation', description: 'Driving change through cutting-edge solutions.' },
    { title: 'Integrity', description: 'Building trust through transparency and honesty.' },
    { title: 'Impact', description: 'Creating meaningful and lasting change.' },
  ];

  return (
    <section id="about" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to M Kings Group & Company, where innovation meets excellence. 
          We are dedicated to providing top-notch services across various industries, 
          leveraging cutting-edge technology and expertise to deliver exceptional results.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 