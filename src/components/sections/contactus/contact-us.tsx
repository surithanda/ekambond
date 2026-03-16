'use client';
import dynamic from 'next/dynamic';
import React from "react";

const HeroSection = dynamic(
  () => import('@/components/sections/contactus/hero-section'),
  { ssr: false }
);
const StatsSection = dynamic(
  () => import('@/components/sections/contactus/stats-section'),
  { ssr: false }
);
const ServicesCards = dynamic(
  () => import('@/components/sections/contactus/services-cards'),
  { ssr: false }
);
const ContactForm = dynamic(
  () => import('@/components/sections/contactus/contact-form'),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import('@/components/sections/pricing/faq-section'),
  { ssr: false }
);

const ContactUs: React.FC = () => {
  return (
    <div className="bg-primary">
      <HeroSection />
      <StatsSection />
      <ServicesCards />
      <FAQSection />
      <ContactForm />
    </div>
  );
};

export default ContactUs;