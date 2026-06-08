"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const FLOATING_WORDS = [
  "ML",
  "PYTHON",
  "NEURAL",
  "DATA",
  "SYSTEMS",
  "RESEARCH",
  "CODE",
  "AI",
  "DEEP",
  "TENSOR",
  "MODEL",
  "TRAIN",
  "DEPLOY",
  "LEARN",
  "PREDICT",
  "OPTIMIZE",
  "◆",
  "○",
  "△",
  "□",
  "//",
  "{ }",
  "→",
  "∞",
];

interface FloatingElement {
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
}

function generateElements(count: number): FloatingElement[] {
  return Array.from({ length: count }, () => ({
    text: FLOATING_WORDS[Math.floor(Math.random() * FLOATING_WORDS.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 14 + Math.random() * 48,
    opacity: 0.04 + Math.random() * 0.08,
    rotation: Math.random() * 360,
  }));
}

export default function AntigravityField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const elements = useRef<FloatingElement[]>(generateElements(24));

  useEffect(() => {
    const els = elementsRef.current.filter(Boolean) as HTMLSpanElement[];

    // Animate each element with unique drift patterns
    els.forEach((el) => {
      const driftX = 30 + Math.random() * 80;
      const driftY = 20 + Math.random() * 60;
      const duration = 4 + Math.random() * 8;
      const rotDrift = 10 + Math.random() * 20;

      // Main floating animation
      gsap.to(el, {
        x: `+=${driftX * (Math.random() > 0.5 ? 1 : -1)}`,
        y: `+=${driftY * (Math.random() > 0.5 ? 1 : -1)}`,
        rotation: `+=${rotDrift * (Math.random() > 0.5 ? 1 : -1)}`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Secondary subtle drift for more organic feel
      gsap.to(el, {
        x: `+=${20 * (Math.random() > 0.5 ? 1 : -1)}`,
        y: `+=${15 * (Math.random() > 0.5 ? 1 : -1)}`,
        duration: duration * 0.7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 3,
      });
    });

    // Mouse repulsion effect
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;

        const dx = elCenterX - e.clientX;
        const dy = elCenterY - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250) {
          const force = (250 - dist) / 250;
          const angle = Math.atan2(dy, dx);

          gsap.to(el, {
            x: `+=${Math.cos(angle) * force * 40}`,
            y: `+=${Math.sin(angle) * force * 40}`,
            duration: 0.8,
            ease: "power2.out",
            overwrite: false,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf(els);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {elements.current.map((el, i) => (
        <span
          key={i}
          ref={(node) => {
            elementsRef.current[i] = node;
          }}
          className="antigravity-word"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
            opacity: el.opacity,
            transform: `rotate(${el.rotation}deg)`,
          }}
        >
          {el.text}
        </span>
      ))}
    </div>
  );
}
