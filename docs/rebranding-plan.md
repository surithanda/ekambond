# EkamBond Rebranding & Content Strategy Plan
**Partner-Facing Website — Gap Analysis & Page-by-Page Improvement Plan**

---

## 1. Executive Summary

EkamBond is a **one-of-a-kind B2B platform** for matrimony companies. There is no direct competitor that offers:
- Fully managed white-label matrimony websites (config-file onboarding in hours)
- AI-powered natural language profile search as a tiered partner feature
- OTP-secured authentication built-in
- Stripe-integrated subscription billing that partners can offer end-users
- A deep matrimony-domain profile model (personal + address + education + employment + property + family reference + lifestyle + hobbies + photos + completion score)

The current EkamBond website does **not** communicate most of these capabilities. Partners visiting the site today get a generic "white label + AI + global reach" headline without any substance behind it. This document maps the gaps and proposes specific, actionable improvements page by page.

---

## 2. Platform Capability Map (from codebase)

### 2.1 Backend API (`matrimonyservicesapi`)

| Category | Capabilities |
|---|---|
| **Authentication** | OTP-based 2-factor login, forgot/reset password, change password, rate limiting, HttpOnly cookie session |
| **Account Management** | Register, update, photo upload (Azure storage), account details |
| **Profile — Personal** | Full CRUD: name, gender, DOB, personal details |
| **Profile — Address** | Multiple addresses with country/state lookup |
| **Profile — Education** | Multiple education entries |
| **Profile — Employment** | Multiple employment records |
| **Profile — Property** | Property details (unique: no competitor captures this) |
| **Profile — Family Reference** | Family bio / family reference data |
| **Profile — Lifestyle** | Lifestyle preferences |
| **Profile — Hobbies** | Hobby tags (add/remove) |
| **Profile — Photos** | Upload profile (type 1), cover (type 2), additional (type 3) photos — stored on Azure Blob |
| **Profile — Completion Score** | `GET /profile-completion/:id` — quantified completeness |
| **Search** | Structured search with multiple filter criteria |
| **AI Search** | Natural language query → structured filters → profiles; confidence score, interpretation, token tracking, monthly quota per plan |
| **AI Search History** | Per-user history (up to 50 entries) |
| **Favorites** | Save / retrieve / delete favorite profiles |
| **Recommendations** | Algorithmic profile recommendations |
| **Preferences** | Save/get partner preferences (search criteria defaults) |
| **Payments (Stripe)** | Create checkout session, verify session, webhook, payment history |
| **Metadata** | Category lookups (religion, caste, etc.), countries, states |

### 2.2 Partner UI Features (deployed partners: `matamatrimony`, `chaturvarnam-UI`)

| Dashboard Section | Feature |
|---|---|
| Dashboard Home | Metrics (profile views, favorites, search count), greeting, quick actions |
| Search | Multi-filter profile search with paginated results (5 per row on large screens) |
| AI Search | Natural language text query, quota display, history |
| Favorites | Saved profiles with photo gallery |
| Recommendations | AI-curated profile cards |
| Account | Personal account management |
| Profile | Full multi-section profile editor (9 sections) with completion tracking |
| Payments / Billing | Subscription plan management, payment history |
| Settings | Password change, preferences |

### 2.3 White-Label Architecture (from `white_label_architecture.md`)

The platform supports a **config-driven multi-tenant model**:
- One codebase → deployed per partner via a single `tenant.config.ts` file
- Controls: brand name, logo, color theme (preset or custom HSL), nav links, hero content, footer contacts, feature flags (payments, recommendations, events, stories)
- **Onboarding a new partner = ~1–2 hours**
- Theme presets: `navy-rose`, `emerald-gold`, `saffron-maroon` and more
- Vercel deployment with `TENANT_ID` env var — no code duplication

---

## 3. Current EkamBond Site — What Exists Today

| Page | Current Content | Verdict |
|---|---|---|
| **Home** | Hero headline, 4-service cards (white label, matchmaker, events, partner onboarding), features teaser, testimonials | Too generic, misses AI/payment/profile depth |
| **Features** | Hero banner with "Discover our Advanced Features" title, particle animation | **No actual features listed** — only a banner page |
| **Pricing** | 3 tiered plans (INR), monthly/annual toggle, feature checklist per plan | Good structure but feature list is cryptic; no plan names visible in code |
| **Partners** | Hero + benefits + CTA — partner marketing page | Weak; doesn't show live partner examples or partner journey |
| **About Us** | Exists as a route | Not reviewed — likely minimal |
| **FAQ** | Exists as a route | Not reviewed — likely generic |
| **Contact Us** | Form | Standard |
| **Services** | Exists as a route | Not reviewed |

---

## 4. Identified Gaps

### Gap 1 — Features Page Has No Features
**Current:** The `/features` page only shows a particle-animation hero with the title "Discover our Advanced Features" and a "Learn More" button that leads nowhere specific.

**Missing:** Actual feature descriptions — AI search quota system, profile sections, completion score, photo types, recommendations, favorites, search filters, payment integration.

---

### Gap 2 — AI Search is a Major USP Not Mentioned on the Marketing Site
**Current:** Zero mention of AI search on the homepage or features page content (only a pill icon in the hero).

**Missing:** The AI search product includes natural language queries, confidence scores, multiple AI providers, per-plan monthly quotas, search history, and rate limiting. This is a product-level differentiator that deserves a dedicated section/page.

---

### Gap 3 — The White-Label Architecture Story is Untold
**Current:** "White Labeling" is listed as a service with one image card and the single sentence: _"Custom branding solutions for your matrimony platform."_

**Missing:** The actual power — config file → 1–2 hours → live website with custom domain, theme, logo, nav, hero, footer. The theme preset system, the section registry (customizable page layout), and the feature flag system are all invisible.

---

### Gap 4 — Pricing Plans Have No Context
**Current:** Pricing cards show ₹ amounts and a feature checklist, but there is no explanation of **what each feature means** or how AI search quotas (monthly limits) work across plans.

**Missing:** Each plan should explain: how many AI searches/month, what "recommendations" means, what "analytics" means for partners, and what happens when quota is exceeded.

---

### Gap 5 — The Profile Depth Differentiation is Not Communicated
**Current:** The site uses "Verified Profiles" as a single pillar. 

**Missing:** The platform captures **9 distinct profile sections** (personal, address, education, employment, property, lifestyle, family reference, hobbies, photos) plus a **completion score API**. The **property section** is uniquely matrimony-domain. No competitor captures this fidelity.

---

### Gap 6 — Partner Journey / Onboarding Flow is Not Shown
**Current:** "Partner Onboarding" is listed as one of 4 service cards with 5 words of description.

**Missing:** A step-by-step flow: _"You sign up → we create your tenant config → your site is live in 48 hours → your users register → they match."_ Partners need to understand what they're buying **before** they invest time to contact sales.

---

### Gap 7 — Live Partner Examples Are Not Showcased
**Current:** The partners page exists but no live examples of deployed partner sites are shown.

**Missing:** Screenshots/demos of `matamatrimony` and `chaturvarnam` with their custom branding, showing that the white-label is real and production-grade.

---

### Gap 8 — Payment / Monetization Story is Hidden
**Current:** No mention of how partners can monetize their user base.

**Missing:** Partners can set up Stripe subscriptions for their users (Bronze/Silver/Gold etc.). EkamBond provides the billing infra. This is a revenue enabler for partners.

---

### Gap 9 — The "No Competitor" Positioning is Not Articulated
**Current:** There is no competitive comparison or positioning statement.

**Missing:** Explicit articulation of why this platform is unique: most matrimony software is B2C (Shaadi, BharatMatrimony). There is **no other B2B platform** that provides white-label + AI + payments + profile infra as a SaaS for matrimony businesses.

---

### Gap 10 — No Partner Self-Service / Demo Path
**Current:** The only CTA is "Become a Partner" → form, and "Talk to Us" → contact page.

**Missing:** An interactive demo, a sandbox tour, or a "See it live" link to one of the deployed partners so prospective partners can evaluate the end-user experience before committing.

---

## 5. Page-by-Page Recommended Changes

---

### 5.1 Home Page (`/`)

**Current Sections:** Hero → MatrimonyServices (4 cards) → Features teaser → Testimonials

**Recommended New Structure:**

#### Section 1 — Hero (Revise)
- **Keep:** Dark blue + gold aesthetic, "Power Your Matrimony Business with EkamBond"
- **Add:** A single stat bar below the pillars: _"2 live partner networks · 9-section profile model · 48-hour onboarding"_
- **Add:** Second CTA — "See a live demo →" that links to a deployed partner (e.g., chaturvarnam.org or matamatrimony)

#### Section 2 — Platform Differentiation (NEW)
> **"The Only B2B Platform Built Exclusively for Matrimony"**

Add a 3-column comparison block:
| | Generic Website Builder | EkamBond |
|---|---|---|
| Matrimony-specific profile | ❌ Generic forms | ✅ 9 dedicated sections |
| AI Search | ❌ Not available | ✅ Natural language, quota-based |
| Built-in payments | ❌ 3rd-party setup | ✅ Stripe integrated out-of-the-box |
| White label time | ❌ Weeks of dev | ✅ 48 hours |
| Community & events | ❌ | ✅ Built-in events module |

#### Section 3 — MatrimonyServices (Expand)
Replace minimal image cards with expandable feature highlights:
1. **White Label** → Add: "Your domain. Your brand. Your theme. Deployed in 48 hours."
2. **Match Maker Support** → Add: "Dedicated matchmakers backed by AI recommendations + preferences engine."
3. **Event Management** → Add: "Host matrimonial events — invitations, registrations, all in one dashboard."
4. **Partner Onboarding** → Add link: "See the 6-step onboarding checklist →"

#### Section 4 — AI Search Spotlight (NEW)
A dedicated home-page section showcasing the AI search feature:
- Show a conversation-style input: _"Find Hindu women between 25-30, MBA, from Hyderabad, vegetarian"_
- Show the query interpretation output: _"AI interpreted: Religion = Hindu, Gender = Female, Age 25–30, Education = MBA, City = Hyderabad, Diet = Vegetarian — 18 matches found"_
- CTA: "See AI Search Plans →" → links to pricing

#### Section 5 — Partner Showcase (NEW)
- Logo / screenshot slider of deployed partners (matamatrimony, chaturvarnam)
- One-liner for each: "Chaturvarnam — A community-run non-profit matrimony, live on chaturvarnam.org"

#### Section 6 — Testimonials (Keep, enhance)
- Make testimonials specifically from **partners** (business owners), not end users

---

### 5.2 Features Page (`/features`)

**Current:** Only a hero banner with particle animation. No actual features listed.

**Recommended New Structure:**

#### Sub-section 1 — Core Platform Features
| Feature | What It Does | Exclusive? |
|---|---|---|
| **9-Section Profile** | Personal · Address · Education · Employment · Property · Family Reference · Lifestyle · Hobbies · Photos | ✅ Matrimony-specific |
| **Profile Completion Score** | Real-time % completion meter drives users to fill everything | ✅ |
| **Multi-Photo Upload** | Profile photo + cover photo + additional gallery (Azure Blob storage) | ✅ |
| **OTP 2-Factor Auth** | Login sends OTP to email, no password-only accounts | ✅ |
| **Smart Search** | 10+ filter dimensions: religion, caste, age, education, city, lifestyle, etc. | ✅ |
| **Saved Preferences** | Users save their search criteria; reused across sessions | ✅ |
| **Favorites** | Save and revisit interesting profiles | Standard |
| **Recommendations** | AI-curated "who might match you" cards on the dashboard | ✅ |

#### Sub-section 2 — AI Search (Give Full Section)
- Title: _"Search in Plain English"_
- Explain: Partner users type a sentence. AI extracts filters. Database is queried. Results come back.
- Show: monthly quota by plan (Bronze = 50/month, Silver = 200/month, Gold = unlimited — *replace with actual plan values*)
- Show: search history is stored — users can revisit their previous searches
- Show: confidence score tells the user how well the AI understood the query

#### Sub-section 3 — White Label & Theming
- Explain the tenant config system simply: _"We give you a configuration file. You fill in your name, logo, colors, and nav links. We deploy. Done."_
- Show theme preset examples: navy-rose (Chaturvarnam style), emerald-gold, saffron-maroon
- Show the feature flag table: turn payments on/off, recommendations on/off, events on/off per partner

#### Sub-section 4 — Payments & Billing
- _"Enable your users to subscribe to plans — powered by Stripe"_
- _"You define plan names and prices. We handle checkout, webhooks, and payment history."_
- _"Billing is fully white-labeled — your users never see EkamBond in the payment flow."_

#### Sub-section 5 — Background Verification (Roadmap)
- Mark as "Coming Soon"
- _"Profile identity verification and background check integration — available in Q3 2026"_

#### Sub-section 6 — Event Management
- Partner can create matrimonial events
- Members can register/attend
- Integrated into the same dashboard

---

### 5.3 Pricing Page (`/pricing`)

**Current:** 3 plan cards (INR) with monthly/annual toggle. Plan names and feature lists are data-driven but context is thin.

**Recommended Changes:**

1. **Add a header "What's included in each plan" with a detailed comparison table below the cards** — not just checkmarks but short descriptions:
   - AI Search Quota: "50 natural language searches per user per month"
   - Recommendations: "AI-suggested profiles shown on the dashboard"
   - Analytics: "Partner sees aggregate data — searches/month, active users, popular searches"

2. **Add AI Search Quota row explicitly:**
   | Feature | Starter | Growth | Enterprise |
   |---|---|---|---|
   | AI Search (per user/month) | 50 | 200 | Unlimited |

3. **Add "What happens when quota runs out?"** — small tooltip or FAQ entry: _"Users can still use structured search. AI search resumes next month. Partners can upgrade anytime."_

4. **Add "Partner Revenue Model" banner:**
   > 💡 You charge your users. We charge you. Set your own plan prices for your members.

5. **Simplify currency** — currently showing INR (`₹`). If targeting global partners, add a currency toggle (INR / USD).

---

### 5.4 Partners Page (`/partners`)

**Current:** Hero + benefits + CTA sections.

**Recommended Changes:**

1. **Add "Partner Journey" step-by-step section:**
   ```
   Step 1 → Sign the partner agreement
   Step 2 → Share your brand assets (logo, colors, domain)
   Step 3 → We configure your tenant (48 hours)
   Step 4 → We deploy your site — you test it
   Step 5 → Go live — your users start registering
   Step 6 → You grow — AI search, matchmaking, events, payments — all working
   ```

2. **Add "Live Partner Showcase"** — screenshots of chaturvarnam and matamatrimony with:
   - Partner name + tagline
   - Community size (if shareable)
   - Domain name as a clickable link

3. **Add Partner Benefits in business terms:**
   - "No dev team needed — we maintain the entire tech stack"
   - "Automatic feature upgrades — when we ship AI improvements, all partners benefit"
   - "Your data stays yours — zero lock-in, export anytime"

4. **Replace generic CTA with a two-track CTA:**
   - **Track 1 — Small Community Leader:** "I run a community or temple matrimony service" → contact form with lower-tier options
   - **Track 2 — Established Business:** "I run a matrimony company" → enterprise inquiry with SLA discussion

---

### 5.5 About Us Page (`/about-us`)

**Recommended Structure:**

1. **Mission:** _"We exist to help matrimony organizers — from community volunteers to professional matchmakers — run their service with enterprise-grade technology, without enterprise-grade cost or complexity."_

2. **What Makes EkamBond Different:**
   - Built by matrimony practitioners, not generic SaaS engineers
   - The profile model was designed around Indian matrimony nuances (family reference, property, lifestyle, horoscope-ready)
   - White-label means clients own their brand — EkamBond is invisible to end-users

3. **The Tech:**
   - React / Next.js frontend (modern, fast)
   - Node.js + TypeScript API
   - Azure Blob for photo storage
   - Stripe for payments
   - AI search powered by LLM providers

4. **Vision** — Support 100+ partner communities across South Asia and diaspora globally

---

### 5.6 FAQ Page (`/faq`)

**Add these critical partner-centric questions:**

1. **How long does onboarding take?** — 48 hours for the website, plus testing
2. **Do my users see "EkamBond" anywhere?** — No. Full white-label. Your brand only.
3. **Can I use my own domain?** — Yes. Custom domain setup is standard.
4. **What happens to my data if I leave?** — Export your data at any time, no lock-in.
5. **How does AI search work?** — Users type plain English. Our AI extracts filters and returns matching profiles. Each plan has a monthly quota.
6. **Can I set my own subscription prices for my users?** — Yes. You define plan names and prices. We process payments via Stripe.
7. **Do I need a developer to manage the site?** — No. Content and config changes require no code changes.
8. **What is the profile completion score?** — A percentage shown to users indicating how complete their profile is. Higher completion = better matches.
9. **Are profiles background-checked?** — BG verification is on the roadmap for Q3 2026. Currently users can upload documents voluntarily.
10. **Is pricing in INR only?** — Currently INR. USD pricing available for international partners — contact us.

---

## 6. New Pages Recommended

### 6.1 `/how-it-works` (NEW)
A visual explanation for prospective partners:
- Partner signs up
- Tenant config is filled out
- Site deployed with their branding
- Users register and build profiles
- Matchmaking, AI search, events, payments — all built-in

### 6.2 `/demo` (NEW) — or link to external
- Embed a screen recording of the partner dashboard (profile creation → AI search → recommendation)
- Alternatively, link directly to a sandboxed demo tenant

### 6.3 `/showcase` (NEW)
- Grid of deployed partner websites
- Each card: logo, name, tagline, domain link, "Powered by EkamBond" badge

---

## 7. Why EkamBond Has No Equivalent Competitor

| What competitors do | What EkamBond does |
|---|---|
| **B2C matrimony apps** (Shaadi, BharatMatrimony, Jeevansathi) — serve end-users directly | EkamBond serves **the businesses** that serve end-users |
| **Generic website builders** (Wix, WordPress) — no matrimony domain knowledge, no AI search, no profile model | EkamBond is **purpose-built for matrimony** — 9-section profiles, AI search trained on matrimony context |
| **CRM or matchmaking software** — backend tools only, no user-facing UI | EkamBond delivers a **complete user-facing product** — search, favorites, dashboard, billing — white-labeled for the partner |
| No competitor combines: white-label UI + backend API + AI search + Stripe billing + matrimony-domain profile model | EkamBond does all five as one managed platform |

**The message to communicate:** _"If you are in the matrimony business — whether you are a community organizer, a professional matchmaker, or a regional matrimony brand — EkamBond is your complete tech team. We've built what would take a dev team 2 years to build. You get it in 48 hours."_

---

## 8. Tone & Branding Recommendations

| Current Tone | Recommended Tone |
|---|---|
| Generic SaaS marketing ("AI-Powered", "Global Reach") | Specific and credible ("50 AI searches/month on Bronze", "9-section profile") |
| B2C-style hero image and copy | B2B pitch-deck clarity — ROI, onboarding speed, cost savings |
| Feature names without explanation | Each feature with a 1-sentence "what it does for your business" |
| No social proof from partners | Partner testimonials with name, organization, community size |
| No urgency | "Join the growing network — applications reviewed within 48 hours" |

---

## 9. Priority Order for Implementation

| Priority | Task | Effort |
|---|---|---|
| P0 | Rebuild `/features` page with actual feature list (all 9+ profile sections, AI search, payments, white-label) | 2–3 days |
| P0 | Update homepage MatrimonyServices section with richer descriptions + Partner Journey section | 1 day |
| P1 | Add AI Search spotlight section to homepage | 1 day |
| P1 | Enhance pricing page with AI quota row + "what it means" tooltips + Partner Revenue Model banner | 1 day |
| P1 | Add Partner Journey steps + Live Showcase to `/partners` | 1 day |
| P2 | Add FAQ entries (10 partner-centric questions listed above) | 0.5 day |
| P2 | Create `/how-it-works` page | 2 days |
| P2 | Create `/showcase` page with deployed partner examples | 1 day |
| P3 | Update About Us with technical credibility section | 1 day |
| P3 | Add competitive differentiation block to homepage | 1 day |

---

## 10. Partner Admin Portal — The Biggest Undocumented Gap

> **Source:** `ekam-partner-admin-v4` (API + UI)

The platform ships a **full-featured partner admin portal** (`ekam-partner-admin-v4`) that is completely invisible on the EkamBond marketing website. This is arguably the single biggest gap — because the admin portal is what justifies the platform's B2B value proposition.

### 10.1 What the Admin Portal Contains

#### Dashboard
- **Profile Metrics** — Total profiles, active/inactive counts, gender breakdown, new registrations this month
- **Payment Metrics** — Revenue, active subscriptions, recent transactions
- **Activity Metrics** — Login activity, search activity, favorites, profile views
- **Recent Activities Feed** — Live admin activity timeline

#### Profile Management (CRUD)
- **Paginated profile list** with search, status filter (active/inactive), and gender filter
- **Full profile viewer** — shows all 9 profile sections (personal, address, education, employment, family, lifestyle, hobbies, photos, property)
- **Admin can create profiles** on behalf of users (manual entry flow)
- **Partial profile update** — admin can edit any section
- **Toggle status** — admin can activate or deactivate any profile (with audit trail)

#### Background Check Module
- **Initiate check** on any profile — triggers an external background verification workflow
- **Check history** visible per profile
- _This is LIVE in the admin portal while still marked "Coming Soon" on the marketing site_

#### Brand Config Editor (Server-Driven White-Label)
- Partner-admin can update brand config **from the portal UI** — persisted to the database, no code deployment required
- Config includes:
  - **6 template presets**: modern, classic, elegant, corporate, minimal, vibrant
  - **Brand name** and **tagline**
  - **Logo URL**, small logo, and favicon
  - **Primary / secondary / accent colors** (HSL)
  - **Font family**
  - **Border radius**
  - **Sidebar style**: standard, slim, dark, branded
  - **Login layout**: centered, split, fullscreen
  - **Header style**: minimal, branded, compact
  - **Custom CSS** — arbitrary CSS injected at runtime
- Brand config is returned with the **login response** — applied immediately with zero extra API calls

#### Admin User Management (RBAC — 3 roles)
| Role | Access |
|---|---|
| `partner-admin` | Full access — dashboard, profiles, brand config, admin users, audit log |
| `account-admin` | Dashboard + profiles (read-only) |
| `support-admin` | Profiles (CRUD) + background checks |

- Partner-admin can **create, update, activate/deactivate** account-admin and support-admin users
- Self-protection: partner-admin cannot deactivate their own account
- Role restriction: partner-admin role cannot be created via UI (prevents privilege escalation)

#### Audit Log (Compliance-Grade)
- Every admin action is recorded with: action type, entity affected, who did it, when, from what IP, and full before/after data snapshot
- Tracked events: login, admin user create/update/activate/deactivate, brand config changes, profile status changes
- Filterable by: action type, username, entity, date range
- Sensitive data (passwords, tokens) is sanitized (`***`) in logs

#### Billing & Payments (Admin View)
- Admin view of partner billing/subscription data
- Payment history accessible to admin portal

### 10.2 Gap: None of This is on the EkamBond Website

The marketing website says "Partner Onboarding" with 5 words. The reality is a **production-grade admin portal** with:
- Multi-user team management (3 roles)
- Live brand config editor
- Profile moderation tools
- Background check initiation
- Compliance-level audit trail
- Payment oversight

### 10.3 Page-by-Page Additions for the Admin Portal Gap

#### Add to Features Page — "Partner Admin Portal" Sub-section

Create a dedicated block with these headings:
1. **Your Command Center** — "A full management dashboard: see how many profiles are active, who's subscribing, what your team is doing."
2. **Moderate Profiles** — "View, edit, activate, or deactivate any member profile. Flag issues. Initiate background checks — all from one screen."
3. **Live Brand Updates** — "Change your logo, colors, or layout template instantly from the portal. No code. Reflects in seconds."
4. **Manage Your Admin Team** — "Add account managers or support staff with the exact access level they need. Role-based. Audited."
5. **Audit Trail** — "Every admin action is logged — who changed what, when, from where. Full before/after snapshots. Compliance-ready."

#### Add to Partners Page — "What You Get on Day 1"
- ✅ Partner admin portal with full profile management
- ✅ Live brand config editor (change theme without touching code)
- ✅ Team accounts with role-based access
- ✅ Audit trail for compliance
- ✅ Background check module
- ✅ Dashboard with real-time metrics

#### Add to Pricing Page — "Admin Portal Features"
| Feature | Starter | Growth | Enterprise |
|---|---|---|---|
| Admin portal access | ✅ | ✅ | ✅ |
| Brand config editor | ✅ Basic | ✅ Full | ✅ Full + Custom CSS |
| Admin team seats | 1 | 3 | Unlimited |
| Audit log retention | 30 days | 90 days | 1 year |
| Background checks | — | ✅ | ✅ |

#### Add to FAQ Page
- **"Who manages my members?"** — You use the EkamBond partner admin portal. You can have a team of admins with different access levels.
- **"Can I change my site's look after launch?"** — Yes. Open the brand config editor in your admin portal. Change template, colors, logo, fonts — live in seconds.
- **"Do I get logs of admin activity?"** — Yes. Every action by every admin is logged with full before/after data. Available in the audit log section.
- **"Can I block or deactivate a member?"** — Yes. You can activate or deactivate any profile from the admin portal. Action is logged automatically.

### 10.4 Add a New Page: `/admin-portal` (Demo / Feature)

#### Suggested Sections:
1. **Hero** — "Your Platform, Your Control" — screenshot of the admin dashboard
2. **Dashboard Preview** — Metrics (profiles, payments, activity)
3. **Profile Management** — List view + detail view screenshot
4. **Brand Config Editor** — Before/after theme change demo (show saffron → navy → emerald)
5. **Team Management** — Roles diagram (partner-admin → account-admin / support-admin)
6. **Audit Trail** — Sample audit log table screenshot
7. **CTA** — "Want to see it live? Request a demo →"

---

## 11. Revised Priority Order (Including Admin Portal)

| Priority | Task | Effort |
|---|---|---|
| **P0** | Rebuild `/features` page — add "Partner Admin Portal" section with all 5 capabilities | 2 days |
| **P0** | Update `/partners` page — add "What you get on Day 1" list including admin portal | 0.5 day |
| **P0** | Update homepage — add AI Search spotlight + Platform Differentiation block | 1 day |
| **P1** | Enhance pricing page — add admin team seats, audit retention, background checks rows | 1 day |
| **P1** | Add partner journey steps + live showcase to `/partners` | 1 day |
| **P1** | Create `/admin-portal` page with screenshots/demo walkthrough | 2 days |
| **P2** | Create `/how-it-works` visual flow page | 2 days |
| **P2** | Update FAQ with admin portal questions | 0.5 day |
| **P2** | Create `/showcase` page with deployed partner examples | 1 day |
| **P3** | Update About Us with technical credibility section | 1 day |
| **P3** | Add competitive differentiation block to homepage | 1 day |

---

*Document created: March 2026*
*Prepared by: Antigravity AI Analysis*
*Scope: EkamBond partner-facing website rebranding strategy*
*Updated: March 2026 — Added Partner Admin Portal gap analysis (Section 10)*
