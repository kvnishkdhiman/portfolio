"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link as a simple fallback
    const mailtoBody = `Hi Kanishk,%0D%0A%0D%0A${encodeURIComponent(formState.message)}%0D%0A%0D%0AFrom: ${formState.firstName} ${formState.lastName}%0D%0APhone: ${formState.phone}`;
    window.open(
      `mailto:dhimankanishk21@gmail.com?subject=${encodeURIComponent(formState.subject || "Portfolio Inquiry")}&body=${mailtoBody}`,
      "_self"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ background: "#FAFAFA" }}
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* ─── Header Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <span className="font-dot text-[11px] tracking-[0.2em] text-[#999] block mb-4">
              GET IN TOUCH
            </span>
            <h2
              className="font-sans font-black text-[#0A0A0A] uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
            >
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              MEANINGFUL.
            </h2>
          </div>

          {/* Quick contact links */}
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:dhimankanishk21@gmail.com"
              className="font-serif text-[15px] text-[#333] hover:text-[#000] transition-colors underline decoration-1 underline-offset-4"
            >
              dhimankanishk21@gmail.com
            </a>
            <span className="font-serif text-[15px] text-[#555]">
              +91 9756216878
            </span>
          </div>
        </motion.div>

        {/* ─── Main Content: 2 columns ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left Column: Social Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div>
              <span className="font-dot text-[11px] tracking-[0.2em] text-[#999] block mb-6">
                CONNECT
              </span>

              <div className="flex flex-col gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/kanishk57"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-[#E0E0E0] hover:border-[#0A0A0A] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A0A0A">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-sans font-bold text-[16px] text-[#0A0A0A]">
                      GitHub
                    </span>
                  </div>
                  <span className="font-dot text-[12px] text-[#999] group-hover:text-[#0A0A0A] transition-colors">
                    ↗
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kanishk-dhiman-67457b252/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-[#E0E0E0] hover:border-[#0A0A0A] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A0A0A">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-sans font-bold text-[16px] text-[#0A0A0A]">
                      LinkedIn
                    </span>
                  </div>
                  <span className="font-dot text-[12px] text-[#999] group-hover:text-[#0A0A0A] transition-colors">
                    ↗
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:dhimankanishk21@gmail.com"
                  className="group flex items-center justify-between py-4 border-b border-[#E0E0E0] hover:border-[#0A0A0A] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="font-sans font-bold text-[16px] text-[#0A0A0A]">
                      Email
                    </span>
                  </div>
                  <span className="font-dot text-[12px] text-[#999] group-hover:text-[#0A0A0A] transition-colors">
                    ↗
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919756216878"
                  className="group flex items-center justify-between py-4 border-b border-[#E0E0E0] hover:border-[#0A0A0A] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="font-sans font-bold text-[16px] text-[#0A0A0A]">
                      Phone
                    </span>
                  </div>
                  <span className="font-serif text-[13px] text-[#666]">
                    +91 9756216878
                  </span>
                </a>
              </div>
            </div>

            {/* Location badge */}
            <div className="mt-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-dot text-[11px] tracking-widest text-[#666]">
                NEW DELHI, INDIA
              </span>
            </div>
          </motion.div>

          {/* ── Right Column: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-8"
          >
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E8E8",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              <span className="font-dot text-[11px] tracking-[0.2em] text-[#999] block mb-8">
                SEND A DIRECT MESSAGE
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1: Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formState.firstName}
                    onChange={handleChange}
                    className="field-nothing font-serif text-[14px]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={handleChange}
                    className="field-nothing font-serif text-[14px]"
                  />
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="field-nothing font-serif text-[14px]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={formState.phone}
                    onChange={handleChange}
                    className="field-nothing font-serif text-[14px]"
                  />
                </div>

                {/* Row 3: Subject */}
                <select
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="field-nothing font-serif text-[14px] cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="">Select Subject</option>
                  <option value="Collaboration">Project Collaboration</option>
                  <option value="Freelance">Freelance / Contract Work</option>
                  <option value="Research">Research Opportunity</option>
                  <option value="Hiring">Job / Hiring Inquiry</option>
                  <option value="General">General Inquiry</option>
                </select>

                {/* Row 4: Message */}
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  className="field-nothing font-serif text-[14px] resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-pill-dark w-full md:w-auto md:self-start text-center"
                >
                  {submitted ? "MESSAGE SENT ✓" : "SUBMIT MESSAGE"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom Footer Bar ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-[#DDD] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <span className="font-dot text-[10px] text-[#999] tracking-widest">
            © 2025 KANISHK DHIMAN. ALL RIGHTS RESERVED.
          </span>
          <span className="font-dot text-[10px] text-[#BBB] tracking-widest">
            DESIGNED & BUILT BY KANISHK
          </span>
        </motion.div>
      </div>
    </section>
  );
}
