"use client";

import { useEffect, useId, useRef, useState } from "react";

type Variant = "light" | "orange" | "cream" | "ink" | "chrome";

// [topColor, bottomColor] for the vertical gradient fill
const STOPS: Record<Variant, [string, string]> = {
  light: ["#FFFFFF", "#FFE1C9"],
  orange: ["#F26A21", "#FF8A47"],
  cream: ["#FFF7EF", "#FFE1C9"],
  ink: ["#241B0C", "#1B1408"],
  // elegant dark "metal" for headings on light/cream backgrounds
  chrome: ["#241B0C", "#9A876A"],
};

type Props = {
  text: string;
  variant?: Variant;
  weight?: number;
  /** letter-spacing in em (negative tightens) */
  tracking?: number;
  className?: string;
};

/**
 * Renders a display headline as an SVG that always scales to fill its
 * container width — so it can never clip or overflow, and it fills the
 * horizontal space edge-to-edge. Measures the glyphs after the web font
 * loads and sets the viewBox to their natural box (uniform scale, no
 * distortion).
 */
export default function FitText({
  text,
  variant = "light",
  weight = 900,
  tracking = -0.02,
  className,
}: Props) {
  const ref = useRef<SVGTextElement>(null);
  const rawId = useId();
  const gid = `ft-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  // sensible pre-measurement estimate so there's no layout jump before fonts load
  const [vb, setVb] = useState<string>(`0 0 ${Math.max(1, text.length) * 60} 100`);

  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      try {
        const b = el.getBBox();
        if (b.width > 0 && b.height > 0) {
          setVb(`${b.x - 2} ${b.y} ${b.width + 4} ${b.height}`);
        }
      } catch {
        /* getBBox can throw if not yet rendered */
      }
    };
    measure();
    const fonts = (document as unknown as { fonts?: { ready?: Promise<unknown> } }).fonts;
    if (fonts?.ready) fonts.ready.then(measure).catch(() => {});
    // one more pass on the next frame to catch late layout
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [text, weight, tracking]);

  const [c0, c1] = STOPS[variant];

  return (
    <svg
      className={className}
      width="100%"
      viewBox={vb}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}
      role="img"
      aria-label={text}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c0} />
          <stop offset="1" stopColor={c1} />
        </linearGradient>
      </defs>
      <text
        ref={ref}
        x="0"
        y="0"
        dominantBaseline="text-before-edge"
        fontFamily="var(--font-kanit), system-ui, sans-serif"
        fontSize={100}
        fontWeight={weight}
        letterSpacing={tracking * 100}
        fill={`url(#${gid})`}
      >
        {text.toUpperCase()}
      </text>
    </svg>
  );
}
