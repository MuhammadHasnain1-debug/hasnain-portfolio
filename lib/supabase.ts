// Public Supabase config for the portfolio's testimonials table.
// The anon key is designed to be public; every table has row-level security,
// so it can only submit a *pending* review and read *approved* ones.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://heownbiozllpzovohngy.supabase.co";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlb3duYmlvemxscHpvdm9obmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1NzE4NDMsImV4cCI6MjA5ODE0Nzg0M30.myZaod29drB6JGOkVz5Iyr771eFRyGaZd5K9qm50brY";

const REST = `${SUPABASE_URL}/rest/v1/portfolio_testimonials`;
const authHeaders = { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` };

export type DbReview = {
  name: string;
  role: string | null;
  rating: number;
  message: string;
  created_at: string;
};

/** Insert a review — always lands as pending (a DB trigger forces approved = false). */
export async function submitReview(input: {
  name: string;
  role: string;
  rating: number;
  message: string;
}): Promise<void> {
  const res = await fetch(REST, {
    method: "POST",
    headers: { ...authHeaders, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({
      name: input.name.trim(),
      role: input.role.trim() || null,
      rating: input.rating,
      message: input.message.trim(),
    }),
  });
  if (!res.ok) throw new Error(`Submit failed (${res.status})`);
}

/** Fetch approved reviews (newest first). Returns [] on any error so the page still renders. */
export async function fetchApprovedReviews(): Promise<DbReview[]> {
  try {
    const res = await fetch(
      `${REST}?approved=eq.true&select=name,role,rating,message,created_at&order=created_at.desc`,
      { headers: authHeaders, cache: "no-store" }
    );
    if (!res.ok) return [];
    return (await res.json()) as DbReview[];
  } catch {
    return [];
  }
}
