import FeaturesSection from "@/components/sections/home/featured-section";
import HeroSection from "@/components/sections/home/hero-section";
import MatrimonyServices from "@/components/sections/home/MatrimonyServices";
import TestimonialsSection from "@/components/sections/home/testimonials-section";
import React from "react";

export const metadata = {
  title:
    "EkamBond Matrimony Enterprise Services | Bridging Hearts, Ensuring Trust",
  description:
    "Discover EkamBond Matrimony, a trusted platform connecting individuals for long-term relationships with background verification, AI matchmaking, and global reach for safe and meaningful connections.",
};

const App = () => {
  return (
    <div>
      <HeroSection />

      <MatrimonyServices />

      <FeaturesSection />

      <TestimonialsSection />
    </div>
  );
};

export default App;
