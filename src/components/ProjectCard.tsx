import { Chip } from "@/components/Chip";
import { DepthCard } from "@/components/DepthCard";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <DepthCard className="group">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/12 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-500/12 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            {project.name}
          </h3>
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <a
                className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 hover:bg-emerald-400/15"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            ) : (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                No live link
              </span>
            )}
            <a
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>

        {project.role ? (
          <div className="mt-2 font-mono text-xs text-zinc-400">
            {project.role}
          </div>
        ) : null}

        <p className="mt-4 text-sm leading-6 text-zinc-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 10).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm text-zinc-300">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" />
              <span className="leading-6">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </DepthCard>
  );
}

