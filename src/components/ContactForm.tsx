"use client";

import { useMemo, useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot

  const canSend = useMemo(() => {
    return name.trim().length >= 2 && email.trim().length >= 6 && message.trim().length >= 10;
  }, [name, email, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend || state.status === "sending") return;
    setState({ status: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setState({
          status: "error",
          message: data.error ?? "Something went wrong. Try again in a minute.",
        });
        return;
      }

      setState({ status: "sent" });
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <div className="mb-1 text-xs font-medium text-zinc-300">Name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-emerald-400/40"
            placeholder="Shreyas"
            autoComplete="name"
            required
          />
        </label>
        <label className="block">
          <div className="mb-1 text-xs font-medium text-zinc-300">Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-emerald-400/40"
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            required
          />
        </label>
      </div>

      <label className="flex flex-1 flex-col">
        <div className="mb-1 text-xs font-medium text-zinc-300">Message</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 min-h-32 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-400/40"
          placeholder="Tell me what you’re building…"
          required
        />
      </label>

      {/* Honeypot */}
      <label className="hidden">
        Company
        <input value={company} onChange={(e) => setCompany(e.target.value)} />
      </label>

      <div className="mt-auto pt-2 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!canSend || state.status === "sending"}
          className="inline-flex items-center justify-center rounded-sm bg-emerald-500/15 px-5 py-3 text-sm font-medium text-emerald-100 ring-1 ring-emerald-400/30 shadow-[0_4px_0_0_rgba(52,211,153,0.2)] transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20 hover:shadow-[0_5px_0_0_rgba(52,211,153,0.3)] active:translate-y-[4px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_0_0_rgba(52,211,153,0.2)] disabled:active:translate-y-0 disabled:active:shadow-[0_4px_0_0_rgba(52,211,153,0.2)]"
        >
          {state.status === "sending" ? "Sending…" : "Send message"}
        </button>

        {state.status === "sent" ? (
          <div className="text-sm text-emerald-200">Sent. Thanks!</div>
        ) : null}
        {state.status === "error" ? (
          <div className="text-sm text-rose-200">{state.message}</div>
        ) : null}
      </div>

      <div className="text-xs text-zinc-500">
        If the form fails, email{" "}
        <a className="text-zinc-300 underline" href="mailto:udayshreyas123@gmail.com">
          udayshreyas123@gmail.com
        </a>
        .
      </div>
    </form>
  );
}

