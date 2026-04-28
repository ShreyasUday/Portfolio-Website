"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { LearningStage } from "@/content/portfolio";

export function TimelineLearning({ stages }: { stages: LearningStage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl py-6 md:py-10">
      {/* The Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:left-12">
        <motion.div
          className="absolute left-0 top-0 w-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]"
          style={{ height: lineHeight, transformOrigin: "top" }}
        />
      </div>

      <div className="space-y-16 md:space-y-24">
        {stages.map((stage, index) => (
          <TimelineLearningNode key={stage.title} stage={stage} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineLearningNode({ stage, index }: { stage: LearningStage; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ type: "spring", bounce: 0.3, duration: 1 }}
      className="relative flex items-start"
    >
      {/* Node Dot */}
      <div className="absolute left-6 mt-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-black bg-zinc-800 ring-2 ring-white/20 transition-all hover:scale-125 hover:ring-emerald-400 md:left-12 z-10 duration-300">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>

      {/* Content */}
      <div className="ml-16 w-[calc(100%-4rem)] md:ml-28 md:w-[calc(100%-7rem)]">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-emerald-400/80">
          Stage 0{index + 1}
        </div>
        <h3 className="text-lg font-bold text-zinc-50 md:text-xl">{stage.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400 md:text-base">
          {stage.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stage.skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
