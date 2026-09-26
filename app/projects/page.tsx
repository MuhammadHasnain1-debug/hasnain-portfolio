import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { projects, GITHUB } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Muhammad Hasnain",
  description:
    "A showcase of everything Muhammad Hasnain has built — client websites, web apps, AI tools and data dashboards.",
};

const clientCount = projects.filter((p) => p.cat.startsWith("Client")).length;

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-cream px-5 pb-24 pt-32 sm:px-8 md:px-10 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-orange"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <div className="mt-8 border-b border-ink/10 pb-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-orange">The Portfolio</p>
              <h1 className="head-orange font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 150px)" }}>
                Projects
              </h1>
            </div>
            <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-ink-soft">
              <div>
                <div className="head-orange text-4xl font-black tabular-nums leading-none">{projects.length}</div>
                <div className="mt-2">Projects</div>
              </div>
              <div>
                <div className="head-orange text-4xl font-black tabular-nums leading-none">{clientCount}</div>
                <div className="mt-2">For Clients</div>
              </div>
              <div>
                <div className="head-orange text-4xl font-black tabular-nums leading-none">100%</div>
                <div className="mt-2">Live</div>
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Everything I&apos;ve designed and built end-to-end — client websites, web apps, AI
            tools and data dashboards. Each one is live; most are open-source.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-ink-soft transition-colors hover:text-orange"
          >
            <Github className="h-4 w-4" /> See everything on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
