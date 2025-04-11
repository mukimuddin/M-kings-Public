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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-8"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Welcome to M Kings Group & Company, where innovation meets excellence. 
            We are dedicated to providing top-notch services across various industries, 
            leveraging cutting-edge technology and expertise to deliver exceptional results.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {coreValues.map((value, index) => (
            <Link to={`/about/${value.id}`} key={value.id}>
              <motion.div
                variants={itemVariants}
                className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700 cursor-pointer group h-full relative overflow-hidden"
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
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {value.description}
                  </motion.p>
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
        </motion.div>

        {/* Additional Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-6"
          >
            Our Mission
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg"
          >
            To empower businesses and individuals through innovative solutions, 
            fostering growth and success in an ever-evolving digital landscape.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700"
            whileHover={{ 
              scale: 1.02,
              transition: { 
                type: "spring",
                stiffness: 300,
                damping: 10
              }
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg">
              To be a global leader in technological innovation and business solutions, 
              setting new standards of excellence and creativity.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700"
            whileHover={{ 
              scale: 1.02,
              transition: { 
                type: "spring",
                stiffness: 300,
                damping: 10
              }
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-300 text-lg">
              Excellence, innovation, integrity, and customer satisfaction are the 
              cornerstones of our business philosophy.
            </p>
          </motion.div>
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