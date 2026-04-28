"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999]"
          >
            <BootOverlay />
          </motion.div>
        )}
      </AnimatePresence>
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
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div>
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

            <div className="block">
              <SystemVisualizer />
            </div>
          </div>

          {/* Bottom Log Stream */}
          <div className="mt-8 border-t border-white/5 pt-6">
            <LogStream />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogStream() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const logs = [
    "Initializing secure_auth_kernel v4.2.0...",
    "Establishing connection to postgre_db_cluster...",
    "Loading SSL certificates from /etc/ssl/certs...",
    "Mounting /dev/sdb1 to /var/www/portfolio...",
    "Handshaking with resend_api_gateway...",
    "Optimizing static assets for turbopack build...",
    "System check: 0 errors, 12 warnings (suppressed).",
    "Starting production_env_v15.0.0...",
    "Fetching metadata from github_api_v3...",
    "Syncing with aws_ec2_instances...",
    "Heartbeat check: HEALTHY",
  ];

  if (!mounted) return null;

  return (
    <div className="h-16 overflow-hidden font-mono text-[9px] text-zinc-600 sm:h-20 sm:text-[10px]">
      <div className="flex flex-col gap-1 animate-[scroll_15s_linear_infinite]">
        {[...logs, ...logs].map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-zinc-700">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemVisualizer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
      {/* Central Pulsing Core */}
      <div className="relative flex h-32 items-center justify-center sm:h-40">
        <div className="absolute h-24 w-24 animate-ping rounded-full border border-emerald-500/20 duration-[3s] sm:h-32 sm:w-32" />
        <div className="absolute h-16 w-16 animate-pulse rounded-full border border-emerald-500/40 sm:h-24 sm:w-24" />
        <div className="h-10 w-10 rounded-full border-2 border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.4)] sm:h-12 sm:w-12" />
        
        {/* Orbiting dots - Adjusted sizes to prevent overflow */}
        <div className="absolute h-28 w-28 animate-[spin_8s_linear_infinite] sm:h-32 sm:w-32">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] sm:h-2 sm:w-2" />
        </div>
        <div className="absolute h-28 w-28 animate-[spin_12s_linear_infinite_reverse] sm:h-32 sm:w-32">
          <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] sm:h-1.5 sm:w-1.5" />
        </div>
      </div>

      {/* Resource Bars */}
      <div className="w-full space-y-2 sm:space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between font-mono text-[9px] text-zinc-500 sm:text-[10px]">
              <span>SRV_CORE_0{i}</span>
              <span>{70 + i * 8}%</span>
            </div>
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/5 sm:h-1">
              <div 
                className="h-full bg-emerald-500/40"
                style={{ 
                  width: `${70 + i * 8}%`,
                  animation: `grow 2s ease-out forwards ${i * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-[9px] text-zinc-600 animate-pulse sm:text-[10px]">
        ALLOCATING_RESOURCES...
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

