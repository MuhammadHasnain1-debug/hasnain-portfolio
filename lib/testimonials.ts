export type Testimonial = {
  name: string;
  role: string;
  org?: string;
  rating: number; // 1–5
  quote: string;
  image?: string; // /testimonials/*.jpg — falls back to initials
  project?: string; // optional live link to the work
};

/**
 * Curated testimonials. Client-written on behalf of people Hasnain has done
 * work for (approved before publishing). Live visitor reviews come in through
 * the review form and are added here once approved.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Kashif Kaimkhani",
    role: "Master Trainer & Project Manager",
    org: "SkillZone Computer Academy",
    rating: 5,
    quote:
      "Hasnain built our academy's website from scratch and it completely changed how SkillZone looks online. It's fast, clean and easy to use — our courses, faculty and admissions finally feel professional, and it's helped us earn parents' trust. He understood exactly what we needed, kept us updated throughout, and delivered on time. Highly recommended.",
    image: "/testimonials/kashif.jpg",
    project: "https://skillzone-website.vercel.app",
  },
];

export function averageRating(list: Testimonial[]): number {
  if (!list.length) return 0;
  return list.reduce((s, t) => s + t.rating, 0) / list.length;
}
