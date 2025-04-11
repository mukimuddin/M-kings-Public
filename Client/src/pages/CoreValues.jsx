import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Target, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical behavior in all our dealings."
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-400" />,
      title: "Passion",
      description: "We are passionate about delivering excellence and exceeding expectations."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Innovation",
      description: "We constantly strive to innovate and bring creative solutions to challenges."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative success."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            At M Kings Group, our core values shape everything we do. They guide our decisions,
            define our culture, and drive our success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-2xl font-bold mt-4 mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 pb-16"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These values are not just words on a page – they're the principles that guide
            our actions every day as we work to deliver exceptional results for our clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CoreValues; 