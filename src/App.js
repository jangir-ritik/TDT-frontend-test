import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferingsSection from './components/OfferingsSection';
import GreenerTomorrow from './components/GreenerTomorrow';
import Footer from './components/Footer';
import './index.css';

function App() {

  return (
    <div className="App snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      <Navbar />
      <div className="snap-always snap-center">
        <HeroSection />
      </div>
      <div className="snap-always snap-center">
        <OfferingsSection />
      </div>
      <div className="snap-always snap-center">
        <GreenerTomorrow />
      </div>
      <div className="snap-always snap-center">
        <Footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-4 transition-opacity duration-500" />
      </div>

    </div>
  );
}

export default App;
