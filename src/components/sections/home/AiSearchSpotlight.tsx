"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const quotaTiers = [
  { plan: "Starter", quota: "Included", detail: "quota per plan" },
  { plan: "Growth", quota: "Extended", detail: "higher monthly quota", highlight: true },
  { plan: "Enterprise", quota: "Unlimited", detail: "no monthly cap" },
];

const steps = [
  { step: "01", label: "A member types their criteria in everyday language — no dropdowns needed" },
  { step: "02", label: "AI extracts structured filters: age, education, profession, values, location, and more" },
  { step: "03", label: "Ranked matches are returned instantly with a confidence score and filter summary" },
];

export default function AiSearchSpotlight() {
  return (
    <section className="relative overflow-hidden py-24 px-4" style={{ background: "var(--color-bg-dark)" }}>
      <div className="absolute inset-0 eb-dot-grid-dark opacity-100 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 20%, rgba(217,169,30,0.08) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 80%, rgba(200,48,42,0.07) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eb-badge eb-badge-dark mb-5">AI-Powered</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "var(--color-text-on-dark)" }}>
            Search in{" "}
            <span className="eb-text-gold">Plain Language</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-dark)" }}>
            No dropdowns. No filters to guess. Your members describe what they are looking for — and our AI finds it.
          </p>
        </motion.div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: steps */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            {/* Query example card */}
            <div className="eb-card-dark p-6 mb-8">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>Sample query</p>
              <p className="text-base italic mb-4" style={{ color: "var(--color-text-on-dark)" }}>
                "Looking for a partner aged 28–34, postgraduate degree, working professional, values family, based in metro cities"
              </p>
              <div className="h-px w-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />
              <p className="text-xs mb-3" style={{ color: "var(--color-text-muted-dark)" }}>AI interpretation</p>
              <div className="flex flex-wrap gap-2">
                {["Age: 28–34", "Education: PG+", "Professional", "Family-oriented", "Metro cities"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "var(--brand-gold-soft)", border: "1px solid var(--brand-gold-border)", color: "var(--brand-gold)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold" style={{ color: "#2D9E6E" }}>
                ✓ Matching profiles found · Confidence: 94%
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-5">
              {steps.map((s, i) => (
                <motion.div key={s.step} className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}>
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold"
                    style={{ background: "var(--brand-gold-soft)", color: "var(--brand-gold)" }}>
                    {s.step}
                  </div>
                  <p className="text-base leading-snug pt-2" style={{ color: "var(--color-text-on-dark)" }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: illustration */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image src="/images/ai-search-abstract.png" alt="AI-powered search visualization" width={720} height={405} className="w-full object-cover rounded-3xl" />
          </motion.div>
        </div>

        {/* Quota tiers — no numbers */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-center text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: "var(--brand-gold)" }}>
            AI Search — available on all plans
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {quotaTiers.map((tier, i) => (
              <motion.div key={tier.plan}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: tier.highlight ? "var(--brand-gold-soft)" : "var(--color-card-dark)",
                  border: `1px solid ${tier.highlight ? "var(--brand-gold-border)" : "var(--color-card-dark-border)"}`,
                }}>
                <p className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: "var(--color-text-muted-dark)" }}>{tier.plan}</p>
                <p className="text-2xl font-bold mb-1" style={{ color: "var(--brand-gold)" }}>{tier.quota}</p>
                <p className="text-xs" style={{ color: "var(--color-text-muted-dark)" }}>{tier.detail}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs mt-4" style={{ color: "var(--color-text-muted-dark)" }}>
            Structured search always available with no limits · Quota resets monthly
          </p>

          <div className="flex justify-center mt-8">
            <Link href="/pricing" className="eb-btn-primary">
              See Plans
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
