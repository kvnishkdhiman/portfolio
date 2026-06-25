"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[10000] px-6 md:px-12 py-5 flex items-center justify-between pointer-events-none ${!menuOpen ? "mix-blend-difference text-white" : "text-[var(--color-text-dark)]"}`}>
        <a
          href="#"
          className="font-dot text-[18px] pointer-events-auto hover:opacity-70 transition-opacity"
        >
          KANISHK DHIMAN
        </a>

        <button
          className="flex flex-col gap-1.5 pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-current block origin-center transition-transform"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-[2px] bg-current block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-current block origin-center transition-transform"
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[9998] flex flex-col justify-between pt-32 pb-8 px-6 md:px-12 text-[var(--color-text-dark)]"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 100%)' }}
          >
            {/* Main Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-4 overflow-y-auto">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="font-dot text-[36px] md:text-[54px] lg:text-[72px] hover:text-[var(--color-muted)] transition-colors leading-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom Utilities */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 border-t border-[var(--color-border)] border-opacity-20 pt-8 font-dot text-[12px] md:text-[14px] text-[var(--color-muted)] flex flex-col md:flex-row justify-between gap-6"
            >
              <div className="flex flex-col gap-2">
                <p>EMAIL: DHIMANKANISHK21@GMAIL.COM</p>
                <p>LOCATION: NEW DELHI</p>
                <p>PHONE: +91 9756216878</p>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <a href="https://github.com/kanishk57" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">GITHUB ↗</a>
                <a href="https://www.linkedin.com/in/kanishk-dhiman-67457b252/" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">LINKEDIN ↗</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
