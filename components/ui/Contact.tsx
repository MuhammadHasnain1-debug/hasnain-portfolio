"use client";

import { useState } from "react";
import { Send, Check, Loader2, AlertTriangle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "c6c654cd-6529-49b8-a14c-dd7f48846f95";

type Status = "idle" | "sending" | "success" | "error";
const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name || "Portfolio visitor",
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(empty);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-white placeholder-white/50 outline-none transition-colors focus:border-white focus:bg-white/15";

  return (
    <section id="contact" className="relative overflow-hidden bg-orange px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <FadeIn y={40}>
            <h2 className="head-light font-black uppercase leading-[0.95] tracking-tight" style={{ fontSize: "clamp(3rem, 11vw, 130px)" }}>
              Let&apos;s talk
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
              Have a project, an idea, or just want to say hi? I&apos;m open to freelance work and reply within a day.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-white/70">
              Muhammad Hasnain · Creative Developer
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={24}>
          <form onSubmit={onSubmit} className="rounded-[28px] border border-white/20 bg-white/[0.08] p-6 backdrop-blur-sm md:p-8">
            <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/80">Name</label>
            <input value={form.name} onChange={set("name")} required placeholder="Your name" className={`mb-5 ${inputCls}`} />
            <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/80">Email</label>
            <input type="email" value={form.email} onChange={set("email")} required placeholder="you@email.com" className={`mb-5 ${inputCls}`} />
            <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/80">Message</label>
            <textarea value={form.message} onChange={set("message")} required rows={4} placeholder="Tell me about your project…" className={`mb-6 resize-y ${inputCls}`} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) :
               status === "success" ? (<><Check className="h-4 w-4" /> Sent — thank you!</>) :
               status === "error" ? (<><AlertTriangle className="h-4 w-4" /> Try again</>) :
               (<><Send className="h-4 w-4" /> Send message</>)}
            </button>
            {status === "success" && <p className="mt-3 text-sm text-white">Your message landed in my inbox — I&apos;ll reply soon.</p>}
            {status === "error" && <p className="mt-3 text-sm text-white/90">Couldn&apos;t send — please try again.</p>}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
