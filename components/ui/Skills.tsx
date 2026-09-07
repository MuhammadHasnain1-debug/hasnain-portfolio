"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiThreedotjs,
  SiHtml5,
  SiCss,
  SiPython,
  SiSupabase,
  SiPostgresql,
  SiNodedotjs,
  SiVercel,
  SiCloudflare,
} from "react-icons/si";
import { Database, Hash, Webhook, Sparkles, Github } from "lucide-react";

type Ico = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
type Skill = { n: string; I: Ico; c: string };

const GROUPS: { label: string; items: Skill[] }[] = [
  {
    label: "Frontend",
    items: [
      { n: "Next.js", I: SiNextdotjs, c: "#ffffff" },
      { n: "React", I: SiReact, c: "#61DAFB" },
      { n: "TypeScript", I: SiTypescript, c: "#3178C6" },
      { n: "JavaScript", I: SiJavascript, c: "#F7DF1E" },
      { n: "Tailwind CSS", I: SiTailwindcss, c: "#38BDF8" },
      { n: "Three.js", I: SiThreedotjs, c: "#ffffff" },
      { n: "HTML", I: SiHtml5, c: "#E34F26" },
      { n: "CSS", I: SiCss, c: "#1572B6" },
    ],
  },
  {
    label: "Backend & Database",
    items: [
      { n: "Python", I: SiPython, c: "#FFD43B" },
      { n: "SQL", I: Database, c: "#8AB4F8" },
      { n: "Supabase", I: SiSupabase, c: "#3ECF8E" },
      { n: "PostgreSQL", I: SiPostgresql, c: "#4169E1" },
      { n: "C#", I: Hash, c: "#A179DC" },
      { n: "Node.js", I: SiNodedotjs, c: "#5FA04E" },
    ],
  },
  {
    label: "AI & Deployment",
    items: [
      { n: "Gen-AI (Gemini)", I: Sparkles, c: "#4285F4" },
      { n: "REST APIs", I: Webhook, c: "#8AB4F8" },
      { n: "Git & GitHub", I: Github, c: "#ffffff" },
      { n: "Vercel", I: SiVercel, c: "#ffffff" },
      { n: "Cloudflare Pages", I: SiCloudflare, c: "#F38020" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow mb-4">Tech Stack</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Tools I reach for.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {GROUPS.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <motion.span
                  key={s.n}
                  whileHover={{ scale: 1.06, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="group flex cursor-default items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <s.I
                    className="h-[18px] w-[18px] shrink-0 opacity-90 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: s.c }}
                  />
                  {s.n}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
