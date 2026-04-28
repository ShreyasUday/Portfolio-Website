export function HeaderLogo() {
  return (
    <div className="group flex items-center justify-center rounded-xl border border-white/5 bg-black/20 p-2 hover:bg-black/40 hover:border-emerald-500/20 transition-all cursor-pointer">
      {/* Mobile Art (Compact SU) */}
      <pre className="block sm:hidden font-mono text-[6px] sm:text-[8px] leading-[7px] sm:leading-[9px] font-bold text-emerald-400/80 transition-colors group-hover:text-emerald-400">
        {`  ___ _  _ 
 / __| || |
 \\__ \\ || |
 |___/\\__/ `}
      </pre>

      {/* Desktop Art (SHREYAS) */}
      <pre className="hidden sm:block font-mono text-[8px] leading-[9px] font-bold text-emerald-400/80 transition-colors group-hover:text-emerald-400">
        {` ___   _  _   ___   ___  __  __   _    ___ 
/ __| | || | | _ \\ | __| \\ \\/ /  /_\\  / __|
\\__ \\ | __ | |   / | _|   \\  /  / _ \\ \\__ \\
|___/ |_||_| |_|_\\ |___|  |_|  \/_/ \\_\\|___/`}
      </pre>
    </div>
  );
}
