import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Zap, ChartBar, Check } from 'lucide-react';
import CountUp from 'react-countup';
import ScrollReveal from '../components/ScrollReveal';
import ParticlesBackground from '../components/ParticlesBackground';

const LandingPage = () => {
  const stats = [
    { label: 'Happy Clients', value: 200, suffix: '+', icon: <Users size={24} /> },
    { label: 'Countries', value: 15, suffix: '+', icon: <Globe size={24} /> },
    { label: 'Projects', value: 500, suffix: '+', icon: <Zap size={24} /> },
    { label: 'Success Rate', value: 98, suffix: '%', icon: <ChartBar size={24} /> }
  ];

  const highlights = [
    'Industry-leading technology solutions',
    'Expert team of professionals',
    'Proven track record of success',
    'Innovative AI & ML solutions',
    'Global reach and local expertise',
    'Dedicated customer support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full right-0 filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bg-indigo-500 rounded-full bottom-0 filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Powering the Future
              <br />
              <span className="text-blue-400">with Innovation</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Welcome to M Kings Group & Company, where we transform ideas into reality
              through cutting-edge technology and innovative solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/services">
                <motion.button
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    delay={0.5}
                  />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-300">Experience excellence in every aspect of our service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300 text-lg">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have already taken their business to the next level with our solutions.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 