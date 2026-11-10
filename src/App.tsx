import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import CTASection from './components/sections/CTASection';
import LocationSection from './components/sections/LocationSection';
import Footer from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-tenten-bg text-tenten-dark flex flex-col font-sans selection:bg-tenten-primary selection:text-tenten-bg">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
