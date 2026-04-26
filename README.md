<div align="center">

# AKR.

### **Software Engineer Portfolio**

A developer portfolio featuring **interactive particle networks**, **scroll animations**, and a **cyberpunk dark theme** — built to stand out.

[Live Demo](https://atulkumarrai07.github.io/) | [Download Resume](https://atulkumarrai07.github.io/resume.pdf)

---

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## What Makes This Different

Feature | Description |
---------|------------|
**Particle Network** | Canvas-based interactive particle system — nodes connect, glow, and react to your cursor |
 **Typewriter Hero** | Roles cycle through with a typing animation: *Software Engineer II @ PlayStation -> Ex-AWS -> CMU Grad* |
**Scroll Animations** | Every section fades and slides in using Framer Motion with `useInView` triggers |
**Expandable Timeline** | Click any company to reveal bullet points, tech stack, and color-coded branding |
**Dark Cyberpunk Theme** | Near-black background with electric cyan and purple accents, glassmorphism cards, and a custom scrollbar |
**Mobile Responsive** | Fluid layouts with `clamp()`, responsive grids, and touch-friendly targets across all screen sizes |

---

## Quick Start

```bash
git clone https://github.com/atulkumarrai/atulkumarrai07.github.io.git
cd atulkumarrai07.github.io
npm install
npm run dev
```

Open **http://localhost:3000** — that's it.

---

## Deploy to GitHub Pages

```bash
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
```

That's literally it. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.

> **One-time setup:** Go to your repo Settings -> Pages -> Source -> GitHub Actions
>
> Your site will be available at: **https://atulkumarrai07.github.io/**

### Preview static export locally (optional)

```bash
npm run build
npx serve out
```

---

## Make It Yours

### Content
All text lives in one file — **`src/lib/data.ts`**. Edit your name, experience, skills, projects, and education there.

### Colors
Theme variables are at the top of `src/app/globals.css`:
```css
:root {
  --accent-cyan: #00f5ff;    /* Primary glow */
  --accent-purple: #8b5cf6;  /* Secondary accent */
  --accent-pink: #f0abfc;    /* Tertiary highlight */
}
```

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx            Root layout + SEO metadata
│   ├── page.tsx              Composes all sections
│   └── globals.css           Theme + utilities
│
├── components/
│   ├── Hero.tsx              Split layout: text left, photo right
│   ├── ParticleCanvas.tsx    Background particle network
│   ├── Navbar.tsx            3-column grid nav (logo | links | CTA)
│   ├── About.tsx             Photo + bio + stats grid
│   ├── Experience.tsx        Vertical timeline with expand/collapse
│   ├── Skills.tsx            Categorized animated chips
│   ├── Projects.tsx          Featured cards + secondary grid
│   ├── Education.tsx         Schools + certifications
│   ├── Contact.tsx           Contact cards + "Say Hello" CTA
│   └── Footer.tsx            3-column footer with nav + socials
│
└── lib/
    └── data.ts               Single source of truth for all content
```

---

## Tech Stack

| Layer | Stack |
|-------|-------|
| **Framework** | Next.js 16 (App Router, `output: "export"` for static) |
| **Animation** | Framer Motion (scroll-triggered reveals) |
| **Particles** | Custom canvas-based particle network with mouse interaction |
| **Styling** | Tailwind CSS v4 + inline styles for layout reliability |
| **Hosting** | GitHub Pages via GitHub Actions |

---

<div align="center">

### Built by **Atul Kumar Rai**

*Software Engineer II @ Sony Interactive Entertainment*

*Ex-AWS* &nbsp;|&nbsp; *Carnegie Mellon University*

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/atulkumarrai)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/atulkumarrai)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:atulkumarrai3@gmail.com)

</div>
