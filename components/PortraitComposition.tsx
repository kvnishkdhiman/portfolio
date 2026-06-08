"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PortraitCompositionProps {
  variant?: "hero" | "about";
  className?: string;
}

export default function PortraitComposition({
  variant = "hero",
  className = "",
}: PortraitCompositionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const isHero = variant === "hero";

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width: isHero ? "clamp(220px, 28vw, 420px)" : "clamp(180px, 22vw, 340px)",
        height: isHero ? "clamp(320px, 42vw, 620px)" : "clamp(260px, 32vw, 480px)",
      }}
    >
      {/* Main portrait */}
      <motion.div
        style={{ y: parallaxY }}
        className="relative z-10 w-full h-full overflow-hidden shadow-2xl rounded-sm bg-[var(--color-bg)]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/portrait.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
            opacity: 0.95,
          }}
        />
      </motion.div>
    </div>
  );
}
