"use client";

import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Stars } from "@/components/ui/StarRating";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials, averageRating } from "@/lib/testimonials";

export default function Testimonials() {
  const avg = averageRating(testimonials);
  const featured = testimonials[0];

  return (
    <section id="reviews" className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">Kind Words</p>
            <h2 className="head-orange font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.6rem, 9vw, 120px)" }}>
              Reviews
            </h2>
          </div>
          <FadeIn y={20} className="flex items-center gap-4">
            <div className="text-right">
              <div className="head-orange text-4xl font-black leading-none">{avg.toFixed(1)}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                {testimonials.length} review{testimonials.length > 1 ? "s" : ""}
              </div>
            </div>
            <Stars value={avg} size={22} />
          </FadeIn>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.5fr_1fr]">
          {featured && <TestimonialCard t={featured} featured />}

          <FadeIn
            delay={0.1}
            y={30}
            className="flex flex-col justify-center rounded-[28px] border border-orange/20 bg-gradient-to-br from-orange to-orange-deep p-8 text-white md:p-10"
          >
            <PenLine className="h-9 w-9 text-white/90" />
            <h3 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">
              Worked with me? Leave a review.
            </h3>
            <p className="mt-3 text-white/90">
              Rate the work and share a few words — it helps more than you&apos;d think.
            </p>
            <Link
              href="/testimonials"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
            >
              Read all &amp; leave yours <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
