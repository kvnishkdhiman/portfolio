"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    number: "01",
    title: "ML TRADING",
    subtitle: "Advanced Ensemble Trading System",
    description:
      "Ensemble deep learning system combining Temporal Fusion Transformers, CNNs, Graph Neural Networks, and PPO reinforcement learning. Backtested across 3 years with walk-forward validation.",
    tech: ["PyTorch", "GNNs", "RL", "FastAPI"],
  },
  {
    number: "02",
    title: "ODUS",
    subtitle: "AI Linux Desktop Mentor",
    description:
      "AI-powered desktop assistant that captures screen context, analyzes problems using Gemini Vision, and generates sandboxed fixes with automatic model escalation and safety guards.",
    tech: ["Python", "Gemini", "PyQt6"],
  },
  {
    number: "03",
    title: "PRISMNET",
    subtitle: "Compressed RT-DETR for Edge",
    description:
      "Applied L1 unstructured pruning and INT8 post-training quantization to RT-DETR. Achieved 49.7% size reduction and 6.3x inference speedup via NVIDIA TensorRT.",
    tech: ["PyTorch", "TensorRT", "CUDA"],
  },
  {
    number: "04",
    title: "FINCHAT",
    subtitle: "Financial Document RAG",
    description:
      "RAG system for financial PDFs using hybrid retrieval (FAISS + BM25) and cross-encoder reranking. Local inference via llama.cpp for fast, cost-effective document intelligence.",
    tech: ["FastAPI", "FAISS", "llama.cpp"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const isDark = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className={`min-h-screen flex items-center px-6 md:px-12 lg:px-20 ${
        isDark ? "section-dark" : "section-light"
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full relative">
        {/* Ghost number */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none">
          <span
            className="font-dot text-[150px] md:text-[280px] lg:text-[340px] leading-none"
            style={{
              color: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
            }}
          >
            {project.number}
          </span>
        </div>

        {/* Content - Offset on desktop to give premium editorial feel */}
        <div className="relative z-10 w-full flex flex-col items-start md:ml-[25%] lg:ml-[33%] md:max-w-[600px]">
          <h3 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.1] mb-3">
            {project.title}
          </h3>
          <p className="font-dot text-[13px] text-[var(--color-muted)] mb-6 tracking-widest">
            {project.subtitle}
          </p>
          <p className="font-serif text-[15px] md:text-[17px] leading-[1.65] mb-8">
            {project.description}
          </p>

          {/* Tech tags — pill style */}
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-dot text-[11px] px-4 py-2 rounded-full"
                style={{
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"
                  }`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.number} project={project} index={i} />
      ))}
    </section>
  );
}
