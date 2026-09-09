"use client";

const ROW1 = [
  "/projects/stacked-burgers.png",
  "/projects/gilded-fox.png",
  "/projects/ember-oak.png",
  "/projects/apu-cgpa.png",
];
const ROW2 = [
  "/projects/sales-dashboard.png",
  "/projects/namewright.png",
  "/projects/brew-haven.png",
  "/projects/team-scorecard.png",
];

function Row({ imgs, dir }: { imgs: string[]; dir: "left" | "right" }) {
  const set = [...imgs, ...imgs, ...imgs];
  return (
    <div className="flex w-max gap-4">
      <div
        className={`flex w-max gap-4 ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {set.map((src, i) => (
          <div
            key={i}
            className="h-[180px] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-ink/10 sm:h-[220px] sm:w-[360px] md:h-[260px] md:w-[420px]"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-cream pb-10 pt-16 sm:pt-20 md:pt-28">
      <div className="flex flex-col gap-4">
        <Row imgs={ROW1} dir="left" />
        <Row imgs={ROW2} dir="right" />
      </div>
    </section>
  );
}
