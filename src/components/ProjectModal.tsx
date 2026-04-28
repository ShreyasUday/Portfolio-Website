"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/content/portfolio";
import { Chip } from "./Chip";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  // block body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-white/5 p-2 text-zinc-400 hover:bg-white/10 hover:text-zinc-100 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-zinc-50 pr-8">{project.name}</h2>
            {project.role && (
              <div className="mt-2 font-mono text-sm text-emerald-400">{project.role}</div>
            )}

            <p className="mt-6 text-base leading-7 text-zinc-300">
              {project.summary}
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-zinc-100 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-zinc-100 mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="leading-6">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-white/10">
              {project.liveUrl && (
                <a
                  className="flex items-center justify-center rounded-sm bg-emerald-500/15 px-5 py-2.5 text-sm font-medium text-emerald-100 ring-1 ring-emerald-400/30 shadow-[0_4px_0_0_rgba(52,211,153,0.2)] transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20 hover:shadow-[0_5px_0_0_rgba(52,211,153,0.3)] active:translate-y-[4px] active:shadow-none"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live App
                </a>
              )}
              <a
                className="flex items-center justify-center rounded-sm bg-white/5 px-5 py-2.5 text-sm text-zinc-200 ring-1 ring-white/10 shadow-[0_4px_0_0_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_5px_0_0_rgba(255,255,255,0.12)] active:translate-y-[4px] active:shadow-none"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Repository
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
