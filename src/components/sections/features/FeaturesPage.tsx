"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DemoModal from "@/components/ui/DemoModal";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown, Zap, Clock, Lock, Sparkles,
  Smartphone, Monitor, Brain,
  Shield, BarChart3, Settings, CreditCard, Key, Download, Star, Filter,
  UserCheck, Calendar, Globe, Bell, Heart, Image as ImageIcon, Search, Users, Layers,
} from "lucide-react";
import {
  ProfileCreationIcon,
  AdvancedFilterIcon,
  SubscriptionBillingIcon,
  AiMatchmakerIcon,
  BackgroundVerificationIcon,
  EventsIcon,
  WhiteLabelIcon,
  HoroscopeIcon,
  MessagingIcon,
  VideoCallingIcon,
  MemberManagementIcon,
  GlobalReachIcon,
} from "@/components/icons/MatrimonyIcons";

// ─── Tab definitions ─────────────────────────────────────────────────────────
const TABS = [
  { id: "matrimony", label: "Matrimony UI", icon: Smartphone, sub: "What your members see" },
  { id: "admin", label: "Partner Admin", icon: Monitor, sub: "What you control" },
  { id: "ai", label: "AI & Matching", icon: Brain, sub: "Smart matchmaking engine" },
  { id: "upcoming", label: "Coming Soon", icon: Sparkles, sub: "Roadmap features" },
] as const;

// ─── Matrimony UI Features ────────────────────────────────────────────────────
const matrimonyFeatures = [
  {
    icon: ProfileCreationIcon, title: "Smart Profile Creation",
    desc: "Members create rich profiles with personal, education, employment, family, lifestyle and photo sections. Guided 6-step onboarding ensures completeness.",
    tags: ["Photo Gallery", "Family Details", "Lifestyle Preferences", "Employment"],
  },
  {
    icon: AiMatchmakerIcon, title: "Natural Language AI Search",
    desc: "Members type searches like \"Software engineer from Chennai, non-smoker, under 30\" and get ranked matches. No dropdown menus needed.",
    tags: ["NLP Queries", "Semantic Matching", "Smart Rankings"],
  },
  {
    icon: AdvancedFilterIcon, title: "Advanced Filters & Browse",
    desc: "Traditional filter-based browsing with 20+ criteria: age, height, education, profession, location, religion, language, and more.",
    tags: ["20+ Filters", "Saved Searches", "Quick Browse"],
  },
  {
    icon: Heart, title: "Favorites & Saved Profiles",
    desc: "Members bookmark profiles they're interested in, with a dedicated Favorites section and private notes. Discreet and organized.",
    tags: ["Bookmarks", "Private Notes", "Interest Signals"],
  },
  {
    icon: BackgroundVerificationIcon, title: "Background Verified Badges",
    desc: "Verified members display trust badges on their profile. Members can request verification directly, increasing matching confidence.",
    tags: ["Trust Badges", "Document Upload", "Verification Status"],
  },
  {
    icon: EventsIcon, title: "Events & Community",
    desc: "Partners can host matrimony events, meet-and-greet sessions, and community gatherings. Members browse and express interest in events.",
    tags: ["Event Listings", "RSVP", "In-person Events"],
  },
  {
    icon: GlobalReachIcon, title: "Multi-Country Reach",
    desc: "Platform serves members globally with country-specific phone validation, state/city selectors, and currency-aware pricing.",
    tags: ["25+ Countries", "Local Phone Formats", "Global Profiles"],
  },
  {
    icon: Bell, title: "Notifications & Updates",
    desc: "Real-time alerts for new matches, profile views, interest received, and verification status changes.",
    tags: ["Push Alerts", "Email Digests", "Match Alerts"],
  },
];

// ─── Admin Portal Features ────────────────────────────────────────────────────
const adminFeatures = [
  {
    icon: WhiteLabelIcon, title: "White-Label Brand Control",
    desc: "Configure your logo, color palette, brand name, and custom domain. Every member sees your brand — not EkamBond's.",
    tags: ["Custom Logo", "Color Themes", "Domain Mapping"],
    highlight: true,
  },
  {
    icon: MemberManagementIcon, title: "Full Member Management",
    desc: "View, edit, suspend, or delete member profiles. Bulk actions, export to CSV, and advanced search within your member base.",
    tags: ["CRUD Operations", "Bulk Actions", "Member Export"],
  },
  {
    icon: SubscriptionBillingIcon, title: "Subscription & Billing Control",
    desc: "Define your own subscription plans, set prices, manage trials, and control which features are gated by plan tier. Powered by Stripe.",
    tags: ["Custom Plans", "Stripe-Powered", "Trial Management"],
    highlight: true,
  },
  {
    icon: BackgroundVerificationIcon, title: "Background Verification Hub",
    desc: "Manage verification requests, review uploaded documents, approve or reject with notes. Full audit trail maintained.",
    tags: ["Document Review", "Approval Workflow", "Audit Logs"],
  },
  {
    icon: BarChart3, title: "Analytics & Reports",
    desc: "Track registrations, AI search usage, active members, subscription revenue, and feature adoption. Visual dashboards updated daily.",
    tags: ["Revenue Reports", "Usage Analytics", "Growth Trends"],
  },
  {
    icon: Settings, title: "Team & Roles Management",
    desc: "Add staff members with specific role permissions: Admin, Support, Verifier, Viewer. Audit every action they take.",
    tags: ["Role-Based Access", "Staff Accounts", "Activity Logs"],
  },
  {
    icon: Key, title: "API Key Management",
    desc: "Generate and rotate API keys for integrating EkamBond's platform into your own apps, websites, or CRMs.",
    tags: ["REST API", "Key Rotation", "Webhook Support"],
  },
  {
    icon: Download, title: "Data Export & Portability",
    desc: "Export member data, reports, and audit logs at any time. Your data is always yours — full CSV and JSON export available.",
    tags: ["CSV Export", "JSON Export", "GDPR Ready"],
  },
];

// ─── AI Features ─────────────────────────────────────────────────────────────
const aiFeatures = [
  {
    icon: AiMatchmakerIcon, title: "Natural Language Search Engine",
    desc: "Our AI converts plain English queries into structured database searches. \"Tall doctor from Hyderabad, family-oriented\" produces accurate, ranked results.",
    example: "\"Software engineer, Chennai, non-smoker, age 28-32\"",
  },
  {
    icon: Star, title: "Smart Match Scoring",
    desc: "Each profile pair receives a compatibility score based on mutual preferences, search history, and declared criteria. Higher scores surface first.",
    example: "Automatically ranks 10,000 profiles to find top 20",
  },
  {
    icon: AdvancedFilterIcon, title: "Preference Learning",
    desc: "The system learns from a member's saved, viewed, and skipped profiles to progressively improve recommendations.",
    example: "Adapts in real-time to browsing behavior",
  },
  {
    icon: BackgroundVerificationIcon, title: "Background Verification",
    desc: "Partners configure which document types are accepted. Members upload docs, staff reviews via admin portal. Verified badge appears automatically on approval.",
    example: "ID, Income Proof, Education Certificates",
  },
  {
    icon: Zap, title: "AI Search Credits",
    desc: "Platform-level quota management. Partners assign AI search credits per subscription plan. Usage tracked per member, per partner, per day.",
    example: "Starter: 10/day · Pro: 50/day · Enterprise: Unlimited",
  },
];

// ─── Upcoming Features ───────────────────────────────────────────────────────
const upcomingFeatures = [
  {
    icon: HoroscopeIcon, title: "Horoscope Integration",
    desc: "Members enter birth details for automatic Janma Kundali generation. Compatibility scoring between profiles using Vedic astrology principles. Partners can enable or disable this feature per their community.",
    ribbon: "Q3 2025",
    tags: ["Kundali Chart", "Compatibility Score", "Configurable per Partner"],
    color: "rgba(217,169,30,0.12)",
    border: "rgba(217,169,30,0.35)",
    iconColor: "#D9A91E",
  },
  {
    icon: MessagingIcon, title: "In-Platform Messaging",
    desc: "Secure, encrypted messaging between matched profiles. No phone numbers shared until both parties consent. Message requests, typing indicators, and read receipts included.",
    ribbon: "Q4 2025",
    tags: ["E2E Encrypted", "Consent-Based", "Message Requests"],
    color: "rgba(45,158,110,0.10)",
    border: "rgba(45,158,110,0.30)",
    iconColor: "#2D9E6E",
  },
  {
    icon: VideoCallingIcon, title: "Video Calling",
    desc: "Scheduled video introductions between mutually interested profiles. Partners can gate this feature behind higher subscription tiers to increase revenue.",
    ribbon: "Q1 2026",
    tags: ["Scheduled Calls", "Tier-Gated", "HD Quality"],
    color: "rgba(200,48,42,0.10)",
    border: "rgba(200,48,42,0.25)",
    iconColor: "#C8302A",
  },
];

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, desc, tags, highlight = false, delay = 0 }: {
  icon: React.ElementType; title: string; desc: string; tags: string[]; highlight?: boolean; delay?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl p-6 cursor-pointer transition-all duration-300 group"
      style={{
        background: highlight ? "linear-gradient(135deg, rgba(217,169,30,0.10) 0%, rgba(255,255,255,0.85) 100%)" : "rgba(255,255,255,0.88)",
        border: `1.5px solid ${highlight ? "rgba(217,169,30,0.35)" : "rgba(200,150,60,0.15)"}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
      onClick={() => setExpanded(!expanded)}
      whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
    >
      <div className="flex items-start gap-4">
        {/* Icon container — large enough to show illustrated SVG clearly */}
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
          style={{ background: "var(--brand-gold-soft)", minWidth: "4rem" }}>
          <Icon size={36} style={{ color: "var(--brand-crimson)" }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-base leading-tight" style={{ color: "var(--color-text-on-light)" }}>{title}</h3>
            <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform" style={{ color: "var(--color-text-muted-light)", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }} />
          </div>
          <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>
            {expanded ? desc : desc.slice(0, 90) + (desc.length > 90 ? "…" : "")}
          </p>
          {expanded && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{ background: "rgba(200,150,60,0.12)", color: "var(--brand-navy)", border: "1px solid rgba(200,150,60,0.2)" }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── AI Feature Row ───────────────────────────────────────────────────────────
function AiFeatureRow({ feature, index }: { feature: typeof aiFeatures[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10"
      style={{ borderBottom: "1px solid rgba(200,150,60,0.12)" }}
    >
      {isEven ? (
        <>
          <FeatureTextBlock feature={feature} />
          <FeatureExampleBlock feature={feature} />
        </>
      ) : (
        <>
          <FeatureExampleBlock feature={feature} />
          <FeatureTextBlock feature={feature} />
        </>
      )}
    </motion.div>
  );
}

function FeatureTextBlock({ feature }: { feature: typeof aiFeatures[0] }) {
  const Icon = feature.icon;
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--brand-gold-soft)" }}>
          <Icon size={36} style={{ color: "var(--brand-crimson)" }} />
        </div>
        <h3 className="text-xl font-bold" style={{ color: "var(--color-text-on-light)" }}>{feature.title}</h3>
      </div>
      <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>{feature.desc}</p>
    </div>
  );
}

function FeatureExampleBlock({ feature }: { feature: typeof aiFeatures[0] }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid rgba(200,150,60,0.20)", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-gold)" }}>Example</p>
      <p className="text-sm font-medium italic leading-relaxed" style={{ color: "var(--color-text-on-light)" }}>{feature.example}</p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<string>("matrimony");
  const tabRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const el = tabRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(!e.isIntersecting),
      { threshold: 1, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--color-bg-warm)" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 px-4 text-center" style={{ background: "var(--color-bg-hero)", minHeight: "52vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 10%, rgba(200,48,42,0.18) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 90%, rgba(217,169,30,0.14) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="eb-badge eb-badge-dark mx-auto mb-5">
            Platform Features
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "var(--color-text-on-dark)" }}>
            Everything Your Platform Needs,{" "}
            <span className="eb-text-gold">Out of the Box</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-10" style={{ color: "var(--color-text-muted-dark)" }}>
            EkamBond delivers two distinct experiences — a polished <strong style={{ color: "var(--brand-gold-light)" }}>Matrimony UI</strong> for your members,
            and a powerful <strong style={{ color: "var(--brand-gold-light)" }}>Admin Portal</strong> for your team. No developers, no infrastructure headaches.
          </motion.p>
          {/* Quick stat pills */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center">
            {[
              { n: "30+", l: "Live Features" },
              { n: "48 hrs", l: "Go Live Time" },
              { n: "3", l: "Upcoming Features" },
              { n: "25+", l: "Countries Supported" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <span className="font-bold text-base" style={{ color: "var(--brand-gold)" }}>{s.n}</span>
                <span className="text-sm" style={{ color: "var(--color-text-muted-dark)" }}>{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Zero-Tech Burden Strip ── */}
      <section className="py-8 px-4" style={{ background: "#1A0A06" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: "👨‍💻", title: "No Developers Needed", desc: "Platform is fully managed. You never write a line of code or hire a dev team." },
              { emoji: "🖥️", title: "No Infrastructure Headaches", desc: "Hosting, scaling, backups, SSL — EkamBond handles 100% of it, always." },
              { emoji: "🔧", title: "No Maintenance", desc: "Updates, security patches, new features — all automatic. You just log in and use it." },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 rounded-2xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(217,169,30,0.20)" }}>
                <span className="text-3xl flex-shrink-0 mt-1">{item.emoji}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--brand-gold)" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(253,246,236,0.65)" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Tagline ── */}
      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg, #2D1208 0%, #1A0A06 50%, #2D1208 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold leading-snug mb-4"
            style={{ color: "var(--color-text-on-dark)" }}>
            You concentrate on{" "}
            <span style={{ color: "var(--brand-gold)" }}>your business.</span>
            {" "}We take care of{" "}
            <span style={{ color: "var(--brand-gold)" }}>your technology.</span>
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base max-w-2xl mx-auto mb-6 leading-relaxed"
            style={{ color: "rgba(253,246,236,0.7)" }}>
            EkamBond is not a competitor to your matrimony business —{" "}
            <strong style={{ color: "rgba(253,246,236,0.9)" }}>we are your technology partner.</strong>{" "}
            Your brand, your members, your revenue. We simply power the platform that lets you serve more people, faster.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 justify-center">
            {["Your brand, your members", "You keep 100% of revenue", "We grow when you grow", "Partners, not competitors"].map((p) => (
              <span key={p} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(217,169,30,0.15)", border: "1px solid rgba(217,169,30,0.30)", color: "var(--brand-gold)" }}>
                ✦ {p}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Tab Nav ── */}
      <div ref={tabRef} className="sticky top-20 z-30 px-4 py-3 border-b"
        style={{ background: "rgba(253,246,236,0.97)", backdropFilter: "blur(16px)", borderColor: "rgba(200,150,60,0.18)", boxShadow: isSticky ? "0 4px 20px rgba(0,0,0,0.08)" : "none" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold flex-shrink-0 transition-all duration-200"
                  style={{
                    background: active ? (tab.id === "upcoming" ? "var(--brand-crimson)" : "var(--brand-gold)") : "transparent",
                    color: active ? "#fff" : "var(--color-text-muted-light)",
                  }}>
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span className="hidden sm:inline text-xs opacity-70">— {tab.sub}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-5xl mx-auto px-4 py-14">
        <AnimatePresence mode="wait">
          {/* ── TAB 1: Matrimony UI ── */}
          {activeTab === "matrimony" && (
            <motion.div key="matrimony" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
              <SectionHeading
                badge="Member-Facing Experience"
                title="What Your Members See"
                sub="A modern, mobile-first matrimony platform — branded with your logo and colors. Your members never know EkamBond powers it under the hood."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                {matrimonyFeatures.map((f, i) => (
                  <FeatureCard key={f.title} {...f} delay={i * 0.05} />
                ))}
              </div>
              <CtaStrip
                label="See a live example"
                href="#"
                sub="View how partner platforms look to end users"
                onClick={() => setDemoOpen(true)}
              />
            </motion.div>
          )}

          {/* ── TAB 2: Admin Portal ── */}
          {activeTab === "admin" && (
            <motion.div key="admin" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
              <SectionHeading
                badge="Partner Control Center"
                title="Your Admin Portal"
                sub="A fully-featured management console accessible only to you and your team. Control everything — members, billing, branding, analytics — from one dashboard."
              />
              {/* Admin portal visual emphasis */}
              <div className="mt-8 rounded-3xl p-6 md:p-8"
                style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)", border: "1px solid rgba(217,169,30,0.2)" }}>
                <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-gold)" }}>
                  Exclusive to Partners — Never visible to end users
                </p>
                <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--color-text-on-dark)" }}>
                  Your own secure, fully white-labeled admin console
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted-dark)" }}>
                  Completely white-labeled. Accessible via any browser. No app install needed.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {adminFeatures.map((f, i) => (
                  <FeatureCard key={f.title} {...f} delay={i * 0.05} />
                ))}
              </div>
              <CtaStrip label="Start managing your platform" href="/register" sub="Get your admin portal in 1–2 weeks" />
            </motion.div>
          )}

          {/* ── TAB 3: AI & Matching ── */}
          {activeTab === "ai" && (
            <motion.div key="ai" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
              <SectionHeading
                badge="Intelligent Matchmaking"
                title="AI-Powered Search & Matching"
                sub="The EkamBond AI engine understands natural language, learns from behavior, and surfaces the most compatible matches — automatically."
              />
              <div className="mt-8">
                {aiFeatures.map((f, i) => <AiFeatureRow key={f.title} feature={f} index={i} />)}
              </div>
              <CtaStrip label="See AI in Action" href="/register" sub="Live demo available after partner onboarding" />
            </motion.div>
          )}

          {/* ── TAB 4: Upcoming ── */}
          {activeTab === "upcoming" && (
            <motion.div key="upcoming" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
              <SectionHeading
                badge="Coming Soon"
                title="What's on Our Roadmap"
                sub="These features are in active development. Partners who register now will be first to get access when each feature goes live."
              />
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div key={f.title}
                      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="rounded-3xl p-7 relative overflow-hidden"
                      style={{ background: f.color, border: `1.5px solid ${f.border}` }}>
                      {/* Ribbon */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{ background: f.border, color: f.iconColor }}>
                        <Clock className="w-3 h-3" /> {f.ribbon}
                      </div>
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
                        style={{ background: "rgba(255,255,255,0.15)", border: `1.5px solid ${f.border}` }}>
                        <Icon size={44} style={{ color: f.iconColor }} />
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>{f.title}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted-light)" }}>{f.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {f.tags.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full font-semibold"
                            style={{ background: "rgba(255,255,255,0.6)", color: "var(--brand-navy)" }}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-12 rounded-3xl p-8 text-center"
                style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 60%, #1A0A06 100%)", border: "1px solid rgba(217,169,30,0.2)" }}>
                <Lock className="w-8 h-8 mx-auto mb-4" style={{ color: "var(--brand-gold)" }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text-on-dark)" }}>
                  Early Access for Current Partners
                </h3>
                <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
                  Partners who join now will be first in line for Horoscope Integration, Messaging, and Video Calling — with no extra setup cost.
                </p>
                <Link href="/register" className="eb-btn-primary mx-auto">
                  Register Now for Early Access <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}

// ─── Shared helpers ───────────────────────────────────────────────────────────
function SectionHeading({ badge, title, sub }: { badge: string; title: string; sub: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="eb-badge mx-auto mb-4">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-text-on-light)" }}>{title}</h2>
      <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>{sub}</p>
    </div>
  );
}

function CtaStrip({ label, href, sub, onClick }: { label: string; href: string; sub: string; onClick?: () => void }) {
  return (
    <div className="mt-14 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ background: "linear-gradient(135deg, rgba(217,169,30,0.10) 0%, rgba(200,48,42,0.07) 100%)", border: "1.5px solid rgba(200,150,60,0.20)" }}>
      <div>
        <p className="font-bold text-base" style={{ color: "var(--color-text-on-light)" }}>{label}</p>
        <p className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>{sub}</p>
      </div>
      {onClick ? (
        <button onClick={onClick} className="eb-btn-primary flex-shrink-0">
          {label} <ChevronRight className="w-4 h-4" />
        </button>
      ) : (
        <Link href={href} className="eb-btn-primary flex-shrink-0">
          {label} <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
