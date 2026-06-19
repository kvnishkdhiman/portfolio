"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EDUCATION = [
  {
    year: "2024 – 2028",
    institution: "BENNETT UNIVERSITY",
    field: "B.Tech Computer Science",
    specialization: "Specialization in AI & Machine Learning",
    logo: "/images/Bennett-University-Logo-FP.webp",
    description:
      "Currently pursuing my undergraduate degree with a core focus on artificial intelligence, machine learning systems, and deep learning architectures. Building foundational knowledge in data structures, algorithms, and advanced OOP while actively applying them to real-world AI projects.",
  },
  {
    year: "2022 - 2023",
    institution: "UNIVERSITY OF MARYLAND",
    field: "Data Science and Business Analytics",
    specialization: "Professional Capstone & Analytics",
    logo: "/images/University-of-Maryland-Logo-500x281.png",
    description:
      "Completed a comprehensive professional certification in Data Science during my gap year. This period was heavily focused on building a systematic understanding of data, statistical analysis, and predictive modeling — which eventually laid the groundwork for my transition into ML-based algorithmic trading.",
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#E5E0DE]"
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-dot text-[11px] tracking-[0.2em] text-[#666]">
            ACADEMIC BACKGROUND
          </span>
        </motion.div>

        {/* Education Blocks */}
        <div className="flex flex-col gap-16 md:gap-24">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
            >
              {/* Left Column: Logo & Year */}
              <div className="w-full lg:w-[300px] flex flex-row lg:flex-col items-center lg:items-start gap-6 border-b lg:border-b-0 lg:border-r border-[#CCC] pb-6 lg:pb-0 lg:pr-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  className="w-32 md:w-48 object-contain mix-blend-multiply"
                />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-[14px] md:text-[16px] text-[#0A0A0A] tracking-wider uppercase mt-2">
                    {edu.year}
                  </span>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col">
                  <h2 className="font-sans font-black text-[36px] md:text-[56px] lg:text-[72px] text-[#0A0A0A] leading-[0.95] tracking-tight uppercase">
                    {edu.institution}
                  </h2>
                  <h3 className="font-serif font-bold text-[20px] md:text-[28px] text-[#333] mt-2 md:mt-4 leading-tight">
                    {edu.field}
                  </h3>
                  <span className="font-dot text-[12px] md:text-[14px] tracking-widest text-[#FF0000] mt-2 block">
                    {edu.specialization}
                  </span>
                </div>

                <p className="font-serif text-[15px] md:text-[17px] leading-[1.8] text-[#555] max-w-[800px] mt-4">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
