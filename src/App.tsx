import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VehiclesSection } from './components/VehiclesSection';
import { OrganizationSection } from './components/OrganizationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="relative min-h-screen overflow-hidden bg-[#E7FFCD]">
      {/* Background ellipses */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-white/30"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-white/20"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-white/25"></div>
      <Navbar />
      <Hero />
      <AboutSection />
      <VehiclesSection />
      <OrganizationSection />
      <ContactSection />
      <Footer />
    </div>;
}