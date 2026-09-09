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

const INK = "#1B1408";
const INK_SOFT = "#4A3D2C";

// colours picked for contrast on white/cream (pale brand colours darkened to ink)
const GROUPS: { label: string; items: Skill[] }[] = [
  {
    label: "Frontend",
    items: [
      { n: "Next.js", I: SiNextdotjs, c: INK },
      { n: "React", I: SiReact, c: "#1C9FD6" },
      { n: "TypeScript", I: SiTypescript, c: "#2F74C0" },
      { n: "JavaScript", I: SiJavascript, c: INK },
      { n: "Tailwind CSS", I: SiTailwindcss, c: "#0EA5E9" },
      { n: "Three.js", I: SiThreedotjs, c: INK },
      { n: "HTML", I: SiHtml5, c: "#E34F26" },
      { n: "CSS", I: SiCss, c: "#1572B6" },
    ],
  },
  {
    label: "Backend & Database",
    items: [
      { n: "Python", I: SiPython, c: "#2F6EA5" },
      { n: "SQL", I: Database, c: INK_SOFT },
      { n: "Supabase", I: SiSupabase, c: "#1F9D6B" },
      { n: "PostgreSQL", I: SiPostgresql, c: "#336791" },
      { n: "C#", I: Hash, c: "#8A5CC9" },
      { n: "Node.js", I: SiNodedotjs, c: "#4F8B3B" },
    ],
  },
  {
    label: "AI & Deployment",
    items: [
      { n: "Gen-AI (Gemini)", I: Sparkles, c: "#3B7DDD" },
      { n: "REST APIs", I: Webhook, c: INK_SOFT },
      { n: "Git & GitHub", I: Github, c: INK },
      { n: "Vercel", I: SiVercel, c: INK },
      { n: "Cloudflare Pages", I: SiCloudflare, c: "#F38020" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden bg-cream px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">Tech Stack</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink md:text-5xl">
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
              className="rounded-[26px] border border-ink/10 bg-white p-6 shadow-[0_30px_70px_-55px_rgba(60,30,0,0.5)]"
            >
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <motion.span
                    key={s.n}
                    whileHover={{ scale: 1.06, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="group flex cursor-default items-center gap-2 rounded-xl border border-ink/10 bg-cream px-3 py-2 text-sm text-ink transition-colors hover:border-orange/50 hover:bg-white"
                  >
                    <s.I
                      className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: s.c }}
                    />
                    {s.n}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
