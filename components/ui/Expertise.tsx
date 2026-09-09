"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Sparkles, Boxes, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; body: string; image: string };

const ITEMS: Item[] = [
  {
    icon: Code2,
    title: "Front-End Engineering",
    body: "Fast, accessible, pixel-tight interfaces in React, Next.js and TypeScript — with motion that feels effortless.",
    image: "/expertise/frontend.jpg",
  },
  {
    icon: Database,
    title: "Python & Data",
    body: "Dashboards, automation and data tools that turn messy inputs into something a team actually uses.",
    image: "/expertise/data.jpg",
  },
  {
    icon: Sparkles,
    title: "Gen-AI Integration",
    body: "Wiring LLM APIs like Gemini into real products — from prompt design to a clean, usable UI.",
    image: "/expertise/ai.jpg",
  },
  {
    icon: Boxes,
    title: "3D & Motion",
    body: "Interactive 3D and scroll-driven storytelling with Three.js and GSAP, kept smooth on real devices.",
    image: "/expertise/threed.jpg",
  },
];

function Card({ item, i }: { item: Item; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--x", `${px * 100}%`);
    el.style.setProperty("--y", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 7}deg) rotateX(${-(py - 0.5) * 7}deg) translateY(-6px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.09 }}
      className="[perspective:1000px]"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative h-full min-h-[330px] overflow-hidden rounded-[26px] border border-ink/10 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-out will-change-transform hover:border-orange/60 hover:shadow-[0_44px_100px_-50px_rgba(242,106,33,0.7)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* background image — visible, with a veil kept strongest up top so the title/body stay readable */}
        <img
          src={item.image}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.22] transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-110 group-hover:opacity-[0.32]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/65 via-white/52 to-white/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange/[0.06] via-transparent to-orange/[0.06]" />
        {/* cursor-follow glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(242,106,33,0.14), transparent 70%)",
          }}
        />

        {/* content */}
        <div className="relative z-10 flex h-full flex-col p-6">
          <div className="mb-6 flex items-start justify-between">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-orange/25 bg-orange/10 text-orange shadow-[0_0_34px_-10px_rgba(242,106,33,0.8)] transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
              <item.icon className="h-6 w-6" />
            </div>
            <span className="font-mono text-xs text-ink/25">0{i + 1}</span>
          </div>

          <h3 className="mb-2 text-lg font-semibold text-ink">{item.title}</h3>
          <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>

          <span className="mt-auto flex items-center gap-2 pt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-orange opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            Explore →
          </span>
        </div>

        {/* bottom accent line */}
        <span className="absolute bottom-0 left-0 z-10 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-orange to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-cream px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 80% 0%, rgba(242,106,33,0.07), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">Expertise</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink md:text-5xl">
            What I do best.
          </h2>
          <p className="mt-3 text-ink-soft">
            A focused toolkit for shipping polished products end-to-end.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Card key={it.title} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
