"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import TextReveal from "./TextReveal";

const PROJECTS = [
  {
    number: "01",
    title: "ELDORIA",
    subtitle: "Java RPG Adventure Game",
    description:
      "A text-based role-playing game with complex character systems, quest mechanics, and procedural narrative generation. Built entirely in Java with OOP design patterns.",
    tech: ["Java", "OOP", "Game Design"],
    titleColor: "text-[var(--color-primary)]",
  },
  {
    number: "02",
    title: "ODUS",
    subtitle: "AI Desktop Assistant",
    description:
      "An intelligent desktop automation agent powered by LLMs. Uses computer vision and natural language processing to understand and execute complex user commands autonomously.",
    tech: ["Python", "LLMs", "Computer Vision"],
    titleColor: "text-[var(--color-accent)]",
  },
  {
    number: "03",
    title: "NEURAL",
    subtitle: "Deep Learning Framework",
    description:
      "Custom neural network framework built from scratch. Implements backpropagation, various optimizers, and common architectures for educational and experimental purposes.",
    tech: ["Python", "NumPy", "Mathematics"],
    titleColor: "text-[var(--color-primary)]",
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
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.77, 0, 0.175, 1],
      }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
      style={{ direction: !isEven ? "rtl" : "ltr" }}
    >
      {/* Project info */}
      <div style={{ direction: "ltr" }} className={isEven ? "" : "lg:order-2"}>
        {/* Huge number */}
        <span className="text-project-number font-heading block mb-2 select-none">
          {project.number}
        </span>

        {/* Title */}
        <h3 className={`font-heading text-[clamp(36px,5vw,72px)] font-800 uppercase leading-[0.9] mb-3 ${project.titleColor}`}>
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[var(--color-secondary)] text-[14px] md:text-[16px] uppercase tracking-wider font-heading font-600 mb-6">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[var(--color-primary)] opacity-95 text-[16px] md:text-[18px] leading-[1.7] max-w-[440px] mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[12px] uppercase tracking-widest text-[var(--color-primary)] border border-[var(--color-primary)]/30 px-3 py-1.5 font-heading bg-[var(--color-accent)]/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Project screenshot placeholder */}
      <motion.div
        style={{ y: imageY, direction: "ltr" }}
        className={isEven ? "" : "lg:order-1"}
      >
        <div
          className="w-full aspect-[4/3] relative overflow-hidden group shadow-2xl"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          {/* Morphing Box embedded within project frames */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-[60px] md:text-[80px] font-800 text-[var(--color-primary)] opacity-10 uppercase select-none">
              {project.title}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[var(--color-grey)] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />

          {/* Corner accent */}
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--color-primary)] opacity-40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--color-primary)] opacity-40" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section heading */}
        <TextReveal>
          <h2 className="font-heading text-section text-[var(--color-primary)] mb-24 md:mb-36">
            SELECTED
            <br />
            <span className="text-[var(--color-accent)]">WORKS</span>
          </h2>
        </TextReveal>

        {/* Projects list */}
        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
