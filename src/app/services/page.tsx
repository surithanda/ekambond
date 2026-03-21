import HeroSection from '@/components/sections/services/hero-section'
import ServicesNewsletter from '@/components/sections/services/service-newsletter'
import ServicesSection from '@/components/sections/services/services-section'
import React from 'react'

export const metadata = {
  title: "EkamBond Enterprise Services | Platform Capabilities & Support",
  description: "Explore EkamBond's enterprise-grade services: White-labeling, AI integrations, Matchmaker dashboard, Automated verification, and Strategic Consulting for matrimony bureaus.",
};

const Services = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ServicesNewsletter />
    </div>
  )
}

export default Services