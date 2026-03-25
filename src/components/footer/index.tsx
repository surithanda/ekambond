"use client";
import React from "react";
import {
  Mail,
  Globe,
  Shield,
  FileText,
  HelpCircle,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Briefcase,
  BookOpen,
  Layers,
  DollarSign,
  Smartphone,
  Users,
  Store,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: "Features", href: "/features", icon: Layers },
      { name: "Services", href: "/services", icon: BarChart3 },
      { name: "Pricing", href: "/pricing", icon: DollarSign },
      { name: "Get the App", href: "/download-app", icon: Smartphone },
    ],
    partners: [
      { name: "Become a Partner", href: "/register", icon: Users },
      { name: "Partner Journey", href: "/partners", icon: Store },
      { name: "Franchise", href: "/franchise", icon: Globe },
    ],
    company: [
      { name: "Careers", href: "/careers", icon: Briefcase },
      { name: "Blog & Insights", href: "/blog", icon: BookOpen },
      { name: "FAQ's", href: "/faq", icon: HelpCircle },
      { name: "Contact & Support", href: "/contact-us", icon: Phone },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms-conditions", icon: FileText },
      { name: "Privacy Policy", href: "/privacy-policy", icon: Shield },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];


  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #FDF6EC 0%, #F5ECD8 50%, #FDF6EC 100%)" }}>
      {/* Subtle warm dot pattern */}
      <div className="absolute inset-0 eb-dot-grid-light opacity-40 pointer-events-none" />

      {/* Warm glow orbs */}
      <div className="absolute -top-40 -right-40 w-72 h-72 rounded-full blur-3xl pointer-events-none eb-glow"
        style={{ background: "radial-gradient(circle, rgba(200,48,42,0.10) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-72 h-72 rounded-full blur-3xl pointer-events-none eb-glow"
        style={{ background: "radial-gradient(circle, rgba(217,169,30,0.12) 0%, transparent 70%)", animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Links + Social */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">

            {/* Brand + Social — left column, spans 2 cols on md */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image src="/images/ekambond-logo.png" alt="EkamBond Logo" fill className="object-contain" />
                </div>
                <div>
                  <h2 className="text-xl font-bold leading-none" style={{ color: "var(--brand-navy)" }}>EkamBond</h2>
                  <p className="text-xs tracking-widest uppercase font-semibold mt-0.5" style={{ color: "var(--brand-gold)" }}>Partner Network</p>
                </div>
              </div>
              {/* Follow Us — below brand */}
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-navy)" }}>Follow Us</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} aria-label={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(200,150,60,0.18)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--brand-crimson)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.color = ""; }}
                  >
                    <social.icon className="w-4 h-4" style={{ color: "var(--color-text-muted-light)" }} />
                  </a>
                ))}
              </div>
              <a href="mailto:support@ekambond.com"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "var(--brand-navy)" }}>
                <Mail className="w-4 h-4" style={{ color: "var(--brand-crimson)" }} />
                support@ekambond.com
              </a>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-xs font-semibold mb-5 uppercase tracking-wider" style={{ color: "var(--brand-navy)" }}>Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                      style={{ color: "var(--color-text-muted-light)" }}>
                      <link.icon className="w-3.5 h-3.5 opacity-60" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners Links */}
            <div>
              <h3 className="text-xs font-semibold mb-5 uppercase tracking-wider" style={{ color: "var(--brand-navy)" }}>Partners</h3>
              <ul className="space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                      style={{ color: "var(--color-text-muted-light)" }}>
                      <link.icon className="w-3.5 h-3.5 opacity-60" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xs font-semibold mb-5 uppercase tracking-wider" style={{ color: "var(--brand-navy)" }}>Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                      style={{ color: "var(--color-text-muted-light)" }}>
                      <link.icon className="w-3.5 h-3.5 opacity-60" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Dark bottom bar */}
      <div className="relative" style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 50%, #1A0A06 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
            <p className="text-xs" style={{ color: "rgba(255,230,180,0.55)" }}>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold" style={{ color: "rgba(255,243,220,0.85)" }}>
                EkamBond Matrimony Enterprise Services LLC
              </span>
              . All rights reserved.
            </p>
            {/* Legal links in bottom bar */}
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <a key={link.name} href={link.href}
                  className="text-xs hover:underline transition-colors"
                  style={{ color: "rgba(255,230,180,0.55)" }}>
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: "rgba(255,230,180,0.45)" }}>Technical Partner:</span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(217,169,30,0.15)",
                  border: "1px solid rgba(217,169,30,0.35)",
                  color: "var(--brand-gold)",
                }}
              >
                <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" opacity="0.9"/>
                </svg>
                MysticMind Data Solutions LLC
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}

