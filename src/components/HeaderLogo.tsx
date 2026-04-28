"use client";

export function HeaderLogo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="group flex items-center justify-center rounded-xl border border-white/5 bg-black/20 p-2 hover:bg-black/40 hover:border-emerald-500/20 transition-all cursor-pointer focus:outline-none"
    >
      <pre className="font-mono text-[8px] leading-[9px] font-bold text-emerald-400/80 transition-colors group-hover:text-emerald-400">
        {`  ___ _  _ 
 / __| || |
 \\__ \\ || |
 |___/\\__/ `}
      </pre>
    </button>
  );
}
