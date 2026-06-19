"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "SQL", "JavaScript"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "TensorFlow", "LightGBM", "Transformers", "CLIP", "vLLM", "LoRA/QLoRA", "PEFT", "Llama.cpp", "Gemini API", "OpenAI API"],
  },
  {
    category: "Agents & LLM Ops",
    items: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen", "DSPy", "Weights & Biases", "MLflow"],
  },
  {
    category: "RAG & Retrieval",
    items: ["FAISS", "Milvus", "Weaviate", "Pinecone", "Qdrant", "BM25", "Cross-encoder Reranking"],
  },
  {
    category: "CV & Optimization",
    items: ["OpenCV", "TensorRT", "CUDA", "RT-DETR", "torch.nn.utils.prune"],
  },
  {
    category: "Data & Streaming",
    items: ["Polars", "DuckDB", "Apache Kafka", "Apache Spark", "Ray"],
  },
  {
    category: "Backend & DevOps",
    items: ["FastAPI", "Flask", "Celery", "Redis", "PostgreSQL", "TimescaleDB", "Docker", "Kubernetes", "AWS (EC2, Lambda, S3)", "Prometheus", "Grafana"],
  },
  {
    category: "Trading",
    items: ["MetaTrader 5", "CCXT", "Backtrader", "Alpaca API", "QuantLib"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 lg:px-20 py-16 md:py-20 section-light"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-baseline gap-6 border-b border-[var(--color-text-dark)] pb-4 mb-0"
        >
          <h2 className="font-dot text-[11px] tracking-[0.2em] text-[var(--color-text-dark)] uppercase">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill rows — table-style */}
        <div className="flex flex-col">
          {SKILLS.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-[var(--color-border)] py-4 items-baseline"
            >
              {/* Category label */}
              <div className="col-span-12 md:col-span-3">
                <span className="font-dot text-[10px] md:text-[11px] text-[var(--color-text-dark)] tracking-widest uppercase font-bold">
                  {row.category}
                </span>
              </div>

              {/* Items */}
              <div className="col-span-12 md:col-span-9 flex flex-wrap gap-x-4 gap-y-1.5">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="font-serif text-[12px] md:text-[13px] text-[var(--color-text-dark)] leading-snug"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
