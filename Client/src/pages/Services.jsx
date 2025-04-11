import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Users, Briefcase, Globe, Plane } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: 'Technology Solutions', 
      icon: <Code size={40} />, 
      description: 'Cutting-edge technology solutions for your business needs.' 
    },
    { 
      title: 'AI & Machine Learning', 
      icon: <Brain size={40} />, 
      description: 'Harness the power of artificial intelligence to drive innovation.' 
    },
    { 
      title: 'Software Development', 
      icon: <Globe size={40} />, 
      description: 'Custom software solutions tailored to your requirements.' 
    },
    { 
      title: 'Travel Services', 
      icon: <Plane size={40} />, 
      description: 'Exclusive travel experiences and comprehensive services.' 
    },
    { 
      title: 'Professional Mentorship', 
      icon: <Users size={40} />, 
      description: 'Expert guidance for personal and professional growth.' 
    },
    { 
      title: 'Business Consulting', 
      icon: <Briefcase size={40} />, 
      description: 'Strategic consulting to help your business thrive.' 
    },
  ];

  return (
    <section id="services" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover our comprehensive range of services designed to help your business grow and succeed in the digital age.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <motion.div 
                className="text-blue-400 mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 