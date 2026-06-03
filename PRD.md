# PRD — Javali Ajayakumar · Personal Portfolio Website

**Document Version:** 1.0  
**Author:** Javali Ajayakumar (AJAYMYTH)  
**Status:** Ready for Development  
**Tech Stack:** Astro.js · Tailwind CSS v4 · TypeScript · Vercel  
**Design Inspiration:** Vercel.com — pitch-black, monochrome, precision typography, surgical white accents  

---

## 1. Overview

A personal portfolio website that positions Javali Ajayakumar as a serious AIML developer and AI-powered app builder. The site must feel like a product, not a resume — dark, confident, fast, and memorable. The aesthetic follows a "pitch-black product site" direction inspired by Vercel: black backgrounds, white/cyan accents, sharp grid layouts, and subtle motion that rewards attention.

**Live target:** `ajaymyth.vercel.app` (or custom domain)  
**Primary audience:** Recruiters, freelance clients (Upwork), open-source contributors, college evaluators  
**Core objective:** Convert visitors into leads — Upwork, LinkedIn, or direct email contact

---

## 2. Design System

### 2.1 Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#000000` | Page background |
| `--bg-surface` | `#0a0a0a` | Cards, panels |
| `--bg-elevated` | `#111111` | Hover states, subtle dividers |
| `--border` | `#1f1f1f` | All borders |
| `--border-hover` | `#333333` | Hover borders |
| `--text-primary` | `#ffffff` | Headlines, emphasis |
| `--text-secondary` | `#888888` | Body text, descriptions |
| `--text-muted` | `#444444` | Timestamps, metadata |
| `--accent-cyan` | `#00d8ff` | AfterLink brand, primary CTAs, glows |
| `--accent-white` | `#ffffff` | Secondary CTAs, highlights |

### 2.2 Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Name | `DM Sans` | 700 | `clamp(3rem, 8vw, 6rem)` |
| Section Headings | `DM Sans` | 600 | `1.75rem – 2.5rem` |
| Body / Paragraphs | `DM Sans` | 400 | `1rem` |
| Code / Mono / Tags | `JetBrains Mono` | 400–500 | `0.85rem` |

### 2.3 Motion Principles

- **Page load:** Staggered fade-in-up for hero elements (name → tagline → CTA), 60ms delays
- **Scroll reveals:** `IntersectionObserver` with `opacity: 0 → 1` + `translateY(20px → 0)`, 400ms ease-out
- **Hover states:** Border glow (cyan for AfterLink card), card lift (`translateY(-2px)`), 150ms ease
- **AfterLink hero stat counters:** Count-up animation on scroll into view
- **Gradient mesh background:** Subtle animated radial gradient shift in hero (slow, 8s cycle)
- **No jank rule:** All animations use `will-change: transform, opacity` and respect `prefers-reduced-motion`

### 2.4 Layout Grid

- Max content width: `1100px`
- Gutters: `24px` (mobile), `48px` (desktop)
- Section vertical spacing: `120px` (desktop), `80px` (mobile)
- All sections: `padding-inline: clamp(1rem, 5vw, 3rem)`

---

## 3. Site Structure

```
/                → Hero + About (single scroll page)
/#projects       → Projects section (anchor)
/#skills         → Skills section (anchor)
/#experience     → Education & Activities (anchor)
/#contact        → Contact section (anchor)
/projects/afterlink  → AfterLink dedicated project page (optional v2)
```

The site is a **single-page application** with smooth anchor navigation. Each section is a full-width panel with consistent internal padding.

---

## 4. Sections — Full Spec

---

### 4.1 Navigation

**Type:** Fixed top navbar, transparent on load → blurred dark (`backdrop-blur-md bg-black/70`) on scroll  
**Left:** `AJAYMYTH` wordmark in `JetBrains Mono`, white  
**Right:** Nav links (`About · Projects · Skills · Contact`) + `GitHub ↗` external link  
**Mobile:** Hamburger → full-screen overlay menu with staggered link entrance  

```
[ AJAYMYTH ]          About  Projects  Skills  Contact  GitHub ↗
```

---

### 4.2 Hero Section

**Layout:** Centered, full viewport height  
**Background:** Pure black with an animated radial gradient glow (cyan `#00d8ff`, 8% opacity) slowly pulsing behind the name  

**Content structure:**

```
[ Badge pill ]  ← "AIML Developer · Diploma Student · Karnataka, India"

[ Name ]        ← "Javali Ajayakumar" — DM Sans 700, massive display size
                   Animates in: word by word, fade + slide-up, 60ms stagger

[ Tagline ]     ← "I build AI-powered apps, real-time protocols,
                   and developer tools that actually ship."
                   Secondary text color, medium weight

[ CTA Row ]     ← [ View Projects → ]  [ Download Resume ↓ ]
                   Primary: white bg / black text
                   Secondary: outlined / border-white

[ Stat Row ]    ← 4 numbers in a horizontal strip:
                  19 Repos  |  2 npm Packages  |  3 AI Apps  |  1 Custom Protocol
```

**Scroll indicator:** Thin animated chevron at bottom center  

---

### 4.3 About Section

**Layout:** Two columns (60% text / 40% card) on desktop, stacked on mobile  

**Left column — text:**
```
## About Me

Short 3-paragraph bio:
1. Who I am — Diploma student in AIML at GTTC College Magadi, building real
   things while still in school.
2. What I do — AI-powered web apps (React/Node.js), real-time protocols
   (AfterLink), automation workflows (n8n, Claude API).
3. Where I'm going — Freelancing on Upwork, competing in Karnataka State
   Skill Olympics (AWS Cloud Computing), building in public.
```

**Right column — quick-info card (bordered, dark surface):**
```
┌─────────────────────────────┐
│  📍 Hagaribommnahalli, KA   │
│  🎓 DAIML — GTTC Magadi     │
│  💼 Open to freelance work   │
│  ⚡ Available for projects   │
│  🔗 ORCID: 0009-0000-...    │
└─────────────────────────────┘
```

---

### 4.4 Projects Section

**Heading:** `Projects` — with a subtle `//` prefix in muted color  
**Layout:** Featured project (full width) + project grid (2-col on desktop)  

#### 4.4.1 Featured Project — AfterLink

A premium, wide card with a distinct cyan glow border on hover. This card must visually dominate the section.

```
┌────────────────────────────────────────────────────────────────┐
│  [AfterLink]                               [Featured · v1.2.1] │
│                                                                  │
│  A custom application-layer binary TCP protocol for Node.js.    │
│  10-byte frames, persistent connections, native pub/sub,        │
│  Zod schema validation, and sub-1ms latency.                    │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌──────────────┐  │
│  │ 30,167   │  │ 0.033ms  │  │ 76%       │  │ 10B          │  │
│  │ msg/sec  │  │ latency  │  │ > WS      │  │ header       │  │
│  └──────────┘  └──────────┘  └───────────┘  └──────────────┘  │
│                                                                  │
│  Tags: #binary-protocol  #nodejs  #real-time  #pub-sub  #tcp   │
│                                                                  │
│  [ npm install afterlink ]        [Docs ↗]  [GitHub ↗]        │
└────────────────────────────────────────────────────────────────┘
```

- Stats use **count-up animation** triggered on scroll into view
- Border: `1px solid #1f1f1f` default → `1px solid #00d8ff` on hover (with `box-shadow: 0 0 30px rgba(0,216,255,0.15)`)
- Background: `#0a0a0a` with a faint diagonal noise texture overlay

#### 4.4.2 Secondary Projects Grid

Each card: dark surface, bordered, hover lift

| Project | Stack | Description |
|---|---|---|
| **TaskAIR** | Node.js · Supabase · Socket.IO · AES-256-GCM | CLI + web dashboard task manager with encrypted Google Drive storage |
| **AttendanceByIntelligence** | Node.js · Supabase · WhatsApp API | Smart attendance system with WhatsApp integration and Excel import for GTTC |
| **CodeMind AI** | React · Vite · OpenRouter · Google OAuth | AI coding assistant with Drive-backed chat history |
| **AJax AI** | Supabase · pgvector · Crawlee · SSE | Autonomous web-crawling RAG chatbot with streaming responses |
| **SchemaOrbit Email Agent** | n8n · Claude API · Gmail API · Google Sheets | Automated multi-account email agent with anti-spam and status tracking |
| **OwnBuildX AI** | RAG · Self-improving · Chatbot | Self-improving RAG chatbot with document ingestion |

**Card anatomy:**
```
┌───────────────────────────────┐
│ [Tag: AI App]           [↗]   │
│                               │
│ Project Name                  │
│ Short one-line description    │
│                               │
│ [React] [Node.js] [Supabase]  │
└───────────────────────────────┘
```

---

### 4.5 Skills Section

**Layout:** Two columns — Skill Categories (left) + Visual grid (right)  
**No boring progress bars.** Use icon + label tiles instead.

#### Categories:

**Languages & Runtime**
`JavaScript` · `TypeScript` · `Node.js` · `Python` · `HTML/CSS`

**Frameworks & Libraries**
`React` · `Vite` · `Astro.js` · `Express.js` · `Tailwind CSS` · `Socket.IO`

**AI / ML**
`Claude API` · `OpenRouter` · `RAG Pipelines` · `pgvector` · `Supabase Vector`

**Cloud & DevOps**
`AWS (EC2, S3, Lambda)` · `Vercel` · `Google Cloud` · `n8n` · `GitHub Actions`

**Databases & Storage**
`Supabase` · `PostgreSQL` · `Google Drive API` · `Google Sheets API`

**Protocols & Networking**
`TCP/IP` · `AfterLink Binary Protocol` · `WebSocket` · `HTTP/REST` · `JWT · TLS`

**Tools**
`Git` · `GitHub` · `VS Code` · `Postman` · `Figma (basic)`

**Skill tile design:**
```
┌────────────────┐
│  [icon]        │
│  Node.js       │
└────────────────┘
```
Tiles: `bg-[#0a0a0a]` · `border border-[#1f1f1f]` · hover → `border-[#333]` · `rounded-lg` · subtle entrance stagger

---

### 4.6 Experience & Education Section

**Layout:** Vertical timeline — alternating left/right on desktop, left-aligned on mobile  
**Timeline line:** `1px solid #1f1f1f` with a glowing dot at each entry

#### Timeline entries:

```
2025 – Present
AIML Developer · SchemaOrbit
  Lead generation automation — LinkedIn prospecting, n8n workflows,
  Claude API email agent, Google Sheets tracking

2025 – Present
Diploma in AI & ML · GTTC College Magadi, Karnataka
  Karnataka State Skill Olympics — AWS Cloud Computing competitor

2025
AfterLink — Open Source Protocol
  Published to npm (afterlink), built full docs site on Astro.js/Vercel
  GitHub: AJAYMYTH/AfterLink

2024 – 2025
Multiple AI Projects
  TaskAIR, CodeMind AI, AJax AI, AttendanceByIntelligence
  All shipped with full PRDs and live demos

2024
Freelance AI App Developer — Upwork
  AI app development · Content creation · $25–45/hr target rate
```

---

### 4.7 Activities & Interests Section

**Layout:** Horizontal card strip (scroll on mobile)  
**Cards (icon + label + short note):**

| Icon | Title | Note |
|---|---|---|
| 🏆 | Karnataka Skill Olympics | AWS Cloud Computing — State level competitor |
| 🎵 | Myth Musics and More | YouTube music channel |
| 🎮 | AJAY GAMING IK | Kannada-language PC & mobile gaming content |
| 📦 | Open Source | AfterLink published on npm with docs |
| 🤖 | AI Systems Builder | n8n, Claude API, RAG pipelines |
| 🎓 | Research Interest | AI-enabled radar scheduling, SSA/ISRO domain |

---

### 4.8 Contact Section

**Heading:** `Let's build something.`  
**Subheading:** `Available for freelance projects, collaborations, and internships.`

**Layout:** Centered, two-column link grid + a contact form

**Direct links:**
```
[GitHub ↗]        github.com/AJAYMYTH
[npm ↗]           npmjs.com/package/afterlink
[ORCID ↗]         orcid.org/0009-0000-4829-6726
[Upwork ↗]        (Upwork profile link)
[LinkedIn ↗]      (LinkedIn profile link)
```

**Contact form fields:**
- Name
- Email
- Message
- `[ Send Message → ]` button

Form submission: use [Formspree](https://formspree.io) or Astro API route with email service (Resend/Nodemailer).

---

### 4.9 Footer

```
[ AJAYMYTH ]                     © 2026 Javali Ajayakumar · MIT

Made with Astro.js + Tailwind v4 · Deployed on Vercel

GitHub · npm · ORCID · LinkedIn
```

---

## 5. AfterLink Dedicated Project Page (v2 / Optional)

Route: `/projects/afterlink`

Sections:
1. **Hero** — Full-width with protocol frame diagram (animated byte-by-byte reveal)
2. **What is AfterLink** — Elevator pitch
3. **Features matrix** — Tabular comparison (AfterLink vs WebSocket vs Socket.io vs gRPC)
4. **Performance stats** — Animated bar chart (30,167 vs 17,200 vs 12,000 msg/sec)
5. **How it works** — 3-step visual (TCP Connect → Binary Frame → Route & Respond)
6. **Quick start code block** — Syntax-highlighted npm install + server/client example
7. **Links** — Docs · GitHub · npm

---

## 6. Technical Specification

### 6.1 Framework & Build

```
astro@latest                   # Static site generator
@astrojs/tailwind              # Tailwind CSS v4 integration
@astrojs/react                 # React islands for interactive components
tailwindcss@^4.0               # Utility-first CSS, CSS variables config
typescript                     # Strict mode enabled
astro-icon                     # Icon integration (Lucide/Phosphor)
```

### 6.2 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects/
│   │   │   ├── ProjectsSection.astro
│   │   │   ├── AfterLinkCard.astro
│   │   │   └── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Timeline.astro
│   │   ├── Activities.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/
│   │       └── afterlink.astro
│   ├── styles/
│   │   └── global.css          # Tailwind v4 @theme block + custom CSS
│   └── data/
│       ├── projects.ts
│       └── skills.ts
├── public/
│   ├── resume.pdf
│   └── og-image.png
├── astro.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

### 6.3 Tailwind v4 Theme Configuration

Tailwind v4 uses CSS variables in a `@theme` block. Key tokens:

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  --color-bg-base: #000000;
  --color-bg-surface: #0a0a0a;
  --color-bg-elevated: #111111;
  --color-border: #1f1f1f;
  --color-border-hover: #333333;
  --color-text-primary: #ffffff;
  --color-text-secondary: #888888;
  --color-text-muted: #444444;
  --color-accent-cyan: #00d8ff;

  --font-sans: "DM Sans", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

### 6.4 Animation Implementation

- **Scroll reveals:** Vanilla JS `IntersectionObserver` in a global `animations.ts` script, injected via `<script>` in `BaseLayout.astro`
- **Count-up stats:** Small React island (`<StatCounter client:visible />`) for AfterLink stats
- **Hero stagger:** CSS `animation-delay` on `.hero-word` spans for word-by-word reveal
- **Gradient pulse:** CSS `@keyframes pulse-glow` on the hero background radial gradient

### 6.5 Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| LCP | < 1.5s |
| CLS | < 0.05 |
| First Load JS | < 50KB |
| Build output | Static HTML (SSG) |

### 6.6 SEO & Meta

```html
<title>Javali Ajayakumar — AIML Developer</title>
<meta name="description" content="AIML developer and AI app builder from Karnataka, India. Creator of AfterLink — a high-performance binary TCP protocol for Node.js." />
<meta property="og:title" content="Javali Ajayakumar — AIML Developer" />
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

### 6.7 Deployment

- **Host:** Vercel (free tier)
- **Build command:** `astro build`
- **Output directory:** `dist/`
- **Domain:** `ajaymyth.vercel.app` initially, then custom domain
- **CI/CD:** Vercel GitHub integration — auto-deploy on push to `main`

---

## 7. Component Specs — Detailed

### 7.1 AfterLinkCard.astro

```
Props: none (hardcoded featured card)

Visual states:
- Default: border #1f1f1f, no glow
- Hover: border #00d8ff, box-shadow 0 0 40px rgba(0,216,255,0.12)
- Stats: visible on load, animate count-up on first scroll into view

Internal structure:
  - Header row: project name badge + version pill
  - Description: 2 lines max
  - Stats grid: 4 equal columns (msg/sec, latency, vs WS, header size)
  - Tag row: scrollable on mobile
  - CTA row: npm copy command + Docs link + GitHub link
```

### 7.2 StatCounter.tsx (React island)

```tsx
interface Props {
  end: number;
  suffix: string;
  label: string;
}
// Animates from 0 → end over 1200ms using requestAnimationFrame
// Triggered once via client:visible (Astro)
```

### 7.3 Timeline.astro

```
Props: entries: { year: string, title: string, org: string, description: string }[]

Renders:
  - Vertical line (1px #1f1f1f)
  - Glowing dot per entry (cyan #00d8ff, 8px, subtle box-shadow)
  - Year badge (JetBrains Mono, muted)
  - Title + org (white / secondary)
  - Description (secondary text)
  - Scroll reveal: each entry fades in independently
```

---

## 8. Content Checklist

Before deploying, fill in the following:

- [ ] Professional headshot or avatar (hero section — optional, text-only also works)
- [ ] Upwork profile URL
- [ ] LinkedIn profile URL
- [ ] Personal email address (for contact form endpoint)
- [ ] Exported PDF resume placed at `public/resume.pdf`
- [ ] OG image (1200×630) at `public/og-image.png`
- [ ] Live demo URLs for secondary projects (TaskAIR, CodeMind AI, etc.) or mark as "In Progress"
- [ ] GTTC Magadi competition result / certificate (optional badge in timeline)
- [ ] npm download count for `afterlink` (optional live badge via shields.io)

---

## 9. Phased Delivery Plan

### Phase 1 — Core Site (Week 1–2)
- [ ] Astro.js project scaffold with Tailwind v4
- [ ] Design tokens & global styles (`global.css`)
- [ ] `BaseLayout.astro` with head, fonts, meta
- [ ] Nav component with scroll behavior
- [ ] Hero section with staggered animation
- [ ] About section
- [ ] Contact section + footer

### Phase 2 — Projects & Skills (Week 2–3)
- [ ] AfterLinkCard with count-up stats
- [ ] Secondary projects grid with data file
- [ ] Skills section with tile grid
- [ ] Scroll reveal system (`IntersectionObserver`)

### Phase 3 — Timeline & Activities (Week 3)
- [ ] Timeline component
- [ ] Activities cards
- [ ] Contact form (Formspree integration)

### Phase 4 — Polish & Launch (Week 4)
- [ ] Mobile responsiveness audit
- [ ] Lighthouse audit & optimization
- [ ] OG image creation
- [ ] Vercel deployment + domain
- [ ] Final content review

### Phase 5 — AfterLink Page (v2, optional)
- [ ] `/projects/afterlink` dedicated page
- [ ] Performance comparison chart
- [ ] Interactive frame explorer
- [ ] Code examples with syntax highlighting

---

## 10. Key Design Decisions & Rationale

| Decision | Rationale |
|---|---|
| Pitch-black background (#000000) | Vercel-inspired authority. Makes cyan accent pop maximally. Signals "serious developer" not "student project." |
| AfterLink as featured project | It is the most technically impressive and differentiated work — a custom binary protocol is extremely rare for a diploma student. Lead with it. |
| No progress bars for skills | Progress bars on portfolios are subjective and look amateur. Icon tiles communicate breadth without fake percentages. |
| Single-page with anchor nav | Reduces friction. Visitors see everything without navigating. Fast on mobile. |
| Astro.js (SSG) | Zero JS overhead by default. Faster than Next.js for a portfolio. Supports React islands where interactivity is needed (stats counter). |
| Tailwind v4 CSS variables theme | Aligns with Tailwind v4's new `@theme` API. Keeps design tokens in CSS, not JS config. |
| JetBrains Mono for code/tags | Consistent with AfterLink docs branding. Signals developer identity. |
| DM Sans for body | Clean, modern, geometric — pairs perfectly with JetBrains Mono without competing. |
| Count-up stats in AfterLink card | 30,167 msg/sec is the most powerful number on the entire site. Animating it makes sure it lands. |

---

*PRD generated for Javali Ajayakumar — AJAYMYTH · June 2026*
