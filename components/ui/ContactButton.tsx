"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactButton({
  variant = "dark",
  label = "Contact Me",
  className = "",
}: {
  variant?: "dark" | "orange";
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`${variant === "dark" ? "btn-dark" : "btn-orange"} inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
