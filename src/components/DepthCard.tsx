import { type ReactNode } from "react";

export function DepthCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "depth-card group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40",
        "shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
        className ?? "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 depth-card-glow opacity-70" />
      <div className="relative p-6">{children}</div>
    </div>
  );
}

