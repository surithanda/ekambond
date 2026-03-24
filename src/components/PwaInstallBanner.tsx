"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Smartphone, X, ChevronRight } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export default function PwaInstallBanner() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // Don't show if dismissed in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("pwa-banner-dismissed")) return;

    // Check if already installed (standalone mode)
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    // Detect iOS
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    setIsIos(ios);

    if (ios) {
      // On iOS Safari, show after 3 seconds
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }

    // Android/Chrome: wait for beforeinstallprompt
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") setShow(false);
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("pwa-banner-dismissed", "1");
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 pointer-events-none"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div
        className="max-w-xl mx-auto rounded-2xl px-5 py-4 flex items-center gap-4 pointer-events-auto animate-fade-up"
        style={{
          background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)",
          border: "1.5px solid rgba(217,169,30,0.35)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
        }}
      >
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(217,169,30,0.15)", border: "1.5px solid rgba(217,169,30,0.3)" }}>
          <Smartphone className="w-5 h-5" style={{ color: "#D9A91E" }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold leading-tight" style={{ color: "#FDF6EC" }}>
            Add EkamBond to your home screen
          </p>
          <p className="text-xs mt-0.5" style={{ color: "rgba(253,246,236,0.6)" }}>
            {isIos ? "Use Safari → Share → Add to Home Screen" : "Install for the full app experience"}
          </p>
        </div>

        {/* Action */}
        {isIos ? (
          <Link href="/download-app" className="flex-shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-xl"
            style={{ background: "rgba(217,169,30,0.18)", color: "#D9A91E", border: "1px solid rgba(217,169,30,0.3)" }}>
            How to <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button onClick={handleInstall} className="flex-shrink-0 text-xs font-bold px-3 py-2 rounded-xl"
            style={{ background: "var(--brand-gold)", color: "#1A0A06" }}>
            Install
          </button>
        )}

        {/* Dismiss */}
        <button onClick={dismiss} className="flex-shrink-0 p-1.5 rounded-lg transition-colors"
          style={{ color: "rgba(253,246,236,0.5)" }}
          aria-label="Dismiss">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
