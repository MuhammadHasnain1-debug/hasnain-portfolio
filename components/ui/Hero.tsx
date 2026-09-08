"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ScrollState } from "@/components/canvas/HeroCanvas";

const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), {
  ssr: false,
});

const PHRASES = [
  "CREATIVE DEVELOPER",
  "FRONT-END DEVELOPER",
  "PYTHON & DATA DEV",
  "CLEAN, FAST CODE",
];

export default function Hero() {
  const scrollRef = useRef<ScrollState>({ progress: 0 });
  const photoRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [render3D, setRender3D] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowCores =
      typeof navigator !== "undefined" &&
      navigator.hardwareConcurrency != null &&
      navigator.hardwareConcurrency <= 2;
    if (reduce || lowCores) setRender3D(false);
  }, []);

  // auto-slide the title
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % PHRASES.length),
      4200
    );
    return () => clearInterval(id);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!photoRef.current) return;
    const px = e.clientX / window.innerWidth - 0.5;
    const py = e.clientY / window.innerHeight - 0.5;
    photoRef.current.style.transform = `translate(${px * 18}px, ${py * 14}px)`;
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ambient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 650px at 66% 12%, rgba(92,140,255,0.22), transparent 60%), radial-gradient(700px 520px at 12% 80%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(620px 520px at 96% 72%, rgba(56,189,248,0.14), transparent 60%), radial-gradient(520px 420px at 38% 104%, rgba(244,114,182,0.10), transparent 60%)",
        }}
      />

      {/* faint 3D backdrop */}
      <div className="absolute inset-0 opacity-40">
        {render3D && <HeroCanvas scrollRef={scrollRef} />}
      </div>

      {/* photo centerpiece */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          ref={photoRef}
          className="relative h-[62%] w-auto transition-transform duration-300 ease-out will-change-transform md:h-[82%]"
        >
          <img
            src="/hasnain.jpg"
            alt="Muhammad Hasnain"
            className="h-full w-auto object-contain [filter:brightness(0.92)_contrast(1.06)_saturate(0.95)] [-webkit-mask-image:radial-gradient(72%_78%_at_50%_38%,#000_46%,transparent_86%)] [mask-image:radial-gradient(72%_78%_at_50%_38%,#000_46%,transparent_86%)]"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent md:via-ink/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 md:px-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-300 md:mb-9">
          Hi, I&apos;m{" "}
          <span className="text-accent underline decoration-accent/60 underline-offset-4">
            Muhammad Hasnain
          </span>
        </p>

        <div className="relative flex min-h-[7rem] items-center [perspective:1000px] md:min-h-[12rem]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={active}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {},
                exit: { opacity: 0, y: -24, filter: "blur(8px)", transition: { duration: 0.3 } },
              }}
              className="flex max-w-[11ch] flex-wrap gap-x-[0.22em] gap-y-1 text-5xl font-extrabold uppercase leading-[0.92] tracking-tight [text-shadow:0_12px_44px_rgba(0,0,0,0.55)] md:text-8xl"
            >
              {(() => {
                let gi = 0;
                const words = PHRASES[active].split(" ");
                return words.map((word, wi) => (
                  <span key={wi} className="inline-flex whitespace-nowrap">
                    {word.split("").map((ch) => {
                      const idx = gi++;
                      return (
                        <motion.span
                          key={idx}
                          custom={idx}
                          variants={{
                            hidden: { opacity: 0, y: "0.55em", rotateX: -90 },
                            visible: (i: number) => ({
                              opacity: 1,
                              y: 0,
                              rotateX: 0,
                              transition: {
                                delay: i * 0.03,
                                type: "spring",
                                stiffness: 300,
                                damping: 22,
                              },
                            }),
                          }}
                          className="inline-block bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent [transform-origin:50%_100%]"
                        >
                          {ch}
                        </motion.span>
                      );
                    })}
                  </span>
                ));
              })()}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* progress dots */}
        <div className="mt-6 flex gap-2">
          {PHRASES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show title ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex gap-3 md:mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-glow"
          >
            View My Work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>

        {/* right tagline */}
        <div className="absolute right-6 top-[24%] hidden max-w-[15rem] text-right md:block md:right-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            {"// turning ideas into reality"}
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            Available for freelance work. Building fast, responsive sites and
            tools with React, Next.js &amp; Python.
          </p>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:left-12">
        <ArrowDown className="h-4 w-4 animate-bounce text-accent" />
        Scroll down
      </div>
    </section>
  );
}
