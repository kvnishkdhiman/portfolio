"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "PYTHON & PYTORCH",
  "ALGORITHMIC TRADING",
  "MACHINE LEARNING",
  "FASTAPI & SQL",
  "RAG PIPELINES",
  "MODEL COMPRESSION",
  "SYSTEM DESIGN",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32 section-dark flex flex-col justify-center"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Label bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-6"
        >
          <span className="font-dot text-[13px] tracking-wider text-[var(--color-muted)]">
            WHAT I DO
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </motion.div>

        {/* Stacked dot-matrix skills */}
        <div className="flex flex-col gap-6 md:gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="group"
            >
              <h3 className="font-dot text-skill text-white/90 hover:text-white/40 transition-colors duration-300 leading-[1.05] cursor-default break-words">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
