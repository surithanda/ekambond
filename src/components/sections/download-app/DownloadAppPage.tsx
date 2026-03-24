"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Monitor, Share2, PlusSquare, MoreVertical, Download, CheckCircle, ArrowRight } from "lucide-react";

// ─── iOS Steps ───────────────────────────────────────────────────────────────
const iosSteps = [
  {
    num: "1", icon: Smartphone, title: "Open in Safari",
    desc: "Make sure you are using Safari — this only works with Safari on iPhone and iPad. Other browsers like Chrome on iOS do not support Add to Home Screen.",
    tip: "Look for the compass icon in your dock",
  },
  {
    num: "2", icon: Share2, title: "Tap the Share Button",
    desc: "At the bottom of Safari (or top on iPad), tap the Share icon — it looks like a box with an arrow pointing up.",
    tip: "It's the icon that looks like ↑ in a box",
  },
  {
    num: "3", icon: PlusSquare, title: 'Tap "Add to Home Screen"',
    desc: 'Scroll down in the Share sheet and tap "Add to Home Screen". You can also customize the name of the shortcut before adding.',
    tip: "You may need to scroll down to find it",
  },
  {
    num: "4", icon: CheckCircle, title: "Tap Add — Done!",
    desc: "Tap the blue Add button in the top right. EkamBond will appear on your home screen as a full-screen app icon — no browser bar, no URL bar.",
    tip: "It looks and feels like a native app",
  },
];

// ─── Android Steps ────────────────────────────────────────────────────────────
const androidSteps = [
  {
    num: "1", icon: Monitor, title: "Open in Chrome",
    desc: "Navigate to ekambond.com in Google Chrome. Chrome is the browser that supports installation on Android.",
    tip: "Works on Chrome 76+ on Android",
  },
  {
    num: "2", icon: MoreVertical, title: "Tap the Three-Dot Menu",
    desc: "Tap the ⋮ menu icon in the top-right corner of Chrome to open browser options.",
    tip: "It's in the top right corner",
  },
  {
    num: "3", icon: Download, title: 'Tap "Add to Home screen"',
    desc: 'Look for "Add to Home screen" or "Install App" in the dropdown. Newer Android versions show a dedicated Install App button at the bottom of the screen automatically.',
    tip: "May also appear as a pop-up automatically",
  },
  {
    num: "4", icon: CheckCircle, title: "Confirm → Installed!",
    desc: "Tap Install or Add to confirm. EkamBond will appear in your app drawer and home screen — runs in full screen just like a native app.",
    tip: "Full offline-capable experience",
  },
];

// Brand palette
const CRIMSON = "#C8302A";
const GOLD = "#D9A91E";
const NAVY = "#1B3A6E";
const MAROON = "#2D1208";

function StepCard({ step, index, platformColor }: { step: typeof iosSteps[0]; index: number; platformColor: string }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="flex gap-4"
    >
      {/* Step number + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-base flex-shrink-0 text-white"
          style={{ background: `linear-gradient(135deg, ${platformColor} 0%, ${MAROON} 100%)` }}>
          {step.num}
        </div>
        {index < 3 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${GOLD}40`, minHeight: "2rem" }} />}
      </div>

      {/* Content */}
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <Icon className="w-4 h-4" style={{ color: platformColor }} />
          <h3 className="font-bold text-sm" style={{ color: "var(--color-text-on-light)" }}>{step.title}</h3>
        </div>
        <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--color-text-muted-light)" }}>{step.desc}</p>
        <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
          style={{ background: "rgba(217,169,30,0.10)", border: "1px solid rgba(217,169,30,0.25)", color: GOLD }}>
          💡 {step.tip}
        </div>
      </div>
    </motion.div>
  );
}

export default function DownloadAppPage() {
  return (
    <div style={{ background: "var(--color-bg-warm)" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-16 px-4 text-center"
        style={{ background: "var(--color-bg-hero)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eb-badge eb-badge-dark mx-auto mb-5">
            Install the App
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "var(--color-text-on-dark)" }}>
            Add EkamBond to Your{" "}
            <span className="eb-text-gold">Home Screen</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            EkamBond works as a Progressive Web App (PWA) — install it like a native app on iPhone or Android.
            No App Store, no downloads, instant updates.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 justify-center">
            {["Works offline", "No App Store needed", "Instant updates", "Full screen experience"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "var(--color-text-on-dark)" }}>
                <CheckCircle className="w-3.5 h-3.5" style={{ color: "#2D9E6E" }} /> {b}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Two-column instructions ── */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* iOS Column */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl p-7"
            style={{
              background: "linear-gradient(145deg, #FDF6EC 0%, rgba(253,246,236,0.92) 100%)",
              border: `1.5px solid ${GOLD}30`,
              boxShadow: "0 8px 40px rgba(180,90,20,0.10)",
            }}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-7 pb-5" style={{ borderBottom: `1px solid ${GOLD}20` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `linear-gradient(135deg, ${CRIMSON}18 0%, ${GOLD}12 100%)`, border: `1.5px solid ${CRIMSON}25` }}>
                🍎
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: NAVY }}>iPhone & iPad</h2>
                <p className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>iOS 16.4+ · Safari required</p>
              </div>
            </div>
            <div>
              {iosSteps.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} platformColor={CRIMSON} />
              ))}
            </div>
            {/* Warning box in brand colors */}
            <div className="rounded-2xl p-4 mt-2"
              style={{ background: `${CRIMSON}08`, border: `1.5px solid ${CRIMSON}20` }}>
              <p className="text-xs font-semibold mb-1" style={{ color: CRIMSON }}>⚠️ Important</p>
              <p className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                This only works when you open the website in <strong>Safari</strong> on your iPhone or iPad.
                Opening in Chrome or other iOS browsers will not show the Add to Home Screen option the same way.
              </p>
            </div>
          </motion.div>

          {/* Android Column */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl p-7"
            style={{
              background: "linear-gradient(145deg, #FDF6EC 0%, rgba(253,246,236,0.92) 100%)",
              border: `1.5px solid ${GOLD}30`,
              boxShadow: "0 8px 40px rgba(180,90,20,0.10)",
            }}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-7 pb-5" style={{ borderBottom: `1px solid ${GOLD}20` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `linear-gradient(135deg, ${GOLD}18 0%, ${MAROON}12 100%)`, border: `1.5px solid ${GOLD}25` }}>
                🤖
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: NAVY }}>Android Phone</h2>
                <p className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>Android 5+ · Chrome recommended</p>
              </div>
            </div>
            <div>
              {androidSteps.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} platformColor={GOLD} />
              ))}
            </div>
            {/* Tip box in brand gold */}
            <div className="rounded-2xl p-4 mt-2"
              style={{ background: `${GOLD}08`, border: `1.5px solid ${GOLD}25` }}>
              <p className="text-xs font-semibold mb-1" style={{ color: GOLD }}>💡 Pro Tip</p>
              <p className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                On many Android phones, Chrome will automatically show an "Install App" banner at the bottom
                of the screen when you visit EkamBond for the second time. Just tap <strong>Install</strong> when it appears!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PWA Benefits Strip ── */}
      <section className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-on-dark)" }}>
            Why Install as an App?
          </h3>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            Progressive Web Apps deliver the best of both web and native — without requiring an App Store listing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "⚡", title: "Faster Loading", desc: "Cached for instant opens" },
              { emoji: "📵", title: "Works Offline", desc: "Key pages load without internet" },
              { emoji: "🔔", title: "Notifications", desc: "Push alerts (coming soon)" },
              { emoji: "🔒", title: "Secure", desc: "HTTPS always enforced" },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${GOLD}25` }}>
                <div className="text-3xl mb-2">{b.emoji}</div>
                <p className="text-sm font-bold" style={{ color: "var(--color-text-on-dark)" }}>{b.title}</p>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted-dark)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/" className="eb-btn-primary mx-auto">
              Go to EkamBond <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
