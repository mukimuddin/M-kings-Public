import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const fixedLocation = {
    address: "Gazipura, Tongi, Gazipur District, Dhaka Division, 1712, Bangladesh",
    coordinates: {
      lat: 23.917429,
      lng: 90.400159
    }
  };

  const contactInfo = [
    { icon: <Mail size={24} />, text: 'contact@mkingsgroup.com', label: 'Email' },
    { icon: <Phone size={24} />, text: '+1 (555) 123-4567', label: 'Phone' },
    { icon: <MapPin size={24} />, text: fixedLocation.address, label: 'Location' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Get in touch with us. We're here to help and answer any questions you might have.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4"
                  >
                    <CheckCircle2 size={64} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {[
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'email', label: 'Email', type: 'email' },
                    { name: 'subject', label: 'Subject', type: 'text' },
                    { name: 'message', label: 'Message', type: 'textarea' }
                  ].map((field) => (
                    <motion.div
                      key={field.name}
                      variants={itemVariants}
                      className="relative"
                    >
                      <label
                        className={`absolute left-4 transition-all duration-200 ${
                          activeField === field.name || formData[field.name]
                            ? '-top-3 text-sm text-blue-400'
                            : 'top-3 text-gray-400'
                        }`}
                      >
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField(field.name)}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          rows="4"
                          required
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField(field.name)}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          required
                        />
                      )}
                    </motion.div>
                  ))}
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:pl-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="bg-gray-800 p-3 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-gray-300 font-semibold mb-1 group-hover:text-white transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-white">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 bg-gray-800/50 p-4 rounded-xl border border-gray-700"
            >
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0!2d${fixedLocation.coordinates.lng}!3d${fixedLocation.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU1JzAyLjciTiA5MMKwMjQnMDAuNiJF!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 