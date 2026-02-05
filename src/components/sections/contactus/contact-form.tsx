"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./form/animated-background";
import SectionHeader from "./form/section-header";
import ContactInfoSidebar from "./form/contact-info-sidebar";
import ContactFormContent from "./contact-form-content";


const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<any>(null);

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-primary via-surface/20 to-brown/10 py-28 px-4 relative overflow-hidden"
      ref={containerRef}
    >
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactInfoSidebar />
          <ContactFormContent 
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            containerRef={containerRef}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;