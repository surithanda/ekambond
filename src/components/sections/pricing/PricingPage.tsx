"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronDown, Star, Users, Building, Briefcase, Globe, Heart, Zap } from "lucide-react";

// ─── Pricing Plans ────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: "nonprofit",
    icon: Heart,
    name: "Non-profit",
    target: "Non-Profits & Religious Orgs",
    tagline: "Serve your community, not your bottom line",
    color: "#2D9E6E",
    bg: "rgba(45,158,110,0.08)",
    border: "rgba(45,158,110,0.25)",
    monthlyFee: "$0",
    monthlyLabel: "/ month platform fee",
    setupFee: "Contact us",
    setupLabel: "one-time setup",
    revenueShare: "$100",
    revenueShareLabel: "per active profile / year",
    memberCap: "Up to 300 profiles",
    aiCredits: "10 AI Credits free with registration per profile",
    teamSeats: "2 admin seats",
    support: "Email support",
    highlight: false,
    features: [
      "White-label website with your brand",
      "Full partner admin portal",
      "Member subscription billing (Stripe)",
      "Mobile-first PWA experience",
      "Email onboarding support",
    ],
    costAddons: [
      "AI Credits (never expires) — in-app purchase",
      "Custom domain (billed at actual cost)",
      "Background verification (billed at actual cost)",
      "New features (billed at actual cost)",
    ],
    addons: ["Additional AI credits", "Extra team seats"],
    badge: null,
  },
  {
    id: "community",
    icon: Users,
    name: "Community",
    target: "Community Organizations (For-Profit)",
    tagline: "Grow your community's matrimony vertical",
    color: "var(--brand-gold)",
    bg: "rgba(217,169,30,0.08)",
    border: "rgba(217,169,30,0.30)",
    monthlyFee: "$79",
    monthlyLabel: "/ month",
    setupFee: "Contact us",
    setupLabel: "one-time setup",
    revenueShare: "$100",
    revenueShareLabel: "per active profile / year",
    memberCap: "Up to 1,000 profiles",
    aiCredits: "10 AI Credits free with registration per profile",
    teamSeats: "4 admin seats",
    support: "Email + chat support",
    highlight: false,
    features: [
      "Everything in Non-profit, plus:",
      "Up to 1,000 member profiles",
      "4 team seats with role management",
      "Analytics & growth reports",
      "Custom subscription plan configurations",
      "Priority email support",
      "Quarterly business review call",
    ],
    costAddons: [
      "AI Credits (never expires) — in-app purchase",
      "Custom domain (billed at actual cost)",
      "Background verification (billed at actual cost)",
      "New features (billed at actual cost)",
    ],
    addons: ["Additional AI credits", "Video calling (Q1 2026)", "Horoscope integration (Q3 2025)"],
    badge: null,
  },
  {
    id: "bureau",
    icon: Building,
    name: "Bureau",
    target: "Marriage Bureaus",
    tagline: "The professional's platform for matchmaking at scale",
    color: "var(--brand-crimson)",
    bg: "rgba(200,48,42,0.08)",
    border: "rgba(200,48,42,0.28)",
    monthlyFee: "$199",
    monthlyLabel: "/ month",
    setupFee: "Contact us",
    setupLabel: "one-time setup",
    revenueShare: "$5",
    revenueShareLabel: "per active profile / month",
    memberCap: "Up to 3,000 profiles",
    aiCredits: "10 AI Credits free with registration per profile",
    teamSeats: "10 admin seats",
    support: "Priority support (24h SLA)",
    highlight: true,
    features: [
      "Everything in Community, plus:",
      "Up to 3,000 member profiles",
      "10 team seats — full role management",
      "Revenue & subscription analytics",
      "API access for custom integrations",
      "24-hour priority support SLA",
    ],
    costAddons: [
      "AI Credits (never expires) — in-app purchase",
      "Custom domain (billed at actual cost)",
      "Background verification + audit logs (billed at actual cost)",
      "New features (billed at actual cost)",
    ],
    addons: ["Additional AI credits", "Extra team seats", "Video calling", "Horoscope"],
    badge: "Most Popular",
  },
  {
    id: "matchmaker",
    icon: Star,
    name: "Matchmaker",
    target: "Individual Matchmakers",
    tagline: "Your own branded platform — small but powerful",
    color: "var(--brand-navy)",
    bg: "rgba(27,58,110,0.08)",
    border: "rgba(27,58,110,0.22)",
    monthlyFee: "$49",
    monthlyLabel: "/ month",
    setupFee: "Contact us",
    setupLabel: "one-time setup",
    revenueShare: "$100",
    revenueShareLabel: "per active profile / year",
    memberCap: "Up to 150 profiles",
    aiCredits: "10 AI Credits free with registration per profile",
    teamSeats: "1 admin seat",
    support: "Email support",
    highlight: false,
    features: [
      "White-label website with your brand",
      "Up to 150 member profiles",
      "Basic admin portal",
      "Member subscription billing",
      "Email onboarding support",
      "Mobile-first PWA",
    ],
    costAddons: [
      "AI Credits (never expires) — in-app purchase",
      "Custom domain (billed at actual cost)",
      "Background verification (billed at actual cost)",
      "New features (billed at actual cost)",
    ],
    addons: ["Additional AI credits", "Extra profiles (upgrade to Bureau)"],
    badge: null,
  },
  {
    id: "enterprise",
    icon: Globe,
    name: "Enterprise",
    target: "Large Organizations & Franchise Networks",
    tagline: "Unlimited scale. Custom everything. Dedicated support.",
    color: "var(--brand-gold)",
    bg: "rgba(217,169,30,0.06)",
    border: "rgba(217,169,30,0.25)",
    monthlyFee: "Custom",
    monthlyLabel: "pricing",
    setupFee: "Custom",
    setupLabel: "onboarding",
    revenueShare: "Negotiated",
    revenueShareLabel: "revenue share agreement",
    memberCap: "Unlimited profiles",
    aiCredits: "10 AI Credits free with registration per profile",
    teamSeats: "Unlimited seats",
    support: "Dedicated account manager",
    highlight: false,
    features: [
      "Everything in Bureau, plus:",
      "Unlimited members & profiles",
      "Unlimited team seats",
      "Custom revenue share agreement",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "Franchise network management dashboard",
      "Quarterly executive business reviews",
    ],
    costAddons: [
      "AI Credits (never expires) — in-app purchase",
      "Custom domain (billed at actual cost)",
      "Background verification (billed at actual cost)",
      "New features (billed at actual cost)",
      "Custom feature development consideration",
    ],
    addons: ["All upcoming features included"],
    badge: "For Franchises",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q: "What is the revenue share, exactly?",
    a: "The per-profile revenue share is EkamBond's platform fee for running the infrastructure, AI, and billing engine on your behalf. It is charged per active profile per month — meaning profiles that are visible and searchable on your platform. Inactive or suspended profiles are not counted.",
  },
  {
    q: "Do I keep my members' subscription money?",
    a: "Yes — 100%. When your members pay you ₹500 or $25 per month for a subscription, that money goes directly to you via Stripe. EkamBond's revenue share is separate and applies only to the number of active profiles, not the amount your members pay.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade from Matchmaker → Community → Bureau → Enterprise at any time. We prorate billing accordingly. Downgrading is also possible with 30 days' notice.",
  },
  {
    q: "What happens if I exceed my member cap?",
    a: "We'll notify you when you're at 80% capacity. You can upgrade your plan at any point. We never cut off access mid-month.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No annual lock-in. Plans are month-to-month after setup. Enterprise plans are typically 12-month agreements for pricing stability.",
  },
  {
    q: "What is included in the setup fee?",
    a: "The setup fee covers: white-label brand configuration (logo, colors, fonts), domain mapping, Stripe billing setup, admin portal onboarding, initial team training, and your first 30 days of priority setup support.",
  },
];

function PlanCard({ plan, index }: { plan: typeof PLANS[0]; index: number }) {
  const Icon = plan.icon;
  const costAddons = (plan as { costAddons?: string[] }).costAddons;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-3xl p-7 relative flex flex-col"
      style={{
        background: plan.highlight ? "linear-gradient(145deg, #1A0A06, #2D1208)" : "rgba(255,255,255,0.88)",
        border: `2px solid ${plan.border}`,
        boxShadow: plan.highlight ? "0 16px 60px rgba(200,48,42,0.22)" : "0 6px 28px rgba(0,0,0,0.07)",
      }}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black"
          style={{ background: plan.highlight ? "var(--brand-crimson)" : "var(--brand-gold)", color: plan.highlight ? "#fff" : "#1A0A06" }}>
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: plan.bg, border: `1.5px solid ${plan.border}` }}>
            <Icon className="w-6 h-6" style={{ color: plan.color }} />
          </div>
        </div>
        <h3 className="text-2xl font-black" style={{ color: plan.highlight ? "var(--color-text-on-dark)" : "var(--color-text-on-light)" }}>
          {plan.name}
        </h3>
        <p className="text-xs font-bold mt-0.5 mb-1" style={{ color: plan.color }}>
          {plan.target}
        </p>
        <p className="text-xs italic" style={{ color: plan.highlight ? "rgba(253,246,236,0.55)" : "var(--color-text-muted-light)" }}>
          {plan.tagline}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-5 pb-5" style={{ borderBottom: `1px solid ${plan.border}` }}>
        <div className="flex items-end gap-1.5 mb-1">
          <span className="text-3xl font-black" style={{ color: plan.highlight ? "var(--color-text-on-dark)" : "var(--color-text-on-light)" }}>
            {plan.monthlyFee}
          </span>
          <span className="text-xs mb-1.5" style={{ color: plan.highlight ? "rgba(253,246,236,0.5)" : "var(--color-text-muted-light)" }}>
            {plan.monthlyLabel}
          </span>
        </div>
        <div className="text-xs mb-3" style={{ color: plan.highlight ? "rgba(253,246,236,0.5)" : "var(--color-text-muted-light)" }}>
          + {plan.setupFee} {plan.setupLabel}
        </div>
        {/* Revenue share highlight */}
        <div className="rounded-xl px-3 py-2 flex items-center gap-2"
          style={{ background: `${plan.color}12`, border: `1px solid ${plan.border}` }}>
          <Zap className="w-3.5 h-3.5 flex-shrink-0" style={{ color: plan.color }} />
          <span className="text-xs font-bold" style={{ color: plan.color }}>{plan.revenueShare}</span>
          <span className="text-xs" style={{ color: plan.highlight ? "rgba(253,246,236,0.55)" : "var(--color-text-muted-light)" }}>
            {plan.revenueShareLabel}
          </span>
        </div>
      </div>

      {/* Capacity pills */}
      <div className="grid grid-cols-1 gap-1.5 mb-5 text-xs">
        {[
          { label: "Profiles", value: plan.memberCap },
          { label: "AI search", value: plan.aiCredits },
          { label: "Team seats", value: plan.teamSeats },
          { label: "Support", value: plan.support },
        ].map((d) => (
          <div key={d.label} className="flex justify-between px-3 py-1.5 rounded-lg"
            style={{ background: plan.highlight ? "rgba(255,255,255,0.05)" : "rgba(200,150,60,0.06)" }}>
            <span style={{ color: plan.highlight ? "rgba(253,246,236,0.5)" : "var(--color-text-muted-light)" }}>{d.label}</span>
            <span className="font-semibold" style={{ color: plan.highlight ? "var(--color-text-on-dark)" : "var(--color-text-on-light)" }}>{d.value}</span>
          </div>
        ))}
      </div>

      {/* Included Features */}
      <div className="space-y-2 mb-5 flex-1">
        {plan.features.map((f) => (
          <div key={f} className="flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
            <span className="text-xs" style={{ color: plan.highlight ? "rgba(253,246,236,0.7)" : "var(--color-text-muted-light)" }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Add-ons at actual cost */}
      {costAddons && costAddons.length > 0 && (
        <div className="mb-5 rounded-xl p-3"
          style={{ background: plan.highlight ? "rgba(255,255,255,0.04)" : "rgba(200,150,60,0.05)", border: `1px dashed ${plan.border}` }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2"
            style={{ color: plan.highlight ? "rgba(253,246,236,0.4)" : "var(--color-text-muted-light)" }}>
            Add-ons · Billed at actual cost
          </p>
          <div className="space-y-1.5">
            {costAddons.map((a) => (
              <div key={a} className="flex items-start gap-1.5">
                <span className="text-xs mt-0.5" style={{ color: plan.highlight ? "rgba(253,246,236,0.35)" : "rgba(150,120,70,0.7)" }}>+</span>
                <span className="text-xs" style={{ color: plan.highlight ? "rgba(253,246,236,0.55)" : "var(--color-text-muted-light)" }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <Link href="/register"
        className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-bold transition-all duration-200 hover:opacity-90 mt-auto"
        style={{
          background: plan.highlight ? "var(--brand-gold)" : plan.bg,
          color: plan.highlight ? "#1A0A06" : plan.color,
          border: `1.5px solid ${plan.border}`,
        }}>
        Get Started <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

function FaqItem({ item, index }: { item: typeof FAQ[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(200,150,60,0.18)" }}
    >
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors"
        style={{ background: open ? "rgba(200,150,60,0.06)" : "rgba(255,255,255,0.85)" }}>
        <span className="text-sm font-semibold" style={{ color: "var(--color-text-on-light)" }}>{item.q}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform"
          style={{ color: "var(--color-text-muted-light)", transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
            <p className="px-5 py-4 text-sm leading-relaxed"
              style={{ background: "rgba(255,255,255,0.88)", color: "var(--color-text-muted-light)", borderTop: "1px solid rgba(200,150,60,0.12)" }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ background: "var(--color-bg-warm)" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 px-4 text-center"
        style={{ background: "var(--color-bg-hero)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eb-badge eb-badge-dark mx-auto mb-5">
            Pricing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-5"
            style={{ color: "var(--color-text-on-dark)" }}>
            Simple, Transparent Pricing.{" "}
            <span className="eb-text-gold">You Keep Your Revenue.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-base max-w-2xl mx-auto mb-8" style={{ color: "var(--color-text-muted-dark)" }}>
            Five plans built for every type of matrimony partner — from solo matchmakers to enterprise franchise networks.
            A small platform fee per active profile. No hidden charges.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(217,169,30,0.30)", color: "var(--brand-gold)" }}>
            <Zap className="w-4 h-4" />
            Revenue Share Model — EkamBond earns only when your platform grows
          </motion.div>
        </div>
      </section>

      {/* ── Plan Cards ── */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Revenue Share Explainer ── */}
      <section className="py-14 px-4" style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-on-dark)" }}>
            How the Revenue Share Works
          </h2>
          <p className="text-sm mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            We believe in shared success — EkamBond only earns when your platform is active and growing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { emoji: "👥", title: "Active Profiles Only", desc: "You are only charged for profiles actively visible on your platform. Inactive or suspended profiles are excluded from the count." },
              { emoji: "💸", title: "Your Members Pay You", desc: "Your member subscription revenue goes directly to your Stripe account. EkamBond's platform fee is separate and billed monthly." },
              { emoji: "📈", title: "We Grow Together", desc: "The more members you onboard, the more EkamBond earns — so we are deeply invested in your platform's success and growth." },
            ].map((e, i) => (
              <motion.div key={e.title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(217,169,30,0.18)" }}>
                <div className="text-3xl mb-3">{e.emoji}</div>
                <p className="font-bold text-sm mb-2" style={{ color: "var(--brand-gold)" }}>{e.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(253,246,236,0.6)" }}>{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="eb-badge mx-auto mb-3">Pricing FAQ</span>
            <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-on-light)" }}>
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((item, i) => <FaqItem key={item.q} item={item} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4" style={{ background: "linear-gradient(135deg, #2D1208 0%, #1A0A06 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Briefcase className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--brand-gold)" }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-on-dark)" }}>
            Not sure which plan fits you?
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--color-text-muted-dark)" }}>
            Reach out — we help every partner find the right starting point. Most go live within 1–2 weeks.
          </p>
          <Link href="/register" className="eb-btn-primary mx-auto">
            Talk to Us & Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
