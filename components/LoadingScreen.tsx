"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fullName = "DANIELA PANTANO";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"monogram" | "name" | "exit">("monogram");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("dp-loaded")) return;

    setVisible(true);

    // Progress bar animation
    const startTime = Date.now();
    const totalDuration = 3000;
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / totalDuration, 1);
      // Ease-out curve
      setProgress(1 - Math.pow(1 - p, 3));
    }, 16);

    // Phase transitions
    const nameTimer = setTimeout(() => setPhase("name"), 1000);
    const exitTimer = setTimeout(() => setPhase("exit"), 2400);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("dp-loaded", "1");
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir-950 overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.001 }}
        >
          {/* Split reveal panels for exit */}
          <AnimatePresence>
            {phase === "exit" && (
              <>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="absolute top-0 left-0 right-0 h-1/2 bg-noir-950 z-30"
                />
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-noir-950 z-30"
                />
              </>
            )}
          </AnimatePresence>

          {/* Radial glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.04, 0.12, 0.04],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(180, 140, 200, 0.15), transparent 60%)",
            }}
          />

          {/* Secondary gold glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.02, 0.08, 0.02],
            }}
            transition={{
              duration: 4,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201, 169, 110, 0.1), transparent 50%)",
            }}
          />

          {/* DP Monogram phase */}
          <AnimatePresence mode="wait">
            {phase === "monogram" && (
              <motion.div
                key="monogram"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <span className="font-serif text-7xl md:text-8xl tracking-[0.3em] uppercase text-gold-shimmer">
                  DP
                </span>
                {/* Monogram glow ring */}
                <motion.div
                  className="absolute inset-0 -m-8 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(201, 169, 110, 0.05), 0 0 60px rgba(201, 169, 110, 0.03)",
                      "0 0 40px rgba(201, 169, 110, 0.12), 0 0 80px rgba(201, 169, 110, 0.06)",
                      "0 0 30px rgba(201, 169, 110, 0.05), 0 0 60px rgba(201, 169, 110, 0.03)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}

            {/* Full name phase */}
            {phase === "name" && (
              <motion.div
                key="fullname"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center"
              >
                <div className="flex gap-[1px] md:gap-[3px]">
                  {fullName.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] uppercase ${
                        char === " "
                          ? "w-3 md:w-6"
                          : "text-lavender-light"
                      }`}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
            <motion.div
              className="h-full origin-left"
              style={{
                scaleX: progress,
                background:
                  "linear-gradient(90deg, var(--color-lavender-deep), var(--color-gold), var(--color-lavender))",
              }}
            />
          </div>

          {/* Subtle side accent lines */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px origin-center"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(180, 140, 200, 0.08), transparent)",
            }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-8 md:right-16 top-1/4 bottom-1/4 w-px origin-center"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(201, 169, 110, 0.06), transparent)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
