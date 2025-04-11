import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Users, Briefcase, Brain, Plane } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Technology', icon: <Code size={40} />, description: 'Cutting-edge technology solutions for your business needs.' },
    { title: 'AI Solutions', icon: <Brain size={40} />, description: 'Harness the power of artificial intelligence to drive innovation.' },
    { title: 'Software Development', icon: <Code size={40} />, description: 'Custom software solutions tailored to your requirements.' },
    { title: 'Travel', icon: <Plane size={40} />, description: 'Exclusive travel experiences and services.' },
    { title: 'Mentorship', icon: <Users size={40} />, description: 'Guidance and support for personal and professional growth.' },
    { title: 'Business Consulting', icon: <Briefcase size={40} />, description: 'Strategic advice to help your business thrive.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 