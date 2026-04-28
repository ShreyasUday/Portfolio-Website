import { type ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mb-6">
        {eyebrow ? (
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

