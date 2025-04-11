import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on desktop (screen width > 768px)
      if (window.innerWidth > 768) {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial screen size
    if (window.innerWidth <= 768) {
      setIsScrolled(false);
    }

    // Handle resize events
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsScrolled(false);
      } else {
        handleScroll();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About',
      path: '/about',
      dropdownItems: [
        { name: 'Our Story', path: '/about/our-story' },
        { name: 'Core Values', path: '/about/core-values' },
        { name: 'Mission & Vision', path: '/about/mission-vision' }
      ]
    },
    { 
      name: 'Services',
      path: '/services',
      dropdownItems: [
        { name: 'Technology Solutions', path: '/services/technology-solutions' },
        { name: 'AI & Machine Learning', path: '/services/ai-machine-learning' },
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'Travel Services', path: '/services/travel-services' }
      ]
    },
    { 
      name: 'Team', 
      path: '/team' 
    },
    { 
      name: 'Contact', 
      path: '/contact' 
    }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickContacts = [
    { icon: <Phone size={16} />, text: '+1 234 567 890' },
    { icon: <Mail size={16} />, text: 'contact@mkingsgroup.com' },
    { icon: <MapPin size={16} />, text: 'New York, USA' }
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'md:-translate-y-10' : ''}`}>
      {/* Quick Contact Bar */}
      <motion.div
        className="bg-gray-800 text-gray-300 py-2 px-4 hidden md:block"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            {quickContacts.map((contact, index) => (
              <div key={index} className="flex items-center space-x-2">
                {contact.icon}
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        } md:bg-transparent ${!isScrolled && isMenuOpen ? 'bg-gray-900/95' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" onClick={handleNavClick}>
              <motion.div
                className="text-2xl font-bold text-white flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-400">M</span> Kings Group
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-white transition-colors flex items-center py-2 ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? 'text-blue-400' : ''
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdownItems && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 overflow-hidden"
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`block px-4 py-3 text-gray-300 hover:bg-blue-600/20 hover:text-white transition-colors ${
                              location.pathname === dropdownItem.path ? 'text-blue-400 bg-blue-600/10' : ''
                            }`}
                            onClick={handleNavClick}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-800 border-t border-gray-700"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <div
                      className="flex items-center justify-between py-3 text-gray-300"
                      onClick={() => item.dropdownItems && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <Link
                        to={item.path}
                        className={`hover:text-white transition-colors ${
                          location.pathname === item.path ? 'text-blue-400' : ''
                        }`}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                      {item.dropdownItems && (
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdownItems && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 border-l border-gray-700 ml-4"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className={`block py-2 text-gray-400 hover:text-white transition-colors ${
                                location.pathname === dropdownItem.path ? 'text-blue-400' : ''
                              }`}
                              onClick={handleNavClick}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile Quick Contacts */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  {quickContacts.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-400 py-2">
                      {contact.icon}
                      <span>{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar; 