import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load all pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const About = lazy(() => import('./pages/About'));
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
