"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, Code2, Cloud, Server, Users, TrendingUp,
  MapPin, Clock, ChevronDown, ChevronUp, Sparkles, Heart, Zap, Globe2, ArrowRight,
} from "lucide-react";

// ─── Job Openings ─────────────────────────────────────────────────────────────
const openings = [
  {
    id: 1,
    icon: Code2,
    title: "Senior Product Engineer – UI/UX & React",
    department: "Product & Engineering",
    type: "Full-Time",
    location: "Remote (India / USA)",
    color: "#D9A91E",
    tagline: "Build the face of matrimony technology that millions of families will trust.",
    about:
      "As our Senior Product Engineer, you will own the end-to-end visual and interaction experience across EkamBond's partner-facing platforms and member-facing matrimony apps. You'll work at the intersection of design systems, performance engineering, and user empathy — crafting interfaces that feel as warm and trustworthy as the relationships they help form.",
    responsibilities: [
      "Architect and build reusable, accessible component libraries in React (Next.js App Router)",
      "Lead design-system decisions — typography, color tokens, animation principles",
      "Collaborate directly with product leadership to translate wireframes into pixel-perfect, animated UIs",
      "Own performance budgets and Core Web Vitals across all partner storefronts",
      "Conduct user research, A/B tests, and iterative UX improvements",
      "Mentor junior engineers on React best practices and design thinking",
    ],
    stack: ["React 19", "Next.js 15 (App Router)", "TypeScript", "Framer Motion", "Tailwind CSS", "Figma", "Storybook", "Vercel"],
    qualifications: [
      "5+ years of frontend engineering with React",
      "Strong portfolio demonstrating UI/UX sensibility and animation work",
      "Experience with design systems and accessibility (WCAG 2.1)",
      "Familiarity with performance optimization and SSR/ISR patterns",
    ],
    badge: "Design × Engineering",
  },
  {
    id: 2,
    icon: Cloud,
    title: "Cloud & Platform Architect (Azure)",
    department: "Infrastructure & Platform",
    type: "Full-Time",
    location: "Remote (India / USA)",
    color: "#1B3A6E",
    tagline: "Architect the cloud backbone that powers white-label matrimony platforms at scale.",
    about:
      "EkamBond runs a multi-tenant SaaS platform serving matrimony operators across the USA and India. As our Cloud & Platform Architect, you will design, build, and govern the Azure infrastructure that underpins every partner storefront — ensuring sub-100ms response times, 99.9% uptime, and enterprise-grade security for sensitive personal data.",
    responsibilities: [
      "Design and own multi-tenant Azure architecture (App Services, AKS, API Management, Azure SQL)",
      "Define and implement CI/CD pipelines, Infrastructure-as-Code (Bicep / Terraform)",
      "Lead security architecture: identity, secret management (Azure Key Vault), WAF, DDoS protection",
      "Build disaster recovery, backup, and business continuity playbooks",
      "Optimize cloud costs and implement FinOps practices across environments",
      "Collaborate with engineering teams on service design, API gateways, and event-driven patterns",
    ],
    stack: ["Microsoft Azure", "AKS (Kubernetes)", "Azure DevOps", "Terraform / Bicep", "Azure API Management", "Application Insights", "GitHub Actions", "Entra ID"],
    qualifications: [
      "7+ years of cloud architecture experience, 4+ on Azure",
      "Azure Solutions Architect Expert certification (preferred)",
      "Deep knowledge of multi-tenant SaaS patterns, networking, and identity",
      "Experience with compliance frameworks (SOC 2, ISO 27001) is a plus",
    ],
    badge: "Platform × Security",
  },
  {
    id: 3,
    icon: Server,
    title: "Backend API Engineer – Node.js, MySQL & DevOps",
    department: "Product & Engineering",
    type: "Full-Time",
    location: "Remote (India / USA)",
    color: "#2D9E6E",
    tagline: "Build the APIs that connect matchmakers, families, and intelligent search — reliably and securely.",
    about:
      "Our platform is API-first. As Backend API Engineer, you will design and deliver the RESTful and event-driven services that power partner onboarding, member profiles, AI search integrations, payment workflows, and third-party systems. You will own API security, versioning, and the DevOps pipelines that keep everything running.",
    responsibilities: [
      "Design, build, and maintain RESTful APIs in Node.js (Express / Fastify)",
      "Own MySQL schema design, query optimization, indexing strategies, and migrations",
      "Implement API security: JWT, OAuth 2.0, rate limiting, input validation, OWASP top-10 hardening",
      "Build and maintain CI/CD pipelines and Docker-based deployments",
      "Integrate with third-party systems: Stripe, background verification APIs, SMS/email providers",
      "Write comprehensive API documentation (OpenAPI / Swagger) and integration guides for partners",
    ],
    stack: ["Node.js", "Express / Fastify", "MySQL 8", "Redis", "Docker", "GitHub Actions", "Swagger / OpenAPI", "Stripe API", "Jest"],
    qualifications: [
      "4+ years of backend API development with Node.js",
      "Strong MySQL skills including stored procedures, indexing, and performance tuning",
      "Solid understanding of API security and authentication patterns",
      "Experience with Docker and CI/CD pipelines",
    ],
    badge: "API × DevOps",
  },
  {
    id: 4,
    icon: Users,
    title: "Partner Success Executive",
    department: "Partner Operations",
    type: "Full-Time",
    location: "Remote (India / USA)",
    color: "#C8302A",
    tagline: "Be the trusted advisor who turns new partners into thriving matrimony businesses.",
    about:
      "EkamBond's growth depends on partner success. As a Partner Success Executive, you are the primary relationship owner for our matrimony operator partners — guiding them from onboarding through go-live and beyond. You combine empathy, technical aptitude, and business acumen to ensure every partner extracts maximum value from the platform.",
    responsibilities: [
      "Own the end-to-end onboarding journey for new partners (setup, configuration, UAT, go-live)",
      "Serve as the primary point of contact for partner queries, escalations, and feedback",
      "Conduct regular business reviews and identify upsell opportunities",
      "Collaborate with engineering to translate partner needs into product improvements",
      "Create onboarding documentation, knowledge-base articles, and training materials",
      "Track partner health metrics and proactively intervene to prevent churn",
    ],
    stack: ["CRM tools (HubSpot / Salesforce)", "Partner admin portal", "JIRA / Linear", "Zoom / Teams", "Notion / Confluence"],
    qualifications: [
      "3+ years of customer success, account management, or B2B SaaS support",
      "Excellent written and verbal communication in English (Hindi / Telugu a plus)",
      "Comfort with technical products and ability to explain complex features simply",
      "Cultural familiarity with South Asian matrimony practices is highly valued",
    ],
    badge: "Partner Success",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Growth & Franchise Development Executive",
    department: "Sales, Marketing & Partnerships",
    type: "Full-Time",
    location: "Remote (India / USA)",
    color: "#7C3AED",
    tagline: "Open new markets, sign new partners, and help build the most trusted matrimony network in the diaspora.",
    about:
      "EkamBond is expanding its partner network across the USA and India. As our Growth & Franchise Development Executive, you will identify, approach, and convert prospective matrimony operators — bureaus, community organisations, and matchmakers — into EkamBond partners. You'll also drive digital marketing campaigns and brand-building efforts that position EkamBond as the gold standard in white-label matrimony technology.",
    responsibilities: [
      "Identify and prospect matrimony bureaus, community organisations, and matchmakers as potential franchise partners",
      "Own the full sales cycle from outreach → demo → negotiation → onboarding handoff",
      "Develop and execute digital marketing campaigns (LinkedIn, Google Ads, community events)",
      "Build and manage the franchise partner pipeline using CRM tools",
      "Represent EkamBond at South Asian community events, cultural festivals, and diaspora networks",
      "Collaborate with leadership on pricing strategy, go-to-market plans, and partnership agreements",
    ],
    stack: ["HubSpot CRM", "LinkedIn Sales Navigator", "Google Ads / Analytics", "Canva / marketing tools", "Notion"],
    qualifications: [
      "3+ years of B2B sales, franchise development, or partnership management",
      "Strong network within South Asian diaspora communities in the USA is a significant advantage",
      "Excellent presentation and negotiation skills",
      "Self-driven, target-oriented, and comfortable working remotely",
    ],
    badge: "Sales × Partnerships",
  },
  {
    id: 6,
    icon: Code2,
    title: "Product Design & UI Engineering Intern",
    department: "Internship & Trainee Programme",
    type: "Internship · 3 Months · Voluntary",
    location: "Remote (India / USA)",
    color: "#D97706",
    tagline: "Your first real-world SaaS project — ship code that real users see, from week one.",
    about:
      "This is a structured 3-month learning fellowship for students or recent graduates serious about a career in product design and React engineering. You will work alongside our senior product engineer on a live, production-grade matrimony platform — contributing to real features, not toy assignments. This is an unpaid, voluntary engagement; what you gain is hands-on mentorship, a strong portfolio piece, a reference letter, and priority consideration for a full-time role as we grow.",
    responsibilities: [
      "Contribute to UI components in React / Next.js under senior engineer guidance",
      "Assist in translating Figma mockups into responsive, animated interfaces",
      "Participate in design reviews, code reviews, and sprint planning",
      "Write clean, documented TypeScript following the project's design system",
      "Build and ship at least one complete feature end-to-end during the fellowship",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Framer Motion", "Git & GitHub"],
    qualifications: [
      "Currently pursuing or recently completed a degree in CS, Design, or a related field",
      "Basic familiarity with HTML, CSS, and JavaScript — React experience is a bonus",
      "A portfolio or GitHub profile demonstrating curiosity and initiative",
      "Available for a minimum of 20 hours per week for 3 months",
      "Self-motivated and comfortable working asynchronously in a remote environment",
    ],
    badge: "Internship · UI/UX",
  },
  {
    id: 7,
    icon: Server,
    title: "Backend Engineering Intern",
    department: "Internship & Trainee Programme",
    type: "Internship · 3 Months · Voluntary",
    location: "Remote (India / USA)",
    color: "#059669",
    tagline: "Write real APIs. Work with real data. Learn from engineers building production systems.",
    about:
      "This 3-month learning fellowship is for students or recent graduates who want hands-on exposure to backend engineering on a live SaaS platform. You will work with our backend engineers on Node.js APIs, MySQL databases, and CI/CD pipelines — real work on a real system with real consequences (and mentorship). This is an unpaid, voluntary engagement. In return, you receive structured mentorship, a verifiable reference, a portfolio contribution on a production platform, and priority fast-track for full-time roles.",
    responsibilities: [
      "Assist in building and testing RESTful API endpoints in Node.js",
      "Learn and apply MySQL query design, indexing, and data modelling",
      "Participate in code reviews and follow secure coding practices",
      "Write unit and integration tests for assigned modules",
      "Document APIs using Swagger / OpenAPI with senior engineer support",
    ],
    stack: ["Node.js", "Express", "MySQL", "Docker", "GitHub Actions", "Swagger", "Postman", "VS Code"],
    qualifications: [
      "Currently pursuing or recently completed a degree in CS, IT, or a related field",
      "Basic understanding of REST APIs, HTTP, and SQL",
      "Familiarity with JavaScript or any backend language",
      "Available for a minimum of 20 hours per week for 3 months",
      "Genuine curiosity for backend systems, security, and databases",
    ],
    badge: "Internship · Backend",
  },
];

// ─── Culture Values ────────────────────────────────────────────────────────────
const values = [
  { icon: Heart,    title: "People First",        desc: "Every line of code we write serves real families. We never lose sight of that." },
  { icon: Zap,      title: "Move with Purpose",   desc: "We ship fast, iterate honestly, and improve continuously — without cutting corners on quality." },
  { icon: Globe2,   title: "Deeply Inclusive",    desc: "Our team, like our platform, celebrates diversity across culture, community, and background." },
  { icon: Sparkles, title: "Craft Excellence",    desc: "We care about details — design, performance, API contracts — because trust is built in the details." },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function CareersPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-surface-light)" }}>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 60%, #1A0A06 100%)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="eb-badge eb-badge-dark mx-auto mb-6">We&apos;re Hiring</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ color: "var(--color-text-on-dark)" }}>
              Build Technology That{" "}
              <span style={{ color: "var(--brand-gold)" }}>Brings Families Together</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10"
              style={{ color: "rgba(253,246,236,0.72)" }}>
              EkamBond is on a mission to become the world&apos;s most trusted white-label matrimony platform.
              We&apos;re a small, focused team building technology that matters — serving real communities,
              real families, and real relationships. If you believe great software can be both technically
              excellent and deeply humane, you belong here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "rgba(217,169,30,0.15)", border: "1px solid rgba(217,169,30,0.3)", color: "#D9A91E" }}>
                <MapPin className="w-4 h-4" /> Remote-First (India & USA)
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(253,246,236,0.8)" }}>
                <Briefcase className="w-4 h-4" /> {openings.length} Open Positions
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Culture & Values ── */}
      <section className="py-16 px-4" style={{ background: "#FDF6EC" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Life at EkamBond</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              Why People Choose to Build Here
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
              We&apos;re not just another startup. We&apos;re a purposeful team building infrastructure for
              one of the most meaningful decisions in a person&apos;s life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "#fff", border: "1.5px solid rgba(200,150,60,0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(200,48,42,0.08)" }}>
                    <Icon className="w-6 h-6" style={{ color: "var(--brand-crimson)" }} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text-on-light)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #F5EAD5 0%, #FDF6EC 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="eb-badge mx-auto mb-4">Open Roles</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              Current Openings
            </h2>
            <p className="text-base" style={{ color: "var(--color-text-muted-light)" }}>
              All roles are fully remote. We welcome applications from India and USA.
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job, i) => {
              const Icon = job.icon;
              const isOpen = openId === job.id;
              return (
                <motion.div key={job.id}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "#fff", border: `1.5px solid ${isOpen ? job.color + "60" : "rgba(200,150,60,0.15)"}`, boxShadow: isOpen ? `0 8px 32px ${job.color}20` : "0 2px 12px rgba(0,0,0,0.04)", transition: "all 0.3s ease" }}>

                  {/* Header — always visible */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : job.id)}
                    className="w-full text-left px-6 py-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${job.color}15`, border: `1.5px solid ${job.color}40` }}>
                      <Icon className="w-5 h-5" style={{ color: job.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: `${job.color}15`, color: job.color }}>{job.badge}</span>
                        <span className="text-[10px] text-gray-400">{job.department}</span>
                      </div>
                      <h3 className="text-base font-bold leading-snug" style={{ color: "var(--color-text-on-light)" }}>{job.title}</h3>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                          <Clock className="w-3 h-3" />{job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen
                        ? <ChevronUp className="w-5 h-5" style={{ color: job.color }} />
                        : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                  </button>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
                        className="overflow-hidden">
                        <div className="px-6 pb-7 border-t" style={{ borderColor: `${job.color}20` }}>
                          {/* Tagline */}
                          <p className="text-sm font-semibold italic mt-5 mb-4" style={{ color: job.color }}>
                            &ldquo;{job.tagline}&rdquo;
                          </p>
                          {/* About */}
                          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted-light)" }}>
                            {job.about}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider mb-3"
                                style={{ color: "var(--color-text-on-light)" }}>What You&apos;ll Do</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((r) => (
                                  <li key={r} className="flex items-start gap-2 text-xs leading-relaxed"
                                    style={{ color: "var(--color-text-muted-light)" }}>
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.color }} />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-5">
                              {/* Tech stack */}
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider mb-3"
                                  style={{ color: "var(--color-text-on-light)" }}>Tech Stack & Tools</h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {job.stack.map((s) => (
                                    <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                                      style={{ background: `${job.color}12`, color: job.color, border: `1px solid ${job.color}30` }}>
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {/* Qualifications */}
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider mb-3"
                                  style={{ color: "var(--color-text-on-light)" }}>What We&apos;re Looking For</h4>
                                <ul className="space-y-2">
                                  {job.qualifications.map((q) => (
                                    <li key={q} className="flex items-start gap-2 text-xs leading-relaxed"
                                      style={{ color: "var(--color-text-muted-light)" }}>
                                      <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2D9E6E" }} />
                                      {q}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Apply CTA */}
                          <div className="mt-6 pt-5 flex items-center justify-between flex-wrap gap-3"
                            style={{ borderTop: `1px solid ${job.color}20` }}>
                            <p className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                              Send your résumé and a short note about why this role excites you.
                            </p>
                            <a href="mailto:careers@ekambond.com?subject=Application: Careers at EkamBond"
                              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                              style={{ background: job.color, color: "#1A0A06" }}>
                              Apply Now <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* General application */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1A0A06, #2D1208)", border: "1.5px solid rgba(217,169,30,0.25)" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-text-on-dark)" }}>
              Don&apos;t See Your Role?
            </h3>
            <p className="text-sm mb-5" style={{ color: "rgba(253,246,236,0.65)" }}>
              We&apos;re growing fast. If you believe you can contribute to EkamBond&apos;s mission, reach out —
              we&apos;d love to hear from you.
            </p>
            <a href="mailto:careers@ekambond.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              style={{ background: "var(--brand-gold)", color: "#1A0A06" }}>
              Send a General Application <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
