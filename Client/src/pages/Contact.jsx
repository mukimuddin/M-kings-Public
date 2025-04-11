import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-300 font-semibold mb-1">{item.label}</h3>
                    <p className="text-white">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location Card */}
            <motion.div
              className="mt-12 bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Our Location</h3>
                </div>
                <p className="text-gray-300">{fixedLocation.address}</p>
                <div className="text-sm text-gray-400">
                  Coordinates: {fixedLocation.coordinates.lat}, {fixedLocation.coordinates.lng}
                </div>
                <div className="mt-4 bg-gray-700/50 rounded-lg overflow-hidden">
                  <iframe
                    title="location"
                    className="w-full h-64 rounded-lg"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${fixedLocation.coordinates.lng-0.01}%2C${fixedLocation.coordinates.lat-0.01}%2C${fixedLocation.coordinates.lng+0.01}%2C${fixedLocation.coordinates.lat+0.01}&layer=mapnik&marker=${fixedLocation.coordinates.lat}%2C${fixedLocation.coordinates.lng}`}
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <a 
                  href={`https://www.openstreetmap.org/?mlat=${fixedLocation.coordinates.lat}&mlon=${fixedLocation.coordinates.lng}#map=15/${fixedLocation.coordinates.lat}/${fixedLocation.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  View Larger Map
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 