import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative">
        {/* Logo Text Animation */}
        <motion.div
          className="text-4xl font-bold flex items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="text-blue-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            M
          </motion.span>
          <motion.span
            className="text-white ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Kings Group
          </motion.span>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          className="absolute -bottom-4 left-0 right-0 h-1 bg-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.4,
            repeat: 1,
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
          transition={{ duration: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading; 