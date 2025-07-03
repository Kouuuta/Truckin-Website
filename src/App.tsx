import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { VehiclesSection } from "./components/VehiclesSection";
import { OrganizationSection } from "./components/OrganizationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#E7FFCD]">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <AboutSection />
      <VehiclesSection />
      <OrganizationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
