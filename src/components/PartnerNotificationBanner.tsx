"use client";
import { useState, useEffect } from "react";
import { X, Handshake } from "lucide-react";

const MESSAGES = [
  {
    headline: "You concentrate on your business.",
    body: "We take care of your technology — servers, updates, security, new features. All managed for you.",
  },
  {
    headline: "We are your technology partner, not a competitor.",
    body: "Your brand, your members, your revenue. EkamBond powers your platform invisibly.",
  },
  {
    headline: "No developers. No infrastructure. No headaches.",
    body: "We grow when you grow. Your success is our success.",
  },
  {
    headline: "Focus on matchmaking. Leave the tech to us.",
    body: "Hosting, backups, AI search, billing — EkamBond handles 100% of it so you never have to.",
  },
];

const SESSION_KEY = "partner-banner-dismissed";

export default function PartnerNotificationBanner() {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(MESSAGES[0]);

  useEffect(() => {
    // Don't show if dismissed this session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Pick a random message
    setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);

    // Show after a random delay between 4s and 10s
    const delay = 4000 + Math.random() * 6000;
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (!show) return null;

  return (
    <div
      className="fixed top-24 right-4 z-50 max-w-sm w-full pointer-events-auto animate-fade-up"
      role="alert"
      aria-live="polite"
    >
      <div
        className="rounded-2xl px-5 py-4 flex items-start gap-3 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)",
          border: "1.5px solid rgba(217,169,30,0.35)",
          boxShadow: "0 12px 48px rgba(0,0,0,0.30)",
        }}
      >
        {/* Icon */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: "rgba(217,169,30,0.15)", border: "1.5px solid rgba(217,169,30,0.3)" }}
        >
          <Handshake className="w-4 h-4" style={{ color: "#D9A91E" }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold leading-tight mb-1" style={{ color: "#FDF6EC" }}>
            {msg.headline}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(253,246,236,0.65)" }}>
            {msg.body}
          </p>
        </div>

        {/* Close */}
        <button
          onClick={dismiss}
          className="flex-shrink-0 p-1.5 rounded-lg transition-colors hover:bg-white/10"
          style={{ color: "rgba(253,246,236,0.5)" }}
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
