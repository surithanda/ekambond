"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, MapPin, Building, Star, TrendingUp, Users, Shield,
  Globe, Handshake, ChevronRight, Award, Target, BarChart3, Smartphone,
} from "lucide-react";

// ─── Franchise Tiers ──────────────────────────────────────────────────────────
const TIERS = [
  {
    name: "Area Franchise",
    sub: "Mandal / Town Level",
    icon: MapPin,
    color: "var(--brand-gold)",
    bg: "rgba(217,169,30,0.08)",
    border: "rgba(217,169,30,0.25)",
    desc: "Serve families in your local town or mandal. Ideal for matchmakers and community leaders who already have local trust.",
    members: "Up to 200 profiles",
    revenueShare: "60% registration + 50% success fee",
    territory: "Town / Mandal exclusive",
    investment: "Contact us",
  },
  {
    name: "District Franchise",
    sub: "District Level",
    icon: Building,
    color: "var(--brand-crimson)",
    bg: "rgba(200,48,42,0.08)",
    border: "rgba(200,48,42,0.25)",
    desc: "Manage multiple sub-partners across your district. Earn from your own profiles and a share of every sub-partner in your territory.",
    members: "Unlimited (multi-partner)",
    revenueShare: "65% own + 15% sub-partner override",
    territory: "District exclusive",
    investment: "Contact us",
    featured: true,
  },
  {
    name: "City Franchise",
    sub: "Metro / City Level",
    icon: Globe,
    color: "var(--brand-navy)",
    bg: "rgba(27,58,110,0.08)",
    border: "rgba(27,58,110,0.20)",
    desc: "Run a full matrimony business empire across an entire city. Recruit area and district franchisees under your umbrella brand.",
    members: "Unlimited + sub-franchises",
    revenueShare: "70% own + 15-20% territory override",
    territory: "City / metro exclusive",
    investment: "Contact us",
  },
];

// ─── Revenue Streams ──────────────────────────────────────────────────────────
const REVENUE_STREAMS = [
  {
    icon: Users,
    title: "Registration Fee Share",
    value: "50–70%",
    desc: "You collect registration fees from members and keep the majority. EkamBond takes a small platform share.",
  },
  {
    icon: Star,
    title: "Match Success Fee",
    value: "High commission",
    desc: "Every successful match you facilitate earns a success fee — the most meaningful revenue stream.",
  },
  {
    icon: TrendingUp,
    title: "Renewal & Premium",
    value: "Recurring income",
    desc: "Members who renew subscriptions or upgrade to premium plans generate ongoing, passive income every month.",
  },
  {
    icon: Handshake,
    title: "Sub-Partner Override",
    value: "15% of territory",
    desc: "District and City franchise partners earn a percentage override on every sub-partner's revenue in their territory.",
  },
  {
    icon: Award,
    title: "Territory Growth Bonus",
    value: "Performance bonus",
    desc: "Hit quarterly growth targets in your territory and earn additional performance-based bonuses from EkamBond.",
  },
  {
    icon: Building,
    title: "Wedding & Allied Services",
    value: "Referral income",
    desc: "Tie up with local wedding planners, photographers, and caterers. Earn referral commissions on every handoff.",
  },
];

// ─── Responsibilities ─────────────────────────────────────────────────────────
const RESPONSIBILITIES = [
  "Register genuine matrimony profiles in your territory",
  "Conduct initial family counseling and profile verification",
  "Build trust with local families through in-person relationships",
  "Coordinate matches and facilitate introductions",
  "Promote the brand locally (offline events + digital marketing)",
  "Recruit and support sub-partners (District/City level only)",
];

// ─── What EkamBond Provides ───────────────────────────────────────────────────
const EKAMBOND_PROVIDES = [
  { icon: Smartphone, text: "Your own branded white-label matrimony website" },
  { icon: BarChart3, text: "Full admin portal — profiles, revenue, matching status tracking" },
  { icon: Shield, text: "Profile verification & AI-powered matching engine" },
  { icon: Target, text: "Payment tracking & automated commission management" },
  { icon: Users, text: "Brand promotion materials — posters, banners, WhatsApp creatives" },
  { icon: CheckCircle, text: "Initial training, partner handbook & SOPs" },
  { icon: Globe, text: "Domain & hosting guidance — fully managed tech" },
  { icon: Handshake, text: "Ongoing operational & technical support" },
];

// ─── How It Works Steps ───────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  { num: "01", title: "Apply & Connect", desc: "Submit your franchise interest. Our team will reach out for an introductory call within 1–2 weeks." },
  { num: "02", title: "Territory Grant", desc: "We review your area and grant you exclusive rights to your mandal, district, or city — in writing." },
  { num: "03", title: "Platform Setup", desc: "Your branded matrimony website goes live. We configure everything — your logo, colors, domain, billing." },
  { num: "04", title: "Training & Go-Live", desc: "2-day onboarding. Learn the system, receive your partner handbook and marketing kit. You're ready." },
  { num: "05", title: "Grow Your Territory", desc: "Register members, facilitate matches, recruit sub-partners (if eligible). Revenue starts flowing from day one." },
  { num: "06", title: "Scale & Expand", desc: "Hit targets. Earn bonuses. Expand to adjacent territories. Build your matrimony business empire." },
];

// ─── Comparison Table ─────────────────────────────────────────────────────────
const COMPARISON = [
  { feature: "Technology platform", direct: "Build from scratch (₹50L+)", franchise: "✓ Fully provided" },
  { feature: "Brand & domain", direct: "Design separately", franchise: "✓ Your own brand, EkamBond-powered" },
  { feature: "Admin dashboard", direct: "Custom development", franchise: "✓ Included from day 1" },
  { feature: "Territory exclusivity", direct: "None", franchise: "✓ Exclusive by contract" },
  { feature: "Revenue share", direct: "Keep 100% (if you can get members)", franchise: "✓ Keep 60-70% — zero infra cost" },
  { feature: "Ongoing maintenance", direct: "Your problem", franchise: "✓ EkamBond handles everything" },
  { feature: "Marketing support", direct: "On your own", franchise: "✓ Materials + templates provided" },
  { feature: "Time to launch", direct: "6–12 months", franchise: "✓ 1–2 weeks" },
];

// ─── Ethics & Values ─────────────────────────────────────────────────────────
const ETHICS = [
  { icon: Shield, text: "Strict privacy & data protection for all members" },
  { icon: CheckCircle, text: "Zero tolerance for fake or misleading profiles" },
  { icon: Users, text: "Respectful, dignified communication at all times" },
  { icon: BarChart3, text: "Transparent commission — what you see is what you get" },
];

export default function FranchisePage() {
  return (
    <div style={{ background: "var(--color-bg-warm)" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 px-4 text-center"
        style={{ background: "var(--color-bg-hero)", minHeight: "55vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,48,42,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(217,169,30,0.14) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eb-badge eb-badge-dark mx-auto mb-5">
            Franchise Opportunity
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "var(--color-text-on-dark)" }}>
            Own Your Territory.{" "}
            <span className="eb-text-gold">Build Your Brand.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-10" style={{ color: "var(--color-text-muted-dark)" }}>
            EkamBond franchise partners run thriving matrimony businesses in their own territory —
            with our complete technology platform, exclusive rights, and ongoing support.
            <strong style={{ color: "var(--color-text-on-dark)" }}> You focus on relationships. We handle the technology.</strong>
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 justify-center mb-8">
            {["Territory Exclusive Rights", "50–70% Revenue Share", "Your Own Brand", "No Tech Skills Needed", "Launch in 1–2 weeks"].map((p) => (
              <span key={p} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--color-text-on-dark)" }}>
                <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--brand-gold)" }} /> {p}
              </span>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link href="/register?type=franchise" className="eb-btn-primary mx-auto">
              Apply for Franchise <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Key Differentiator Strip ── */}
      <section className="py-8 px-4" style={{ background: "#1A0A06" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: "🤝", title: "Not an Agent — A Business Owner", desc: "You are a long-term business partner, not a commission agent. You own your territory and your brand." },
              { emoji: "💡", title: "Technology with Human Trust", desc: "EkamBond handles all tech invisibly. Your members only see your brand and your personal touch." },
              { emoji: "📈", title: "Multiple Revenue Streams", desc: "Registration, success fees, renewals, sub-partner overrides — income flows from every angle." },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 rounded-2xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(217,169,30,0.18)" }}>
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--brand-gold)" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(253,246,236,0.6)" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Franchise Tiers ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Choose Your Level</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              Three Franchise Tiers
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
              Start at the level that matches your market. Grow from Area to District to City as your business expands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div key={tier.name}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl p-7 relative"
                  style={{
                    background: tier.featured ? "linear-gradient(145deg, #1A0A06, #2D1208)" : "rgba(255,255,255,0.88)",
                    border: `2px solid ${tier.border}`,
                    boxShadow: tier.featured ? "0 12px 48px rgba(200,48,42,0.20)" : "0 6px 24px rgba(0,0,0,0.07)",
                  }}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black"
                      style={{ background: "var(--brand-crimson)", color: "#fff" }}>
                      Most Popular
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: tier.bg, border: `1.5px solid ${tier.border}` }}>
                    <Icon className="w-7 h-7" style={{ color: tier.color }} />
                  </div>

                  <h3 className="text-xl font-black mb-0.5" style={{ color: tier.featured ? "var(--color-text-on-dark)" : "var(--color-text-on-light)" }}>
                    {tier.name}
                  </h3>
                  <p className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: tier.color }}>
                    {tier.sub}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: tier.featured ? "rgba(253,246,236,0.7)" : "var(--color-text-muted-light)" }}>
                    {tier.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Member capacity", value: tier.members },
                      { label: "Revenue share", value: tier.revenueShare },
                      { label: "Territory", value: tier.territory },
                    ].map((d) => (
                      <div key={d.label} className="flex justify-between items-start gap-2">
                        <span className="text-xs" style={{ color: tier.featured ? "rgba(253,246,236,0.5)" : "var(--color-text-muted-light)" }}>{d.label}</span>
                        <span className="text-xs font-bold text-right" style={{ color: tier.featured ? "var(--color-text-on-dark)" : "var(--color-text-on-light)" }}>{d.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/register?type=franchise"
                    className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-bold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: tier.featured ? "var(--brand-gold)" : tier.bg,
                      color: tier.featured ? "#1A0A06" : tier.color,
                      border: `1.5px solid ${tier.border}`,
                    }}>
                    Express Interest <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge eb-badge-dark mx-auto mb-4">The Journey</span>
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-text-on-dark)" }}>
              From Interest to Income in 6 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(217,169,30,0.18)" }}>
                <div className="text-4xl font-black mb-3" style={{ color: "rgba(217,169,30,0.3)", fontVariantNumeric: "tabular-nums" }}>{step.num}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text-on-dark)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(253,246,236,0.6)" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revenue Streams ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Revenue Model</span>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              6 Ways You Earn
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
              One successful match leads to referrals, renewals, and a reputation that earns for years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVENUE_STREAMS.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={r.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.88)", border: "1.5px solid rgba(200,150,60,0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(200,48,42,0.08)" }}>
                      <Icon className="w-5 h-5" style={{ color: "var(--brand-crimson)" }} />
                    </div>
                    <span className="text-sm font-black" style={{ color: "var(--brand-gold)" }}>{r.value}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--color-text-on-light)" }}>{r.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What EkamBond Provides ── */}
      <section className="py-16 px-4" style={{ background: "var(--color-bg-warm)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eb-badge mb-4">Complete Support</span>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-text-on-light)" }}>
                You Focus on Relationships.<br />
                <span style={{ color: "var(--brand-crimson)" }}>We Handle Everything Else.</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted-light)" }}>
                Every EkamBond franchise partner gets the full technology stack, brand materials, training, and ongoing support.
                Zero technical knowledge required — if you can use WhatsApp, you can run this business.
              </p>
              <Link href="/register?type=franchise" className="eb-btn-primary">
                Become a Franchise Partner <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {EKAMBOND_PROVIDES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.text}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(200,150,60,0.15)" }}>
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand-crimson)" }} />
                    <span className="text-sm" style={{ color: "var(--color-text-on-light)" }}>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise vs DIY ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(135deg, #2D1208 0%, #1A0A06 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="eb-badge eb-badge-dark mx-auto mb-4">Why Franchise?</span>
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-text-on-dark)" }}>
              Franchise vs. Building Your Own
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(217,169,30,0.20)" }}>
            <div className="grid grid-cols-3 px-6 py-3 text-xs font-black uppercase tracking-wider"
              style={{ background: "rgba(217,169,30,0.12)", color: "var(--brand-gold)" }}>
              <span>Feature</span>
              <span className="text-center">Build Your Own</span>
              <span className="text-center">EkamBond Franchise</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 px-6 py-4 items-center"
                style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(217,169,30,0.08)" }}>
                <span className="text-sm" style={{ color: "rgba(253,246,236,0.8)" }}>{row.feature}</span>
                <span className="text-xs text-center" style={{ color: "rgba(253,246,236,0.45)" }}>{row.direct}</span>
                <span className="text-xs text-center font-semibold" style={{ color: "var(--brand-gold)" }}>{row.franchise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Ethics ── */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12"
            style={{ background: "rgba(255,255,255,0.88)", border: "1.5px solid rgba(200,150,60,0.18)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            <div className="text-center mb-8">
              <span className="eb-badge mx-auto mb-3">Our Commitment</span>
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-on-light)" }}>
                Our Franchise Partners Are Not Agents.<br />
                <span style={{ color: "var(--brand-crimson)" }}>They Are Business Owners.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...ETHICS, ...RESPONSIBILITIES.map((r) => ({ icon: CheckCircle, text: r }))].slice(0, 8).map((e, i) => {
                const Icon = e.icon;
                return (
                  <div key={e.text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--brand-crimson)" }} />
                    <span className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>{e.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lakshmi Pull-Quote ── */}
      <section className="py-14 px-4" style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl p-10 text-center relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(217,169,30,0.25)" }}
          >
            {/* Decorative background quote */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{ fontSize: "16rem", color: "rgba(217,169,30,0.04)", fontFamily: "Georgia, serif", lineHeight: 1 }}>
              &ldquo;
            </div>
            <div className="relative z-10">
              <span className="eb-badge eb-badge-dark mx-auto mb-6">From a Partner</span>
              <p className="text-2xl md:text-3xl font-bold italic leading-relaxed mb-4"
                style={{ color: "var(--color-text-on-dark)" }}>
                People think I built a big system.
              </p>
              <p className="text-3xl md:text-4xl font-black" style={{ color: "var(--brand-gold)" }}>
                Actually, I joined the right one.
              </p>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(217,169,30,0.18)" }}>
                <p className="text-sm font-semibold" style={{ color: "rgba(253,246,236,0.6)" }}>
                  Lakshmi — Marriage Bureau Owner, EkamBond Partner
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Future Vision ── */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-on-dark)" }}>
            The Road Ahead
          </h2>
          <p className="text-sm mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            EkamBond's franchise network is expanding. Early franchise partners get the best territories, best rates, and first access to new features.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { emoji: "🏙️", text: "District & city expansion" },
              { emoji: "🌏", text: "NRI–local matching support" },
              { emoji: "💒", text: "Wedding & allied services" },
              { emoji: "📱", text: "Horoscope, messaging & video (2025–26)" },
            ].map((v) => (
              <div key={v.text} className="rounded-2xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(217,169,30,0.15)" }}>
                <div className="text-2xl mb-2">{v.emoji}</div>
                <p className="text-xs leading-snug" style={{ color: "rgba(253,246,236,0.65)" }}>{v.text}</p>
              </div>
            ))}
          </div>
          <Link href="/register?type=franchise" className="eb-btn-primary mx-auto">
            Apply for Franchise Now <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs mt-4" style={{ color: "rgba(253,246,236,0.4)" }}>
            We review all applications within 1–2 weeks. No commitment required to enquire.
          </p>
        </div>
      </section>
    </div>
  );
}
