"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Project Data ─── */
const PROJECTS = [
  {
    id: "ml-trading",
    number: "01",
    title: "ML TRADING SYSTEM",
    tagline: "Ensemble Deep Learning for Systematic Market Prediction",
    problem:
      "Discretionary trading relies on human intuition, which doesn't scale and is inconsistent under pressure. Existing quantitative systems often use single-model approaches that fail to capture the multi-dimensional nature of financial markets — price action, temporal dependencies, and inter-asset relationships are treated in isolation.",
    tech: [
      "PyTorch",
      "Temporal Fusion Transformers",
      "CNNs",
      "Graph Neural Networks",
      "PPO (Reinforcement Learning)",
      "FastAPI",
      "TimescaleDB",
      "Apache Kafka",
    ],
    architecture:
      "Multi-head ensemble pipeline: TFT processes sequential price data, CNNs extract local pattern features, GNNs model inter-asset correlation as a graph problem, and a PPO agent learns optimal position sizing and risk allocation. Walk-forward validation across 3 years of data with regime-aware retraining triggers.",
    metrics: [
      { label: "Backtest Sharpe Ratio", value: "> 2.1" },
      { label: "Walk-Forward Win Rate", value: "~72%" },
      { label: "Max Drawdown", value: "< 8%" },
      { label: "Validation Period", value: "3 Years" },
    ],
    status: "ACTIVE DEVELOPMENT",
  },
  {
    id: "odus",
    number: "02",
    title: "ODUS",
    tagline: "AI-Powered Linux Desktop Assistant via Gemini Vision",
    problem:
      "Linux users — especially newcomers — frequently encounter cryptic terminal errors, broken configurations, and system issues that require deep domain knowledge to resolve. Existing solutions like Stack Overflow or ChatGPT require manual context copying and lack real-time awareness of the user's actual screen state.",
    tech: [
      "Python",
      "Google Gemini Vision API",
      "PyQt6",
      "D-Bus",
      "subprocess",
      "Prompt Engineering",
    ],
    architecture:
      "Desktop overlay captures screen context via screenshot analysis. Gemini Vision processes the visual state, identifies the problem, and generates a fix. Automatic model escalation (Flash → Pro) for complex issues. All generated commands are sandboxed with safety guards before execution. Persistent session memory for multi-step troubleshooting.",
    metrics: [
      { label: "Resolution Accuracy", value: "~85%" },
      { label: "Avg Response Time", value: "< 3s" },
      { label: "Safety Guard Rate", value: "100%" },
      { label: "Model Escalation", value: "Auto" },
    ],
    status: "RELEASED",
  },
  {
    id: "prismnet",
    number: "03",
    title: "PRISMNET",
    tagline: "Edge-Optimized RT-DETR via Pruning & Quantization",
    problem:
      "State-of-the-art object detection models like RT-DETR deliver excellent accuracy but are too large and slow for edge deployment — embedded devices, drones, and real-time surveillance systems can't run 40M+ parameter models at acceptable frame rates without expensive GPU hardware.",
    tech: [
      "PyTorch",
      "NVIDIA TensorRT",
      "CUDA",
      "RT-DETR",
      "torch.nn.utils.prune",
      "ONNX",
    ],
    architecture:
      "Applied L1 unstructured pruning to remove redundant weights, followed by INT8 post-training quantization via TensorRT. The pruned model is exported to ONNX, then compiled to a TensorRT engine optimized for the target GPU architecture. Benchmark suite validates accuracy retention against the original FP32 model on COCO val2017.",
    metrics: [
      { label: "Model Size Reduction", value: "49.7%" },
      { label: "Inference Speedup", value: "6.3×" },
      { label: "mAP Retention", value: "> 95%" },
      { label: "Target Runtime", value: "TensorRT" },
    ],
    status: "COMPLETED",
  },
  {
    id: "finchat",
    number: "04",
    title: "FINCHAT",
    tagline: "Financial Document Intelligence via Hybrid RAG",
    problem:
      "Financial professionals spend hours manually searching through dense PDF reports — earnings calls, 10-K filings, research papers — to extract specific data points. Generic LLMs hallucinate financial figures, and cloud-based solutions raise data privacy concerns for sensitive financial documents.",
    tech: [
      "FastAPI",
      "FAISS",
      "BM25",
      "Cross-encoder Reranking",
      "llama.cpp",
      "LangChain",
      "Pinecone",
    ],
    architecture:
      "Hybrid retrieval pipeline combining dense (FAISS) and sparse (BM25) search with cross-encoder reranking for precision. Documents are chunked with overlap-aware splitting. Local inference via llama.cpp eliminates cloud dependency and keeps sensitive financial data on-premise. Citation tracking maps every answer back to source pages.",
    metrics: [
      { label: "Retrieval Precision", value: "> 92%" },
      { label: "Answer Accuracy", value: "~88%" },
      { label: "Avg Query Time", value: "< 2s" },
      { label: "Cloud Dependency", value: "Zero" },
    ],
    status: "COMPLETED",
  },
];

/* ─── Tab definitions ─── */
const TABS = [
  { key: "problem", label: "Problem Statement" },
  { key: "tech", label: "Tech Stack" },
  { key: "architecture", label: "System Architecture" },
  { key: "metrics", label: "Result Metrics" },
  { key: "status", label: "Project Status" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/* ─── Tab Content Renderer ─── */
function TabContent({
  project,
  tab,
}: {
  project: (typeof PROJECTS)[0];
  tab: TabKey;
}) {
  switch (tab) {
    case "problem":
      return (
        <div className="flex flex-col gap-4">
          <p className="font-serif text-[15px] md:text-[18px] leading-[1.8] text-[#333]">
            {project.problem}
          </p>
        </div>
      );

    case "tech":
      return (
        <div className="flex flex-wrap gap-2.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-dot text-[12px] md:text-[14px] px-6 py-3 rounded-full bg-[#F5F5F5] text-[#333] border border-[#E0E0E0] hover:bg-[#E8E8E8] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      );

    case "architecture":
      return (
        <div className="flex flex-col gap-4">
          <p className="font-serif text-[15px] md:text-[18px] leading-[1.8] text-[#333]">
            {project.architecture}
          </p>
        </div>
      );

    case "metrics":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 p-4 rounded-lg bg-[#F5F5F5] border border-[#E8E8E8]"
            >
              <span className="font-dot text-[11px] text-[#999] tracking-widest">
                {m.label}
              </span>
              <span className="font-serif text-[28px] md:text-[36px] font-bold text-[#0A0A0A] leading-none">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      );

    case "status":
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`w-2 h-2 rounded-full ${
                project.status === "ACTIVE DEVELOPMENT"
                  ? "bg-green-500 animate-pulse"
                  : project.status === "RELEASED"
                  ? "bg-blue-500"
                  : "bg-[#999]"
              }`}
            />
            <span className="font-dot text-[14px] tracking-widest text-[#333]">
              {project.status}
            </span>
          </div>
          <p className="font-serif text-[15px] md:text-[18px] leading-[1.8] text-[#666]">
            {project.status === "ACTIVE DEVELOPMENT"
              ? "This project is under active iteration. Architecture and results are continuously being refined with new data and model configurations."
              : project.status === "RELEASED"
              ? "This project has been released and is available for use. Maintenance and incremental improvements are ongoing."
              : "This project has reached its target objectives. All benchmarks have been validated and documented."}
          </p>
        </div>
      );
  }
}

/* ─── Main Component ─── */
export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>("problem");

  const goNext = useCallback(() => {
    setActiveProject((p) => (p + 1) % PROJECTS.length);
    setActiveTab("problem");
  }, []);

  const goPrev = useCallback(() => {
    setActiveProject((p) => (p - 1 + PROJECTS.length) % PROJECTS.length);
    setActiveTab("problem");
  }, []);

  const project = PROJECTS[activeProject];

  return (
    <section
      id="projects"
      className="relative px-4 md:px-8 lg:px-12 py-16 md:py-24"
      style={{ background: "#E5E0DE" }}
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-dot text-[11px] tracking-[0.2em] text-[#666]">
            SELECTED WORK
          </span>
        </motion.div>

        {/* ═══ The Window ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#FAFAFA",
            border: "1px solid #E0E0E0",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
          }}
        >
          {/* ─── Window Chrome (Title Bar) ─── */}
          <div
            className="flex items-center justify-between px-5 py-3.5"
            style={{
              background: "linear-gradient(180deg, #F8F8F8 0%, #EFEFEF 100%)",
              borderBottom: "1px solid #DDD",
            }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>

            {/* URL bar */}
            <div className="flex-1 mx-6 max-w-[400px]">
              <div className="bg-white rounded-md px-4 py-1.5 text-center border border-[#DDD]">
                <span className="font-dot text-[10px] text-[#999] tracking-wider">
                  kanishk.dev/projects/{project.id}
                </span>
              </div>
            </div>

            {/* Project counter */}
            <span className="font-dot text-[10px] text-[#999] tracking-widest">
              {project.number} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>

          {/* ─── Project Header + Nav Arrows ─── */}
          <div
            className="flex items-center justify-between px-6 md:px-10 py-5"
            style={{ borderBottom: "1px solid #E8E8E8" }}
          >
            {/* Left arrow */}
            <button
              onClick={goPrev}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#DDD] bg-white hover:bg-[#F0F0F0] transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Title block */}
            <div className="flex-1 text-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-sans font-black text-[24px] md:text-[32px] text-[#0A0A0A] tracking-tight leading-none mb-1">
                    {project.title}
                  </h3>
                  <p className="font-serif text-[12px] md:text-[13px] text-[#888]">
                    {project.tagline}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
              onClick={goNext}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#DDD] bg-white hover:bg-[#F0F0F0] transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* ─── Tab Bar ─── */}
          <div
            className="flex items-center gap-0 px-6 md:px-10 overflow-x-auto no-scrollbar"
            style={{ borderBottom: "1px solid #E8E8E8" }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 md:px-5 py-3.5 font-dot text-[10px] md:text-[11px] tracking-widest whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.key
                    ? "text-[#0A0A0A]"
                    : "text-[#AAA] hover:text-[#666]"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A0A0A]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ─── Tab Content ─── */}
          <div className="px-6 md:px-12 py-12 md:py-16 min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${project.id}-${activeTab}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <TabContent project={project} tab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── Bottom Bar (project dots) ─── */}
          <div
            className="flex items-center justify-center gap-2 px-6 py-4"
            style={{ borderTop: "1px solid #E8E8E8" }}
          >
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveProject(i);
                  setActiveTab("problem");
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === activeProject
                    ? "bg-[#0A0A0A] scale-125"
                    : "bg-[#CCC] hover:bg-[#999]"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
