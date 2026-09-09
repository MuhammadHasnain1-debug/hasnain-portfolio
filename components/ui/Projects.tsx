"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const GH = "https://github.com/MuhammadHasnain1-debug";

type P = { title: string; cat: string; image: string; tags: string[]; summary: string; repo: string };

const PROJECTS: P[] = [
  {
    title: "Stacked — Smash Burgers",
    cat: "Personal",
    image: "/projects/stacked-burgers.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    summary: "An animated smash-burger landing page with a scroll-driven burger anatomy and AI food photography.",
    repo: `${GH}/stacked-burgers`,
  },
  {
    title: "Sales Report Dashboard",
    cat: "Client",
    image: "/projects/sales-dashboard.png",
    tags: ["Python", "SQL", "JavaScript"],
    summary: "Ingests messy CSV sales exports, cleans and aggregates them, and renders an interactive dashboard with charts and filters.",
    repo: `${GH}/sales-report-dashboard`,
  },
  {
    title: "APU CGPA Calculator",
    cat: "Web App",
    image: "/projects/apu-cgpa.png",
    tags: ["Next.js", "React", "TypeScript"],
    summary: "A full CGPA calculator and target planner built in Next.js — grade input through to goal planning.",
    repo: `${GH}/apu-cgpa-calculator`,
  },
  {
    title: "Namewright",
    cat: "AI Tool",
    image: "/projects/namewright.png",
    tags: ["JavaScript", "Gemini API"],
    summary: "An AI name generator wired to a real Gemini backend, returning brandable names on demand.",
    repo: `${GH}/namewright`,
  },
  {
    title: "The Gilded Fox",
    cat: "Client",
    image: "/projects/gilded-fox.png",
    tags: ["HTML", "CSS", "JS"],
    summary: "A moody, cinematic cocktail-bar site with full-bleed photography and smooth scroll.",
    repo: `${GH}/the-gilded-fox`,
  },
  {
    title: "Ember & Oak",
    cat: "Client",
    image: "/projects/ember-oak.png",
    tags: ["HTML", "CSS", "JS"],
    summary: "A warm, atmospheric brand site for a candle and fragrance label.",
    repo: `${GH}/ember-and-oak`,
  },
  {
    title: "Team Performance Scorecard",
    cat: "Automation",
    image: "/projects/team-scorecard.png",
    tags: ["Apps Script", "Sheets"],
    summary: "An automated Google Sheets scorecard that tracks and ranks team KPIs.",
    repo: `${GH}/team-performance-scorecard`,
  },
  {
    title: "Brew Haven",
    cat: "Client",
    image: "/projects/brew-haven.png",
    tags: ["HTML", "CSS", "JS"],
    summary: "An animated coffee-shop landing page full of playful scroll effects and micro-interactions.",
    repo: `${GH}/brew-haven`,
  },
];

function Card({ p, i }: { p: P; i: number }) {
  const index = String(i + 1).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-white transition-shadow duration-500 hover:shadow-[0_44px_100px_-45px_rgba(242,106,33,0.45)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        {/* sheen sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[1100ms] group-hover:translate-x-full" />
        <span className="absolute left-4 top-3 font-mono text-sm text-white drop-shadow">{index}</span>
        <span className="absolute right-4 top-3 rounded-full bg-ink/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
          {p.cat}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-ink/10 bg-cream px-2.5 py-1 font-mono text-[11px] text-ink-soft">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{p.summary}</p>
        <div className="mt-auto pt-3">
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 text-sm text-ink transition-colors hover:border-orange hover:text-orange"
          >
            <Github className="h-4 w-4" /> View Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative bg-cream px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">Selected Work</p>
            <h2 className="head-orange font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.6rem, 9vw, 120px)" }}>
              Projects
            </h2>
          </div>
          <a
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wider text-ink-soft transition-colors hover:text-orange"
          >
            <Github className="h-4 w-4" /> All repos <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
