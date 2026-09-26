"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type Tone = "dark" | "light";

const filled: Record<Tone, string> = {
  dark: "fill-orange text-orange",
  light: "fill-white text-white",
};
const empty: Record<Tone, string> = {
  dark: "fill-transparent text-ink/25",
  light: "fill-transparent text-white/40",
};

/** Static display of a rating out of 5. */
export function Stars({ value, size = 16, tone = "dark" }: { value: number; size?: number; tone?: Tone }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          strokeWidth={1.8}
          style={{ width: size, height: size }}
          className={n <= Math.round(value) ? filled[tone] : empty[tone]}
        />
      ))}
    </div>
  );
}

/** Interactive 1–5 star picker. */
export function StarInput({
  value,
  onChange,
  tone = "dark",
}: {
  value: number;
  onChange: (v: number) => void;
  tone?: Tone;
}) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  return (
    <div className="flex items-center gap-2" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          type="button"
          key={n}
          onMouseEnter={() => setHover(n)}
          onClick={() => onChange(n)}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          className="transition-transform duration-150 hover:scale-125 focus:outline-none"
        >
          <Star
            strokeWidth={1.6}
            className={`h-8 w-8 transition-colors duration-150 ${n <= active ? filled[tone] : empty[tone]}`}
          />
        </button>
      ))}
      <span className={`ml-2 font-mono text-sm ${tone === "light" ? "text-white/80" : "text-ink-soft"}`}>
        {active ? `${active}/5` : ""}
      </span>
    </div>
  );
}
