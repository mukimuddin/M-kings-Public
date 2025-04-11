import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const About = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const coreValues = [
    { 
      title: 'Innovation',
      description: 'Driving change through cutting-edge solutions.',
      details: 'We constantly push the boundaries of what\'s possible, leveraging the latest technologies and methodologies to create innovative solutions that address complex challenges and drive business growth.',
      id: 'innovation'
    },
    { 
      title: 'Integrity',
      description: 'Building trust through transparency and honesty.',
      details: 'Our commitment to ethical business practices and transparent communication forms the foundation of lasting relationships with our clients, partners, and team members.',
      id: 'integrity'
    },
    { 
      title: 'Impact',
      description: 'Creating meaningful and lasting change.',
      details: 'Every project we undertake is focused on delivering tangible results and creating positive, lasting impact for our clients and their stakeholders.',
      id: 'impact'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-8"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <Link to={`/about/${value.id}`} key={value.id}>
              <motion.div
                key={value.title}
                className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700 cursor-pointer group h-full relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors">
                    {value.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Additional Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-gray-300 text-lg">
            To empower businesses and individuals through innovative solutions, 
            fostering growth and success in an ever-evolving digital landscape.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg">
              To be a global leader in technological innovation and business solutions, 
              setting new standards of excellence and creativity.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-300 text-lg">
              Excellence, innovation, integrity, and customer satisfaction are the 
              cornerstones of our business philosophy.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedValue}
        onClose={() => setSelectedValue(null)}
        title={selectedValue?.title}
      >
        <div className="text-gray-300 text-lg">
          <p className="mb-4">{selectedValue?.description}</p>
          <p>{selectedValue?.details}</p>
        </div>
      </Modal>
    </div>
  );
};

export default About; 