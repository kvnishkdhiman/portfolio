"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import PortraitComposition from "./PortraitComposition";

const HERO_WORDS = [
  { text: "BUILDING", color: "text-[var(--color-primary)]" },
  { text: "INTELLIGENT", color: "text-[var(--color-accent)]" },
  { text: "SYSTEMS", color: "text-[var(--color-primary)]" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Left — Massive statement text */}
      <div className="flex-1 relative z-10">
        <div className="mb-6">
          {HERO_WORDS.map((word, i) => (
            <motion.div
              key={word.text}
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3 + i * 0.15,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <h1
                className={`font-heading text-hero leading-[0.85] ${word.color}`}
              >
                {word.text}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[var(--color-secondary)] text-[16px] md:text-[18px] max-w-[360px] leading-relaxed mt-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Machine Learning Engineer crafting intelligent systems
          that bridge research and production.
        </motion.p>
      </div>

      {/* Center — Portrait composition */}
      <div className="hidden lg:flex flex-1 justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
          className="relative"
        >
          <PortraitComposition variant="hero" />

          {/* Overlapping typography */}
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 0.12, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-1/3 -right-16 font-heading text-[120px] md:text-[160px] font-800 text-[var(--color-primary)] leading-none -rotate-90 origin-right pointer-events-none select-none"
          >
            K.
          </motion.span>
        </motion.div>
      </div>

      {/* Right — Minimal info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex flex-col items-end gap-6 text-right relative z-10"
      >
        <div className="text-[var(--color-secondary)] text-[13px] uppercase tracking-widest space-y-1">
          <p>Chandigarh, India</p>
          <p>ML Engineer</p>
        </div>

        <div className="flex flex-col gap-3 text-[13px] uppercase tracking-widest">
          <a
            href="https://github.com/kanishk57"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-[var(--color-secondary)] hover:text-[var(--color-accent)]"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/kanishk"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-[var(--color-secondary)] hover:text-[var(--color-accent)]"
          >
            LinkedIn ↗
          </a>
          <a
            href="#contact"
            className="nav-link text-[var(--color-accent)]"
          >
            Resume ↓
          </a>
        </div>

        {/* Vertical line decoration */}
        <div className="w-[1px] h-[80px] bg-[var(--color-accent)] opacity-50 mt-4" />
      </motion.div>

      {/* Mobile portrait — shown below text on small screens */}
      <div className="lg:hidden absolute bottom-10 right-6 opacity-40">
        <PortraitComposition variant="about" />
      </div>
    </section>
  );
}
