import HeroSection from "@/components/sections/home/hero-section";
import MatrimonyServices from "@/components/sections/home/MatrimonyServices";
import DifferentiationSection from "@/components/sections/home/DifferentiationSection";
import AiSearchSpotlight from "@/components/sections/home/AiSearchSpotlight";
import FeaturesSection from "@/components/sections/home/featured-section";
import PremiumPartnersStrip from "@/components/sections/home/PremiumPartnersStrip";
import PartnerCTASection from "@/components/sections/home/PartnerCTASection";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MatrimonyServices />
      <DifferentiationSection />
      <AiSearchSpotlight />
      <FeaturesSection />
      <PremiumPartnersStrip />
      <PartnerCTASection />
    </div>
  );
}
