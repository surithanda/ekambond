# EkamBond Rebranding — P0 Task List
**Status:** 🟡 In Planning | **Owner:** UI/UX + Dev | **Started:** March 2026

---

## Overview — P0 Scope

Three high-impact areas that directly fix the biggest gaps in partner communication:

| # | Area | Goal | Est. |
|---|---|---|---|
| P0-A | Homepage | Add AI Search spotlight + Platform Differentiation block | 1 day |
| P0-B | Features Page | Rebuild from scratch with real feature content | 2 days |
| P0-C | Partners Page | Add "What You Get" list + Partner Journey steps | 0.5 day |

---

## P0-A — Homepage Improvements

> **File:** `src/components/sections/home/`
> **Goal:** Communicate platform depth without a full redesign. The hero stays. We add two new sections.

### A1 — Update Hero Section
**File:** `src/components/sections/home/hero-section.tsx`

- [ ] **A1.1** Add stat bar below the 4 pillars bar
  - Content: `"2 live partner networks · 9-section profile model · 48-hour onboarding"`
  - Style: subtle strip below existing pillars, muted text, small separators
- [ ] **A1.2** Add second CTA button "See a Live Demo →"
  - Links to a deployed partner (e.g. `/partners` with anchor or external link)
  - Style: ghost/outline variant (already have the glass button style — use it)
- [ ] **A1.3** Update hero subtitle text
  - Current: generic "end-to-end B2B platform"
  - New: include mention of "partner admin portal" and "48-hour onboarding"

---

### A2 — New Section: Platform Differentiation
**File:** `src/components/sections/home/DifferentiationSection.tsx` *(new file)*

- [ ] **A2.1** Design layout — 2-column or 3-card comparison block
  - Left/top: "What others offer" (generic builders, B2C apps)
  - Right/bottom: "What EkamBond offers"
- [ ] **A2.2** Build comparison table component
  - Rows: Matrimony-specific profile | AI Search | Built-in payments | White-label time | Admin portal
  - Use ✅ / ❌ icons with short labels, not long text
- [ ] **A2.3** Add section header: `"The Only B2B Platform Built for Matrimony"`
  - Badge: `"No Competitor"`
  - Sub: `"Most matrimony software is built for users. EkamBond is built for the businesses that serve them."`
- [ ] **A2.4** Wire into `src/app/page.tsx` — add `<DifferentiationSection />` after `<MatrimonyServices />`

---

### A3 — New Section: AI Search Spotlight
**File:** `src/components/sections/home/AiSearchSpotlight.tsx` *(new file)*

- [ ] **A3.1** Design a "chat/query" style input mockup (static, not interactive)
  - Label: `"Your users type in plain English..."`
  - Sample query bubble: `"Find Hindu women between 25-30, MBA, from Hyderabad, vegetarian"`
  - Sample result: `"AI interpreted 6 filters → 18 matching profiles found"` with confidence bar
- [ ] **A3.2** Add quota tier callout (3 small cards)
  - Starter: 50 AI searches/user/month
  - Growth: 200 AI searches/user/month
  - Enterprise: Unlimited
- [ ] **A3.3** Add CTA: `"See AI Search Plans →"` → `/pricing`
- [ ] **A3.4** Wire into `src/app/page.tsx` — add after `<DifferentiationSection />`

---

### A4 — Expand MatrimonyServices Cards
**File:** `src/components/sections/home/MatrimonyServices.tsx`

- [ ] **A4.1** Update "White Labeling" card description
  - New: `"Your domain. Your brand. Your colors. Your logo. Deployed in 48 hours — no dev team needed."`
- [ ] **A4.2** Update "Match Maker Support" card description
  - New: `"Dedicated matchmakers backed by AI recommendations, saved preferences, and a full profile history."`
- [ ] **A4.3** Update "Event Management" card description
  - New: `"Host matrimonial events. Members register, attend, and connect — all managed from your admin portal."`
- [ ] **A4.4** Update "Partners Onboarding" card + add link
  - New: `"Sign up → brand config → go live in 6 steps."`
  - Add: `"See the checklist →"` link to `/partners#journey`

---

## P0-B — Features Page Rebuild

> **Files:** `src/app/features/`, `src/components/sections/features/`
> **Goal:** Replace the empty animated banner with real, structured feature content.
> **Design Pattern:** Use the existing `features-layout.tsx` as the shell. Build modular sub-sections.

### B1 — Keep the Hero Banner
**File:** `src/components/sections/features/hero-section.tsx`
- [ ] **B1.1** Update headline: `"Everything Your Matrimony Platform Needs"`
- [ ] **B1.2** Update sub: `"Built by people who understand matrimony. Deployed in days, not months."`
- [ ] **B1.3** Keep particle animation — it's premium. Just fix the copy.

---

### B2 — New Sub-Section: Core Platform Features
**File:** `src/components/sections/features/CorePlatformSection.tsx` *(new)*

- [ ] **B2.1** Design a 3-column icon + title + description card grid
  - Card 1: 🧾 **9-Section Profile** — `"Personal · Address · Education · Employment · Property · Family Reference · Lifestyle · Hobbies · Photos"`
  - Card 2: 📊 **Profile Completion Score** — `"Real-time % meter drives members to fill every section. Better profiles = better matches."`
  - Card 3: 📷 **Multi-Photo Upload** — `"Profile photo + cover photo + gallery. Stored on Azure — fast, secure, scalable."`
  - Card 4: 🔐 **OTP 2-Factor Auth** — `"Email OTP on every login. No password-only accounts. Your members are protected by default."`
  - Card 5: 🔍 **Smart Search** — `"10+ filter dimensions: religion, caste, age, education, city, lifestyle. Results in milliseconds."`
  - Card 6: ❤️ **Favorites & Recommendations** — `"Members save profiles they like. AI surfaces profiles they haven't seen yet."`
- [ ] **B2.2** Add section header with badge: `"Platform Features"` / `"Core"`

---

### B3 — New Sub-Section: AI Search Deep Dive
**File:** `src/components/sections/features/AiSearchSection.tsx` *(new)*

- [ ] **B3.1** Two-column layout: left = explainer text, right = animated query mockup
  - Title: `"Search in Plain English"`
  - Body: explain NL → filters → results → confidence score flow
- [ ] **B3.2** 3-step flow diagram (horizontal)
  - Step 1: Member types query
  - Step 2: AI extracts filters
  - Step 3: Profiles returned with interpretation
- [ ] **B3.3** Quota table (3 plans × 2 rows)
  - AI Searches/month row + Search History row
- [ ] **B3.4** Note: `"Quota resets monthly. Structured search always available — no limits."` 
- [ ] **B3.5** CTA → `/pricing`

---

### B4 — New Sub-Section: Partner Admin Portal
**File:** `src/components/sections/features/AdminPortalSection.tsx` *(new)*

- [ ] **B4.1** Section header with badge: `"For Partners"` / `"Admin Portal"`
  - Title: `"Your Command Center"`
  - Sub: `"A full management portal — shipped with your platform, ready on day one."`
- [ ] **B4.2** 5-card horizontal row (icon + title + 2-line body)
  - 📈 **Dashboard** — Metrics, activity feed, payment overview
  - 👥 **Profile Management** — View, edit, toggle status, create on behalf of users
  - 🎨 **Brand Config Editor** — Change theme, colors, logo, layout — live in seconds, no code
  - 🛡️ **Role-Based Team** — 3 roles: Partner-Admin, Account-Admin, Support-Admin
  - 📋 **Audit Log** — Every admin action logged with who, when, what changed (before + after)
- [ ] **B4.3** Add callout: `"Background checks available"`
  - Style: highlighted info card — `"Initiate identity verification on any profile directly from the admin portal."`

---

### B5 — New Sub-Section: White-Label & Theming
**File:** `src/components/sections/features/WhiteLabelSection.tsx` *(new)*

- [ ] **B5.1** Left: step list — `"1. Fill the config file → 2. Drop your logo → 3. Pick a theme → 4. Deploy → Done"`
- [ ] **B5.2** Right: theme preset swatches (navy-rose, emerald-gold, saffron-maroon, corporate, minimal, vibrant)
  - Each swatch: a colored circle + preset name
- [ ] **B5.3** Feature list below: custom domain ✅ | custom CSS ✅ | sidebar style ✅ | login layout ✅
- [ ] **B5.4** Add callout: `"Brand changes from the admin portal apply instantly — no redeployment needed"`

---

### B6 — New Sub-Section: Payments & Billing
**File:** `src/components/sections/features/PaymentsSection.tsx` *(new)*

- [ ] **B6.1** Title: `"Enable Your Own Subscription Plans"`
- [ ] **B6.2** 3-step visual: Partner defines plans → Members subscribe → Stripe handles payments
- [ ] **B6.3** Feature list: checkout sessions, webhooks, payment history, admin billing view
- [ ] **B6.4** Key message box: `"You charge your users. We charge you. Your billing is fully white-labeled."`

---

### B7 — Wire All Sections
**File:** `src/app/features/page.tsx`

- [ ] **B7.1** Import and compose all new sections in order:
  1. `<FeaturesHeroSection />`
  2. `<CorePlatformSection />`
  3. `<AiSearchSection />`
  4. `<AdminPortalSection />`
  5. `<WhiteLabelSection />`
  6. `<PaymentsSection />`
  7. `<NewsletterSection />` (existing — keep at bottom)

---

## P0-C — Partners Page Updates

> **File:** `src/components/sections/partners/`
> **Goal:** Show what partners actually get, and give them a clear journey to follow.

### C1 — Update Hero
**File:** `src/components/sections/partners/hero-section.tsx`

- [ ] **C1.1** Update headline to be more concrete
  - Current: generic partner pitch
  - New: `"Your Complete Matrimony Platform — Ready in 48 Hours"`
- [ ] **C1.2** Add badge: `"No dev team required"`

---

### C2 — New Section: What You Get on Day 1
**File:** `src/components/sections/partners/WhatYouGetSection.tsx` *(new)*

- [ ] **C2.1** Title: `"Everything Included on Day One"`
- [ ] **C2.2** Checklist layout (2 columns, green checkmarks)
  - ✅ White-labeled matrimony website on your domain
  - ✅ 9-section member profile system with completion tracking
  - ✅ AI-powered natural language search (plan quota)
  - ✅ Partner admin portal with full profile management
  - ✅ Live brand config editor — change theme without code
  - ✅ Role-based admin team (partner-admin, account-admin, support-admin)
  - ✅ Stripe-powered subscription billing for your members
  - ✅ Compliance-grade audit log
  - ✅ Background check module
  - ✅ Favorites, recommendations, search history
- [ ] **C2.3** Wire into partners page after hero

---

### C3 — New Section: Partner Journey (6 Steps)
**File:** `src/components/sections/partners/PartnerJourneySection.tsx` *(new)*

- [ ] **C3.1** Title: `"How It Works — From Signup to Live in 6 Steps"`
- [ ] **C3.2** Horizontal step timeline (or vertical on mobile)
  - Step 1: Sign the partner agreement
  - Step 2: Share brand assets — logo, colors, domain name
  - Step 3: We configure your tenant (48 hours)
  - Step 4: You test your branded site
  - Step 5: Go live — members start registering
  - Step 6: Grow — AI search, recommendations, events, payments all active
- [ ] **C3.3** Add anchor id `id="journey"` so `MatrimonyServices` card link works
- [ ] **C3.4** CTA at bottom: `"Start Your Partner Application →"` → `/contact-us`

---

### C4 — Wire New Sections
**File:** `src/app/partners/page.tsx` (or the partners route entry)

- [ ] **C4.1** Add `<WhatYouGetSection />` after hero
- [ ] **C4.2** Add `<PartnerJourneySection />` after WhatYouGetSection
- [ ] **C4.3** Move existing CTA/benefits section to after the journey

---

## Design System Notes (Apply Consistently Across All P0 Work)

| Token | Value | Usage |
|---|---|---|
| Primary blue | `#0F2145` | Section backgrounds, table headers |
| Mid blue | `#1B3A6E` | H2, H3 headings, card accents |
| Gold | `#D9A91E` | CTAs, borders, highlights, badges |
| Light gold | `rgba(217,169,30,0.15)` | Icon backgrounds, card tints |
| Glass card | `rgba(255,255,255,0.06)` + blur | Cards on dark backgrounds |
| Neutral card | `rgba(255,255,255,0.35)` + blur | Cards on light backgrounds |
| Text on dark | `rgba(220,230,255,0.82)` | Body copy on dark sections |
| Border on dark | `rgba(255,255,255,0.12)` | Card borders on dark backgrounds |

- All new sections alternate dark (primary blue) ↔ light (off-white gradient) for visual rhythm
- All cards use `framer-motion` `whileHover` lift effect (existing pattern — keep consistent)
- All section headers use the existing `<SectionHeader>` component with `badgeText`, `title`, `subtitle` props
- Icons from `lucide-react` only (already a dependency)
- No new npm packages required for UI

---

## Definition of Done (Each Task)

For each task item to be marked `[x]`:
1. Component renders without console errors
2. Responsive: looks correct at 375px (mobile), 768px (tablet), 1280px (desktop)
3. Content matches the copy specified in this document
4. Animation matches the existing motion patterns (framer-motion)
5. Linked to correct pages (no broken href)
6. Section visible at `localhost:3000` in dev server

---

## Task Status Key

| Symbol | Meaning |
|---|---|
| `[ ]` | Not started |
| `[/]` | In progress |
| `[x]` | Done |
| `[-]` | Skipped / deferred |

---

*Created: March 2026*
*Scope: P0 tasks only — see `rebranding-plan.md` for P1/P2/P3*
