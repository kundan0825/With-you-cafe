import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { CouplePrivacy } from './components/sections/CouplePrivacy';
import { About } from './components/sections/About';
import { Celebrations } from './components/sections/Celebrations';
import { FoodMenu } from './components/sections/FoodMenu';
import { Gallery } from './components/sections/Gallery';
import { Reviews } from './components/sections/Reviews';
import { BookingForm } from './components/sections/BookingForm';
import { LocationFooter } from './components/sections/LocationFooter';
import { FloatingActions } from './components/ui/FloatingActions';

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#08070A] text-white selection:bg-[#FF2A85] selection:text-white relative">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <Marquee />
        <CouplePrivacy />
        <About />
        <Celebrations />
        <FoodMenu />
        <Gallery />
        <Reviews />
        <BookingForm />
      </main>
      <LocationFooter />
      <FloatingActions />
    </div>
  );
}

export default App;



