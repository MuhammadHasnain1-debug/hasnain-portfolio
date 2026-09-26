"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";
import { Stars } from "@/components/ui/StarRating";
import type { Testimonial } from "@/lib/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({
  t,
  i = 0,
  featured = false,
}: {
  t: Testimonial;
  i?: number;
  featured?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      className={`relative flex flex-col rounded-[28px] border border-ink/10 bg-white p-7 shadow-[0_30px_80px_-60px_rgba(60,30,0,0.5)] md:p-8 ${
        featured ? "md:p-10" : ""
      }`}
    >
      <Quote className="absolute right-7 top-7 h-9 w-9 rotate-180 text-orange/15" />
      <Stars value={t.rating} size={featured ? 22 : 18} />
      <blockquote
        className={`mt-5 flex-1 leading-relaxed text-ink ${featured ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-6">
        {t.image ? (
          <img
            src={t.image}
            alt={t.name}
            className="h-14 w-14 shrink-0 rounded-full object-cover object-top ring-2 ring-orange/30"
          />
        ) : (
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-orange/15 font-bold text-orange ring-2 ring-orange/30">
            {initials(t.name)}
          </span>
        )}
        <div className="min-w-0">
          <div className="font-semibold text-ink">{t.name}</div>
          <div className="truncate text-sm text-ink-soft">
            {t.role}
            {t.org ? ` · ${t.org}` : ""}
          </div>
          {t.project && (
            <a
              href={t.project}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-orange transition-opacity hover:opacity-70"
            >
              View the work <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </figcaption>
    </motion.figure>
  );
}
