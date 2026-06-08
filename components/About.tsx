"use client";

import TextReveal from "./TextReveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <TextReveal>
            <h2 className="font-heading text-section text-[var(--color-primary)]">
              WHO IS
            </h2>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h2 className="font-heading text-section text-[var(--color-accent)]">
              KANISHK?
            </h2>
          </TextReveal>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait in 16:10 frame container */}
          <div className="lg:col-span-8 w-full">
            <TextReveal delay={0.3}>
              <div className="relative w-full aspect-[16/10] overflow-hidden shadow-xl bg-[var(--color-bg)] rounded-sm">
                {/* Clean grayscale portrait */}
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/portrait.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%)",
                    opacity: 0.9,
                  }}
                />
              </div>
            </TextReveal>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <TextReveal delay={0.4}>
              <p className="text-[var(--color-primary)] text-[18px] md:text-[20px] leading-[1.6] mb-6 font-light">
                A machine learning engineer obsessed with building systems that
                think. From neural architectures to production pipelines, I work
                at the intersection of research and real-world impact.
              </p>
            </TextReveal>
            <TextReveal delay={0.55}>
              <p className="text-[var(--color-secondary)] text-[18px] md:text-[20px] leading-[1.6] mb-8 font-light">
                Currently exploring deep learning, quantitative research, and
                the edges of what intelligent systems can do. Every project is
                an experiment in making machines understand more.
              </p>
            </TextReveal>

            {/* Decorative layout marker */}
            <TextReveal delay={0.7}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[var(--color-primary)]" />
                <span className="text-[var(--color-accent)] text-[13px] uppercase tracking-widest font-heading font-600">
                  DEVELOPER / RESEARCHER
                </span>
              </div>
            </TextReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
