import HeroSection from '@/components/sections/services/hero-section'
import ServicesNewsletter from '@/components/sections/services/service-newsletter'
import ServicesSection from '@/components/sections/services/services-section'
import React from 'react'

export const metadata = {
  title: "EkamBond Matrimony Services | Verification & Matchmaking Assistance",
  description: "Learn about EkamBond's comprehensive services such as educational and employment checks, AI-based match filtering, website white labeling, match maker support, event management, and partners onboarding for seamless matrimonial solutions.",
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