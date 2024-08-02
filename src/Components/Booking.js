// src/App.js
import React from 'react';
import HeroSection from './HeroSection';
import NewlyListed from './NewlyListed';

function Booking() {
  return (
    <div className="bg-gray-100 font-sans mt-14">
      <HeroSection />
      <NewlyListed />
    </div>
  );
}

export default Booking;