"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2, AlertTriangle } from "lucide-react";

// Web3Forms access key — get yours free at https://web3forms.com (it's a public key, safe in client code).
// Easiest: paste it below. Or set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your env / Vercel.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "c6c654cd-6529-49b8-a14c-dd7f48846f95";

type Status = "idle" | "sending" | "success" | "error";
const empty = { firstName: "", lastName: "", email: "", message: "" };

function Line({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div className="whitespace-pre-wrap break-words pl-4">
      <span className="text-accent">&quot;{k}&quot;</span>
      <span className="text-zinc-500">: </span>
      <span className="text-emerald-300">&quot;{v || "…"}&quot;</span>
      {!last && <span className="text-zinc-500">,</span>}
    </div>
  );
}

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
          subject: `Portfolio message from ${form.firstName} ${form.lastName}`.trim(),
          from_name: `${form.firstName} ${form.lastName}`.trim() || "Portfolio visitor",
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const statusText =
    status === "success"
      ? "200 · delivered"
      : status === "sending"
      ? "dispatching…"
      : status === "error"
      ? "error · check access key"
      : "awaiting input";
  const statusColor =
    status === "success"
      ? "text-emerald-300"
      : status === "error"
      ? "text-red-300"
      : "text-yellow-300";

  return (
    <section id="contact" className="section-pad">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow mb-4">Contact · Live Dispatch</p>
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          Let&apos;s build something <span className="italic text-accent">good</span>.
        </h2>
        <p className="mt-4 text-zinc-400">
          Have a project or an idea? Fill it in — watch it compile on the left.
        </p>
        <p className="mt-4 font-mono text-xs text-zinc-500">
          — Muhammad Hasnain · Freelance Developer
        </p>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-2">
        {/* Left: code preview */}
        <div className="border-b border-white/10 bg-[#0c0c10] lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 font-mono text-xs text-zinc-500">
              dispatch_payload.json
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-7">
            <div className="text-zinc-500">{"// dispatch_payload.json"}</div>
            <div className="mt-2 text-zinc-500">{"{"}</div>
            <Line k="firstName" v={form.firstName} />
            <Line k="lastName" v={form.lastName} />
            <Line k="email" v={form.email} />
            <Line k="message" v={form.message} last />
            <div className="text-zinc-500">{"}"}</div>
            <div className="mt-4 text-zinc-600">
              status: <span className={statusColor}>{statusText}</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="bg-white/[0.02] p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First Name" value={form.firstName} onChange={set("firstName")} placeholder="Your first name" required />
            <Field label="Last Name" value={form.lastName} onChange={set("lastName")} placeholder="Your last name" />
          </div>
          <div className="mt-4">
            <Field label="Email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" required />
          </div>
          <div className="mt-4">
            <label className="mb-2 block font-mono text-xs text-zinc-400">Message</label>
            <textarea
              value={form.message}
              onChange={set("message")}
              rows={5}
              required
              placeholder="Tell me about your project…"
              className="w-full resize-y rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 font-medium text-ink transition-colors hover:bg-glow disabled:opacity-70"
          >
            {status === "sending" ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
            ) : status === "success" ? (
              <><Check className="h-4 w-4" /> Sent — thank you!</>
            ) : status === "error" ? (
              <><AlertTriangle className="h-4 w-4" /> Try again</>
            ) : (
              <><Send className="h-4 w-4" /> Send Message</>
            )}
          </motion.button>

          {status === "success" && (
            <p className="mt-3 font-mono text-xs text-emerald-300">
              Your message landed in my inbox — I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 font-mono text-xs text-red-300">
              Couldn&apos;t send. Add your Web3Forms access key, then try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs text-zinc-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
