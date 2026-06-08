"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  { name: "MACHINE LEARNING", accent: false },
  { name: "DEEP LEARNING", accent: true },
  { name: "DATA SCIENCE", accent: false },
  { name: "SYSTEM DESIGN", accent: false },
  { name: "QUANTITATIVE RESEARCH", accent: true },
  { name: "PYTHON", accent: false },
  { name: "NEURAL NETWORKS", accent: true },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Subtle label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-[1px] bg-[var(--color-accent)]" />
          <span className="text-[var(--color-secondary)] text-[13px] uppercase tracking-[0.2em] font-heading">
            What I Do
          </span>
        </motion.div>

        {/* Giant typographic skills */}
        <div className="space-y-2 md:space-y-0">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="group relative overflow-hidden"
            >
              <div className="flex items-center justify-between py-2 md:py-3 border-b border-[var(--color-primary)]/5">
                <h3
                  className={`font-heading text-skill transition-colors duration-500 ${
                    skill.accent
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-primary)]"
                  } group-hover:text-[var(--color-accent)]`}
                >
                  {skill.name}
                </h3>

                {/* Hover arrow */}
                <motion.span
                  className="text-[var(--color-accent)] text-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                >
                  →
                </motion.span>
              </div>

              {/* Hover underline effect */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
