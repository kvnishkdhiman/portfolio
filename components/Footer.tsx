"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-heading text-section text-[var(--color-primary)]">
            LET&apos;S BUILD
          </h2>
          <h2 className="font-heading text-section text-[var(--color-primary)]">
            SOMETHING
          </h2>
          <h2 className="font-heading text-section text-[var(--color-accent)]">
            MEANINGFUL.
          </h2>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16"
        >
          <a
            href="mailto:dhimankanishk21@gmail.com"
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-[var(--color-accent)] group-hover:w-12 transition-all duration-300" />
            <span className="font-heading text-[16px] md:text-[18px] font-600 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">
              Email
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/kanishk-dhiman-67457b252/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-[var(--color-accent)] group-hover:w-12 transition-all duration-300" />
            <span className="font-heading text-[16px] md:text-[18px] font-600 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/kanishk57"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-[var(--color-accent)] group-hover:w-12 transition-all duration-300" />
            <span className="font-heading text-[16px] md:text-[18px] font-600 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">
              GitHub
            </span>
          </a>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 h-[1px] bg-[var(--color-accent)] opacity-20 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-6 text-[var(--color-secondary)] text-[12px] uppercase tracking-[0.3em] font-heading"
        >
          © 2025 Kanishk Dhiman. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
