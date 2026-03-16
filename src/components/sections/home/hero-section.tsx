"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Sparkles,
  Users,
  BarChart3,
  Layers,
  ChevronRight,
  Star,
} from "lucide-react";
import Image from "next/image";

const pillars = [
  { icon: Globe,       label: "Global Reach",       sub: "Multi-country presence" },
  { icon: Sparkles,    label: "AI-Powered",          sub: "Smart matchmaking engine" },
  { icon: ShieldCheck, label: "Verified Profiles",   sub: "Background-checked members" },
  { icon: BarChart3,   label: "Enterprise SLA",      sub: "Reliable & scalable infra" },
];

const features = [
  { icon: Layers, label: "White Label Ready" },
  { icon: ShieldCheck, label: "Background Verification" },
  { icon: Sparkles, label: "AI Matchmaking" },
  { icon: Globe, label: "Global Reach" },
  { icon: BarChart3, label: "Partner Analytics" },
  { icon: Users, label: "Match Maker Support" },
];

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(145deg, #0F2145 0%, #1B3A6E 40%, #1E3D70 60%, #0F2145 100%)",
      }}
    >
      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 20%, rgba(217,169,30,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(45,110,78,0.2) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left Column ── */}
          <div>
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 text-sm font-semibold"
              style={{
                background: "rgba(217,169,30,0.15)",
                border: "1px solid rgba(217,169,30,0.4)",
                color: "#D9A91E",
              }}
            >
              <Star className="w-4 h-4 fill-current" />
              Matrimony Partner Network
              <Star className="w-4 h-4 fill-current" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-neue-haas-bold leading-[1.1] mb-6"
              style={{ color: "#FFFFFF", fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
            >
              Power Your Matrimony{" "}
              <span
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundImage: "linear-gradient(90deg, #D9A91E 0%, #F0C842 60%, #D9A91E 100%)",
                  backgroundClip: "text",
                  backgroundSize: "200% auto",
                }}
              >
                Business
              </span>{" "}
              with EkamBond
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(220,230,255,0.82)" }}
            >
              EkamBond is the{" "}
              <span className="font-semibold" style={{ color: "#D9A91E" }}>end-to-end B2B platform</span>{" "}
              that gives matrimony companies white-label tech, AI matchmaking, verified profiles, and partner support — so you can focus on growing connections.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #D9A91E 0%, #F0C842 100%)",
                  color: "#0F2145",
                  fontWeight: 700,
                }}
              >
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(12px)",
                }}
              >
                Explore Features
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(200,215,255,0.65)" }}
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: "#2D6E4E" }} />
              No credit card required &nbsp;•&nbsp;
              <CheckCircle2 className="w-4 h-4" style={{ color: "#2D6E4E" }} />
              Free onboarding &nbsp;•&nbsp;
              <CheckCircle2 className="w-4 h-4" style={{ color: "#2D6E4E" }} />
              White-label in days
            </motion.div>
          </div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Feature grid card */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              {/* Gold accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(217,169,30,0.2) 0%, transparent 70%)" }}
              />

              {/* Logo + title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image
                    src="/Ekambond-3.jpeg"
                    alt="EkamBond"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-none">EkamBond</p>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#D9A91E" }}>
                    Partner Network
                  </p>
                </div>
              </div>

              {/* Feature pills */}
              <p className="text-xs uppercase tracking-wider mb-5 font-semibold" style={{ color: "rgba(217,169,30,0.8)" }}>
                Everything your platform needs
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(217,169,30,0.15)" }}
                    >
                      <f.icon className="w-4 h-4" style={{ color: "#D9A91E" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "rgba(220,230,255,0.9)" }}>
                      {f.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA inside card */}
              <div
                className="mt-7 flex items-center justify-between px-5 py-4 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(217,169,30,0.15) 0%, rgba(217,169,30,0.06) 100%)",
                  border: "1px solid rgba(217,169,30,0.25)",
                }}
              >
                <div>
                  <p className="text-sm font-semibold text-white">Ready to grow?</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(200,215,255,0.6)" }}>
                    Join a growing network of matrimony partners
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #D9A91E 0%, #F0C842 100%)", color: "#0F2145" }}
                >
                  Talk to Us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value pillars bar */}
      <div
        className="relative z-10 border-t w-full"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 md:px-8"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(217,169,30,0.15)" }}
                >
                  <p.icon className="w-5 h-5" style={{ color: "#D9A91E" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">{p.label}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(200,215,255,0.55)" }}>{p.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;