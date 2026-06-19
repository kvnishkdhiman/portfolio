"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EDUCATION = [
  {
    year: "2024–28",
    degree: "B.TECH, COMPUTER SCIENCE",
    institution: "Bennett University, New Delhi",
    description:
      "Specialization in AI/ML. Relevant Coursework: Data Structures & Algorithms, Machine Learning, Database Management Systems, Operating Systems, OOP.",
  },
  {
    year: "CERT",
    degree: "DATA SCIENCE & BUSINESS ANALYTICS",
    institution: "University of Maryland",
    description: "Professional Certification in Data Science.",
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32 section-light flex items-center"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-dot text-[24px] tracking-widest text-[var(--color-text-dark)]">
            EDUCATION & CERTIFICATIONS
          </h2>
        </motion.div>

        {/* Timeline entries */}
        <div className="flex flex-col">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-[var(--color-border)]"
            >
              {/* Date & Index */}
              <div className="md:col-span-4 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-2">
                <span className="font-dot text-[14px] font-bold text-[var(--color-text-dark)]">
                  {edu.year}
                </span>
                <span className="section-index md:mt-2">{`{${i + 1}}`}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="md:col-span-8 flex flex-col gap-2">
                <div>
                  <h3 className="font-serif text-[20px] md:text-[24px] font-bold text-[var(--color-text-dark)] leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="font-dot text-[12px] text-[var(--color-muted)] mt-1 tracking-wider">
                    {edu.institution}
                  </h4>
                </div>

                {/* Description */}
                <p className="font-serif text-[15px] md:text-[16px] text-[var(--color-text-dark)] leading-[1.6]">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[var(--color-border)]" />
        </div>
      </div>
    </section>
  );
}
