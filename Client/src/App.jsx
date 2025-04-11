import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import Layout from './components/Layout';
import Loading from './components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';

// Lazy load all pages with a minimum delay to ensure loading is visible
const LandingPage = lazy(() => {
  return Promise.all([
    import('./pages/LandingPage'),
    new Promise(resolve => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports);
});

const About = lazy(() => {
  return Promise.all([
    import('./pages/About'),
    new Promise(resolve => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports);
});

const OurStory = lazy(() => import('./pages/OurStory'));
const CoreValues = lazy(() => import('./pages/CoreValues'));
const MissionVision = lazy(() => import('./pages/MissionVision'));
const AboutCardDetail = lazy(() => import('./pages/AboutCardDetail'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Team = lazy(() => import('./pages/Team'));
const TeamMember = lazy(() => import('./pages/TeamMember'));
const Contact = lazy(() => import('./pages/Contact'));
const FeatureShowcase = lazy(() => import('./components/FeatureShowcase'));

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });

    // Demo toast - you can remove this later
    toast.info('Welcome to M Kings! 👑', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/core-values" element={<CoreValues />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/:id" element={<AboutCardDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcase" element={<FeatureShowcase />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Layout>
    </Router>
  );
}

export default App;
