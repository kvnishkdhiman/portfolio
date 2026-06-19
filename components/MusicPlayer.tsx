"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;

    const attemptPlay = () => {
      audio.play().then(() => setReady(true)).catch(() => {
        // Autoplay blocked, wait for first user gesture
        const onGesture = () => {
          audio.play().then(() => setReady(true)).catch(() => {});
          window.removeEventListener("click", onGesture);
          window.removeEventListener("touchstart", onGesture);
          window.removeEventListener("keydown", onGesture);
        };
        window.addEventListener("click", onGesture, { once: true });
        window.addEventListener("touchstart", onGesture, { once: true });
        window.addEventListener("keydown", onGesture, { once: true });
      });
    };

    // Try immediately when component mounts
    if (audio.readyState >= 2) {
      attemptPlay();
    } else {
      audio.addEventListener("canplay", attemptPlay, { once: true });
    }
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (muted) {
      audio.muted = false;
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/song/all_i_need.mp3" loop preload="auto" />

      <motion.button
        onClick={toggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-6 left-6 z-50 cursor-pointer mix-blend-difference text-white"
        aria-label={muted ? "Unmute music" : "Mute music"}
        title={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? (
          // Muted speaker icon
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <path
              d="M14 18.5H17.5L23 14V30L17.5 25.5H14V18.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="none"
            />
            <line x1="27" y1="18" x2="32" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="32" y1="18" x2="27" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          // Playing speaker icon with waves
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <path
              d="M13 18.5H16.5L22 14V30L16.5 25.5H13V18.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M26 18.5C27.5 19.7 27.5 24.3 26 25.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M29 16C31.8 18 31.8 26 29 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
      </motion.button>
    </>
  );
}
