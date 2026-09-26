import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { testimonials, averageRating, type Testimonial } from "@/lib/testimonials";
import { fetchApprovedReviews } from "@/lib/supabase";
import { Stars } from "@/components/ui/StarRating";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ReviewForm from "@/components/ui/ReviewForm";

export const metadata: Metadata = {
  title: "Reviews — Muhammad Hasnain",
  description:
    "What clients say about working with Muhammad Hasnain — and a place to leave your own review.",
};

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const live: Testimonial[] = (await fetchApprovedReviews()).map((r) => ({
    name: r.name,
    role: r.role || "Verified review",
    rating: r.rating,
    quote: r.message,
  }));
  const all = [...testimonials, ...live];
  const avg = averageRating(all);
  const [featured, ...rest] = all;

  return (
    <main className="relative min-h-screen bg-cream">
      {/* header + wall */}
      <section className="px-5 pt-32 sm:px-8 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-orange"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>

          <div className="mt-8 border-b border-ink/10 pb-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">Testimonials</p>
                <h1 className="head-orange font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 150px)" }}>
                  Reviews
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="head-orange text-5xl font-black leading-none">{avg.toFixed(1)}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    {all.length} review{all.length > 1 ? "s" : ""}
                  </div>
                </div>
                <Stars value={avg} size={26} />
              </div>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Honest words from people I&apos;ve built for. Worked with me too? Scroll down and
              leave a rating — it means a lot.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {featured && <TestimonialCard t={featured} featured />}
            {rest.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {rest.map((t, i) => (
                  <TestimonialCard key={t.name + i} t={t} i={i + 1} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* leave a review */}
      <section className="mt-24 overflow-hidden bg-gradient-to-b from-orange to-orange-deep px-5 py-24 sm:px-8 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-white/80">Your turn</p>
            <h2 className="head-light font-black uppercase leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.6rem, 9vw, 96px)" }}>
              Leave a review
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
              Give the work a star rating and a few honest words. Reviews are checked before
              they go live, then appear on this page.
            </p>
          </div>
          <ReviewForm />
        </div>
      </section>
    </main>
  );
}
