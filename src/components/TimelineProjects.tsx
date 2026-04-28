"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/content/portfolio";
import { ProjectModal } from "./ProjectModal";

export function TimelineProjects({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div ref={containerRef} className="relative mx-auto max-w-5xl py-10">
        {/* The Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-ml-px">
          <motion.div
            className="absolute left-0 top-0 w-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineNode 
                key={project.name} 
                project={project} 
                isEven={isEven} 
                onClick={() => setSelectedProject(project)} 
              />
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function TimelineNode({ project, isEven, onClick }: { project: Project; isEven: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 1 }}
      className={`relative flex items-center justify-between md:justify-normal ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Node Dot */}
      <div className="absolute left-8 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-black bg-zinc-800 ring-2 ring-white/20 transition-all hover:ring-emerald-400 md:left-1/2 cursor-pointer z-10">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>

      {/* Empty space for desktop alternating layout */}
      <div className="hidden w-1/2 md:block" />

      {/* Hover Panel / Content Card */}
      <div 
        className="group relative ml-14 w-[calc(100%-3.5rem)] cursor-pointer rounded-2xl border border-white/10 bg-black/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/5 hover:shadow-[0_10px_40px_-10px_rgba(52,211,153,0.2)] md:ml-0 md:w-5/12 md:p-6"
        onClick={onClick}
      >
        <h3 className="text-lg font-bold text-zinc-50 group-hover:text-emerald-400 transition-colors md:text-xl">
          {project.name}
        </h3>
        {project.role && <p className="mt-1 text-xs font-mono text-zinc-400">{project.role}</p>}
        <p className="mt-3 text-sm leading-6 text-zinc-300 line-clamp-2 md:mt-4">
          {project.summary}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400/80 transition-all group-hover:text-emerald-400 md:mt-6 md:opacity-0 md:group-hover:opacity-100">
          View Details 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </div>
      </div>
    </motion.div>
  );
}
