"use client";

import TextReveal from "./TextReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32 section-light flex items-center"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Pull-quote with red marker */}
        <div className="mb-16 md:mb-24 max-w-[900px]">
          <TextReveal>
            <p className="font-serif text-[22px] md:text-[32px] lg:text-[42px] leading-[1.25] font-bold red-marker text-[var(--color-text-dark)]">
              My journey didn&apos;t start with a computer science textbook — it
              started with curiosity about how systems work, whether that system
              was a piece of software or a financial market.
            </p>
          </TextReveal>
        </div>

        {/* 2-column layout: Portrait left | {1} | Editorial right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Portrait */}
          <div className="md:col-span-5">
            <TextReveal delay={0.2}>
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-[#E5E5E5] rounded-sm">
                <div
                  className="absolute inset-0 grayscale opacity-90"
                  style={{
                    backgroundImage: "url('/images/portrait1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </TextReveal>
          </div>

          {/* Section Index */}
          <div className="hidden md:flex md:col-span-1 justify-center pt-2">
            <span className="section-index">{"{1}"}</span>
          </div>

          {/* Editorial text */}
          <div className="md:col-span-6 flex flex-col gap-6 pt-2">
            <div className="md:hidden flex justify-between items-center border-b border-[var(--color-border)] pb-2 mb-2">
              <span className="font-dot text-[13px] text-[var(--color-text-dark)] font-bold">THE EVOLUTION</span>
              <span className="section-index">{"{1}"}</span>
            </div>

            <TextReveal delay={0.3}>
              <h3 className="hidden md:block font-serif text-[22px] md:text-[26px] font-bold text-[var(--color-text-dark)] mb-3">
                The Evolution
              </h3>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.7] text-[var(--color-text-dark)]">
                In mid-2023, I began trading financial markets independently,
                slowly building market intuition before any systematic approach
                existed. By late 2023, my trading evolved into a systematic
                strategy. I moved deep into ICT and Smart Money Concepts.
              </p>
            </TextReveal>

            <TextReveal delay={0.4}>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.7] text-[var(--color-text-dark)]">
                I started my B.Tech in CS with AI/ML specialization, immediately
                building deployed systems rather than Jupyter notebook ideas.
                In August 2024, I became a Funded Trader at 5%ers.com, managing
                real capital with an 80% win rate.
              </p>
            </TextReveal>

            <TextReveal delay={0.5}>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="font-serif text-[15px] md:text-[17px] text-[var(--color-text-dark)] square-bullet leading-[1.5]">
                  Funded Trader at 5%ers.com managing real capital
                </li>
                <li className="font-serif text-[15px] md:text-[17px] text-[var(--color-text-dark)] square-bullet leading-[1.5]">
                  80% win rate sustained over 5 months live
                </li>
                <li className="font-serif text-[15px] md:text-[17px] text-[var(--color-text-dark)] square-bullet leading-[1.5]">
                  Building ensemble ML models and edge AI systems
                </li>
              </ul>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
