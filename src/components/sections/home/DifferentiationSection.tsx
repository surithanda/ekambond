"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const rows = [
  { feature: "Matrimony-specific profile", others: "Generic form fields", ekam: "9 dedicated sections incl. property & family reference" },
  { feature: "AI-powered search", others: "Not available", ekam: "Natural language → structured filters → results" },
  { feature: "Built-in billing", others: "3rd-party setup required", ekam: "Stripe integrated — checkout, webhooks, history" },
  { feature: "White-label time", others: "Weeks of development", ekam: "1–2 weeks from config to live site" },
  { feature: "Partner admin portal", others: "Not included", ekam: "Full CRUD, brand editor, roles, audit log" },
  { feature: "Background verification", others: "Not available", ekam: "Initiate checks directly from admin portal" },
];

export default function DifferentiationSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4" style={{ background: "var(--color-bg-light)" }}>
      <div className="absolute inset-0 eb-dot-grid-light opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none eb-glow"
        style={{ background: "radial-gradient(circle, var(--brand-gold-soft) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none eb-glow"
        style={{ background: "radial-gradient(circle, var(--brand-crimson-soft) 0%, transparent 70%)", animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eb-badge eb-badge-light mb-5">Unmatched Platform</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "var(--color-text-on-light)" }}>
            The Only B2B Platform{" "}
            <span className="eb-text-gold">Built for Matrimony</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
            Most matrimony software is built for end-users. EkamBond is built for the organizations that serve them.
          </p>
        </motion.div>

        {/* Two-column: image + table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Platform overview image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-card-hover)" }}
          >
            <Image src="/images/platform-overview.png" alt="Platform feature overview" width={720} height={405} className="w-full object-cover rounded-3xl" />
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            {/* Column headers */}
            <div className="grid grid-cols-3 gap-2 mb-3 px-4">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-muted-light)" }}>Feature</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "var(--color-text-muted-light)" }}>Others</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "var(--brand-gold)" }}>EkamBond</p>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-card-light-border)" }}>
              {rows.map((row, i) => (
                <motion.div key={row.feature}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid grid-cols-3 gap-2 px-4 py-4 items-start"
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.9)" : "rgba(253,246,236,0.7)",
                    borderBottom: i < rows.length - 1 ? "1px solid rgba(200,150,60,0.10)" : "none",
                  }}>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-on-light)" }}>{row.feature}</p>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">❌</span>
                    <p className="text-xs text-center" style={{ color: "var(--color-text-muted-light)" }}>{row.others}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">✅</span>
                    <p className="text-xs text-center font-medium" style={{ color: "var(--color-accent-success, #2D9E6E)" }}>{row.ekam}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-7 flex justify-center"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Link href="/features" className="eb-btn-primary">
                Explore All Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
