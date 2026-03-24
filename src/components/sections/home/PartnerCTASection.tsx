"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillars = [
  { label: "Partner Admin Portal", detail: "Full team + brand control" },
  { label: "1–2 Week Onboarding", detail: "Config to live site" },
  { label: "AI-Powered Search", detail: "Natural language matching" },
  { label: "Stripe Billing", detail: "Built-in subscription plans" },
];

export default function PartnerCTASection() {
  return (
    <section className="relative overflow-hidden py-24 px-4" style={{ minHeight: "60vh" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/images/partner-cta-bg.png" alt="Partner CTA background" fill className="object-cover" priority={false} />
        <div className="absolute inset-0" style={{ background: "rgba(20,6,4,0.72)" }} />
      </div>

      {/* Texture */}
      <div className="absolute inset-0 eb-dot-grid-dark opacity-40 pointer-events-none" />

      {/* Gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, rgba(217,169,30,0.12) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="eb-badge eb-badge-dark mb-6 mx-auto">Ready to Start?</span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight" style={{ color: "var(--color-text-on-dark)" }}>
            Launch Your Matrimony Platform{" "}
            <span className="eb-text-gold">in 1–2 weeks</span>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            Everything your organization needs — white-labeled to your brand, powered by AI, with a full admin portal from day one.
            No developers. No infrastructure. No guesswork.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <Link href="/register" className="eb-btn-primary">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/features" className="eb-btn-ghost">
              Explore Features
            </Link>
            <Link href="/contact-us" className="eb-btn-demo">
              Request a Demo
            </Link>
          </div>

          {/* Four pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <motion.div key={p.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="rounded-2xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--brand-gold)" }}>{p.label}</p>
                <p className="text-xs" style={{ color: "var(--color-text-muted-dark)" }}>{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
