"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";
import FitText from "@/components/FitText";

const SOCIALS = [
  { icon: Github, href: "https://github.com/MuhammadHasnain1-debug", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hasnain-b0b35139a", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-cream">
      <span aria-hidden className="grain absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1700px] px-6 md:px-10">
        <div className="grid gap-6 border-b border-white/10 pb-10 font-mono text-xs text-white/50 md:grid-cols-3">
          <div>
            <span className="text-white/80">{"// role"}</span>
            <p className="mt-2 flex items-center gap-2 text-white">
              <span className="h-2 w-2 rounded-full bg-orange" /> Creative Developer
            </p>
          </div>
          <div className="md:text-center">
            <span className="text-white/80">{"// focus"}</span>
            <p className="mt-2 text-white">Web · Python · Motion</p>
          </div>
          <div className="md:text-right">
            <span className="text-white/80">{"// region"}</span>
            <p className="mt-2 text-white">Remote · Worldwide · {new Date().getFullYear() + 1}</p>
          </div>
        </div>

        {/* giant wordmark — auto-fits the full width, never clips */}
        <div className="select-none pt-10">
          <FitText text="Hasnain" variant="orange" tracking={-0.03} className="w-full" />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-white/50 sm:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Muhammad Hasnain</span>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-orange hover:text-orange">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <a href="#top" className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-white/70 transition-colors hover:border-orange hover:text-orange">
              Top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
