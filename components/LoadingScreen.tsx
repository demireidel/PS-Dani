"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const name = "DANIELA PANTANO";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("dp-loaded")) return;

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("dp-loaded", "1");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir-950"
        >
          <div className="flex gap-[2px]">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`font-serif text-3xl md:text-5xl tracking-dramatic uppercase ${
                  char === " " ? "w-4" : "text-lavender-light"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(180,140,200,0.12),transparent_60%)] pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
