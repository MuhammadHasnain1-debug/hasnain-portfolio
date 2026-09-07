# Muhammad Hasnain — Portfolio (Next.js + 3D)

Interactive dark-theme developer portfolio with a scroll-driven 3D hero.

## Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **@react-three/fiber** + **@react-three/drei** + **three** — 3D metallic hero
- **GSAP** + **ScrollTrigger** — scroll-scrubbed timeline & text
- **Framer Motion** — section reveals & micro-interactions
- **lucide-react**, **clsx**, **tailwind-merge**

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Structure
```
app/                 layout, page, globals.css
components/
  canvas/            HeroCanvas.tsx   (R3F scene — SSR-safe via dynamic import)
  ui/                Header, Hero, BioCard, Expertise, Skills, Projects, Contact, Footer
lib/utils.ts         cn() helper
public/              hasnain.jpg + projects/*.png
```

## Notes
- The 3D hero falls back to a static gradient on reduced-motion / low-power devices.
- The contact form is front-end only for now — wire it to Supabase to store submissions.
- Replace the `#` hrefs (Resume, socials, project Live/Code links) with real URLs.
