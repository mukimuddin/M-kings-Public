import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Services />
    </div>
  );
}

export default App;
