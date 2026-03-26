"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
  {
    id: "mata",
    logo: "/images/mata-logo.png",
    name: "MATA Matrimony",
    tagline: "Serving South Asian families across major US metro areas",
    location: "🇺🇸 United States",
    desc: "MATA Matrimony connects thousands of South Asian families, powered by EkamBond's white-label platform with AI matching and verified profiles.",
  },
  {
    id: "chaturvarnam",
    logo: "/images/chaturvarnam-1-logo.png",
    name: "Chaturvarnam",
    tagline: "Community-driven matrimony rooted in shared values",
    location: "🇮🇳 India / 🇺🇸 United States",
    desc: "Chaturvarnam builds culturally meaningful connections for their community, with EkamBond handling all technology so they focus on people.",
  },
];

export default function PremiumPartnersStrip() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--color-bg-warm)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="eb-badge mx-auto mb-4">Our Partners</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
            Proudly Powering Premier Platforms in the USA
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
            EkamBond partners keep their brand, their members, and their revenue.
            We are the invisible technology engine behind their success.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl p-8 flex flex-col gap-5 group"
              style={{
                background: "rgba(255,255,255,0.88)",
                border: "1.5px solid rgba(200,150,60,0.18)",
                boxShadow: "0 6px 32px rgba(0,0,0,0.07)",
              }}
            >
              {/* Logo + badge */}
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-14 w-36 flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{ background: "rgba(200,48,42,0.08)", color: "var(--brand-crimson)", border: "1px solid rgba(200,48,42,0.20)" }}
                >
                  Premium Partner
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--color-text-on-light)" }}>{p.name}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--brand-gold)" }}>{p.location}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>{p.desc}</p>
              </div>

              {/* Divider + tagline */}
              <div className="pt-3" style={{ borderTop: "1px solid rgba(200,150,60,0.15)" }}>
                <p className="text-xs italic" style={{ color: "var(--color-text-muted-light)" }}>
                  &ldquo;{p.tagline}&rdquo;
                </p>
              </div>

              {/* Powered by badge */}
              <div className="flex items-center gap-2 mt-auto">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image src="/images/ekambond-logo.png" alt="EkamBond" fill className="object-contain" />
                </div>
                <span className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>
                  Powered by <strong>EkamBond</strong>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs mt-8"
          style={{ color: "var(--color-text-muted-light)" }}
        >
          Interested in joining as a partner?{" "}
          <a href="/register" style={{ color: "var(--brand-crimson)", fontWeight: 600 }}>
            Register today →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
