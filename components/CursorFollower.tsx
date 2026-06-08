"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on mobile/touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lerp = 0.08;
      currentPos.current.x +=
        (mousePos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y +=
        (mousePos.current.y - currentPos.current.y) * lerp;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${currentPos.current.x - 60}px, ${currentPos.current.y - 60}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div ref={followerRef} className="cursor-follower hidden lg:block" />;
}
