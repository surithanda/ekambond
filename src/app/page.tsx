import FeaturesSection from "@/components/sections/home/featured-section";
import HeroSection from "@/components/sections/home/hero-section";
import MatrimonyServices from "@/components/sections/home/MatrimonyServices";
import TestimonialsSection from "@/components/sections/home/testimonials-section";
import React from "react";

export const metadata = {
  title:
    "EkamBond | The Enterprise Matrimony Platform for Bureaus & Matchmakers",
  description:
    "Scale your matrimony business with EkamBond, the ultimate enterprise platform for marriage bureaus. Features include white-labeled apps, AI-powered matchmaking, and secure verification tools.",
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
