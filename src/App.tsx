import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { OrganizationSection } from "./components/OrganizationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BubbleBackground } from "./components/BubbleBackground";
import LoadingScreen from "./components/LoadingScreen";

import { ScrollToTop } from "./components/ScrollToTop";
import ClientsSection from "./components/ClientsSection";

export function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BubbleBackground />
      <Navbar />
      <Hero />
      <AboutSection />
      <ClientsSection />
      <OrganizationSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
