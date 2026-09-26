export type Project = {
  slug: string;
  title: string;
  cat: string;
  image: string;
  tags: string[];
  summary: string;
  /** live URL, or "" if none */
  live: string;
  /** public repo URL, or "" if private/none */
  repo: string;
  /** true = a private client project (no public code) */
  private?: boolean;
};

const GH = "https://github.com/MuhammadHasnain1-debug";
const PAGES = "https://muhammadhasnain1-debug.github.io";

export const projects: Project[] = [
  {
    slug: "skillzone",
    title: "SkillZone Computer Academy",
    cat: "Client · Paid",
    image: "/projects/skillzone.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    summary:
      "A complete website for a computer academy — hero, courses, faculty, gallery and admissions — in a clean blue / white / orange brand. Designed and built end-to-end and shipped for the client.",
    live: "https://skillzone-website.vercel.app",
    repo: "",
    private: true,
  },
  {
    slug: "stacked",
    title: "Stacked — Smash Burgers",
    cat: "Personal",
    image: "/projects/stacked-burgers.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    summary:
      "An animated smash-burger landing page with a scroll-driven burger that explodes into its layers, plus AI food photography.",
    live: `${PAGES}/stacked-burgers/`,
    repo: `${GH}/stacked-burgers`,
  },
  {
    slug: "sales-dashboard",
    title: "Sales Report Dashboard",
    cat: "Client",
    image: "/projects/sales-dashboard.png",
    tags: ["Python", "SQL", "JavaScript"],
    summary:
      "Ingests messy CSV sales exports, cleans and aggregates them, and renders an interactive dashboard with charts and filters.",
    live: `${PAGES}/sales-report-dashboard/`,
    repo: `${GH}/sales-report-dashboard`,
  },
  {
    slug: "apu-cgpa",
    title: "APU CGPA Calculator",
    cat: "Web App",
    image: "/projects/apu-cgpa.png",
    tags: ["Next.js", "React", "TypeScript"],
    summary:
      "A full CGPA calculator and target planner built in Next.js — grade input through to goal planning.",
    live: `${PAGES}/apu-cgpa-calculator/`,
    repo: `${GH}/apu-cgpa-calculator`,
  },
  {
    slug: "namewright",
    title: "Namewright",
    cat: "AI Tool",
    image: "/projects/namewright.png",
    tags: ["JavaScript", "Gemini API"],
    summary:
      "An AI name generator wired to a real Gemini backend, returning brandable names on demand.",
    live: `${PAGES}/namewright/`,
    repo: `${GH}/namewright`,
  },
  {
    slug: "gilded-fox",
    title: "The Gilded Fox",
    cat: "Client",
    image: "/projects/gilded-fox.png",
    tags: ["HTML", "CSS", "JS"],
    summary:
      "A moody, cinematic cocktail-bar site with full-bleed photography and smooth scroll.",
    live: `${PAGES}/the-gilded-fox/`,
    repo: `${GH}/the-gilded-fox`,
  },
  {
    slug: "ember-oak",
    title: "Ember & Oak",
    cat: "Client",
    image: "/projects/ember-oak.png",
    tags: ["HTML", "CSS", "JS"],
    summary: "A warm, atmospheric brand site for a candle and fragrance label.",
    live: `${PAGES}/ember-and-oak/`,
    repo: `${GH}/ember-and-oak`,
  },
  {
    slug: "team-scorecard",
    title: "Team Performance Scorecard",
    cat: "Automation",
    image: "/projects/team-scorecard.png",
    tags: ["Apps Script", "Sheets"],
    summary: "An automated Google Sheets scorecard that tracks and ranks team KPIs.",
    live: `${PAGES}/team-performance-scorecard/`,
    repo: `${GH}/team-performance-scorecard`,
  },
  {
    slug: "brew-haven",
    title: "Brew Haven",
    cat: "Client",
    image: "/projects/brew-haven.png",
    tags: ["HTML", "CSS", "JS"],
    summary:
      "An animated coffee-shop landing page full of playful scroll effects and micro-interactions.",
    live: `${PAGES}/brew-haven/`,
    repo: `${GH}/brew-haven`,
  },
];

export const GITHUB = GH;
