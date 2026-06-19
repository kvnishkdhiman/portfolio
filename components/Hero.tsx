"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#E5E0DE] z-[10000]"
    >
      {/* Name on the Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.77, 0, 0.175, 1] }}
        className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center text-left px-6 md:pl-20 md:pr-10 pt-32 md:pt-0"
      >
        <h1 
          className="font-sans font-black tracking-tighter uppercase"
          style={{ 
            fontSize: "clamp(60px, 10vw, 150px)",
            lineHeight: 0.9,
            color: "#0A0A0A", // Solid Black
          }}
        >
          KANISHK<br />DHIMAN
        </h1>
      </motion.div>

      {/* Photo on the Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        className="relative z-0 w-full md:w-1/2 h-1/2 md:h-full flex items-end justify-end p-0 md:pr-8"
      >
        <img 
          src="/images/portrait4.png" 
          alt="Kanishk Dhiman" 
          className="w-full h-full object-contain"
          style={{ objectPosition: "65% bottom" }}
        />
      </motion.div>
    </section>
  );
}
