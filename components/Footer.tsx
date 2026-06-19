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
      className="relative min-h-screen px-6 md:px-12 lg:px-20 section-dark flex flex-col justify-between py-24 md:py-32"
    >
      {/* CTA — vertically centered */}
      <div className="flex-1 flex items-center">
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          >
            <h2 className="font-serif text-[36px] md:text-[56px] lg:text-[72px] font-bold text-white leading-[1.1] mb-12">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              MEANINGFUL.
            </h2>

            <a
              href="mailto:dhimankanishk21@gmail.com"
              className="font-dot text-[16px] sm:text-[20px] text-white hover:text-[var(--color-muted)] transition-colors underline decoration-1 underline-offset-8"
            >
              EMAIL ME
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer bar — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-[1200px] mx-auto w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6 font-dot text-[12px] text-[var(--color-muted)]"
      >
        <div className="flex flex-col gap-1.5">
          <p>EMAIL: DHIMANKANISHK21@GMAIL.COM</p>
          <p>PHONE: +91 9756216878</p>
          <p>LOCATION: NEW DELHI</p>
        </div>

        <div className="flex flex-col md:items-end gap-2.5">
          <div className="flex gap-4">
            <a
              href="https://github.com/kanishk57"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/kanishk-dhiman-67457b252/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN ↗
            </a>
          </div>
          <p className="mt-2 text-[10px] opacity-40">
            © 2025 KANISHK DHIMAN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
