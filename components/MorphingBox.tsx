"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SHAPES = [
  { width: "200px", height: "200px", borderRadius: "8px" }, // Square
  { width: "80px", height: "400px", borderRadius: "4px" },  // Tall vertical strip
  { width: "450px", height: "150px", borderRadius: "12px" }, // Wide landscape block
  { width: "320px", height: "240px", borderRadius: "24px" }, // Medium rectangle
  { width: "120px", height: "300px", borderRadius: "50px" }, // Rounded capsule
];

export default function MorphingBox({ className = "" }: { className?: string }) {
  const [shapeIndex, setShapeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % SHAPES.length);
    }, 4000); // Morph every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentShape = SHAPES[shapeIndex];

  return (
    <motion.div
      className={`bg-[var(--color-grey)] opacity-70 z-0 ${className}`}
      animate={{
        width: currentShape.width,
        height: currentShape.height,
        borderRadius: currentShape.borderRadius,
      }}
      transition={{
        duration: 2.5,
        ease: [0.76, 0, 0.24, 1], // Custom cinematic cubic-bezier
      }}
      style={{
        boxShadow: "0 20px 80px rgba(12, 29, 59, 0.3)",
      }}
    />
  );
}
