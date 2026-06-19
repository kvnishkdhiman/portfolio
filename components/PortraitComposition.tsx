"use client";

interface PortraitCompositionProps {
  variant?: "hero" | "about";
  className?: string;
}

export default function PortraitComposition({
  variant = "hero",
  className = "",
}: PortraitCompositionProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: isHero ? "clamp(220px, 28vw, 420px)" : "clamp(180px, 22vw, 340px)",
        height: isHero ? "clamp(320px, 42vw, 620px)" : "clamp(260px, 32vw, 480px)",
      }}
    >
      <div className="relative z-10 w-full h-full overflow-hidden bg-transparent rounded-sm">
        <div
          className="w-full h-full grayscale opacity-80 mix-blend-screen"
          style={{
            backgroundImage: "url('/images/portrait2.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        />
      </div>
    </div>
  );
}
