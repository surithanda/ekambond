"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Pause, Monitor } from "lucide-react";

const slides = [
  // ── Public / Marketing pages ──────────────────────────────────────────────
  {
    src: "/images/demo/demo-01-homepage.png",
    title: "Branded Member Homepage",
    desc: "Your members land on a beautifully styled matrimony platform carrying your brand — logo, colors, and domain. EkamBond is invisible.",
    tag: "Member Platform",
  },
  {
    src: "/images/demo/demo-02-login.png",
    title: "Secure Login & Registration",
    desc: "Members sign up or log in through a clean, mobile-friendly auth flow with OTP verification and account security built in.",
    tag: "Authentication",
  },
  // ── Post-login member experience ─────────────────────────────────────────
  {
    src: "/images/demo/demo-06-dashboard.png",
    title: "Member Dashboard",
    desc: "After login, members see a personal dashboard: daily greeting, real-time stats (profiles viewed, favorites, connections), and their own profile summary.",
    tag: "Dashboard",
  },
  {
    src: "/images/demo/demo-07-search.png",
    title: "Profile Search & Browse",
    desc: "Members browse the full member directory with filters or natural language AI search. Every profile shows key details, a photo, and quick-action buttons.",
    tag: "Search",
  },
  {
    src: "/images/demo/demo-08-profiles.png",
    title: "Discover Matches",
    desc: "The Discover section surfaces AI-recommended profiles based on member preferences and browsing behavior — ranked for compatibility.",
    tag: "AI Matching",
  },
  {
    src: "/images/demo/demo-09-favorites.png",
    title: "Saved Favourites",
    desc: "Members save profiles they're interested in. The Favourites section keeps them organized with easy access to shortlisted candidates.",
    tag: "Favourites",
  },
  {
    src: "/images/demo/demo-10-profile-detail.png",
    title: "Full Profile Detail",
    desc: "Member profiles include personal info, education, career, family background, lifestyle — with contact details unlocked based on subscription tier.",
    tag: "Profile View",
  },
  // ── AI Search ──────────────────────────────────────────────────────────────
  {
    src: "/images/demo/demo-11-ai-search.png",
    title: "AI Natural Language Search",
    desc: "Members type plain English — 'Software engineer from Hyderabad, age 28-35' — and the AI instantly finds matching profiles. No dropdowns, no forms.",
    tag: "AI Search",
  },
  {
    src: "/images/demo/demo-12-ai-results.png",
    title: "AI Search Results",
    desc: "Results are ranked by compatibility score, not just keyword match. The more a member searches, the smarter the recommendations become.",
    tag: "AI Results",
  },
  // ── Purchase ───────────────────────────────────────────────────────────────
  {
    src: "/images/demo/demo-13-purchase.png",
    title: "Membership & Billing",
    desc: "Partners define their own subscription plans. Members choose a plan, pays securely via Stripe. Your partner keeps 100% of the revenue.",
    tag: "Purchase",
  },
  {
    src: "/images/demo/demo-14-payments.png",
    title: "Payment History",
    desc: "Members can view their full payment history, subscription status, AI credit balance, and billing details — complete transparency.",
    tag: "My Payments",
  },
  // ── Community pages ────────────────────────────────────────────────────────
  {
    src: "/images/demo/demo-04-about.png",
    title: "Community & Mission Pages",
    desc: "Platform pages communicate your organisation's mission and values — building the trust that turns visitors into registered members.",
    tag: "Community",
  },
  {
    src: "/images/demo/demo-05-stories.png",
    title: "Success Stories",
    desc: "Share real match stories from your community — social proof that shows families the platform works, from people they can relate to.",
    tag: "Stories",
  },
  {
    src: "/images/demo/demo-03-search.png",
    title: "Protected Member Experience",
    desc: "Private routes (search, profiles, messaging) are fully secured. Non-members are gated — protecting your community and driving registrations.",
    tag: "Security",
  },
];

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  // Auto-advance
  useEffect(() => {
    if (!playing || !isOpen) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [playing, isOpen, next]);

  // Reset on open
  useEffect(() => {
    if (isOpen) { setCurrent(0); setPlaying(true); }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ background: "rgba(10,4,2,0.88)", backdropFilter: "blur(12px)" }}
          onClick={(e) => e.target === e.currentTarget && onClose()}>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(160deg,#1A0A06,#2D1208)", border: "1.5px solid rgba(217,169,30,0.25)", boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}>

            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(217,169,30,0.15)" }}>
              <div className="flex items-center gap-2.5">
                <Monitor className="w-5 h-5" style={{ color: "var(--brand-gold)" }} />
                <span className="font-bold text-sm" style={{ color: "var(--color-text-on-dark)" }}>
                  Customer Platform — Live UI Tour
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: "rgba(217,169,30,0.18)", color: "#D9A91E" }}>
                  Powered by EkamBond
                </span>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors hover:bg-white/10">
                <X className="w-4 h-4" style={{ color: "rgba(253,246,236,0.7)" }} />
              </button>
            </div>

            {/* ── Slide Area ── */}
            <div className="relative" style={{ aspectRatio: "16/9", background: "#0A0402" }}>
              <AnimatePresence mode="wait">
                <motion.div key={current}
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}
                  className="absolute inset-0">
                  <Image
                    src={slides[current].src}
                    alt={slides[current].title}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(10,4,2,0.92) 0%, transparent 100%)" }} />
                </motion.div>
              </AnimatePresence>

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                  style={{ background: "rgba(217,169,30,0.85)", color: "#1A0A06" }}>
                  {slides[current].tag}
                </span>
              </div>

              {/* Prev / Next arrows */}
              <button onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-4 z-10">
                <p className="text-base font-bold mb-1" style={{ color: "#fff" }}>{slides[current].title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(253,246,236,0.72)" }}>{slides[current].desc}</p>
              </div>
            </div>

            {/* ── Footer Controls ── */}
            <div className="flex items-center justify-between px-6 py-4">
              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      background: i === current ? "var(--brand-gold)" : "rgba(255,255,255,0.25)",
                    }} />
                ))}
              </div>

              {/* Counter + Play/Pause */}
              <div className="flex items-center gap-3">
                <span className="text-xs" style={{ color: "rgba(253,246,236,0.45)" }}>
                  {current + 1} / {slides.length}
                </span>
                <button onClick={() => setPlaying(!playing)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                  style={{ background: "rgba(217,169,30,0.15)", color: "#D9A91E", border: "1px solid rgba(217,169,30,0.3)" }}>
                  {playing
                    ? <><Pause className="w-3.5 h-3.5" /> Pause</>
                    : <><Play className="w-3.5 h-3.5" /> Play</>}
                </button>
              </div>
            </div>

            {/* Progress bar */}
            {playing && (
              <motion.div
                key={`progress-${current}`}
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-0.5 origin-left"
                style={{ width: "100%", background: "var(--brand-gold)", opacity: 0.6 }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
