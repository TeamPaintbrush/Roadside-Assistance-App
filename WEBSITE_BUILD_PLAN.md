# RoadAssist Pro — Full Website Build Plan

> **Status:** Planning Phase  
> **Owner:** Paintbrush Marketing  
> **Contact:** Ross — lross@paintbrushmarketing.net · 813-399-4779  
> **Repo:** https://github.com/TeamPaintbrush/Roadside-Assistance-App  
> **Live (current):** https://teampaintbrush.github.io/Roadside-Assistance-App/

---

## Table of Contents

1. [Project Goals](#1-project-goals)
2. [Tech Stack](#2-tech-stack)
3. [Site Architecture & Page Map](#3-site-architecture--page-map)
4. [Design System](#4-design-system)
5. [Component Library](#5-component-library)
6. [Page-by-Page Build Specs](#6-page-by-page-build-specs)
7. [Backend & API Architecture](#7-backend--api-architecture)
8. [Real-Time Features](#8-real-time-features)
9. [Maps & Geolocation](#9-maps--geolocation)
10. [Authentication & User Accounts](#10-authentication--user-accounts)
11. [Payment Integration](#11-payment-integration)
12. [Forms & Lead Capture](#12-forms--lead-capture)
13. [SEO & Metadata](#13-seo--metadata)
14. [Analytics & Tracking](#14-analytics--tracking)
15. [Performance & Optimization](#15-performance--optimization)
16. [Testing Strategy](#16-testing-strategy)
17. [Deployment & CI/CD](#17-deployment--cicd)
18. [Build Phases & Timeline](#18-build-phases--timeline)
19. [Content Checklist](#19-content-checklist)
20. [Open Decisions](#20-open-decisions)

---

## 1. Project Goals

### Primary Goal
Build a **fully functional, conversion-optimized marketing website** for RoadAssist Pro that:
- Clearly communicates the product value to B2B buyers and potential customers
- Captures leads (demo requests, contact form submissions, email sign-ups)
- Demonstrates product credibility with real-feeling UI, live stats, and social proof
- Serves as the public face ahead of the platform launch

### Secondary Goals
- Showcase the AI-powered dispatch technology interactively
- Build SEO authority in the roadside assistance / fleet management space
- Support mobile app download funnels when apps are launched
- Provide a foundation that can evolve into a logged-in customer portal

### Success Metrics
| Metric | Target |
|--------|--------|
| Page load time (LCP) | < 2.5s |
| Lighthouse score | > 90 (all categories) |
| Contact form conversion rate | > 3% |
| Demo request conversion rate | > 5% |
| Mobile bounce rate | < 40% |

---

## 2. Tech Stack

### Frontend (Current — Keep)
| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 16** (App Router) | Static export + SSR flexibility, great DX |
| Language | **TypeScript** | Type safety, better refactoring |
| Styling | **Tailwind CSS 4** | Rapid UI, responsive by default |
| Animations | **Framer Motion** | Production-quality page and element animations |
| Icons | **Lucide React** | Consistent, tree-shakeable icon set |
| Forms | **React Hook Form + Zod** | Lightweight, validated, type-safe |

### Add for Full Functionality
| Layer | Choice | Reason |
|-------|--------|--------|
| CMS (content) | **Contentful** or **Sanity.io** | Non-dev content editing for blogs, testimonials |
| Email | **Resend** | Modern email API, great DX, free tier |
| CRM / Leads | **HubSpot Free** or **Airtable** | Capture demo requests, no-code dashboard |
| Analytics | **Vercel Analytics** + **Google Analytics 4** | Privacy-first + industry-standard |
| Maps | **Mapbox GL JS** | Best-in-class performance, free tier generous |
| Hosting | **Vercel** (upgrade from GitHub Pages) | Edge network, preview deploys, built-in analytics |

### Why Move from GitHub Pages to Vercel
- GitHub Pages only supports static export — no API routes, no server components
- Vercel gives: API routes, edge functions, image optimization, preview URLs per PR, zero config
- Free tier covers everything needed for a marketing site

---

## 3. Site Architecture & Page Map

```
/ (Home)
├── /services
│   ├── /services/battery-jumpstart
│   ├── /services/fuel-delivery
│   ├── /services/lockout-assistance
│   ├── /services/flat-tire-change
│   ├── /services/towing
│   └── /services/emergency-diagnostics
├── /features
│   ├── /features/intelligent-dispatch
│   ├── /features/real-time-tracking
│   ├── /features/technician-app
│   └── /features/fleet-management
├── /how-it-works
├── /pricing
├── /about
├── /blog
│   ├── /blog/[slug] (individual posts)
│   └── /blog/category/[category]
├── /case-studies
│   └── /case-studies/[slug]
├── /contact
├── /demo
│   └── /demo/dispatch-simulator (interactive)
├── /legal
│   ├── /legal/privacy-policy
│   └── /legal/terms-of-service
└── /404
```

### Navigation Structure
**Primary Nav:** Features · Services · How It Works · Pricing · Blog · Contact  
**CTA (always visible):** "Get a Demo" button  
**Footer Nav:** Company · Product · Resources · Legal · Social

---

## 4. Design System

### Color Palette
```css
/* Primary */
--blue-600:    #2563eb   /* Primary action, links */
--blue-700:    #1d4ed8   /* Hover states */
--indigo-600:  #4f46e5   /* Gradient partner */

/* Semantic */
--green-500:   #22c55e   /* Success, available, fast */
--orange-500:  #f97316   /* Warning, fuel */
--red-500:     #ef4444   /* Emergency, alert */
--purple-500:  #a855f7   /* Premium, advanced */

/* Neutrals */
--gray-50:     #f9fafb   /* Page backgrounds */
--gray-100:    #f3f4f6   /* Card backgrounds */
--gray-800:    #1f2937   /* Body text */
--gray-900:    #111827   /* Headings */

/* Dark mode inverses */
--dark-bg:     #0f172a
--dark-surface:#1e293b
--dark-border: #334155
```

### Typography
```css
/* Font stack */
font-family: 'Inter', 'Geist', system-ui, sans-serif;

/* Scale */
--text-xs:   0.75rem    /* Labels, captions */
--text-sm:   0.875rem   /* Body small, nav */
--text-base: 1rem       /* Body copy */
--text-lg:   1.125rem   /* Lead paragraphs */
--text-xl:   1.25rem    /* Section subheadings */
--text-2xl:  1.5rem     /* Card headings */
--text-3xl:  1.875rem   /* Section headings */
--text-4xl:  2.25rem    /* Page headings */
--text-5xl:  3rem       /* Hero headings */
--text-6xl:  3.75rem    /* Hero headline (desktop) */
```

### Spacing & Layout
- Max content width: `1280px` (7xl)
- Section padding: `py-20 lg:py-32`
- Card padding: `p-6 lg:p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges/pills
- Grid: 12-column, with 1→2→3→4 column responsive breakpoints

### Shadows & Elevation
```css
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05)
--shadow-md:  0 4px 6px rgba(0,0,0,0.07)
--shadow-lg:  0 10px 15px rgba(0,0,0,0.10)
--shadow-xl:  0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04)
--shadow-glow:0 0 40px rgba(37,99,235,0.15)  /* Blue glow for CTAs */
```

---

## 5. Component Library

### Layout Components
| Component | File | Description |
|-----------|------|-------------|
| `Navbar` | `components/layout/Navbar.tsx` | Sticky, with scroll-based bg change, mobile drawer |
| `Footer` | `components/layout/Footer.tsx` | 4-column grid, newsletter signup, social links |
| `Section` | `components/layout/Section.tsx` | Consistent padding/width wrapper |
| `Container` | `components/layout/Container.tsx` | Max-width centering wrapper |
| `PageHero` | `components/layout/PageHero.tsx` | Reusable inner-page hero banner |

### UI Primitives
| Component | File | Description |
|-----------|------|-------------|
| `Button` | `components/ui/Button.tsx` | Primary, secondary, ghost, destructive variants + sizes |
| `Badge` | `components/ui/Badge.tsx` | Status indicators, category labels |
| `Card` | `components/ui/Card.tsx` | Base card with hover states |
| `Input` | `components/ui/Input.tsx` | Text, email, phone, textarea with error states |
| `Select` | `components/ui/Select.tsx` | Styled dropdown |
| `Modal` | `components/ui/Modal.tsx` | Accessible dialog for video/forms |
| `Tabs` | `components/ui/Tabs.tsx` | Switchable content panels |
| `Accordion` | `components/ui/Accordion.tsx` | FAQ expand/collapse |
| `Tooltip` | `components/ui/Tooltip.tsx` | Hover help text |

### Marketing Components
| Component | File | Description |
|-----------|------|-------------|
| `HeroSection` | `components/marketing/HeroSection.tsx` | Animated headline, CTA pair, hero visual |
| `FeatureGrid` | `components/marketing/FeatureGrid.tsx` | 3 or 4-up feature cards with icons |
| `ServiceCard` | `components/marketing/ServiceCard.tsx` | Individual service with icon, title, description |
| `StatsBanner` | `components/marketing/StatsBanner.tsx` | Animated count-up statistics row |
| `Testimonial` | `components/marketing/Testimonial.tsx` | Quote + avatar + name/title |
| `TestimonialCarousel` | `components/marketing/TestimonialCarousel.tsx` | Auto-scrolling testimonials |
| `PricingCard` | `components/marketing/PricingCard.tsx` | Tier card with feature list + CTA |
| `PricingToggle` | `components/marketing/PricingToggle.tsx` | Monthly/annual billing switch |
| `HowItWorksStep` | `components/marketing/HowItWorksStep.tsx` | Numbered step with connector line |
| `ComparisonTable` | `components/marketing/ComparisonTable.tsx` | RoadAssist Pro vs competitors |
| `VideoModal` | `components/marketing/VideoModal.tsx` | Play button → modal video player |
| `CTABanner` | `components/marketing/CTABanner.tsx` | Full-width conversion section |
| `LogoCloud` | `components/marketing/LogoCloud.tsx` | Partner / "as seen in" logos |
| `BlogCard` | `components/marketing/BlogCard.tsx` | Post preview with image, category, date |

### Interactive Demo Components
| Component | File | Description |
|-----------|------|-------------|
| `DispatchSimulator` | `components/demo/DispatchSimulator.tsx` | Map + dispatch flow animation |
| `TrackingMockup` | `components/demo/TrackingMockup.tsx` | Animated ETA + technician pin |
| `DashboardPreview` | `components/demo/DashboardPreview.tsx` | Admin dashboard screenshot/mockup |
| `AppScreenshots` | `components/demo/AppScreenshots.tsx` | Mobile app screenshot carousel |

### Form Components
| Component | File | Description |
|-----------|------|-------------|
| `DemoRequestForm` | `components/forms/DemoRequestForm.tsx` | Multi-step: contact info → use case → schedule |
| `ContactForm` | `components/forms/ContactForm.tsx` | Name, email, phone, message, submit |
| `NewsletterSignup` | `components/forms/NewsletterSignup.tsx` | Email + subscribe button, inline |

---

## 6. Page-by-Page Build Specs

### 6.1 Home Page (`/`)

**Goal:** Communicate value instantly, drive demo requests and scroll depth.

**Sections (in order):**
1. **Hero** — Animated headline "Help Arrives Faster When Seconds Count", sub-copy, two CTAs: "Get a Demo" (primary) + "See How It Works" (secondary). Background: animated gradient blobs + optional looping video background at low opacity.
2. **Social Proof Bar** — Logos of partners/fleet companies, or stat strip: "15 min avg response · 4.9★ rating · 99.9% uptime · 50K+ assists"
3. **Problem → Solution** — Two-column layout: left = the pain (slow, opaque, fragmented), right = the fix (fast, transparent, unified). Use before/after visual.
4. **Services Grid** — 6 service cards with icons, hover animations, links to service detail pages.
5. **How It Works** — 4-step horizontal flow with animated connectors: Request → Dispatch → Track → Resolved.
6. **Feature Highlights** — 3 rotating tabs: For Customers · For Technicians · For Fleet/Business. Each tab shows a product screenshot/mockup + bullet list.
7. **Stats Section** — Count-up animation on scroll: response time, coverage, rating, assists completed.
8. **Testimonials** — Auto-scrolling carousel of 6–8 customer/partner quotes.
9. **Competitive Comparison** — Simple table: RoadAssist Pro vs Traditional AAA/roadside.
10. **Blog Preview** — Latest 3 blog posts (pull from CMS).
11. **CTA Banner** — "Ready to transform your roadside experience?" + Demo form inline or link to /demo.
12. **Footer**

---

### 6.2 Services Pages (`/services` + 6 sub-pages)

**`/services` (hub):** Grid of all 6 service cards with short description and "Learn More" link.

**Each service sub-page (e.g., `/services/battery-jumpstart`):**
- Hero with service icon + title + one-line description
- "What's included" bullet list
- How the service works (3-step mini flow)
- Response time & coverage callout
- Technician credentials section
- Pricing preview (or "request a quote" CTA)
- Related services row
- CTA: "Request this service" → links to contact/demo

---

### 6.3 Features Pages (`/features` + 4 sub-pages)

**`/features` (hub):** Overview of the platform with tabs or cards linking to sub-pages.

**Sub-pages:**
- `/features/intelligent-dispatch` — AI matching algorithm explainer, dispatch dashboard screenshot, flow diagram
- `/features/real-time-tracking` — Map mockup, ETA accuracy callout, notification examples
- `/features/technician-app` — App screenshots, job workflow, offline capability
- `/features/fleet-management` — Analytics dashboard, reporting, bulk service management

---

### 6.4 How It Works (`/how-it-works`)

Dedicated long-form page:
- Detailed 4-step flow with illustrations or Lottie animations
- Side-by-side: customer view vs. technician view at each step
- Video walkthrough embed (YouTube or self-hosted)
- FAQ accordion below the flow

---

### 6.5 Pricing (`/pricing`)

**Sections:**
1. Headline + billing toggle (monthly / annual — show savings)
2. Three pricing tiers:
   - **Basic** — Individual/personal coverage
   - **Business** — Small fleet or service company
   - **Enterprise** — Custom, contact sales
3. Feature comparison table (full matrix, all tiers)
4. FAQ accordion (billing, cancellation, coverage area, SLA)
5. Money-back guarantee / trust badges
6. CTA: "Start Free Trial" or "Talk to Sales"

**Implementation notes:**
- Pricing data in a `pricing.config.ts` file — easy to update without touching JSX
- Toggle state managed with `useState`, no external library needed
- Highlight the recommended "Business" tier with a "Most Popular" badge

---

### 6.6 About (`/about`)

**Sections:**
1. Mission statement hero
2. Our story — narrative timeline of company milestones
3. Team section — headshots, names, titles, LinkedIn links (placeholder until photos provided)
4. Values — 4–6 company values with icons
5. Stats — company-level metrics (cities covered, technicians, years in business)
6. Partners / investors logos
7. CTA: "Join our team" + "Work with us"

---

### 6.7 Blog (`/blog` + `/blog/[slug]`)

**List page:**
- Category filter tabs (Product Updates, Industry, How-To, Company News)
- Featured post (large card, top)
- Post grid (3 columns)
- Pagination or infinite scroll

**Post page:**
- Hero image + title + author + date + estimated read time
- Rich body content (Markdown/Portable Text from CMS)
- Table of contents (sticky sidebar on desktop)
- Related posts (3 cards, same category)
- Newsletter signup inline CTA mid-article
- Share buttons (Twitter/X, LinkedIn, copy link)

**CMS Integration (Sanity.io recommended):**
```
Studio at: studio.roadassistpro.com (or Sanity hosted)
Schema: Post { title, slug, author, category, publishedAt, excerpt, body, featuredImage, seo }
```

---

### 6.8 Contact (`/contact`)

**Sections:**
1. Contact hero with clear headline
2. Two-column: Form (left) + Contact info + Map (right)
3. Form fields: Name, Company, Email, Phone, Message, Service Interest (dropdown), How did you hear about us (dropdown)
4. Below form: office address (if applicable), email, phone, social links
5. FAQ mini-section: "Common questions before reaching out"

**Form submission flow:**
- Client-side validation (Zod schema)
- API route: `POST /api/contact`
- Email notification via Resend to Ross's email
- Lead record created in HubSpot/Airtable
- Success state: Inline thank-you message (no page redirect)
- Error state: User-friendly error + retry option

---

### 6.9 Demo (`/demo`)

**Sections:**
1. Headline: "See RoadAssist Pro in Action"
2. **Interactive Dispatch Simulator** — User picks a location on a map, selects a service type, clicks "Request Help". Animated dots (simulated technicians) appear. One gets highlighted, an ETA counts down, a "Technician on the way" card slides in. Pure frontend simulation — no real backend needed.
3. **Dashboard Preview Carousel** — Tabbed screenshots of: Customer App · Technician App · Dispatch Dashboard · Analytics
4. **Video Demo** — Embedded walkthrough video (YouTube embed, unlisted)
5. **Demo Request Form** — Multi-step: Step 1 (contact info) → Step 2 (company size + use case) → Step 3 (pick a time via Calendly embed or manual scheduling)

---

### 6.10 Legal Pages

- `/legal/privacy-policy` — Standard privacy policy (template from Termly or Iubenda)
- `/legal/terms-of-service` — Standard ToS

**Implementation:** Pull from CMS or store as MDX files in `/content/legal/`.

---

## 7. Backend & API Architecture

### Recommended: Next.js API Routes (Serverless)

Since we're moving to Vercel, use Next.js API routes for all backend logic. No separate server needed.

```
src/app/api/
├── contact/
│   └── route.ts          POST — receives contact form, sends email, creates CRM record
├── demo/
│   └── route.ts          POST — receives demo request, creates calendar event or sends to CRM
├── newsletter/
│   └── route.ts          POST — adds email to mailing list
└── blog/
    └── [slug]/
        └── route.ts      GET — fetches blog post from CMS (if using API-based CMS)
```

### External Services Architecture
```
Client → Next.js API Route → Resend (email)
                           → HubSpot API (CRM record)
                           → Slack webhook (instant Slack notification to team)
```

### Environment Variables Needed
```env
RESEND_API_KEY=
HUBSPOT_API_KEY=
SLACK_WEBHOOK_URL=
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=
CALENDLY_URL=
```

---

## 8. Real-Time Features

### Demo Page Simulation (No Backend Needed)
The dispatch simulator on `/demo` is **fully client-side**:
- Uses `setTimeout` + `requestAnimationFrame` for animations
- Mapbox GL JS for the map
- Simulated technician positions seeded from a static JSON config
- No WebSocket, no database — pure animation

### Future: Real Platform Integration
When the actual platform is built, the marketing site can embed live widgets:
- Real-time status widget (WebSocket from platform backend)
- Live counters (assists today, current uptime)
- These are Phase 3+ features

---

## 9. Maps & Geolocation

### Tool: Mapbox GL JS

**Why Mapbox over Google Maps:**
- Better free tier (50,000 map loads/month free)
- More customizable visual styles
- Faster tile loading performance
- Better React integration (`react-map-gl`)

### Implementation
```bash
npm install mapbox-gl react-map-gl
npm install @types/mapbox-gl
```

### Map Usage by Page
| Page | Map Usage |
|------|-----------|
| `/demo` | Interactive dispatch simulator, technician dots, route line |
| `/contact` | Static office location pin (if applicable) |
| `/services/[slug]` | "Coverage area" heatmap or simple region highlight |
| `/about` | Optional: "Where we operate" region map |

### Map Component Structure
```tsx
// components/maps/DispatchMap.tsx
// - Shows simulated technician locations as animated markers
// - Accepts: userLocation, technicianPositions[], selectedService
// - Emits: onTechnicianSelected

// components/maps/CoverageMap.tsx
// - Choropleth showing coverage density
// - Static, no interaction needed
```

---

## 10. Authentication & User Accounts

### Phase 1 (Marketing Site) — No Auth Required
The marketing website does not need user accounts. All pages are public.

### Phase 2 (Portal Preview)
If a customer portal is added later:
- **Tool:** NextAuth.js (Auth.js v5) or Clerk.com
- **Recommendation:** Clerk — zero-config, beautiful UI components, handles OAuth + email magic links
- **Scope:** `/dashboard/*` routes only, protected by middleware

---

## 11. Payment Integration

### Phase 1 — Not Required
Marketing site does not process payments.

### Phase 2 — Pricing Page "Start Trial" Flow
- **Tool:** Stripe
- Stripe Checkout for subscription creation
- Webhooks to update subscription status in database
- API route: `POST /api/stripe/create-checkout-session`

---

## 12. Forms & Lead Capture

### Library: React Hook Form + Zod

```bash
npm install react-hook-form zod @hookform/resolvers
```

### Contact Form Flow
```
User fills form
  → Client validates (Zod schema, inline errors)
  → POST /api/contact
  → Server validates again (same Zod schema)
  → Resend sends email to lross@paintbrushmarketing.net
  → HubSpot creates contact record
  → Slack posts notification to #leads channel
  → Response: 200 OK
  → Client shows success message
```

### Lead Data Schema
```typescript
const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
  service: z.enum(['battery', 'fuel', 'lockout', 'tire', 'towing', 'diagnostics', 'other']).optional(),
  source: z.string().optional(),  // utm_source from URL params
})
```

### Anti-Spam
- Honeypot hidden field (simple bot trap)
- Rate limiting on API route: max 5 submissions per IP per hour (Vercel Edge middleware)
- Optional: hCaptcha (more privacy-respecting than reCAPTCHA)

---

## 13. SEO & Metadata

### Fix First: Layout Metadata
```typescript
// src/app/layout.tsx — update immediately
export const metadata: Metadata = {
  title: {
    default: 'RoadAssist Pro — Roadside Assistance Powered by AI',
    template: '%s | RoadAssist Pro',
  },
  description: 'Professional roadside assistance with AI-powered dispatch, real-time tracking, and 15-minute average response times. Available 24/7 nationwide.',
  keywords: ['roadside assistance', 'breakdown service', 'towing', 'battery jumpstart', 'AI dispatch'],
  openGraph: {
    type: 'website',
    url: 'https://roadassistpro.com',
    siteName: 'RoadAssist Pro',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}
```

### Page-Level Metadata
Every page gets unique `title`, `description`, and Open Graph tags via `generateMetadata()` or static `export const metadata`.

### Technical SEO
- `sitemap.ts` — auto-generated XML sitemap via Next.js
- `robots.ts` — allow all, disallow `/api/`
- Canonical URLs on all pages
- Schema.org structured data:
  - `LocalBusiness` on home/contact
  - `Service` on each service page
  - `BlogPosting` on each blog post
  - `FAQPage` on how-it-works and pricing FAQ sections

### Core Web Vitals Targets
| Metric | Target | How |
|--------|--------|-----|
| LCP | < 2.5s | Preload hero image, use next/image |
| CLS | < 0.1 | Reserve space for dynamic content |
| FID/INP | < 100ms | Minimize JS on initial load |

---

## 14. Analytics & Tracking

### Tools
1. **Vercel Analytics** — Built-in, privacy-first, zero config
2. **Google Analytics 4** — Industry standard, required for ad tracking
3. **Microsoft Clarity** (optional) — Free heatmaps and session recordings

### Events to Track
```typescript
// Key conversion events
gtag('event', 'demo_request_submitted', { service_type, company_size })
gtag('event', 'contact_form_submitted')
gtag('event', 'cta_clicked', { button_label, page_section })
gtag('event', 'video_played', { video_title })
gtag('event', 'pricing_tier_viewed', { tier_name })
```

### UTM Parameter Capture
Capture `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` from URL on landing, store in sessionStorage, attach to form submissions.

---

## 15. Performance & Optimization

### Image Strategy
- All images through `next/image` (automatic WebP, lazy load, responsive sizes)
- Hero background: use CSS gradient instead of image where possible
- Service icons: inline SVG or Lucide (no image requests)
- OG image: static 1200×630 PNG in `/public/`

### Font Strategy
```typescript
// next/font/google — zero layout shift, self-hosted automatically
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

### Bundle Size
- Analyze with `@next/bundle-analyzer`
- Code-split heavy pages (blog, demo map)
- Dynamic imports for Mapbox (only loaded on demo/contact pages)
```typescript
const DispatchMap = dynamic(() => import('@/components/maps/DispatchMap'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})
```

### Caching Strategy (Vercel)
- Static pages: `cache: 'force-cache'` — rebuild on deploy
- Blog posts: ISR with `revalidate: 3600` (1 hour)
- API routes: `no-cache` for form submissions

---

## 16. Testing Strategy

### Unit Tests — Vitest
```bash
npm install -D vitest @testing-library/react @testing-library/user-event jsdom
```
Test: form validation logic, utility functions, pricing calculations

### Integration Tests — Playwright
```bash
npm install -D @playwright/test
```
Test flows:
- Contact form: fill → submit → success message
- Demo request: multi-step form navigation
- Navigation: all links work, 404 page works
- Mobile: hamburger menu open/close

### Visual Regression — Chromatic (optional)
Snapshot each component, catch unintended style changes on PR.

### Accessibility — axe-core
```bash
npm install -D @axe-core/playwright
```
Run a11y checks on every page in Playwright suite.

---

## 17. Deployment & CI/CD

### Move from GitHub Pages → Vercel

**Steps:**
1. Import repo at vercel.com → "Import Git Repository"
2. Framework: Next.js (auto-detected)
3. Build command: `npm run build` (already correct)
4. Remove `output: 'export'` from `next.config.ts` (Vercel handles this automatically)
5. Set all environment variables in Vercel dashboard
6. Add custom domain: `roadassistpro.com`

### CI Pipeline (GitHub Actions)
```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  test:
    - npm ci
    - npm run lint
    - npm run type-check
    - npm run test
    - npx playwright test
  deploy:
    needs: test
    # Vercel handles deploy automatically on push to main
```

### Preview Deployments
Vercel creates a unique URL for every PR (e.g., `project-abc123.vercel.app`). Use this for design review before merging.

### Custom Domain Setup
1. Buy domain: `roadassistpro.com` (Namecheap or Google Domains)
2. Point DNS to Vercel nameservers
3. Vercel auto-provisions SSL cert via Let's Encrypt
4. Add `www` redirect to apex domain

---

## 18. Build Phases & Timeline

### Phase 1 — Foundation (Week 1–2) ✅ Complete
**Goal:** Solid codebase, design system, core pages live on Vercel

- [ ] Move hosting from GitHub Pages to Vercel
- [x] Set up project structure (components/, lib/, content/)
- [x] Build component library (Button, Card, Badge, Section, Container)
- [x] Update metadata (title, description, OG image)
- [x] Rebuild Navbar with scroll behavior + mobile drawer
- [x] Build Footer component
- [x] Refactor home page using component library
- [x] Set up Inter font via next/font
- [x] Configure Tailwind design tokens

**Deliverable:** Home page live at Vercel URL, all existing content migrated

---

### Phase 2 — Core Pages (Week 2–3) ✅ Complete
**Goal:** All major marketing pages built and filled with real content

- [x] Services hub page + 6 service detail pages
- [x] How It Works dedicated page
- [x] Features overview page
- [x] Feature sub-pages: intelligent-dispatch, real-time-tracking, technician-app, fleet-management
- [x] About page (placeholder team section)
- [x] Pricing page with toggle + comparison table
- [x] Contact page with working form (Resend integration — needs RESEND_API_KEY env var in Vercel)
- [x] Privacy Policy + Terms of Service pages
- [x] Set up 404 page
- [x] Wire up all internal navigation links
- [x] Fix CTA buttons to point to /demo where appropriate

**Deliverable:** Full site navigable, contact form sends email to Ross

---

### Phase 3 — Interactive Demo ✅ Complete

- [x] Build DispatchSimulator (CSS/SVG map, 6 tech markers, 4-phase animation, ETA countdown)
- [x] Build PlatformTabs (Customer App · Technician App · Dispatch Dashboard · Analytics mockups)
- [x] Build multi-step DemoRequestForm (3 steps: contact → use case → confirm)
- [x] Wire demo request form to `/api/demo` route (Resend + console fallback)
- [x] Build `/demo` page with hero, simulator, platform tabs, stats strip, form
- [x] Add dash animation to globals.css for route line
- [x] Updated Navbar "Get a Demo" CTA → /demo
- [x] Updated Footer company links → includes Live Demo

**Note:** CSS/SVG map used instead of Mapbox — no API key required, fully self-contained. Upgrade to Mapbox GL JS in Phase 5 if desired.

**Deliverable:** `/demo` — live simulator, platform mockups, 3-step demo request form

---

### Phase 4 — Content & SEO (Week 4–5)
**Goal:** Rank for target keywords, establish content presence

- [ ] Set up Sanity.io CMS + schema
- [ ] Build Blog list page + post template
- [ ] Write + publish 5 seed blog posts (see content checklist)
- [ ] Add Schema.org structured data to all pages
- [ ] Generate XML sitemap
- [ ] Set up Google Analytics 4 + Vercel Analytics
- [ ] Set up Google Search Console
- [ ] Add Open Graph images for all main pages
- [ ] Implement UTM capture on forms

**Deliverable:** Blog live, site indexed by Google, analytics flowing

---

### Phase 5 — Polish & Launch (Week 5–6)
**Goal:** Production-ready, performance-optimized, tested

- [ ] Lighthouse audit — hit 90+ on all pages
- [ ] Playwright test suite passing
- [ ] Accessibility audit (axe-core), fix issues
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Load test contact/demo API routes
- [ ] Connect custom domain + SSL
- [ ] Set up error monitoring (Sentry — free tier)
- [ ] Final content review + copyediting
- [ ] Soft launch + feedback round

**Deliverable:** Live at `roadassistpro.com` with all pages, analytics, and forms working

---

## 19. Content Checklist

### Copy Needed
- [ ] Final tagline / hero headline (confirm with Ross)
- [ ] "About" company story narrative (200–300 words)
- [ ] Team bios + headshots (or decision to use illustrated avatars)
- [ ] 6–8 customer/partner testimonials with names + companies
- [ ] 3–5 partner/client logos for logo cloud
- [ ] Pricing tier names + feature lists + prices
- [ ] Coverage area description (current cities/regions served)
- [ ] FAQ answers (10–15 questions for pricing + how it works pages)

### Media Needed
- [ ] Hero background image or video (high-quality, licensed)
- [ ] OG image (1200×630, branded)
- [ ] Service illustrations or icons (6 custom icons)
- [ ] Product screenshots (dispatch dashboard, customer app, technician app)
- [ ] Team headshots (if applicable)
- [ ] Demo/walkthrough video (even a screen recording works for v1)

### Blog Posts to Write (Seed Content)
1. "Why 30-Minute Response Times Are Costing Roadside Assistance Companies Customers"
2. "The Role of AI in Modern Roadside Dispatch Systems"
3. "What to Do When Your Car Breaks Down: A Step-by-Step Guide"
4. "How Real-Time GPS Tracking Is Changing Customer Expectations"
5. "Battery Failure vs. Alternator Failure: How Technicians Diagnose on the Roadside"

---

## 20. Open Decisions

These need answers before or during build:

| Decision | Options | Recommendation | Owner |
|----------|---------|----------------|-------|
| Custom domain | roadassistpro.com · getroadsassist.com | roadassistpro.com — clear, professional | Ross |
| CMS | Sanity.io · Contentful · None (MDX) | Sanity — best DX, free tier, great image pipeline | Dev |
| Pricing model | Published prices · "Contact us" · Free trial | Publish tiers — reduces friction for B2B | Ross |
| Demo video | Screen recording · Professional production | Screen recording for v1, upgrade later | Ross |
| Team page | Real headshots · Illustrated avatars · Skip for now | Skip for v1 unless photos are available | Ross |
| Scheduling | Calendly embed · Manual "we'll reach out" | Calendly — instant, no back-and-forth | Dev |
| Blog platform | Built-in (Sanity) · Substack · Medium cross-post | Built-in for SEO ownership | Dev |
| Analytics | GA4 only · Vercel only · Both | Both — different insights | Dev |

---

*Last updated: 2026-06-10 — Paintbrush Marketing*
