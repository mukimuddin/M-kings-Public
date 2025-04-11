import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useForm } from 'react-hook-form';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiPlus, FiMinus, FiRefreshCw, FiMoon, FiSun } from 'react-icons/fi';
import { toast } from 'react-toastify';
import useStore from '../store/useStore';

const FeatureShowcase = () => {
  const { count, increment, decrement, reset, isDarkMode, toggleTheme } = useStore();
  
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    toast.success('Form submitted successfully! 🎉');
    console.log(data);
  };

  // React Spring animation
  const springProps = useSpring({
    from: { scale: 1 },
    to: { scale: isDarkMode ? 1.1 : 1 },
  });

  // Sample data for chart
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Counter Section */}
          <div 
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Counter Demo (Zustand)</h2>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 p-2 rounded-lg text-white"
                onClick={decrement}
              >
                <FiMinus size={20} />
              </motion.button>
              <span className="text-2xl font-bold text-white">{count}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 p-2 rounded-lg text-white"
                onClick={increment}
              >
                <FiPlus size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-600 p-2 rounded-lg text-white"
                onClick={reset}
              >
                <FiRefreshCw size={20} />
              </motion.button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div 
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Theme Toggle (React Spring)</h2>
            <animated.div style={springProps}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 p-4 rounded-lg text-white"
                onClick={toggleTheme}
              >
                {isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
              </motion.button>
            </animated.div>
          </div>

          {/* Form Section */}
          <div 
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Form Demo (React Hook Form)</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">{errors.email.message}</span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2"
              >
                Submit
              </motion.button>
            </form>
          </div>

          {/* Chart Section */}
          <div 
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Chart Demo (Recharts)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureShowcase; 