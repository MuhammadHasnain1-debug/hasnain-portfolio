"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2, AlertTriangle } from "lucide-react";
import { StarInput } from "@/components/ui/StarRating";
import { submitReview } from "@/lib/supabase";

type Status = "idle" | "sending" | "success" | "error";
const empty = { name: "", role: "", message: "" };

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return setErr("Please pick a star rating.");
    if (form.name.trim().length < 2) return setErr("Please add your name.");
    if (form.message.trim().length < 4) return setErr("Please write a short review.");
    setErr("");
    setStatus("sending");
    try {
      await submitReview({ name: form.name, role: form.role, rating, message: form.message });
      setStatus("success");
      setForm(empty);
      setRating(0);
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-white placeholder-white/50 outline-none transition-colors focus:border-white focus:bg-white/15";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[28px] border border-white/20 bg-white/[0.08] p-10 text-center backdrop-blur-sm"
        >
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-orange">
            <Check className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-2xl font-bold text-white">Thank you!</h3>
          <p className="mx-auto mt-2 max-w-sm text-white/85">
            Your review has been sent and will appear here once it&apos;s approved. I really
            appreciate you taking the time.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 rounded-full border border-white/40 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-ink"
          >
            Leave another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={onSubmit}
          className="rounded-[28px] border border-white/20 bg-white/[0.08] p-6 backdrop-blur-sm md:p-8"
        >
          <label className="mb-3 block font-mono text-xs uppercase tracking-wider text-white/80">
            Your rating
          </label>
          <StarInput value={rating} onChange={setRating} tone="light" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/80">Name</label>
              <input value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/80">
                Role / company <span className="normal-case opacity-60">(optional)</span>
              </label>
              <input value={form.role} onChange={set("role")} placeholder="e.g. Founder, Acme" className={inputCls} />
            </div>
          </div>

          <label className="mb-2 mt-4 block font-mono text-xs uppercase tracking-wider text-white/80">Your review</label>
          <textarea
            value={form.message}
            onChange={set("message")}
            rows={4}
            placeholder="What was it like working with me?"
            className={`resize-y ${inputCls}`}
          />

          {err && <p className="mt-3 text-sm text-white">{err}</p>}
          {status === "error" && (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-white">
              <AlertTriangle className="h-4 w-4" /> Couldn&apos;t send — please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Submit review
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
