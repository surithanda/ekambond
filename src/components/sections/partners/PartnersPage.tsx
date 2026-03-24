"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, ChevronDown, ChevronRight,
  Building2, Users, Star, Clock, Shield, Globe, Zap,
  BarChart3, Settings, Heart, MessageSquare, Rocket,
  Phone, Calendar, Laptop, HelpCircle, Lock,
} from "lucide-react";

// ─── Who is this for ─────────────────────────────────────────────────────────
const partnerTypes = [
  {
    icon: Building2, title: "Marriage Bureaus & Matrimony Offices",
    desc: "Already running a local matrimony business with a physical office? Go digital without rebuilding from scratch. Your existing client list migrates in, your office staff manages via the admin portal.",
    benefits: ["Digitize existing client profiles", "Accept online subscriptions", "Expand reach beyond local area"],
  },
  {
    icon: Users, title: "Community & Religious Organizations",
    desc: "NGOs, religious trusts, cultural associations — serve members with a community-specific matrimony platform under your organization's name and values.",
    benefits: ["Community-specific filters", "Verified member base", "Event management built-in"],
  },
  {
    icon: Star, title: "Professional Matchmakers",
    desc: "Individual consultants and boutique agencies who do personal matchmaking. EkamBond gives you a digital storefront, member database, and AI-powered search to serve more clients.",
    benefits: ["Manage 500+ clients easily", "AI search saves 90% of time", "Professional branded presence"],
  },
];

// ─── Day 1 Checklist ──────────────────────────────────────────────────────────
const dayOneItems = [
  { item: "White-label website live with your brand", detail: "Your logo, colors, and domain — configured during onboarding call" },
  { item: "Full Admin Portal access granted", detail: "Login to your management console — manage members, billing, branding" },
  { item: "AI Search configured and active", detail: "Natural language member search ready for your first registrations" },
  { item: "Stripe billing account connected", detail: "Start accepting subscription payments from day one" },
  { item: "Custom domain pointed and SSL active", detail: "yourbrand.com or app.yourbrand.com — live and secured" },
  { item: "Onboarding call completed", detail: "Our team walks you through every feature, tailored to your use case" },
  { item: "First test profiles created", detail: "We help you create 3–5 demo profiles to test the full flow" },
  { item: "Background verification configured", detail: "Document types accepted, workflow set up per your preferences" },
];

// ─── 7 Step Journey ───────────────────────────────────────────────────────────
const journeySteps = [
  {
    num: "01", icon: MessageSquare, title: "Submit Enquiry",
    desc: "Fill out the partner registration form. Our team receives your details immediately.",
    time: "1 hour", color: "#D9A91E",
  },
  {
    num: "02", icon: Shield, title: "Verification, Approval & Documentation",
    desc: "We verify your organisation details, review your application, and collect required documentation.",
    time: "1–2 days", color: "#C8302A",
  },
  {
    num: "03", icon: Settings, title: "Brand Configuration & Customisation",
    desc: "We configure your logo, colour palette, typography, subscription plans, and platform settings to match your brand.",
    time: "3–4 days", color: "#D9A91E",
  },
  {
    num: "04", icon: Globe, title: "Domain Setup",
    desc: "Point your domain to the platform. SSL certificate provisioned automatically and tested end-to-end.",
    time: "1–2 days", color: "#C8302A",
  },
  {
    num: "05", icon: Laptop, title: "PartnerKey Generation, Onboarding & UAT",
    desc: "Your unique PartnerKey is generated, admin access granted, and we run full User Acceptance Testing together.",
    time: "1 day", color: "#D9A91E",
  },
  {
    num: "06", icon: Rocket, title: "Go Live & Sign-off",
    desc: "Your branded matrimony platform goes live, accepting registrations and payments. Formal sign-off completed.",
    time: "1 day", color: "#C8302A",
  },
  {
    num: "07", icon: Heart, title: "Ongoing Support",
    desc: "Dedicated support channel, feature updates, and access to all new features as they ship.",
    time: "Forever", color: "#D9A91E",
  },
];

// ─── Comparison ───────────────────────────────────────────────────────────────
const comparisonRows = [
  { aspect: "Time to launch", ekam: "1–2 weeks", inhouse: "6–18 months", generic: "2–4 weeks" },
  { aspect: "Development cost", ekam: "Zero", inhouse: "$50,000–$300,000", generic: "Setup + hidden fees" },
  { aspect: "AI-powered search", ekam: "✅ Built-in NLP", inhouse: "❌ Build from scratch", generic: "❌ Not available" },
  { aspect: "White-label branding", ekam: "✅ Full control", inhouse: "✅ Custom build", generic: "⚠️ Limited / co-branded" },
  { aspect: "Admin portal", ekam: "✅ Full-featured", inhouse: "Custom built", generic: "⚠️ Basic" },
  { aspect: "Stripe billing", ekam: "✅ Integrated", inhouse: "❌ Custom integration", generic: "⚠️ Platform-controlled" },
  { aspect: "Background verification", ekam: "✅ Built-in workflow", inhouse: "❌ Not included", generic: "❌ Not available" },
  { aspect: "Ongoing updates", ekam: "✅ Automatic", inhouse: "❌ Paid re-development", generic: "⚠️ Platform's roadmap" },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does setup really take?",
    a: "1–2 weeks from enquiry to live site is our commitment for standard setups. Complex domain configurations or custom feature requests may add 24–1–2 weeks. Most partners are live on Day 2.",
  },
  {
    q: "Do my members know the platform is powered by EkamBond?",
    a: "No. The platform is fully white-labeled. Your logo, brand name, colors, and domain are all that members see. EkamBond operates as an invisible infrastructure layer.",
  },
  {
    q: "Can I set my own membership pricing?",
    a: "Yes — completely. You define your subscription plan names, prices, durations, and which features are included per tier. EkamBond processes payments via your connected Stripe account.",
  },
  {
    q: "What happens to my members' data?",
    a: "Your member data is stored in a dedicated, isolated partition. EkamBond never shares or uses your partner data for any other purpose. You can export all data at any time.",
  },
  {
    q: "Is there a minimum number of members required?",
    a: "No minimum. Whether you have 10 members or 10,000, the platform scales automatically. Pricing is based on your chosen plan, not per-member headcount.",
  },
  {
    q: "What support is included?",
    a: "Every partner gets onboarding support, a dedicated email support channel, and access to our partner documentation portal. Higher-tier plans include priority phone support and a dedicated account manager.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: "1.5px solid rgba(200,150,60,0.15)", background: "rgba(255,255,255,0.88)" }}>
      <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-base" style={{ color: "var(--color-text-on-light)" }}>{q}</span>
        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform"
          style={{ color: "var(--brand-crimson)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PartnersPage() {
  return (
    <div style={{ background: "var(--color-bg-warm)" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 px-4 text-center"
        style={{ background: "var(--color-bg-hero)", minHeight: "55vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 85% 10%, rgba(200,48,42,0.18) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 15% 90%, rgba(217,169,30,0.14) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="eb-badge eb-badge-dark mx-auto mb-5">
            For Organizations
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ color: "var(--color-text-on-dark)" }}>
            The Platform Designed for{" "}
            <span className="eb-text-gold">Organizations Like Yours</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-10" style={{ color: "var(--color-text-muted-dark)" }}>
            Whether you run a marriage bureau, a community trust, or an independent matchmaking service — EkamBond gives you an enterprise-grade matrimony platform without enterprise-level investment.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="eb-btn-primary">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/features" className="eb-btn-ghost">
              Explore Features
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy Callout ── */}
      <section className="py-12 px-4" style={{ background: "#1A0A06" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold leading-snug mb-3"
            style={{ color: "var(--color-text-on-dark)" }}
          >
            EkamBond is not a platform that{" "}
            <span style={{ color: "var(--brand-crimson)" }}>replaces</span> you.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="text-2xl md:text-3xl font-bold leading-snug mb-6"
            style={{ color: "var(--brand-gold)" }}
          >
            It is a system that stands{" "}
            <span style={{ color: "var(--color-text-on-dark)" }}>behind</span> you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {[
              "We never bypass our partners",
              "We never deal directly with your customers",
              "We grow only when you grow",
            ].map((p) => (
              <span key={p} className="text-sm px-4 py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(217,169,30,0.25)", color: "rgba(253,246,236,0.75)" }}>
                ✔ {p}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who is this for ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Who Partners With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              Built for Every Type of Matrimony Organization
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <motion.div key={pt.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl p-7"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid rgba(200,150,60,0.15)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "var(--brand-gold-soft)" }}>
                    <Icon className="w-6 h-6" style={{ color: "var(--brand-crimson)" }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>{pt.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted-light)" }}>{pt.desc}</p>
                  <ul className="space-y-2">
                    {pt.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#2D9E6E" }} /> {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partner Scenario ── */}
      <section className="py-14 px-4" style={{ background: "linear-gradient(135deg, #2D1208 0%, #1A0A06 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
          >
            {/* Col 1 — Illustration */}
            <div className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "1/1", background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(217,169,30,0.20)" }}>
              <Image
                src="/images/matchmaker-scenario.png"
                alt="A local matchmaker meeting with a family"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            {/* Col 2 — Scenario Text */}
            <div>
              <span className="eb-badge eb-badge-dark mb-5">How It Works for a Local Matchmaker</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug" style={{ color: "var(--color-text-on-dark)" }}>
                You Keep the Relationships.{" "}
                <span style={{ color: "var(--brand-gold)" }}>We Handle the Technology.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(253,246,236,0.7)" }}>
                Consider a local matchmaker who has been helping families for years. Families trust them
                personally — they visit homes, sit over tea, and understand community values deeply.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(253,246,236,0.7)" }}>
                But families increasingly ask: <em style={{ color: "var(--brand-gold)" }}>&ldquo;Can we see profiles online? Can you match faster? How do we know profiles are genuine?&rdquo;</em>
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(253,246,236,0.7)" }}>
                Large matrimony portals deal directly with families — bypassing local matchmakers entirely.
                EkamBond does the opposite: your brand stays front and center, while we provide
                the platform, AI matching, and billing invisibly in the background.
              </p>
            </div>

            {/* Col 3 — What Changes */}
            <div className="rounded-3xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(217,169,30,0.20)" }}>
              <p className="text-sm font-bold mb-5" style={{ color: "var(--brand-gold)" }}>With EkamBond as your technology partner —</p>
              <div className="space-y-4">
                {[
                  { emoji: "🤝", text: "You continue meeting families personally — your relationships don't change" },
                  { emoji: "🔐", text: "Profiles are created and managed on a secure, professional system" },
                  { emoji: "⚡", text: "AI-powered search finds relevant matches in seconds, not hours" },
                  { emoji: "💰", text: "Subscriptions and commissions are tracked and handled automatically" },
                  { emoji: "🌟", text: "Families see a more organized, trustworthy, professional operation" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.emoji}</span>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(253,246,236,0.75)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(217,169,30,0.20)" }}>
                <p className="text-sm" style={{ color: "rgba(253,246,236,0.5)" }}>
                  You remain the face of trust. We work quietly in the background.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Day 1 Checklist ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #FDF6EC 0%, #F5EAD5 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Immediate Value</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              What You Get on <span style={{ color: "var(--brand-crimson)" }}>Day 1</span>
            </h2>
            <p className="text-base" style={{ color: "var(--color-text-muted-light)" }}>
              Not promises — deliverables. Every item on this list is completed before we hand over access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayOneItems.map((item, i) => (
              <motion.div key={item.item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.88)", border: "1.5px solid rgba(200,150,60,0.15)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(45,158,110,0.12)" }}>
                  <CheckCircle className="w-5 h-5" style={{ color: "#2D9E6E" }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--color-text-on-light)" }}>{item.item}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted-light)" }}>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lakshmi's Story ── */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12"
            style={{ background: "rgba(255,255,255,0.88)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Story text — 3 cols */}
              <div className="lg:col-span-3">
                <span className="eb-badge mb-4">A Bureau Owner&apos;s Scenario</span>
                <h2 className="text-2xl font-bold mb-4 leading-snug" style={{ color: "var(--color-text-on-light)" }}>
                  Strong local connections.
                  <br />
                  <span style={{ color: "var(--brand-crimson)" }}>EkamBond provides the platform.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted-light)" }}>
                  A typical bureau owner runs their business from home — strong community connections, but limited digital presence. No website, no way to show families that they are organized and credible.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>
                  With EkamBond: full system support for profile handling, match status tracked in one place, and the whole operation looks and feels professional. Families trust the process even more.
                </p>
              </div>

              {/* Pull quote — 2 cols */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl p-6 text-center"
                  style={{ background: "linear-gradient(135deg, #2D1208 0%, #1A0A06 100%)", border: "1.5px solid rgba(217,169,30,0.25)" }}>
                  <div className="text-5xl mb-4" style={{ color: "rgba(217,169,30,0.25)", fontFamily: "Georgia, serif" }}>&ldquo;</div>
                  <p className="text-base font-semibold italic leading-relaxed mb-4" style={{ color: "var(--color-text-on-dark)" }}>
                    People think I built a big system.
                  </p>
                  <p className="text-xl font-black" style={{ color: "var(--brand-gold)" }}>
                    Actually, I joined the right one.
                  </p>
                  <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(217,169,30,0.20)" }}>
                    <p className="text-xs" style={{ color: "rgba(253,246,236,0.45)" }}>How it feels when EkamBond is your platform</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6-Step Journey ── */}
      <section className="py-16 px-4" style={{ background: "var(--color-bg-hero)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="absolute inset-0 eb-dot-grid-dark opacity-20 pointer-events-none" />
          <div className="text-center mb-14">
            <span className="eb-badge eb-badge-dark mx-auto mb-4">From Enquiry to Live</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-dark)" }}>
              Your 7-Step Onboarding Journey
            </h2>
            <p className="text-base" style={{ color: "var(--color-text-muted-dark)" }}>
              Start to finish in 1–2 weeks. Here's exactly what happens after you register.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.num}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl p-6 relative"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.10)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black opacity-20" style={{ color: step.color }}>{step.num}</span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${step.color}22`, border: `1.5px solid ${step.color}44` }}>
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${step.color}22`, color: step.color }}>
                      <Clock className="w-3 h-3 inline mr-1" />{step.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text-on-dark)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-dark)" }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Why EkamBond</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              EkamBond vs Your Alternatives
            </h2>
            <p className="text-base" style={{ color: "var(--color-text-muted-light)" }}>
              Why build when you can launch in 1–2 weeks?
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ border: "1.5px solid rgba(200,150,60,0.20)", background: "rgba(255,255,255,0.92)" }}>
            {/* Header */}
            <div className="grid grid-cols-4 px-6 py-4"
              style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)", borderBottom: "1px solid rgba(217,169,30,0.2)" }}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-gold)" }}>Feature</p>
              <p className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: "var(--brand-gold)" }}>EkamBond</p>
              <p className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: "rgba(255,255,255,0.5)" }}>Build In-House</p>
              <p className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: "rgba(255,255,255,0.5)" }}>Generic Platform</p>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.aspect} className="grid grid-cols-4 px-6 py-4 items-center"
                style={{ background: i % 2 === 0 ? "rgba(253,246,236,0.5)" : "rgba(255,255,255,0.5)", borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(200,150,60,0.08)" : "none" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-on-light)" }}>{row.aspect}</p>
                <p className="text-sm font-bold text-center" style={{ color: "#2D9E6E" }}>{row.ekam}</p>
                <p className="text-sm text-center" style={{ color: "var(--color-text-muted-light)" }}>{row.inhouse}</p>
                <p className="text-sm text-center" style={{ color: "var(--color-text-muted-light)" }}>{row.generic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #FDF6EC 0%, #F5EAD5 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Questions Answered</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              Partner FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={faq.q} {...faq} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── Closing hook ── */}
      <section className="py-12 px-4" style={{ background: "#1A0A06" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl font-bold leading-relaxed"
            style={{ color: "rgba(253,246,236,0.85)" }}
          >
            If people already trust you with marriages,
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-black leading-relaxed mt-1"
            style={{ color: "var(--brand-gold)" }}
          >
            let us support you with everything else.
          </motion.p>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-4" style={{ background: "var(--color-bg-hero)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eb-badge eb-badge-dark mx-auto mb-6">
            Ready to Start?
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "var(--color-text-on-dark)" }}>
            Your Matrimony Platform,{" "}
            <span className="eb-text-gold">live in 1–2 weeks</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            No developers. No setup fees. Just fill out the enquiry form and we handle everything else.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="eb-btn-primary">
              Register as a Partner <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="eb-btn-ghost">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
