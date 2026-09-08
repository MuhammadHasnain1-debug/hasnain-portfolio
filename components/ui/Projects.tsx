"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  image: string;
  tags: string[];
  summary: string;
  live: string;
  repo: string;
  featured?: boolean;
};

const GH = "https://github.com/MuhammadHasnain1-debug";
const PAGES = "https://muhammadhasnain1-debug.github.io";

const PROJECTS: Project[] = [
  {
    title: "Stacked — Smash Burgers",
    image: "/projects/stacked-burgers.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    summary:
      "An animated smash-burger landing page with a scroll-driven burger anatomy and AI food photography.",
    live: "",
    repo: `${GH}/stacked-burgers`,
    featured: true,
  },
  {
    title: "Sales Report Dashboard",
    image: "/projects/sales-dashboard.png",
    tags: ["Python", "SQL", "JavaScript"],
    summary:
      "Ingests messy CSV sales exports, cleans and aggregates them, and renders an interactive dashboard with charts and filters.",
    live: `${PAGES}/sales-report-dashboard/`,
    repo: `${GH}/sales-report-dashboard`,
    featured: true,
  },
  {
    title: "APU CGPA Calculator",
    image: "/projects/apu-cgpa.png",
    tags: ["Next.js", "React", "TypeScript"],
    summary:
      "A full CGPA calculator and target planner built in Next.js — grade input through to goal planning.",
    live: `${PAGES}/apu-cgpa-calculator/`,
    repo: `${GH}/apu-cgpa-calculator`,
    featured: true,
  },
  {
    title: "Namewright",
    image: "/projects/namewright.png",
    tags: ["JavaScript", "Gemini API"],
    summary:
      "An AI name generator wired to a real Gemini backend, returning brandable names on demand.",
    live: `${PAGES}/namewright/`,
    repo: `${GH}/namewright`,
  },
  {
    title: "The Gilded Fox",
    image: "/projects/gilded-fox.png",
    tags: ["HTML", "CSS", "JS"],
    summary:
      "A moody, cinematic cocktail-bar site with full-bleed photography and smooth scroll.",
    live: `${PAGES}/the-gilded-fox/`,
    repo: `${GH}/the-gilded-fox`,
  },
  {
    title: "Ember & Oak",
    image: "/projects/ember-oak.png",
    tags: ["HTML", "CSS", "JS"],
    summary: "A warm, atmospheric brand site for a candle and fragrance label.",
    live: `${PAGES}/ember-and-oak/`,
    repo: `${GH}/ember-and-oak`,
  },
  {
    title: "Team Performance Scorecard",
    image: "/projects/team-scorecard.png",
    tags: ["Apps Script", "Sheets"],
    summary:
      "An automated Google Sheets scorecard that tracks and ranks team KPIs.",
    live: `${PAGES}/team-performance-scorecard/`,
    repo: `${GH}/team-performance-scorecard`,
  },
  {
    title: "Brew Haven",
    image: "/projects/brew-haven.png",
    tags: ["HTML", "CSS", "JS"],
    summary:
      "An animated coffee-shop landing page full of playful scroll effects and micro-interactions.",
    live: `${PAGES}/brew-haven/`,
    repo: `${GH}/brew-haven`,
  },
];

function Card({ p, i }: { p: Project; i: number }) {
  const index = String(i + 1).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-shadow duration-500 hover:shadow-[0_40px_90px_-40px_rgba(92,140,255,0.5)] ${
        p.featured ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      {/* animated gradient edge on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(130deg,rgba(92,140,255,0.5),transparent_40%,transparent_60%,rgba(139,92,246,0.5))] [mask:linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] [padding:1px]" />

      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.title} preview`}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        {/* sheen sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1100ms] group-hover:translate-x-full" />

        {/* index */}
        <span className="absolute left-5 top-4 font-mono text-sm text-white/70">
          {index}
        </span>

        {/* arrow chip */}
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${p.title} live`}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-accent text-ink opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0 -rotate-45"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{p.summary}</p>

        <div className="mt-2 flex items-center gap-3">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-glow"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Featured engineering projects.
          </h2>
        </div>
        <a
          href={GH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-zinc-400 transition-colors hover:text-accent"
        >
          <Github className="h-4 w-4" /> All repos
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-6">
        {PROJECTS.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
