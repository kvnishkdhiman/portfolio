"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import dynamic from "next/dynamic";

/* ── Dynamic PDF imports (client-only) ── */
const PDFDocument = dynamic(
  () =>
    import("react-pdf").then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
      return { default: mod.Document };
    }),
  { ssr: false }
);

const PDFPage = dynamic(
  () => import("react-pdf").then((mod) => ({ default: mod.Page })),
  { ssr: false }
);

/* ── Certificate Data ── */
interface Certificate {
  file: string;
  title: string;
  issuer: string;
  category: string;
}

const CERTIFICATES: Certificate[] = [
  {
    file: "/Certificates/Coursera OARDZ4JDSYCO.pdf",
    title: "Accelerated CS Fundamentals",
    issuer: "University of Illinois",
    category: "COURSERA",
  },
  {
    file: "/Certificates/Coursera SI571THVTCA3.pdf",
    title: "Google IT Support",
    issuer: "Google",
    category: "COURSERA",
  },
  {
    file: "/Certificates/Coursera 10WHDZDG45HE.pdf",
    title: "Intro to Arm Architecture",
    issuer: "Arm Education",
    category: "COURSERA",
  },
  {
    file: "/Certificates/Coursera 6X70NZOVOSYC.pdf",
    title: "Google Cybersecurity",
    issuer: "Google",
    category: "COURSERA",
  },
  {
    file: "/Certificates/Software Engineering.pdf",
    title: "Software Engineering",
    issuer: "NPTEL",
    category: "NPTEL",
  },
  {
    file: "/Certificates/info design techs.pdf",
    title: "Information Design Technologies",
    issuer: "Infosys Springboard",
    category: "INFOSYS",
  },
  {
    file: "/Certificates/matlab 3 certificate new.pdf",
    title: "MATLAB Fundamentals",
    issuer: "MathWorks",
    category: "MATHWORKS",
  },
  {
    file: "/Certificates/matlab 2 certificate new.pdf",
    title: "Linear Algebra with MATLAB",
    issuer: "MathWorks",
    category: "MATHWORKS",
  },
  {
    file: "/Certificates/matlab 1 certificate new.pdf",
    title: "MATLAB Programming Techniques",
    issuer: "MathWorks",
    category: "MATHWORKS",
  },
  {
    file: "/Certificates/infosys Deep Learning.pdf",
    title: "Deep Learning",
    issuer: "Infosys Springboard",
    category: "INFOSYS",
  },
  {
    file: "/Certificates/infosys automation testing.pdf",
    title: "Automation Testing",
    issuer: "Infosys Springboard",
    category: "INFOSYS",
  },
  {
    file: "/Certificates/infosys performance testing.pdf",
    title: "Performance Testing",
    issuer: "Infosys Springboard",
    category: "INFOSYS",
  },
  {
    file: "/Certificates/infosys ML using Python.pdf",
    title: "ML using Python",
    issuer: "Infosys Springboard",
    category: "INFOSYS",
  },
  {
    file: "/Certificates/infosys DSA.pdf",
    title: "Data Structures & Algorithms",
    issuer: "Infosys Springboard",
    category: "INFOSYS",
  },
];

/* Split into 3 rows */
const ROW_1 = CERTIFICATES.slice(0, 5);
const ROW_2 = CERTIFICATES.slice(5, 10);
const ROW_3 = CERTIFICATES.slice(10, 14);

/* ══════════════════════════════════════════
   Main Section
   ══════════════════════════════════════════ */

export default function Certificates() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /* Keyboard nav for lightbox */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((p) =>
          p !== null ? (p + 1) % CERTIFICATES.length : 0
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((p) =>
          p !== null
            ? (p - 1 + CERTIFICATES.length) % CERTIFICATES.length
            : 0
        );
    },
    [selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* Lock scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section
        id="certificates"
        ref={sectionRef}
        className="relative py-24 md:py-32 section-dark overflow-hidden"
      >
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-14"
        >
          <span className="font-dot text-[11px] tracking-[0.2em] text-[var(--color-muted)] uppercase block mb-4">
            PROFESSIONAL DEVELOPMENT
          </span>
          <h2
            className="font-dot uppercase leading-none mb-4"
            style={{ fontSize: "clamp(42px, 6vw, 90px)" }}
          >
            CERTIFICATES
          </h2>
          <p className="font-serif text-[14px] md:text-[15px] text-[var(--color-muted)] max-w-[500px] leading-relaxed">
            Continuous learning across AI/ML, software engineering, and data
            science.
          </p>
        </motion.div>

        {/* ── Marquee Rows ── */}
        <div className="flex flex-col gap-5">
          <MarqueeRow
            certs={ROW_1}
            direction="left"
            speed={35}
            isInView={isInView}
            delay={0}
            onSelect={(cert) =>
              setSelectedIndex(CERTIFICATES.indexOf(cert))
            }
          />
          <MarqueeRow
            certs={ROW_2}
            direction="right"
            speed={30}
            isInView={isInView}
            delay={0.15}
            onSelect={(cert) =>
              setSelectedIndex(CERTIFICATES.indexOf(cert))
            }
          />
          <MarqueeRow
            certs={ROW_3}
            direction="left"
            speed={32}
            isInView={isInView}
            delay={0.3}
            onSelect={(cert) =>
              setSelectedIndex(CERTIFICATES.indexOf(cert))
            }
          />
        </div>

        {/* ── Bottom count ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mt-14 flex items-center justify-between"
        >
          <div className="flex gap-6">
            {["COURSERA", "NPTEL", "MATHWORKS", "INFOSYS"].map((cat) => (
              <div key={cat} className="flex flex-col items-center gap-0.5">
                <span className="font-dot text-[22px] md:text-[28px] text-white">
                  {CERTIFICATES.filter((c) => c.category === cat).length}
                </span>
                <span className="font-dot text-[8px] tracking-[0.15em] text-[var(--color-muted)]">
                  {cat}
                </span>
              </div>
            ))}
          </div>
          <span className="font-dot text-[10px] tracking-[0.15em] text-[var(--color-muted)] hidden sm:block">
            {CERTIFICATES.length} CERTIFICATIONS
          </span>
        </motion.div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            certificates={CERTIFICATES}
            currentIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onNext={() =>
              setSelectedIndex(
                (p) => ((p ?? 0) + 1) % CERTIFICATES.length
              )
            }
            onPrev={() =>
              setSelectedIndex(
                (p) =>
                  ((p ?? 0) - 1 + CERTIFICATES.length) % CERTIFICATES.length
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════
   Marquee Row
   ══════════════════════════════════════════ */

function MarqueeRow({
  certs,
  direction,
  speed,
  isInView,
  delay,
  onSelect,
}: {
  certs: Certificate[];
  direction: "left" | "right";
  speed: number;
  isInView: boolean;
  delay: number;
  onSelect: (cert: Certificate) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  /* Duplicate items for seamless loop */
  const items = [...certs, ...certs, ...certs];

  const animDirection = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.77, 0, 0.175, 1] }}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-bg-dark)] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-[var(--color-bg-dark)] to-transparent" />

      <div
        ref={rowRef}
        className="flex gap-4 md:gap-5"
        style={{
          animation: `${animDirection} ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {items.map((cert, i) => (
          <CertCard
            key={`${cert.file}-${i}`}
            cert={cert}
            onClick={() => onSelect(cert)}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   Certificate Card (Thumbnail)
   ══════════════════════════════════════════ */

function CertCard({
  cert,
  onClick,
}: {
  cert: Certificate;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 cursor-pointer select-none"
      style={{ width: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="rounded-xl overflow-hidden transition-all duration-400"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: isHovered
            ? "1px solid rgba(255,0,0,0.35)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: isHovered
            ? "0 15px 50px rgba(0,0,0,0.5), 0 0 30px rgba(255,0,0,0.06)"
            : "0 4px 16px rgba(0,0,0,0.15)",
        }}
      >
        {/* PDF Thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
          <div className="absolute inset-0 flex items-center justify-center">
            <PDFDocument
              file={cert.file}
              loading={<ThumbSkeleton />}
              error={<ThumbError />}
            >
              <PDFPage
                pageNumber={1}
                width={300}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </PDFDocument>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.8) 100%)",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center backdrop-blur-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
              <span className="font-dot text-[8px] tracking-[0.2em] text-white/70">
                PREVIEW
              </span>
            </div>
          </motion.div>

          {/* Category tag */}
          <div className="absolute top-2.5 left-2.5 z-20">
            <span
              className="font-dot text-[7px] tracking-[0.12em] px-2 py-0.5 rounded-full backdrop-blur-md"
              style={{
                background: "rgba(255,0,0,0.15)",
                color: "var(--color-accent-red)",
                border: "1px solid rgba(255,0,0,0.2)",
              }}
            >
              {cert.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-3.5 py-3">
          <h3 className="font-serif text-[12px] text-white font-bold leading-snug mb-1 uppercase truncate">
            {cert.title}
          </h3>
          <p className="font-dot text-[8px] tracking-[0.1em] text-[var(--color-muted)] truncate">
            {cert.issuer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   Lightbox — Centered with neighbor previews
   ══════════════════════════════════════════ */

function Lightbox({
  certificates,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  certificates: Certificate[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const cert = certificates[currentIndex];
  const prevCert =
    certificates[
      (currentIndex - 1 + certificates.length) % certificates.length
    ];
  const nextCert = certificates[(currentIndex + 1) % certificates.length];

  const [viewWidth, setViewWidth] = useState(700);

  useEffect(() => {
    setViewWidth(Math.min(window.innerWidth * 0.55, 800));
    const handleResize = () =>
      setViewWidth(Math.min(window.innerWidth * 0.55, 800));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[10001] flex items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(24px)",
      }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 md:top-7 md:right-7 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer z-50"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* 3-panel layout: prev | current | next */}
      <div
        className="flex items-center justify-center gap-4 md:gap-6 w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous (dimmed, smaller) */}
        <motion.div
          key={`prev-${prevCert.file}`}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden lg:block flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
          style={{
            width: viewWidth * 0.45,
            filter: "blur(1px)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <PDFDocument file={prevCert.file} loading={<LightboxSkeleton />}>
            <PDFPage
              pageNumber={1}
              width={viewWidth * 0.45}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </PDFDocument>
        </motion.div>

        {/* Current (main) */}
        <motion.div
          key={cert.file}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
          className="relative flex-shrink-0 rounded-xl overflow-hidden"
          style={{
            maxWidth: viewWidth,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.7), 0 0 50px rgba(255,0,0,0.04)",
          }}
        >
          <PDFDocument
            file={cert.file}
            loading={<LightboxSkeleton />}
          >
            <PDFPage
              pageNumber={1}
              width={viewWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </PDFDocument>
        </motion.div>

        {/* Next (dimmed, smaller) */}
        <motion.div
          key={`next-${nextCert.file}`}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden lg:block flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
          style={{
            width: viewWidth * 0.45,
            filter: "blur(1px)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <PDFDocument file={nextCert.file} loading={<LightboxSkeleton />}>
            <PDFPage
              pageNumber={1}
              width={viewWidth * 0.45}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </PDFDocument>
        </motion.div>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-[var(--color-accent-red)] transition-all cursor-pointer z-50"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-[var(--color-accent-red)] transition-all cursor-pointer z-50"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <div className="text-center">
          <h3 className="font-serif text-[15px] md:text-[17px] text-white font-bold uppercase mb-0.5">
            {cert.title}
          </h3>
          <p className="font-dot text-[9px] tracking-[0.15em] text-[var(--color-muted)]">
            {cert.issuer} · {cert.category}
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-1.5">
          {certificates.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === currentIndex ? 20 : 5,
                backgroundColor:
                  i === currentIndex
                    ? "var(--color-accent-red)"
                    : "rgba(255,255,255,0.18)",
              }}
              transition={{ duration: 0.3 }}
              className="h-1 rounded-full"
            />
          ))}
        </div>

        <span className="font-dot text-[9px] tracking-[0.15em] text-[var(--color-muted)]">
          {currentIndex + 1} / {certificates.length} · ESC CLOSE · ← →
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   Skeleton / Error States
   ══════════════════════════════════════════ */

function ThumbSkeleton() {
  return (
    <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#111]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-5 h-5 border-2 border-white/10 border-t-[var(--color-accent-red)] rounded-full"
      />
    </div>
  );
}

function ThumbError() {
  return (
    <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#111]">
      <span className="font-dot text-[8px] text-[var(--color-muted)]">
        ■ ERROR
      </span>
    </div>
  );
}

function LightboxSkeleton() {
  return (
    <div className="w-full aspect-[4/3] flex items-center justify-center bg-white/5 rounded-xl min-h-[300px]">
      <div className="font-dot text-[11px] text-[var(--color-muted)] tracking-[0.2em] animate-pulse">
        LOADING...
      </div>
    </div>
  );
}
