import BenefitsSection from '@/components/sections/partners/benifits-section'
import CTASection from '@/components/sections/partners/cta-section'
import PartnersHero from '@/components/sections/partners/hero-section'
import MarriageServicesSection from '@/components/sections/partners/marriage-service-section'
import NonProfitSection from '@/components/sections/partners/non-profit-section'
import TestimonialsSection from '@/components/sections/partners/testimonials-section'
import React from 'react'

export const metadata = {
  title: "EkamBond Matrimony Partners | Non-Profits & Marriage Bureaus",
  description: "Partner with EkamBond Matrimony to enhance matchmaking for regional communities, digitize services for marriage bureaus, integrate API-based data for broader matches, and focus on strengthening community matrimonial outcomes.",
};

const Partners = () => {
  return (
     <div className="min-h-screen bg-primary">
      <PartnersHero />
      <NonProfitSection />
      <MarriageServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Partners