import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        {/* Logo Text Animation */}
        <motion.div
          className="text-4xl font-bold flex items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="text-blue-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            M
          </motion.span>
          <motion.span
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Kings Group
          </motion.span>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          className="absolute -bottom-4 left-0 h-1 bg-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "left" }}
        />

        {/* Loading Text */}
        <motion.p
          className="text-gray-400 mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading; 