"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-16 md:py-20 section-light flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">

          {/* LEFT — Pull-quote + origins */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24"
          >
            <p className="font-serif text-[16px] md:text-[20px] leading-[1.5] font-bold text-[var(--color-text-dark)] red-marker">
              My journey didn&apos;t start with a computer science textbook — it
              started with curiosity about how systems work, whether that system
              was a piece of software or a financial market.
            </p>
            <p className="font-serif text-[12px] leading-[1.75] text-[var(--color-muted)]">
              In mid-2023, I began trading financial markets independently,
              learning technical analysis through manual chart reading and
              discretionary decision-making. There was no shortcut — just hours
              of staring at candles, slowly building market intuition before any
              systematic approach existed.
            </p>
            <p className="font-serif text-[12px] leading-[1.75] text-[var(--color-muted)]">
              At the same time, I was working through foundational programming
              concepts, slowly seeing a pattern: everything I did manually in
              markets could eventually be quantified, automated, and
              systematized. That realization connects everything I&apos;ve built since.
            </p>
          </motion.div>

          {/* RIGHT — Milestones + Current Status */}
          <div className="lg:col-span-8 flex flex-col gap-0">

            {[
              {
                index: "01",
                label: "MILESTONE 01",
                period: "LATE 2023 – 2024",
                title: "The Systematic Shift",
                body: [
                  "My trading evolved from pure discretion to systematic strategy. I moved deep into ICT and Smart Money Concepts — Fair Value Gaps, order blocks, liquidity sweeps, premium/discount theory. This wasn't just a trading evolution; it was the moment I started thinking like an engineer about markets.",
                  "I officially began my B.Tech in Computer Science with AI/ML specialization at Bennett University in July 2024, and almost immediately started building — an AI Crop Recommendation System (Smart India Hackathon finalist) and an Adaptive PDF Quiz Generator using a fine-tuned T5 transformer model. My first real full-stack-plus-ML builds: idea to deployed system, not idea to Jupyter notebook.",
                ],
                delay: 0.1,
                red: false,
              },
              {
                index: "02",
                label: "MILESTONE 02",
                period: "AUGUST 2024",
                title: "Funded Trading & Validation",
                body: [
                  "I became a Funded Trader at 5%ers.com, managing real allocated capital — not a demo account — using ML-informed systematic strategies. Over five months, I achieved an 80% win rate.",
                  "This mattered because it was proof that systematic thinking actually works when real money is on the line. It also taught me more about discipline, risk management, and performing under pressure than any classroom ever could.",
                ],
                delay: 0.2,
                red: false,
              },
              {
                index: "03",
                label: "MILESTONE 03",
                period: "2025",
                title: "Deep Technical Building Phase",
                body: [
                  "My most technically intensive year. I built an ICT Price Action ML system using LightGBM to predict Fair Value Gap fills with 96.5% accuracy — literally systematizing the exact concepts I'd been trading manually for two years.",
                  "Followed by an ensemble trading system combining Temporal Fusion Transformers, CNNs, Graph Neural Networks, and PPO reinforcement learning. In parallel: Odus (AI Linux assistant via Gemini Vision), FinChat & LocalLens (RAG document intelligence with Armaan Choudhary), and PrismNet (edge AI — 6.3x inference speedup on object detection).",
                ],
                delay: 0.3,
                red: false,
              },
              {
                index: "—",
                label: "CURRENT STATUS",
                period: "2025 – PRESENT",
                title: "Execution Mode",
                body: [
                  "Transitioning into my 5th semester at Bennett University while actively pursuing freelance AI automation work, reaching out to companies for internship and engineering opportunities, and exploring how to turn two years of trading knowledge into educational content for other students navigating the same path.",
                  "Building this portfolio as part of that broader push — to have one place that actually represents the depth of what I've built, rather than scattered GitHub repos and a static PDF resume.",
                ],
                delay: 0.4,
                red: true,
              },
            ].map((m) => (
              <motion.div
                key={m.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: m.delay }}
                className="grid grid-cols-12 gap-4 md:gap-6 border-t border-[var(--color-border)] py-5"
              >
                {/* Index + period */}
                <div className="col-span-3">
                  <span className="font-dot text-[9px] text-[var(--color-muted)] tracking-widest block">{m.label}</span>
                  <span className={`font-dot text-[9px] tracking-widest block mt-0.5 ${m.red ? "text-[var(--color-accent-red)]" : "text-[var(--color-muted)]"}`}>{m.period}</span>
                </div>

                {/* Title */}
                <div className="col-span-3">
                  <h3 className="font-serif text-[12px] md:text-[13px] font-bold text-[var(--color-text-dark)] leading-[1.4]">{m.title}</h3>
                </div>

                {/* Body */}
                <div className="col-span-6 flex flex-col gap-2">
                  {m.body.map((para, i) => (
                    <p key={i} className="font-serif text-[11px] leading-[1.7] text-[var(--color-text-dark)]">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
