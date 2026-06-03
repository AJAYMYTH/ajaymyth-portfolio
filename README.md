# AJAYMYTH · Personal Developer Portfolio

Personal developer portfolio website of **Javali Ajayakumar (AJAYMYTH)**. Designed with a stark, modern dark-mode aesthetic inspired by developer-centric platforms like Vercel, styled with **Tailwind CSS v4**, and built on **Astro.js** with **React** client islands.

---

## 🛠️ Architecture & Technology Stack

- **Framework:** [Astro.js v6](https://astro.build/) (Static Site Generation for sub-millisecond page loads)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first theme configuration using `@tailwindcss/vite` plugin)
- **Runtime Interactivity:** [React v19](https://react.dev/) (Hydrated client-side components only where needed)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & CSS keyframes for smooth vertical looping and viewport entrance effects
- **Forms Handling:** [FormSubmit AJAX API](https://formsubmit.co/) (Asynchronous, captcha-free contact form submissions with inline success validation)
- **Cursor Effects:** Custom HTML5 Canvas-based interactive mouse trail sparkle particle engine

---

## 🚀 Key Highlights & Structure

### 1. Landing / Main Page (`/`)
- **Interactive Grid Background:** A custom canvas grid in the Hero section that reacts dynamically to mouse cursor moves and drifts randomly when idle.
- **Looping Words Signatures:** Built-in Lightswind UI LoopingWords carousel transitions roles seamlessly with visibility listener handling to prevent background page freeze.
- **Infinite Scrolling Badges:** Triple scrolling skill ribbons displaying technical stack badges and custom vector brand icons with automated translate offset tracking.
- **Alternating Experience Timeline:** A clean vertical timeline displaying education and project achievements, designed with fluid layout offsets to alternate left/right on desktop and stack cleanly on mobile devices.
- **Asynchronous Formsubmit Form:** Direct AJAX email contact pipeline with custom-styled loading indicators and feedback banners.

### 2. AfterLink Product Showcase (`/projects/afterlink`)
A dedicated details page built to exhibit his custom TCP binary socket communication protocol:
- **Interactive Frame Layout:** Visual representation mapping out the fixed 10-byte header frame structure.
- **Lifecycle Flowchart:** Mermaid-rendered client/server handshake socket workflows.
- **Performance Benchmarks:** Dynamic metrics contrasting AfterLink against WebSockets and gRPC throughput.

### 3. Custom Terminal 404 Page (`/404`)
- Vercel-inspired custom terminal error screen with glowing gradient outlines and instant homepage navigation fallback.

---

## 📁 Directory Layout

```text
/
├── public/                 # Static assets (fonts, icons, site manifest, resume PDF)
├── src/
│   ├── assets/             # Vector icons and images
│   ├── components/         # Astro layout items and React client islands
│   │   ├── Projects/       # AfterLink product layout and standard project cards
│   │   └── Welcome.astro   # Standard welcome container
│   ├── data/               # Static schema variables (projects list, skills list)
│   ├── layouts/            # Base HTML wrapper and SEO meta injection
│   ├── pages/              # Astro routing controllers (index, 404, afterlink)
│   └── styles/             # Global Tailwind v4 CSS imports and root themes
├── astro.config.mjs        # Astro integration overrides (Vite plugin configurations)
├── package.json            # Script targets and dependencies
└── tsconfig.json           # TypeScript configuration and compiler paths
```

---

## 🧞 Local Development & Build Targets

All commands are executed from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `http://localhost:4321/` |
| `npm run build` | Compiles and packages production site outputs to `./dist/` |
| `npm run preview` | Previews the compiled build directory locally |

---

## 📄 License

Licensed under the [MIT License](LICENSE) · Copyright © 2026 Javali Ajayakumar.
