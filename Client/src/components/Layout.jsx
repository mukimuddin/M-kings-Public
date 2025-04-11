import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from './Loading';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <div className="App bg-gray-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <motion.main
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.main>
        </Suspense>
      </AnimatePresence>
      <ScrollToTop />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout; 