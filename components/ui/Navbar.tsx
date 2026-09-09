"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-orange/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-7">
        <a href="#top" className="text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
          Hasnain<span className="text-ink">.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-wider text-white/90 transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-[1.05rem]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Muhammad-Hasnain-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border-2 border-white/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink sm:inline-block md:text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
