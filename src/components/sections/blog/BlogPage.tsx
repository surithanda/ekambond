"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, ChevronDown, ChevronUp, BookOpen, ArrowRight } from "lucide-react";

// ─── Articles ─────────────────────────────────────────────────────────────────
const articles = [
  {
    id: 1,
    category: "Partner Opportunity",
    categoryColor: "#D9A91E",
    title: "From Matchmaker to Platform Owner: Why Now Is the Right Time to Launch Your Own Matrimony Platform",
    date: "March 2026",
    readTime: "6 min read",
    excerpt:
      "The global matrimony market is undergoing a structural shift. Community matchmakers and local bureaus are losing families to large portals — not because they lack relationships, but because they lack technology. Here's why the solution isn't to compete with those portals, but to own one.",
    content: `**The $10 Billion Opportunity Hidden in Plain Sight**

The South Asian matrimony market — spanning India, the USA, UK, and the diaspora — is estimated to be worth over $10 billion globally. Yet the technology infrastructure serving it remains dominated by a handful of large portals that commoditise families, reduce relationships to algorithm scores, and extract margin from both users and operators.

Local matchmakers, community organisations, and matrimony bureaus have existed for centuries. They hold what no technology company can easily replicate: **community trust, cultural nuance, and personal relationships**. The tragedy is that they are losing relevance — not because families no longer value them, but because families now expect a digital experience, and most operators cannot provide one.

**What Has Changed**

Until recently, building a white-label matrimony platform was a six-figure, 12–18 month engineering project. That barrier is now gone. Platforms like EkamBond allow operators to launch a fully branded, AI-powered matrimony platform in under two weeks — with their logo, their subscription plans, their community values — without writing a single line of code.

**Why Operators Are Making the Move Now**

1. **The trust advantage is eroding.** Large portals are reaching directly into communities. Local operators who wait will find their relationship assets devalued.
2. **The technology cost has collapsed.** White-label infrastructure has reached the point where a matrimony bureau can run a full digital platform for less than the cost of a single print advertisement.
3. **Families demand digital, but families still want trust.** This contradiction is the business opportunity. Families want to browse profiles online, but they want *their matchmaker* behind the platform — not a stranger's algorithm.
4. **Revenue diversification.** A platform-owning operator can generate subscription revenue, match facilitation fees, and AI search credits — independently of whether a match closes.

**The EkamBond Model**

EkamBond's partner programme allows cultural organisations, marriage bureaus, and individual matchmakers to launch under their own brand in under two weeks. The platform handles AI-powered search, member billing via Stripe, secure profile management, and background verification workflows. The operator keeps their community relationships. We handle the technology, invisibly, in the background.

**The Question Is Not Whether to Launch — It's When**

Those who move early will build a digital reputation in their community before competitors arrive. Those who wait will find the window closing. The technology is ready. The market is ready. The only question is whether you are.`,
  },
  {
    id: 2,
    category: "Matrimony Awareness",
    categoryColor: "#C8302A",
    title: "Modern Matrimony's Hidden Crisis: Fake Profiles, Misrepresentation, and the Trust Deficit That's Damaging Families",
    date: "March 2026",
    readTime: "8 min read",
    excerpt:
      "Fake profile photos. Fabricated income figures. Hidden divorce histories. The matrimony industry's trust crisis is real, widespread, and causing genuine harm to families. Here's what's happening — and what responsible platforms must do about it.",
    content: `**The Scale of the Problem**

Across India's major matrimony portals, independent research consistently estimates that between 15–40% of profiles contain material misrepresentations — exaggerated or falsified income, outdated or heavily filtered photographs, concealed divorce or health history, and fabricated education credentials. In diaspora communities, where families cannot rely on physical proximity to verify claims, the problem is significantly worse.

Families invest months of emotional energy reviewing profiles, conducting calls, and building hope — only to discover, sometimes after an engagement or even a marriage, that foundational claims were false.

**The Most Common Forms of Misrepresentation**

**1. Photograph manipulation and outdated images**
The profile photograph remains the first filter in nearly every matrimony search. Profiles using decade-old images, heavily edited photographs, or photos of a different person entirely are disturbingly common. Families report discovering mismatches — sometimes dramatically — at first meetings.

**2. Income and employment inflation**
Annual income is one of the most searched and filtered criteria on matrimony platforms. It is also one of the most consistently misrepresented. Employment status, job title, and salary figures are self-declared on most platforms — with no verification layer. A 2023 survey of matrimony users in urban India found that over 60% of respondents believed income figures on profiles were exaggerated "most of the time."

**3. Concealed marital or divorce history**
India's divorce rates, while lower than Western averages, have risen significantly in urban areas over the past decade. Many divorcees re-enter the matrimony market — which is entirely legitimate — but a significant subset conceal their history to avoid social stigma. This deprives prospective partners of information they have a right to know.

**4. Health and hereditary condition concealment**
Conditions ranging from chronic illnesses to hereditary disorders are routinely hidden. The human consequences of this concealment — for both partners and children — can be profound and long-lasting.

**Why Platforms Have Failed to Address This**

The incentive structure of large matrimony portals is misaligned with family welfare. Platforms earn from profile creation, subscriptions, and search credits — not from match quality. A fake profile that attracts views or connections is, in a cynical sense, a performing profile. There has historically been little commercial incentive to aggressively remove profiles that are paying customers.

**What Responsible Platform Operators Must Do**

1. **Verification as infrastructure, not a premium add-on.** Background verification workflows, document submission requirements, and live selfie checks should be baseline — not sold as upgrades.
2. **Community reporting mechanisms with real consequences.** Profiles flagged by multiple users for misrepresentation should trigger immediate review, not sit in a queue.
3. **Partnership with trusted local operators.** The most effective verification layer is often a human one: a matchmaker who knows the family, has met them in person, and vouches for basic facts. Technology and community trust must work together.
4. **AI-assisted anomaly detection.** Profiles whose photographs are inconsistent with their stated age, or whose declared attributes cluster in statistical outlier ranges, can be flagged for human review automatically.

The matrimony industry's trust crisis will not be solved by a single technology feature. It requires a structural recommitment — by platforms, by operators, and by communities — to prioritising family welfare over profile volume.`,
  },
  {
    id: 3,
    category: "Family Guidance",
    categoryColor: "#1B3A6E",
    title: "The Profile Trap: How Families Fall for the Wrong Match — and the Questions That Could Have Saved Them",
    date: "February 2026",
    readTime: "7 min read",
    excerpt:
      "Profile evaluation is a skill — and most families approach it without training, under emotional pressure, and with inadequate information. These are the most common mistakes, and the specific questions that responsible families must ask before moving forward.",
    content: `**Why Good Families Make Bad Matches**

Matrimony decisions are made under a unique combination of social pressure, emotional hope, time urgency, and information scarcity. Families are motivated, sincere, and careful — and still make mistakes that cost years of happiness. Understanding why is the first step to doing better.

**Mistake 1: Confusing Presentation for Character**

A well-written profile, a professional photograph, and a polished first conversation communicate competence and care in self-presentation. They reveal almost nothing about character, emotional maturity, conflict resolution, or compatibility under pressure. Families who mistake a strong profile for a strong person are setting themselves up for disappointment.

**What to do instead:** Move quickly to video calls or in-person meetings in unscripted settings. Ask open-ended questions about conflict, disappointment, and how the person behaves when things go wrong. A person's response to adversity reveals far more than their response to a matrimony questionnaire.

**Mistake 2: Over-indexing on Matching Criteria**

Families spend enormous energy matching on age, height, income, education, and Nakshatra. These are easy to measure and feel scientific. They are also among the weakest predictors of marital satisfaction. Research across multiple cultures consistently shows that emotional compatibility, shared values, and communication style predict marital success far more reliably than demographic alignment.

**What to do instead:** Use demographic filters to reach a manageable shortlist — but explicitly prompt conversations about values, expectations of family life, financial philosophy, and how both individuals envision the role of in-laws in marriage.

**Mistake 3: Relying on Self-Declarations Alone**

Everything on a matrimony profile is self-declared: income, qualifications, family status, health. No responsible family would purchase a property based solely on the seller's description. Matrimony decisions — arguably more consequential — deserves at minimum equivalent diligence.

**Key questions to ask and verify:**
- Employment: Ask to see a recent payslip or offer letter, framed as a standard mutual exchange.
- Education: Request copies of degree certificates.
- Health: Have an honest, specific conversation about hereditary conditions and current health status.
- Previous relationships: Ask directly and kindly. A person unwilling to answer honestly at this stage is telling you something important.

**Mistake 4: Not Consulting People Who Know Them**

The strongest verification layer available to any family is not a background check service — it is a trusted person who knows the prospective match in a normal, everyday setting. A colleague, a childhood friend, a neighbour, a community leader. Someone outside the family's immediate circle who has observed the person in non-performance contexts.

Most families ask for references. Few families actually call them, ask specific questions, and probe uncomfortable answers. If a reference is unwilling to speak frankly, that itself is information.

**Mistake 5: Letting Time Pressure Accelerate the Timeline**

"Another family is considering them." "Their horoscope only aligns for the next three months." "She is 29 — we must decide." These pressures are real, but they are also reliably exploited — whether intentionally or not — to compress due diligence timelines. Legitimate matches survive respectful, thorough evaluation. Misrepresentations often do not.

**A Final Note**

The goal of careful evaluation is not to find a perfect person. It is to ensure that the person you marry is the person you are told you are marrying. That is not a low bar. In the current matrimony environment, for many families, it is the most important bar.`,
  },
  {
    id: 4,
    category: "Cultural Insight",
    categoryColor: "#7C3AED",
    title: "Your Greatest Matrimony Safety Net: Why Trusted Connections Still Matter Most in the Digital Age",
    date: "February 2026",
    readTime: "5 min read",
    excerpt:
      "In an era of AI-powered matching and digital-first courtship, the most effective tool for avoiding a bad matrimony match remains unchanged: a trusted person who knows the candidate in real life. Here is why — and how to use your network correctly.",
    content: `**The Algorithm Cannot Attend the Wedding**

Every major matrimony platform now offers algorithmic matching — AI-powered recommendations, compatibility scores, smart filters. These tools are genuinely useful for initial discovery: surfacing candidates who meet objective criteria, expanding the search beyond a family's immediate geography, and reducing the time spent on obvious mismatches.

They are also fundamentally incapable of the one thing that matters most: knowing the person as a person.

**Why Known Connections Are Irreplaceable**

A close friend can tell you how someone behaves when they are angry. A colleague knows whether they take responsibility for mistakes or consistently blame others. A neighbour has seen how they treat people who cannot do anything for them. A cousin observes how they speak about their previous relationships.

This is the kind of information that no profile field captures, no algorithm predicts, and no background check surfaces. It is also, consistently, the kind of information that saves families from the worst outcomes.

**The Specific Value of Trusted References in Matrimony**

In South Asian matrimony culture, the role of the "middle person" — the matchmaker, the trusted uncle, the community elder — was not merely ceremonial. It was structural. They provided accountability in a social context where accountability mattered: where both families knew them, where their reputation was at stake if they misrepresented a candidate, and where ongoing community relationships meant dishonesty had consequences.

Digital platforms, by design, remove this accountability. A fake profile on a large portal costs the creator nothing and risks nothing. A misrepresentation made to a trusted mutual contact, who knows both families, carries real social consequence.

**How to Use Your Network Correctly**

Using your network effectively in matrimony is not about relying on gossip or hearsay. It is about gathering specific, trustworthy observations from people who are positioned to provide them.

**Principles to follow:**

1. **Identify second-degree connections, not just first.** Direct family friends have incentives to be positive. A colleague of a colleague, a classmate of a sibling, a person from the same hometown who does not have a social stake in the match — these second-degree connections often provide more candid input.

2. **Ask specific questions, not general ones.** "What is he like?" yields almost nothing useful. "How does he handle disagreement at work?" or "Have you seen him interact with his parents — how does that look?" yields something real.

3. **Treat soft information as data, not gossip.** A pattern of behaviour — observed independently by two or three people who don't know each other — is meaningful information. It is not proof of anything, but it deserves weight in your decision.

4. **Be willing to share as well as receive.** Families who ask others to be candid must themselves be willing to be candid. The exchange of honest reference information is a mutual commitment — and one that strengthens the matrimony ecosystem for everyone.

**Technology and Community Trust Are Complementary**

The best matrimony outcomes — in the current era and likely in every era — come from combining the reach and efficiency of digital platforms with the depth and accountability of trusted human networks. Use technology to find. Use your community to verify. Use both to decide.

EkamBond is built precisely for the operators — matchmakers, community organisations, and bureaus — who understand this combination intuitively and want the technology to support it, not replace it.`,
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const filtered = filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-surface-light)" }}>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 60%, #1A0A06 100%)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="eb-badge eb-badge-dark mx-auto mb-6">EkamBond Insights</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ color: "var(--color-text-on-dark)" }}>
              Knowledge for{" "}
              <span style={{ color: "var(--brand-gold)" }}>Smarter Matrimony</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: "rgba(253,246,236,0.72)" }}>
              Practical guidance for matrimony operators, families, and community leaders —
              on building better platforms, making safer choices, and understanding the evolving
              landscape of modern matchmaking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category filters ── */}
      <section className="py-10 px-4 sticky top-16 z-20"
        style={{ background: "rgba(253,246,236,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(200,150,60,0.15)" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: filter === cat ? "var(--brand-crimson)" : "rgba(255,255,255,0.8)",
                color: filter === cat ? "#fff" : "var(--color-text-muted-light)",
                border: `1.5px solid ${filter === cat ? "var(--brand-crimson)" : "rgba(200,150,60,0.2)"}`,
              }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-14 px-4" style={{ background: "linear-gradient(180deg, #FDF6EC 0%, #F5EAD5 100%)" }}>
        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((article, i) => {
              const isOpen = openId === article.id;
              return (
                <motion.article key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#fff",
                    border: `1.5px solid ${isOpen ? article.categoryColor + "50" : "rgba(200,150,60,0.15)"}`,
                    boxShadow: isOpen ? `0 8px 40px ${article.categoryColor}18` : "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    borderLeft: `5px solid ${article.categoryColor}`,
                  }}>

                  {/* Card summary — always visible */}
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full"
                        style={{ background: `${article.categoryColor}18`, color: article.categoryColor }}>
                        <Tag className="w-3 h-3" />{article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Clock className="w-3 h-3" />{article.readTime}
                      </span>
                      <span className="text-[11px] text-gray-400">{article.date}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-black mb-3 leading-snug"
                      style={{ color: "var(--color-text-on-light)" }}>
                      {article.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-5"
                      style={{ color: "var(--color-text-muted-light)" }}>
                      {article.excerpt}
                    </p>

                    <button
                      onClick={() => setOpenId(isOpen ? null : article.id)}
                      className="flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                      style={{ color: article.categoryColor }}>
                      {isOpen ? (
                        <><ChevronUp className="w-4 h-4" /> Collapse Article</>
                      ) : (
                        <><BookOpen className="w-4 h-4" /> Read Full Article</>
                      )}
                    </button>
                  </div>

                  {/* Full article content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}
                        className="overflow-hidden">
                        <div className="px-7 pb-8 pt-2 border-t"
                          style={{ borderColor: `${article.categoryColor}20` }}>
                          <div className="prose prose-sm max-w-none">
                            {article.content.split("\n\n").map((para, pi) => {
                              if (para.startsWith("**") && para.endsWith("**")) {
                                // H2-style heading
                                return (
                                  <h3 key={pi} className="text-lg font-black mt-8 mb-3"
                                    style={{ color: "var(--color-text-on-light)" }}>
                                    {para.replace(/\*\*/g, "")}
                                  </h3>
                                );
                              }
                              // Inline bold handling
                              const parts = para.split(/(\*\*[^*]+\*\*)/g);
                              return (
                                <p key={pi} className="text-sm leading-[1.85] mb-4"
                                  style={{ color: "var(--color-text-muted-light)" }}>
                                  {parts.map((part, ppi) => {
                                    if (part.startsWith("**") && part.endsWith("**")) {
                                      return (
                                        <strong key={ppi}
                                          style={{ color: "var(--color-text-on-light)", fontWeight: 700 }}>
                                          {part.replace(/\*\*/g, "")}
                                        </strong>
                                      );
                                    }
                                    // Handle numbered list items
                                    if (part.match(/^\d+\.\s/)) {
                                      return <span key={ppi} className="block ml-4">{part}</span>;
                                    }
                                    return part;
                                  })}
                                </p>
                              );
                            })}
                          </div>

                          {/* Share / collapse footer */}
                          <div className="mt-8 pt-5 flex items-center justify-between flex-wrap gap-3"
                            style={{ borderTop: `1px solid ${article.categoryColor}20` }}>
                            <p className="text-xs" style={{ color: "rgba(100,80,40,0.5)" }}>
                              EkamBond Insights · {article.date}
                            </p>
                            <button
                              onClick={() => setOpenId(null)}
                              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg"
                              style={{ background: `${article.categoryColor}15`, color: article.categoryColor }}>
                              <ChevronUp className="w-3.5 h-3.5" /> Collapse
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4" style={{ background: "#FDF6EC" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl p-10"
              style={{ background: "linear-gradient(135deg, #1A0A06, #2D1208)", border: "1.5px solid rgba(217,169,30,0.25)" }}>
              <span className="eb-badge eb-badge-dark mx-auto mb-4">Ready to Partner?</span>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--color-text-on-dark)" }}>
                Launch Your Own Matrimony Platform
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(253,246,236,0.65)" }}>
                Everything you read about here — verification, trust, community ownership —
                is built into EkamBond. Start your partner registration today.
              </p>
              <a href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-transform hover:scale-105"
                style={{ background: "var(--brand-gold)", color: "#1A0A06" }}>
                Register as a Partner <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
