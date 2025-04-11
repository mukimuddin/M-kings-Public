import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="z-40"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, 10, 0]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-center justify-center">
        <motion.div 
          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
          animate={{
            y: [-4, 4, -4]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator; 