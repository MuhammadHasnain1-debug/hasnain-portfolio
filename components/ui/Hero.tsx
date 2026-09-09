"use client";

import FadeIn from "@/components/FadeIn";
import FitText from "@/components/FitText";
import Magnet from "@/components/Magnet";
import ContactButton from "@/components/ui/ContactButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[660px] flex-col overflow-hidden bg-orange"
    >
      {/* warm depth lighting — spotlight behind the subject + corner vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(56% 55% at 50% 36%, rgba(255,182,124,0.75), transparent 62%)," +
            "radial-gradient(130% 80% at 50% 122%, rgba(150,48,8,0.55), transparent 60%)," +
            "radial-gradient(100% 60% at 50% -12%, rgba(255,202,152,0.4), transparent 55%)",
        }}
      />
      {/* fine grain over the whole hero */}
      <span aria-hidden className="grain absolute inset-0 z-0" />
      {/* soft ground shadow so the subject is planted, not floating */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30px] left-1/2 z-[5] h-[130px] w-[52%] max-w-[560px] -translate-x-1/2 rounded-[50%] blur-2xl"
        style={{ background: "rgba(55,18,0,0.5)" }}
      />

      {/* top meta strip */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-24 font-mono text-[10px] uppercase tracking-[0.28em] text-white/70 md:px-10 md:pt-28 md:text-xs">
        <FadeIn y={-10}>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Available for freelance
          </span>
        </FadeIn>
        <FadeIn y={-10} delay={0.1}>
          <span className="hidden sm:inline">Portfolio — {new Date().getFullYear()}</span>
        </FadeIn>
      </div>

      {/* portrait cutout — direct child of the section so it plants on the TRUE bottom */}
      <FadeIn
        delay={0.45}
        y={40}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center"
      >
        <Magnet padding={120} strength={6} className="pointer-events-auto">
          <img
            src="/hasnain-cutout.png"
            alt="Muhammad Hasnain"
            className="block h-[62vh] max-h-[720px] w-auto object-contain object-bottom drop-shadow-[0_28px_45px_rgba(50,16,0,0.5)] sm:h-[70vh] md:h-[78vh]"
          />
        </Magnet>
      </FadeIn>

      {/* giant name filling the full width, behind the cutout */}
      <div className="relative z-0 flex flex-1 items-end">
        <div className="w-full px-4 pb-2 sm:px-6 md:px-8">
          <FadeIn delay={0.15} y={40} className="w-full">
            <FitText text="Hi, I'm Hasnain" variant="light" tracking={-0.03} className="w-full" />
          </FadeIn>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-20 flex items-end justify-between gap-4 px-6 pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[170px] font-light uppercase leading-snug tracking-wide text-white sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: "clamp(0.72rem, 1.35vw, 1.35rem)" }}
          >
            a creative developer driven by crafting striking &amp; unforgettable web experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton variant="dark" />
        </FadeIn>
      </div>
    </section>
  );
}
