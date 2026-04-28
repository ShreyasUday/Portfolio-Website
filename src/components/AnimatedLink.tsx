"use client";

export function AnimatedLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group relative flex w-full items-center overflow-hidden rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
    >
      {/* Left-to-right sweeping background */}
      <span className="absolute inset-0 origin-left scale-x-0 bg-emerald-500/10 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      
      {/* Content */}
      <span className="relative z-10 flex w-full items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="font-mono text-zinc-600 transition-colors group-hover:text-emerald-500/70">
            {'>'}
          </span>
          <span className="tracking-wide">{label}</span>
        </span>
        
        {/* Subtle arrow sliding in */}
        <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </span>
    </a>
  );
}
