import { Container } from "@/components/Container";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-[0.35]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-zinc-200">
              shreyas@portfolio:~$
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300/80 animate-pulse" />
              booting…
            </div>
          </div>
        </Container>
      </header>

      <main className="py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-12">
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <div className="h-10 w-64 rounded-xl bg-white/5 animate-pulse" />
                <div className="mt-5 space-y-3">
                  <div className="h-4 w-full max-w-xl rounded bg-white/5 animate-pulse" />
                  <div className="h-4 w-full max-w-lg rounded bg-white/5 animate-pulse" />
                  <div className="h-4 w-full max-w-md rounded bg-white/5 animate-pulse" />
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 font-mono text-xs text-zinc-300">
                  <BootLine dim>$ init portfolio</BootLine>
                  <BootLine>$ load content</BootLine>
                  <BootLine>$ warm cache</BootLine>
                  <BootLine>
                    <span className="text-zinc-400">status:</span>{" "}
                    <span className="text-emerald-200">starting services</span>
                    <span className="ml-2 inline-block w-2 animate-pulse">▍</span>
                  </BootLine>
                </div>
              </div>

              <div className="hidden lg:col-span-2 lg:block">
                <div className="h-[260px] w-[260px] rounded-3xl border border-white/10 bg-white/5 animate-pulse" />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

function BootLine({
  children,
  dim,
}: {
  children: React.ReactNode;
  dim?: boolean;
}) {
  return (
    <div className={dim ? "text-zinc-500" : ""}>
      <span className="text-zinc-400">sh</span>{" "}
      <span className="text-zinc-500">›</span> {children}
    </div>
  );
}

