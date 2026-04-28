"use client";

import { type ReactNode, useId, useMemo, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTiltDeg?: number; // 8-14 feels good
  glow?: boolean;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function TiltCard({
  children,
  className,
  maxTiltDeg = 10,
  glow = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const localId = useId();

  const style = useMemo(() => {
    return {
      // defaults (also used for initial render)
      ["--rx" as any]: "0deg",
      ["--ry" as any]: "0deg",
      ["--mx" as any]: "50%",
      ["--my" as any]: "50%",
      ["--tiltScale" as any]: "1.01",
    } as React.CSSProperties;
  }, []);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    const ry = clamp((px - 0.5) * 2, -1, 1) * maxTiltDeg;
    const rx = clamp((0.5 - py) * 2, -1, 1) * maxTiltDeg;

    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }

  return (
    <div
      className="tilt-wrap"
      style={{ perspective: "1100px" }}
      aria-hidden={false}
    >
      <div
        ref={ref}
        data-tilt-id={localId}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={[
          "tilt-card relative",
          "will-change-transform",
          "transition-transform duration-200 ease-out",
          className ?? "",
        ].join(" ")}
        style={style}
      >
        {glow ? (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 tilt-glow"
            aria-hidden="true"
          />
        ) : null}
        <div className="relative tilt-content">{children}</div>
      </div>
    </div>
  );
}

