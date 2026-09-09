"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Char({
  char,
  progress,
  start,
  end,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === " " ? " " : char;
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0 }} aria-hidden>
        {display}
      </span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {display}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => {
        const p = i / chars.length;
        const start = Math.max(0, p - 0.1);
        const end = Math.min(1, p + 0.05);
        return <Char key={i} char={c} progress={scrollYProgress} start={start} end={end} />;
      })}
    </p>
  );
}
