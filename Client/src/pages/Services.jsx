import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Brain, Globe, Plane } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

const Services = () => {
  const services = [
    { 
      id: 'technology-solutions',
      title: 'Technology Solutions', 
      icon: <Code size={40} />, 
      description: 'Cutting-edge technology solutions for your business needs.'
    },
    { 
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning', 
      icon: <Brain size={40} />, 
      description: 'Harness the power of artificial intelligence to drive innovation.'
    },
    { 
      id: 'software-development',
      title: 'Software Development', 
      icon: <Globe size={40} />, 
      description: 'Custom software solutions tailored to your requirements.'
    },
    { 
      id: 'travel-services',
      title: 'Travel Services', 
      icon: <Plane size={40} />, 
      description: 'Exclusive travel experiences and comprehensive services.'
    }
  ];

  return (
    <section id="services" className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <motion.h2
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <motion.p
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our comprehensive range of services designed to help your business grow and succeed in the digital age.
          </motion.p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={0.1 * (index + 1)}>
              <Link to={`/services/${service.id}`}>
                <TiltCard className="h-full">
                  <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700 cursor-pointer group h-full">
                    <motion.div 
                      className="text-blue-400 mb-6"
                      whileHover={{ 
                        rotate: 10,
                        transition: { 
                          type: "spring",
                          stiffness: 300,
                          damping: 10
                        }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <motion.p 
                      className="text-gray-300"
                      whileHover={{ 
                        x: 5,
                        transition: { 
                          type: "spring",
                          stiffness: 300,
                          damping: 10
                        }
                      }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </TiltCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 