import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import AboutCardDetail from './pages/AboutCardDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Team from './pages/Team';
import TeamMember from './pages/TeamMember';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CoreValues from './pages/CoreValues';
import MissionVision from './pages/MissionVision';
import OurStory from './pages/OurStory';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App bg-gray-900">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
