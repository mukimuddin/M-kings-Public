import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, Target, ArrowRight } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission & Vision</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what drives us forward and where we're headed in our journey to transform
            the technological landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Rocket className="w-10 h-10 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-400 mb-6">
              To empower businesses through innovative technology solutions, delivering excellence
              in every project while fostering sustainable growth and creating lasting value for
              our clients.
            </p>
            <ul className="space-y-4">
              {[
                "Deliver cutting-edge solutions",
                "Foster innovation and creativity",
                "Build lasting client relationships",
                "Drive sustainable growth"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-400 mb-6">
              To be a global leader in technological innovation, recognized for transforming
              businesses and setting new standards of excellence in the digital world.
            </p>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-700 rounded-lg p-6"
              >
                <Target className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Strategic Goals</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Global market expansion</li>
                  <li>• Technology leadership</li>
                  <li>• Client success stories</li>
                  <li>• Industry recognition</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 pb-16"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Together, we're building a future where technology empowers businesses to achieve
            their fullest potential. Join us on this exciting journey of transformation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision; 