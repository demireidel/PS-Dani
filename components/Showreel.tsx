"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Showreel() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="reel" className="relative py-24 md:py-36 bg-noir-950 overflow-hidden">
      {/* Curtain gradient — left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-noir-950 via-noir-950/60 to-transparent z-10" />
      {/* Curtain gradient — right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-noir-950 via-noir-950/60 to-transparent z-10" />

      <div className="relative z-20 mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              {/* Left decorative line */}
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-2 bg-lavender/20" />
                <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-lavender/40" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
                Showreel
              </h2>

              {/* Right decorative line */}
              <div className="flex items-center gap-2">
                <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-lavender/40" />
                <div className="h-0.5 w-2 bg-lavender/20" />
              </div>
            </div>

            <p className="text-xs tracking-wide uppercase text-lavender/40">
              Actuación &middot; Canto &middot; Danza
            </p>
          </div>
        </ScrollReveal>

        {/* Video Theater Frame */}
        <ScrollReveal delay={0.15} easing="dramatic">
          <div className="relative">
            {/* Outer frame with glow */}
            <div className="absolute -inset-6 border border-lavender/5 pointer-events-none" />
            <div className="absolute -inset-3 border border-lavender/10 pointer-events-none" />

            {/* Inner shadow/glow */}
            <div className="absolute -inset-6 pointer-events-none shadow-[inset_0_0_60px_rgba(180,140,200,0.03)]" />

            {/* Top decorative bar — theater "proscenium" */}
            <div className="relative h-2 bg-gradient-to-r from-noir-800 via-lavender/10 to-noir-800" />

            {/* Video Container */}
            <div className="relative aspect-video bg-noir-800 overflow-hidden">
              {/* Inner shadow overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />

              <iframe
                src="https://www.youtube.com/embed/1BHhqzUyky0"
                title="Daniela Pantano — Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />

              {/* Play indicator overlay — fades out */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-noir-950/60 pointer-events-none"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Glow ring */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.15, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute h-24 w-24 rounded-full border border-lavender/30"
                      />
                      {/* Play triangle */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-12 w-12 text-lavender/60"
                      >
                        <path
                          d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom decorative bar */}
            <div className="relative h-1 bg-gradient-to-r from-noir-800 via-lavender/8 to-noir-800" />
          </div>

          {/* Label below video */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-lavender/15" />
            <p className="text-center text-xs tracking-widest uppercase text-lavender/35 font-light">
              Demo Reel &mdash; Actuación, Canto, Danza
            </p>
            <div className="h-px w-8 bg-lavender/15" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
