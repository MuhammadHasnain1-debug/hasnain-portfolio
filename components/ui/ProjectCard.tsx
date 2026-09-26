"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p, i }: { p: Project; i: number }) {
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

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-3">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {p.repo ? (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 text-sm text-ink transition-colors hover:border-orange hover:text-orange"
            >
              <Github className="h-4 w-4" /> View Code
            </a>
          ) : p.private ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm text-ink-soft">
              <Lock className="h-3.5 w-3.5" /> Private client project
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
