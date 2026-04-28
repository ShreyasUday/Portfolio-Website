"use client";

import { useEffect, useMemo, useState } from "react";

export function InitialLoader({
  children,
  minDurationMs = 7000,
}: {
  children: React.ReactNode;
  minDurationMs?: number;
}) {
  const [show, setShow] = useState(true);
  const startedAt = useMemo(() => Date.now(), []);

  useEffect(() => {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, minDurationMs - elapsed);
    const t = window.setTimeout(() => setShow(false), remaining);
    return () => window.clearTimeout(t);
  }, [minDurationMs, startedAt]);

  return (
    <>
      {children}
      {show ? <BootOverlay /> : null}
    </>
  );
}

function BootOverlay() {
  const steps = [
    { label: "api", ms: 220 },
    { label: "ui", ms: 340 },
    { label: "projects", ms: 520 },
    { label: "contact", ms: 700 },
  ];

  return (
    <div className="fixed inset-0 z-[999] bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-[0.35]" />
      <div className="mx-auto grid min-h-screen w-full max-w-5xl place-items-center px-5 sm:px-8">
        <div className="w-full rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)] sm:p-12">
          <div className="font-mono text-xs text-zinc-400">shreyas@portfolio:~$</div>
          <div className="mt-4 font-mono text-sm text-zinc-200">
            <div className="text-zinc-500">$ init</div>
            <div className="mt-2 space-y-1">
              {steps.map((s) => (
                <BootLine key={s.label} label={s.label} delayMs={s.ms} />
              ))}
            </div>
            <div className="mt-4 text-emerald-200">
              <span
                className="inline-block opacity-0 boot-reveal"
                style={{ animationDelay: "760ms" }}
              >
                ready<span className="ml-1 inline-block w-2 boot-cursor">▍</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BootLine({ label, delayMs }: { label: string; delayMs: number }) {
  return (
    <div
      className="flex items-center gap-2 opacity-0 boot-reveal"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span
        className="inline-block h-2 w-2 rounded-full bg-emerald-300/80 boot-dot"
        style={{ animationDelay: `${delayMs}ms` }}
      />
      <span className="text-zinc-300">starting</span>
      <span className="text-zinc-500">{label}</span>
      <span className="text-zinc-500">…</span>
    </div>
  );
}

