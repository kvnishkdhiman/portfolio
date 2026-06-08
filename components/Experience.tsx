"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "./TextReveal";

const EXPERIENCES = [
  {
    year: "2025",
    role: "MACHINE LEARNING",
    subtitle: "STUDENT & RESEARCHER",
    description:
      "Deep diving into neural network architectures, quantitative research, and building production-ready ML pipelines. Focused on bridging the gap between academic research and real-world applications.",
    accentColor: "text-[var(--color-accent)]",
  },
  {
    year: "2024",
    role: "DATA SCIENCE",
    subtitle: "PROJECTS & EXPLORATION",
    description:
      "Developed end-to-end data science solutions. Worked with large datasets, built predictive models, and created visualization dashboards for actionable insights.",
    accentColor: "text-[var(--color-primary)]",
  },
  {
    year: "2023",
    role: "SOFTWARE",
    subtitle: "ENGINEERING FOUNDATIONS",
    description:
      "Built strong foundations in software engineering principles, system design, and full-stack development. Created multiple projects spanning web applications and game development.",
    accentColor: "text-[var(--color-accent)]",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section heading */}
        <TextReveal>
          <h2 className="font-heading text-section text-[var(--color-primary)] mb-20 md:mb-32">
            THE
            <br />
            <span className="text-[var(--color-accent)]">JOURNEY</span>
          </h2>
        </TextReveal>

        {/* Experience entries */}
        <div className="space-y-24 md:space-y-32">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
            >
              {/* Large year marker */}
              <div className="md:col-span-3">
                <span className="font-heading text-[clamp(60px,8vw,140px)] font-800 text-[var(--color-accent)] opacity-40 leading-none">
                  {exp.year}
                </span>
              </div>

              {/* Role */}
              <div className="md:col-span-4">
                <h3 className={`font-heading text-[clamp(28px,4vw,52px)] font-700 leading-[0.95] uppercase ${exp.accentColor}`}>
                  {exp.role}
                </h3>
                <p className="font-heading text-[14px] md:text-[16px] font-600 text-[var(--color-secondary)] uppercase tracking-wider mt-2">
                  {exp.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-[var(--color-secondary)] text-[16px] md:text-[18px] leading-[1.7] max-w-[440px]">
                  {exp.description}
                </p>

                {/* Decorative line */}
                <div className="w-full h-[1px] bg-[var(--color-accent)] opacity-20 mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
