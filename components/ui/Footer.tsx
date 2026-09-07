"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/MuhammadHasnain1-debug", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hasnain-b0b35139a", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-screen-2xl px-6 pt-16 md:px-12">
        {/* system status row */}
        <div className="grid gap-6 border-b border-white/10 pb-10 font-mono text-xs text-zinc-500 md:grid-cols-3">
          <div>
            <span className="text-zinc-300">{"// system architecture"}</span>
            <p className="mt-2 leading-relaxed">
              Front-End Web Engineering
              <br />
              Python &amp; Data Tools
            </p>
          </div>
          <div className="md:text-center">
            <span className="text-zinc-300">{"// status"}</span>
            <p className="mt-2">
              <span className="inline-flex items-center gap-2 text-emerald-400">
                <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-400" />
                Open to Opportunities
              </span>
            </p>
          </div>
          <div className="md:text-right">
            <span className="text-zinc-300">{"// region"}</span>
            <p className="mt-2">Remote | Worldwide · 2026</p>
          </div>
        </div>

        {/* giant wordmark */}
        <div
          className="select-none bg-gradient-to-b from-white/90 via-white/40 to-white/5 bg-clip-text pt-8 font-extrabold uppercase leading-[0.8] tracking-tighter text-transparent"
          style={{ fontSize: "clamp(3.5rem, 20vw, 18rem)" }}
        >
          Hasnain
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-zinc-500 sm:flex-row md:px-12">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Muhammad Hasnain</span>
            <span className="hidden text-zinc-700 sm:inline">·</span>
            <span className="hidden sm:inline">Built with Next.js, Three.js, GSAP &amp; Tailwind</span>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-accent hover:text-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#home"
              className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-zinc-300 transition-colors hover:border-accent hover:text-accent"
            >
              Back to Top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
