"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Code2, Cloud, Server, Users, TrendingUp } from "lucide-react";

// ─── Team Members ─────────────────────────────────────────────────────────────
const team = [
  {
    id: 1,
    name: "To Be Announced",
    role: "Chief Executive Officer",
    shortRole: "CEO",
    icon: TrendingUp,
    color: "#D9A91E",
    photo: "/images/team-avatar-placeholder.png",
    bio: "Leads EkamBond's vision, partnerships, and strategic direction. Brings deep experience in building community-focused technology platforms that earn trust across cultures.",
    focus: ["Platform Vision", "Partner Strategy", "Community & Culture"],
    linkedin: "#",
    email: "ceo@ekambond.com",
  },
  {
    id: 2,
    name: "To Be Announced",
    role: "Chief Technology Officer",
    shortRole: "CTO",
    icon: Cloud,
    color: "#1B3A6E",
    photo: "/images/team-avatar-placeholder.png",
    bio: "Architects EkamBond's cloud infrastructure and engineering culture. Champions reliability, security, and engineering excellence across every layer of the platform.",
    focus: ["Cloud Architecture", "Engineering Excellence", "Platform Security"],
    linkedin: "#",
    email: "cto@ekambond.com",
  },
  {
    id: 3,
    name: "To Be Announced",
    role: "Head of Product & UI Engineering",
    shortRole: "Head of Product",
    icon: Code2,
    color: "#C8302A",
    photo: "/images/team-avatar-placeholder.png",
    bio: "Owns the end-to-end product experience — from partner dashboards to member-facing matrimony apps. Obsessed with design quality, accessibility, and user empathy.",
    focus: ["Product Roadmap", "UI/UX Design", "Frontend Engineering"],
    linkedin: "#",
    email: "product@ekambond.com",
  },
  {
    id: 4,
    name: "To Be Announced",
    role: "Head of Partner Success",
    shortRole: "Partner Success",
    icon: Users,
    color: "#2D9E6E",
    photo: "/images/team-avatar-placeholder.png",
    bio: "Ensures every EkamBond partner reaches go-live confidently and grows from there. Combines technical aptitude, relationship-building, and cultural fluency to make partners thrive.",
    focus: ["Partner Onboarding", "Relationship Management", "Platform Adoption"],
    linkedin: "#",
    email: "partners@ekambond.com",
  },
  {
    id: 5,
    name: "To Be Announced",
    role: "Head of Growth & Franchise Development",
    shortRole: "Growth",
    icon: TrendingUp,
    color: "#7C3AED",
    photo: "/images/team-avatar-placeholder.png",
    bio: "Drives EkamBond's market expansion across USA and India — identifying new matrimony operators, building the franchise network, and running marketing campaigns for the diaspora community.",
    focus: ["Business Development", "Marketing & Brand", "Franchise Network"],
    linkedin: "#",
    email: "growth@ekambond.com",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function TeamPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-surface-light)" }}>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 60%, #1A0A06 100%)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="eb-badge eb-badge-dark mx-auto mb-6">The People Behind the Platform</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ color: "var(--color-text-on-dark)" }}>
              Meet the{" "}
              <span style={{ color: "var(--brand-gold)" }}>EkamBond Team</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: "rgba(253,246,236,0.72)" }}>
              Behind every partner&apos;s go-live, every AI match, and every family success story
              is a small, purposeful team that cares deeply about getting it right.
              We are engineers, strategists, and community builders — united by one mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="py-16 px-4" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="eb-badge mx-auto mb-4">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
              Core Team
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-text-muted-light)" }}>
              A lean, experienced team with deep expertise across product, engineering, partnerships, and growth.
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {team.slice(0, 3).map((member, i) => (
              <TeamCard key={member.id} member={member} delay={i * 0.1} />
            ))}
          </div>
          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {team.slice(3).map((member, i) => (
              <TeamCard key={member.id} member={member} delay={(i + 3) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Team CTA ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #F5EAD5 0%, #FDF6EC 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl p-10"
              style={{ background: "linear-gradient(135deg, #1A0A06, #2D1208)", border: "1.5px solid rgba(217,169,30,0.25)" }}>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--color-text-on-dark)" }}>
                Want to Join This Team?
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(253,246,236,0.65)" }}>
                We&apos;re hiring across engineering, product, partnerships, and growth.
                See our open positions and apply today.
              </p>
              <a href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-transform hover:scale-105"
                style={{ background: "var(--brand-gold)", color: "#1A0A06" }}>
                View Open Positions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ─── Team Card ────────────────────────────────────────────────────────────────
function TeamCard({ member, delay }: { member: typeof team[0]; delay: number }) {
  const Icon = member.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-3xl overflow-hidden flex flex-col"
      style={{ background: "#fff", border: "1.5px solid rgba(200,150,60,0.15)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", borderTop: `4px solid ${member.color}` }}>

      {/* Photo */}
      <div className="relative h-56 w-full" style={{ background: `linear-gradient(135deg, ${member.color}15, ${member.color}08)` }}>
        <Image
          src={member.photo}
          alt={`${member.role} placeholder`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Role badge overlay */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
            style={{ background: `${member.color}ee`, color: "#1A0A06" }}>
            {member.shortRole}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-base font-black mb-0.5" style={{ color: "var(--color-text-on-light)" }}>
              {member.name}
            </h3>
            <p className="text-xs font-semibold" style={{ color: member.color }}>{member.role}</p>
          </div>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${member.color}15` }}>
            <Icon className="w-4 h-4" style={{ color: member.color }} />
          </div>
        </div>

        <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--color-text-muted-light)" }}>
          {member.bio}
        </p>

        {/* Focus areas */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.focus.map((f) => (
            <span key={f} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${member.color}12`, color: member.color }}>
              {f}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(200,150,60,0.12)" }}>
          <a href={`mailto:${member.email}`}
            className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors hover:opacity-80"
            style={{ background: `${member.color}15`, color: member.color }}>
            <Mail className="w-3.5 h-3.5" /> Contact
          </a>
          <a href={member.linkedin}
            className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors hover:opacity-80"
            style={{ background: "rgba(10,102,194,0.1)", color: "#0A66C2" }}>
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}
