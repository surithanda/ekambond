"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../section-header";

const features = [
  {
    id: 1,
    title: "9-Section Profile",
    description: "Personal · Address · Education · Employment · Property · Family · Lifestyle · Hobbies · Photos — purpose-built for matrimony.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <circle cx="18" cy="10" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M26 14l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Profile Completion Score",
    description: "Real-time percentage meter drives members to fill every section. Higher completion means better matches.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M18 18 L18 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 18 L24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Smart Structured Search",
    description: "Filter by 10+ dimensions — age, education, profession, values, location, lifestyle. Results in milliseconds.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M22 22l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Background Verification",
    description: "Initiate identity and credential verification on any profile directly from the admin portal.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <path d="M18 4 L30 8 L30 20 C30 27 24 32 18 34 C12 32 6 27 6 20 L6 8 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 18l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Favorites & Recommendations",
    description: "Members save profiles they like. AI surfaces profiles they haven't seen yet — personalized per account.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <path d="M18 28 C14 24 6 19 6 12 C6 8 9 5 13 5 C15.5 5 17.5 6.5 18 8 C18.5 6.5 20.5 5 23 5 C27 5 30 8 30 12 C30 19 22 24 18 28Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="28" cy="28" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 28h4M28 26v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Photo Management",
    description: "Profile photo, cover photo, and a gallery — multiple types, stored on Azure Blob, fast worldwide.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <rect x="4" y="6" width="28" height="22" rx="4" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="13" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 24l7-7 5 5 4-4 8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: "AI Natural Language Search",
    description: "Members describe what they are looking for in plain language. AI extracts filters and returns ranked matches.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
        <path d="M6 18C6 11.373 11.373 6 18 6C22 6 25.5 7.8 27.9 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M30 18C30 24.627 24.627 30 18 30C14 30 10.5 28.2 8.1 25.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="4" fill="currentColor" opacity="0.25"/>
        <circle cx="18" cy="18" r="2" fill="currentColor"/>
        <path d="M26 10l2-4M10 30l-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "var(--color-bg-warm)" }}>
      <div className="absolute inset-0 eb-dot-grid-light opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full blur-3xl eb-glow pointer-events-none"
        style={{ background: "var(--brand-navy-soft)" }} />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full blur-3xl eb-glow pointer-events-none"
        style={{ background: "var(--brand-gold-soft)", animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <SectionHeader
          title="Holistic Solutions for Modern Matrimony Organizations"
          subtitle="Purpose-built features that no generic platform provides"
          badgeText="Platform Features"
          addLineBreak={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 group"
              style={{
                background: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(200,150,60,0.14)",
                boxShadow: "var(--shadow-card)",
                transition: "box-shadow var(--dur-base)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "var(--brand-gold-soft)", color: "var(--brand-crimson)" }}>
                {feature.icon}
              </div>

              <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text-on-light)" }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>
                {feature.description}
              </p>

              {/* Gold underline on hover */}
              <div className="mt-4 h-0.5 w-0 group-hover:w-10 rounded-full transition-all duration-500"
                style={{ background: "var(--brand-gold)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
