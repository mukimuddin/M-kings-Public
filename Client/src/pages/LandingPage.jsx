import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
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

          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 