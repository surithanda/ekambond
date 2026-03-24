"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

// ─── Services Data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "whitelabel",
    badge: "Your Brand. Your Platform.",
    title: "White-Label Website & App — Fully Yours",
    desc: "We build and maintain a complete matrimony platform under your brand. Your logo, your colors, your custom domain. Your members never see EkamBond — only your name.",
    features: [
      "Custom domain (yourbrand.com) with SSL",
      "Your logo, color palette & typography",
      "Mobile-first PWA — works like a native app",
      "Dedicated member-facing website + admin console",
      "No-code brand updates from your admin portal",
    ],
    image: "/images/service-whitelabel.png",
    imageAlt: "White-label matrimony platform on laptop and mobile",
  },
  {
    id: "ai",
    badge: "Smart Matching Engine",
    title: "AI-Powered Matchmaking — Beyond Basic Filters",
    desc: "Our AI understands natural language. Members describe what they are looking for in plain words — and the system returns ranked, relevant matches. Far beyond dropdown filter search.",
    features: [
      "Natural language search ('doctor under 30 in Hyderabad')",
      "AI-ranked match suggestions based on profile compatibility",
      "Saved searches and daily match alerts",
      "Filters for education, community, location, income & more",
      "Upcoming: Horoscope matching integration (Q3 2025)",
    ],
    image: "/images/service-ai-matchmaking.png",
    imageAlt: "AI matchmaking connecting profile cards",
  },
  {
    id: "verification",
    badge: "Trust by Default",
    title: "Background Verification — Safe, Verified Profiles",
    desc: "Every profile on your platform can be verified through our built-in verification workflow. Education checks, employment validation, and ID verification — all managed from your admin console.",
    features: [
      "Education & employment document verification",
      "Government ID upload and validation workflow",
      "Verification badges visible on member profiles",
      "Audit logs for every verification action",
      "Partner-configurable — choose what you verify",
    ],
    image: "/images/service-verification.png",
    imageAlt: "Document verification with trust badge",
  },
  {
    id: "billing",
    badge: "Revenue in Your Account",
    title: "Subscription & Billing — You Keep the Revenue",
    desc: "Define your own subscription plans, pricing, and tiers. Member payments go directly to your Stripe account. EkamBond never touches your revenue — we charge only a small platform fee.",
    features: [
      "Create unlimited subscription plan tiers",
      "Set your own prices in any currency",
      "Payments via Stripe — directly to your bank",
      "Automated invoices and renewal reminders",
      "Revenue analytics and subscription-level reporting",
    ],
    image: "/images/service-billing.png",
    imageAlt: "Billing dashboard with revenue charts",
  },
  {
    id: "members",
    badge: "Full Member Control",
    title: "Member Management — Every Profile at Your Fingertips",
    desc: "Your admin portal gives you complete control over members. Add, approve, suspend, upgrade, or export any profile. Full search, filters, and bulk actions — no developer needed.",
    features: [
      "Full CRUD on member profiles from the admin console",
      "Approve new registrations with one click",
      "Role-based team access (staff, admin, super-admin)",
      "Bulk export profiles for offline analysis",
      "Activity logs, login history and engagement tracking",
    ],
    image: "/images/service-members.png",
    imageAlt: "Admin member management console",
  },
  {
    id: "onboarding",
    badge: "We're With You From Day 1",
    title: "Onboarding Support — From Setup to First Member",
    desc: "We don't just hand you a login. Our team configures everything, trains your staff, and stays available as you grow. Think of us as your dedicated technology team — without the hire.",
    features: [
      "Dedicated setup specialist for your onboarding call",
      "Full brand configuration done by our team",
      "Staff training for the admin portal and workflows",
      "Partner handbook and SOPs included",
      "Ongoing email + chat support after go-live",
    ],
    image: "/images/service-onboarding.png",
    imageAlt: "Onboarding support and training",
  },
];

// ─── Service Row ──────────────────────────────────────────────────────────────
function ServiceRow({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const isEven = index % 2 === 0; // even = image left, odd = image right

  return (
    <section
      className="py-16 px-4"
      style={{
        background: isEven
          ? "var(--color-bg-warm)"
          : "linear-gradient(180deg, #FDF6EC 0%, #F5EAD5 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isEven ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* Image */}
          <div
            className="relative rounded-3xl overflow-hidden lg:[direction:ltr]"
            style={{
              aspectRatio: "4/3",
              background: "rgba(255,255,255,0.7)",
              border: "1.5px solid rgba(200,150,60,0.18)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.09)",
            }}
          >
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="lg:[direction:ltr]">
            <span className="eb-badge mb-4">{service.badge}</span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
              style={{ color: "var(--color-text-on-light)" }}
            >
              {service.title}
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--color-text-muted-light)" }}
            >
              {service.desc}
            </p>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--brand-crimson)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div style={{ background: "var(--color-bg-warm)" }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20 px-4 text-center"
        style={{
          background: "var(--color-bg-hero)",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="absolute inset-0 eb-dot-grid-dark opacity-20 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at 80% 15%, rgba(200,48,42,0.18) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="eb-badge eb-badge-dark mx-auto mb-5"
          >
            Platform Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "var(--color-text-on-dark)" }}
          >
            Everything You Need.{" "}
            <span className="eb-text-gold">Nothing to Build.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: "var(--color-text-muted-dark)" }}
          >
            Six complete services — white-label platform, AI matchmaking, verification, billing,
            member management, and full onboarding support. All included. All maintained by us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(217,169,30,0.28)",
              color: "var(--brand-gold)",
            }}
          >
            No developers. No infrastructure. No maintenance headaches.
          </motion.div>
        </div>
      </section>

      {/* ── Service Rows ── */}
      {SERVICES.map((service, i) => (
        <ServiceRow key={service.id} service={service} index={i} />
      ))}

      {/* ── Bottom CTA ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #2D1208 0%, #1A0A06 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eb-badge eb-badge-dark mx-auto mb-5"
          >
            Ready to Launch?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--color-text-on-dark)" }}
          >
            All Six Services.{" "}
            <span className="eb-text-gold">live in 1–2 weeks.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base mb-8"
            style={{ color: "var(--color-text-muted-dark)" }}
          >
            You concentrate on your business. We take care of your technology.
          </motion.p>
          <Link href="/register" className="eb-btn-primary mx-auto">
            Become a Partner <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
