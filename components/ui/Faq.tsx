"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "Front-end and web builds, landing pages, brand sites, dashboards, and Python/data tools — anything from a single high-impact page to a full multi-section website.",
  },
  {
    q: "What's your tech stack?",
    a: "React, Next.js, TypeScript and Tailwind on the front-end; Python, SQL and Supabase for data and back-end; and GSAP / Framer Motion for the motion and interactions.",
  },
  {
    q: "How long does a project take?",
    a: "A landing page is usually a few days; a full site takes about 1–3 weeks depending on scope. You'll get a clear timeline before we start — no surprises.",
  },
  {
    q: "How do we work together?",
    a: "We start with a quick chat about your goals. I send a plan and timeline, then build in stages with regular previews, so you always see progress and can steer it.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm currently open. Use the contact form below or email me, and I'll reply within a day.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <FadeIn y={40} className="mb-12 text-center sm:mb-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-orange">Questions</p>
        <h2 className="head-orange font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          FAQ
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-3xl">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <FadeIn key={i} delay={i * 0.06} y={20}>
              <div className="border-b border-ink/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-ink sm:text-xl md:text-2xl">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-orange text-orange transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-base leading-relaxed text-ink-soft md:text-lg">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
