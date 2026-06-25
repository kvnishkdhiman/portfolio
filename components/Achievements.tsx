"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "./TextReveal";

const ACHIEVEMENTS = [
  {
    title: "SMART INDIA HACKATHON 2024 FINALIST",
    description:
      "AgriTech crop recommendation solution, ranked among top teams nationwide, featuring a Progressive Web App with voice interface and multilingual support for farmers.",
    type: "AWARD / NATIONWIDE",
  },
  {
    title: "FUNDED TRADER STATUS",
    description:
      "Earned the right to manage $50,000 in live capital through a rigorous evaluation process at 5%ers.com, then sustained an 80% win rate over 5 months.",
    type: "FINANCE / SYSTEMATIC",
  },
  {
    title: "6.3X INFERENCE SPEEDUP",
    description:
      "Compressed an RT-DETR object detection model by 49.7% in size while improving frame rate from 7 to 47.49 FPS, with negligible accuracy loss.",
    type: "OPTIMIZATION / EDGE AI",
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32 section-dark flex items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none select-none z-0" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Achievements */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            <TextReveal>
              <h2 className="font-dot text-[11px] tracking-[0.2em] text-[var(--color-muted)] mb-12 uppercase">
                KEY ACHIEVEMENTS
              </h2>
            </TextReveal>

            <div className="flex flex-col gap-10">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                  className="flex flex-col py-6 border-b border-white/10 last:border-b-0"
                >
                  <span className="font-dot text-[10px] text-[var(--color-accent-red)] mb-2 tracking-widest">
                    {item.type}
                  </span>
                  <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-white mb-3 leading-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="font-serif text-[14px] md:text-[15px] leading-[1.7] text-[var(--color-muted)] max-w-[500px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Spacing */}
          <div className="lg:col-span-6 h-10 lg:h-auto pointer-events-none" />
        </div>
      </div>

      {/* Massive Static Moon on the Right Edge (Overflowing) */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={isInView ? { opacity: 0.85, x: 0 } : {}}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute right-[-200px] md:right-[-350px] lg:right-[-450px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] pointer-events-none select-none z-10"
      >
        <div
          className="w-full h-full rounded-full bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/images/moon.png')",
          }}
        >
          {/* Crescent Shadow Overlay */}
          <div
            className="absolute inset-0 rounded-full mix-blend-multiply"
            style={{
              background: "radial-gradient(circle at 15% 50%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.99) 70%)",
            }}
          />
          {/* Inner shadow for 3D depth */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.95)]" />
        </div>
      </motion.div>
    </section>
  );
}
