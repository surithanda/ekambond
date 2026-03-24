"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "White Label Platform",
    description: "Your domain. Your brand. Your logo and colors. We configure everything — your site is live in 1–2 weeks with zero dev work.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="4" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 14h16M12 20h10M12 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="24" r="6" fill="currentColor" opacity="0.2"/>
        <path d="M27 24l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Matchmaker Support",
    description: "Dedicated matchmakers backed by AI recommendations, saved member preferences, and a full 9-section profile history.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 10c-2.5-4-9-3-9 3 0 4 5 8 9 12 4-4 9-8 9-12 0-6-6.5-7-9-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="10" cy="30" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 30h12" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Event Management",
    description: "Host matrimonial events. Members register, attend, and connect — all managed from your branded admin portal.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 18h28" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 6v8M26 6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="26" r="2" fill="currentColor"/>
        <circle cx="20" cy="26" r="2" fill="currentColor"/>
        <circle cx="26" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Partner Onboarding",
    description: "Sign up → brand config → go live in 6 steps. We handle all setup so you can focus on your community.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 34c0-6.627 5.373-12 12-12h0c6.627 0 12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 20l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 24H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function MatrimonyServices() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "var(--color-bg-warm)" }}>
      {/* Subtle dot texture */}
      <div className="absolute inset-0 eb-dot-grid-light opacity-50 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-8 w-72 h-72 rounded-full blur-3xl eb-glow pointer-events-none"
        style={{ background: "var(--brand-crimson-soft)" }} />
      <div className="absolute bottom-1/4 right-8 w-72 h-72 rounded-full blur-3xl eb-glow pointer-events-none"
        style={{ background: "var(--brand-gold-soft)", animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eb-badge eb-badge-light mb-5">Main Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "var(--color-text-on-light)" }}>
            End-to-End Support for{" "}
            <span className="eb-text-gold">Modern Matrimony</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
            Comprehensive solutions to power your matrimony business — from brand to billing.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="rounded-2xl p-7 group cursor-default"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(200,150,60,0.15)",
                boxShadow: "var(--shadow-card)",
                transition: "box-shadow var(--dur-base)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "var(--brand-gold-soft)", color: "var(--brand-crimson)" }}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>
                {service.description}
              </p>

              {/* Accent underline */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500"
                style={{ background: "var(--brand-gold)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}