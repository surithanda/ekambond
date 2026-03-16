
import CoreCapabilities from "@/components/sections/about-us/core-capabilities";
import { FeatureCard } from "@/components/sections/about-us/feature-card";
import { FeatureGrid } from "@/components/sections/about-us/featuregrid";
import HeroSection from "@/components/sections/about-us/hero-section";
import RecognitionSection from "@/components/sections/about-us/recognition-section";
import Testimonials from "@/components/sections/about-us/testimonials";
import TrustSecuritySection from "@/components/sections/about-us/trust-security";
import ValuesSection from "@/components/sections/about-us/values-section";

import WhyEkamBondSection from "@/components/sections/about-us/why-ekamBond-section";
import React from "react";

export const metadata = {
  title: "About EkamBond Matrimony | Our Team & Mission",
  description:
    "Meet the EkamBond Matrimony team, including Founder Suresh Kumar Thanda, CEO Sadanandam Bharata, and President of Sales Prashant SriPeramBudhuru, dedicated to building transparent and community-focused matchmaking platforms.",
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-primary">
      <HeroSection />
      <RecognitionSection />
      <ValuesSection />
      <WhyEkamBondSection/>
      <FeatureGrid/>
        <TrustSecuritySection />
        <Testimonials />
        {/* <CoreCapabilities/> */}
          {/* <WhoWeServeSection />
          <TestimonialsSection />  */}
      {/* <TeamSection /> */}
    </div>
  );
};

export default AboutUs;
