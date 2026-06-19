"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "./TextReveal";

const ACHIEVEMENTS = [
  {
    title: "SMART INDIA HACKATHON 2024 FINALIST",
    description:
      "AgriTech crop recommendation solution, ranked among top teams nationwide, featuring a Progressive Web App with voice interface and multilingual support for farmers.",
    type: "AWARD",
  },
  {
    title: "FUNDED TRADER STATUS",
    description:
      "Earned the right to manage $50,000 in live capital through a rigorous evaluation process at 5%ers.com, then sustained an 80% win rate over 5 months.",
    type: "ACHIEVEMENT",
  },
  {
    title: "6.3X INFERENCE SPEEDUP",
    description:
      "Compressed an RT-DETR object detection model by 49.7% in size while improving frame rate from 7 to 47.49 FPS, with negligible accuracy loss.",
    type: "ACHIEVEMENT",
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32 section-dark flex items-center"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <TextReveal>
          <h2 className="font-dot text-[24px] tracking-widest text-white mb-16">
            ACHIEVEMENTS
          </h2>
        </TextReveal>

        {/* 3-column grid for PC/Laptop viewports */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="flex flex-col py-6 border-t border-white/10"
            >
              <span className="font-dot text-[11px] text-[var(--color-muted)] mb-3 tracking-widest">
                {item.type}
              </span>
              <h3 className="font-serif text-[18px] md:text-[20px] font-bold text-white mb-4 leading-[1.3] red-marker">
                {item.title}
              </h3>
              <p className="font-serif text-[14px] md:text-[15px] leading-[1.65] text-[var(--color-muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
