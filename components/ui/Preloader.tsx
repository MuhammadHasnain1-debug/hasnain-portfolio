"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const unlock = () => (document.body.style.overflow = "");

    if (reduce) {
      setCount(100);
      setDone(true);
      unlock();
      return;
    }

    let n = 0;
    const t = setInterval(() => {
      n += Math.floor(Math.random() * 9) + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(t);
        setCount(100);
        setTimeout(() => {
          setDone(true);
          unlock();
        }, 380);
      } else {
        setCount(n);
      }
    }, 90);

    return () => {
      clearInterval(t);
      unlock();
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        done ? "-translate-y-full" : ""
      }`}
    >
      <div className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600 md:left-12">
        {"// initializing system"}
      </div>
      <div className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600 md:right-12">
        Portfolio 2026
      </div>

      <div className="w-full max-w-md px-6 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
          Muhammad Hasnain
        </h1>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          Front-End &amp; Python Developer
        </p>

        <div className="mt-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text font-sans text-6xl font-bold tabular-nums text-transparent md:text-7xl">
          {count}%
        </div>

        <div className="mt-6">
          <div className="h-px w-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-200"
              style={{ width: `${count}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
            <span>Loading modules…</span>
            <span>Secure connection</span>
          </div>
        </div>
      </div>
    </div>
  );
}
