"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, GITHUB } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const FEATURED = projects.slice(0, 6);

export default function Projects() {
  return (
    <section id="work" className="relative bg-cream px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">Selected Work</p>
            <h2 className="head-orange font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.6rem, 9vw, 120px)" }}>
              Projects
            </h2>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wider text-ink-soft transition-colors hover:text-orange"
          >
            <Github className="h-4 w-4" /> All repos <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
          >
            View all {projects.length} projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
