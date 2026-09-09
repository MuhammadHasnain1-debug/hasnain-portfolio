"use client";

import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import FitText from "@/components/FitText";

const PILLS = ["Front-End", "Gen-AI", "Python / Data", "3D Web"];
const STATS = [
  { n: "08", l: "Projects Shipped" },
  { n: "10+", l: "Technologies" },
  { n: "100%", l: "Built by Hand" },
];
const META = [
  { k: "// role", v: "Freelance Developer" },
  { k: "// focus", v: "Web · Python · Gen-AI" },
  { k: "// experience", v: "8 shipped projects" },
  { k: "// region", v: "Remote · Worldwide" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 md:px-10 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-orange-soft/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-orange">About</p>

        {/* terminal meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 border-y border-ink/10 py-6 font-mono text-xs text-ink-soft sm:grid-cols-2 lg:grid-cols-4"
        >
          {META.map((m) => (
            <div key={m.k}>
              <span className="text-orange">{m.k}</span>
              <p className="mt-2 text-ink">
                {m.k === "// role" ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-orange" />
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
        <div className="mt-14 grid items-center gap-10 md:grid-cols-[360px_1fr] lg:gap-16">
          {/* photo — clean, no colour wash */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-orange/25 shadow-[0_45px_100px_-55px_rgba(200,80,20,0.55)]"
              style={{ background: "linear-gradient(160deg,#FF8A47 0%,#F26A21 55%,#C9531A 100%)" }}
            >
              <span aria-hidden className="grain absolute inset-0 opacity-50" />
              <img
                src="/hasnain-cutout.png"
                alt="Muhammad Hasnain"
                className="absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-[0_18px_34px_rgba(60,20,0,0.42)]"
              />
              <span className="absolute left-3 top-3 z-10 rounded-md border border-white/30 bg-ink/35 px-2 py-1 font-mono text-[10px] text-white backdrop-blur">
                01 — the dev
              </span>
            </div>
          </motion.div>

          {/* right */}
          <div>
            {/* giant name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="select-none"
            >
              <FitText text="Muhammad" variant="chrome" tracking={-0.02} className="w-full" />
              <div className="-mt-[1.2vw]">
                <FitText text="Hasnain" variant="chrome" tracking={-0.02} className="w-full" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              I build websites and tools end-to-end — from the first layout to the
              last bit of polish. My work spans front-end web development and
              Python / data, so I can make something look great{" "}
              <span className="font-semibold text-ink">and</span> make it actually
              work. I care about the small things: load speed, type, and the
              half-second a button takes to respond.
            </motion.p>

            {/* stats */}
            <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-ink/10 pt-6">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  <div className="head-orange text-4xl font-black tabular-nums leading-none">
                    {s.n}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* pills */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {PILLS.map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="cursor-default rounded-full border border-ink/15 bg-white px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-orange hover:text-orange"
                >
                  {p}
                </motion.span>
              ))}
            </div>

            {/* actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Muhammad-Hasnain-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink transition-colors hover:border-orange hover:text-orange"
              >
                Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
