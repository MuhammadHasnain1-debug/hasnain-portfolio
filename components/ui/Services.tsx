"use client";

import FadeIn from "@/components/FadeIn";

const SERVICES = [
  {
    n: "01",
    name: "Web Development",
    desc: "Fast, responsive, production-ready websites built end-to-end — from the first layout to the final bit of polish.",
  },
  {
    n: "02",
    name: "Front-End Engineering",
    desc: "Pixel-tight interfaces in React, Next.js and TypeScript, with motion and micro-interactions that feel effortless.",
  },
  {
    n: "03",
    name: "Python & Data",
    desc: "Dashboards, automation and data tools that turn messy inputs into something a team actually enjoys using.",
  },
  {
    n: "04",
    name: "Gen-AI Integration",
    desc: "Wiring LLM APIs like Gemini into real products — from prompt design to a clean, usable interface.",
  },
  {
    n: "05",
    name: "UI & Motion Design",
    desc: "Clean, modern, conversion-focused design with scroll-driven storytelling and thoughtful detail.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-orange px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="head-light mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.08} y={24}>
            <div className="flex items-start gap-5 border-b border-white/25 py-8 last:border-b-0 sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <div
                className="shrink-0 font-black leading-none text-white/95"
                style={{ fontSize: "clamp(2.5rem, 10vw, 130px)" }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  className="font-medium uppercase leading-tight text-white"
                  style={{ fontSize: "clamp(1.15rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="mt-2 max-w-2xl font-light leading-relaxed text-white/80"
                  style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
