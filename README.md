# Muhammad Hasnain — Developer Portfolio

Freelance developer building fast, clean interfaces, 3D web experiences, and data tools.

🔗 **Live:** [hasnaindev.me](https://hasnaindev.me)

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r169-000000?logo=three.js)
![Deployed on Vercel](https://img.shields.io/badge/Vercel-live-000000?logo=vercel)

## Preview

![Portfolio preview](docs/preview.png)

<!-- Add a screenshot of the live site at docs/preview.png -->

## Features

- **Scroll-reactive 3D hero** — a metallic mesh (React Three Fiber) behind an auto-sliding, letter-flipping headline
- **Terminal-style preloader** with a live counter
- **Custom cursor**, magnetic buttons, film-grain texture, and scroll-reveal motion (Framer Motion + GSAP)
- **Editorial About** section with a live `developer.json` status panel
- **Tech Stack** grid with real brand-logo icons
- **Projects** grid — real screenshots with Live Demo + GitHub links
- **Expertise** cards with 3D mouse-tilt and imagery
- **Contact form** wired to Web3Forms (delivers straight to inbox)
- Fully **responsive**, dark theme, `prefers-reduced-motion` aware

## Tech Stack

**Framework:** Next.js 14 (App Router) · TypeScript
**Styling:** Tailwind CSS
**3D / Motion:** React Three Fiber · drei · three · GSAP · Framer Motion
**Icons:** lucide-react · react-icons
**Forms:** Web3Forms
**Hosting:** Vercel

## Run locally

```bash
git clone https://github.com/MuhammadHasnain1-debug/hasnain-portfolio.git
cd hasnain-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/                 layout, page, globals.css
components/
  canvas/            HeroCanvas.tsx   (R3F scene)
  ui/                Header, Hero, BioCard, Expertise, Skills, Projects, Contact, Footer, Preloader
public/              photo, project images, CV
```

---

© 2026 Muhammad Hasnain
