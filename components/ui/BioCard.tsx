"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

const PILLS = ["Front-End", "Gen-AI", "Python / Data", "3D Web"];
const STATS = [
  { n: "07", l: "Projects Shipped" },
  { n: "08", l: "Technologies" },
  { n: "100%", l: "Built by Hand" },
];
const META = [
  { k: "// role", v: "Freelance Developer" },
  { k: "// focus", v: "Web · Python · Gen-AI" },
  { k: "// experience", v: "7 shipped projects" },
  { k: "// region", v: "Remote · Worldwide" },
];

export default function BioCard() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.18, 1.12]);

  return (
    <section id="about" className="section-pad">
      <p className="eyebrow mb-8">About</p>

      {/* terminal meta row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 border-y border-white/10 py-6 font-mono text-xs text-zinc-500 sm:grid-cols-2 lg:grid-cols-4"
      >
        {META.map((m) => (
          <div key={m.k}>
            <span className="text-accent">{m.k}</span>
            <p className="mt-2 text-zinc-300">
              {m.k === "// role" ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-400" />
                  {m.v}
                </span>
              ) : (
                m.v
              )}
            </p>
          </div>
        ))}
      </motion.div>

      {/* main */}
      <div className="mt-12 grid items-center gap-10 md:grid-cols-[330px_1fr] lg:gap-16">
        {/* photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-[330px]"
        >
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[1.8rem] opacity-60 blur-md [animation:spin_10s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, #5C8CFF, #8B5CF6, #38bdf8, #5C8CFF)",
            }}
          />
          <div
            ref={frameRef}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
          >
            <motion.img
              src="/hasnain.jpg"
              alt="Muhammad Hasnain"
              style={{ y, scale }}
              className="absolute inset-0 h-full w-full object-cover object-[50%_10%] will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-accent/10" />
            <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-ink/50 px-2 py-1 font-mono text-[10px] text-zinc-200 backdrop-blur">
              01 — the dev
            </span>
          </div>
        </motion.div>

        {/* right */}
        <div>
          {/* giant chrome wordmark */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="select-none bg-gradient-to-b from-white via-white/70 to-white/15 bg-clip-text font-extrabold uppercase leading-[0.82] tracking-tight text-transparent"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
          >
            Muhammad
            <br />
            Hasnain
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-xl leading-relaxed text-zinc-300"
          >
            I build websites and tools end-to-end — from the first layout to the
            last bit of polish. My work spans front-end web development and
            Python / data, so I can make something look great{" "}
            <span className="text-white">and</span> make it actually work. I care
            about the small things: load speed, type, and the half-second a
            button takes to respond.
          </motion.p>

          {/* stats */}
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <div className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tabular-nums text-transparent">
                  {s.n}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>

          {/* pills + actions */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {PILLS.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-zinc-300 hover:border-accent/50 hover:text-white"
              >
                {p}
              </motion.span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/Muhammad-Hasnain-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-glow"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
