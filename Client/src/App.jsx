import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';

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

function App() {
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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
