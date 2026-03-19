"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { credits, type CreditCategory, type Credit } from "@/data/credits";
import ScrollReveal from "./ScrollReveal";

const tabs: { key: CreditCategory; label: string }[] = [
  { key: "teatro", label: "Teatro" },
  { key: "tv", label: "TV" },
  { key: "cine", label: "Cine" },
  { key: "musica", label: "Musica" },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function CreditRow({ credit, index }: { credit: Credit; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      <div className="relative flex items-start gap-6 md:gap-8 px-5 py-5 md:px-7 md:py-6 border border-transparent rounded-sm transition-all duration-500 hover:border-lavender/15 hover:bg-lavender/[0.03] hover:shadow-[0_0_30px_rgba(180,140,200,0.06)]">
        {/* Year */}
        <div className="shrink-0 w-14 md:w-18 pt-0.5">
          {credit.year ? (
            <span className="font-serif text-2xl md:text-3xl font-light text-lavender-muted/40 group-hover:text-lavender-muted/70 transition-colors duration-500 tracking-tight">
              {credit.year}
            </span>
          ) : (
            <span className="font-serif text-lg text-lavender-muted/20 italic">
              &mdash;
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title + Awards Row */}
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-serif text-lg md:text-xl text-lavender-light/90 group-hover:text-lavender-light transition-colors duration-500 leading-tight">
              {credit.title}
            </h3>
            {credit.awards?.map((award) => (
              <motion.span
                key={`${award.name}-${award.year}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.06 + 0.3, duration: 0.4 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-sans tracking-wider uppercase rounded-full border"
                style={{
                  color: "#c9a96e",
                  borderColor: "rgba(201, 169, 110, 0.3)",
                  background: "rgba(201, 169, 110, 0.08)",
                }}
              >
                <StarIcon className="w-3 h-3" />
                <span>
                  {award.name} &middot; {award.year}
                </span>
              </motion.span>
            ))}
          </div>

          {/* Meta: Role, Director, Channel, Production */}
          <div className="mt-2 flex items-center gap-3 text-sm text-lavender-light/35 font-sans flex-wrap group-hover:text-lavender-light/50 transition-colors duration-500">
            {credit.role && (
              <span className="tracking-wide">{credit.role}</span>
            )}
            {credit.director && (
              <>
                <span className="text-lavender/15 text-xs">/</span>
                <span className="tracking-wide italic">
                  Dir. {credit.director}
                </span>
              </>
            )}
            {credit.channel && (
              <>
                <span className="text-lavender/15 text-xs">/</span>
                <span className="tracking-wide">{credit.channel}</span>
              </>
            )}
            {credit.production && (
              <>
                <span className="text-lavender/15 text-xs">/</span>
                <span className="tracking-wide">{credit.production}</span>
              </>
            )}
          </div>
        </div>

        {/* Hover line accent */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-lavender/40 rounded-full transition-all duration-500 group-hover:h-8" />
      </div>
    </motion.div>
  );
}

export default function Credits() {
  const [active, setActive] = useState<CreditCategory>("teatro");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  // Measure the active tab to position the pill
  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.key === active);
    const el = tabsRef.current[activeIndex];
    if (el) {
      const parent = el.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setPillStyle({
          left: elRect.left - parentRect.left,
          width: elRect.width,
        });
      }
    }
  }, [active]);

  return (
    <section id="credits" className="relative py-24 md:py-32 bg-noir-950">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Creditos
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        {/* Tab Bar with Animated Pill */}
        <ScrollReveal delay={0.1}>
          <div className="mb-14 flex justify-center">
            <div className="relative inline-flex items-center gap-1 rounded-full border border-lavender/10 bg-noir-900/60 p-1.5 backdrop-blur-sm">
              {/* Animated pill indicator */}
              <motion.div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-lavender/10 border border-lavender/20"
                animate={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                  mass: 0.8,
                }}
              />

              {tabs.map((tab, i) => {
                const count = credits[tab.key].length;
                return (
                  <button
                    key={tab.key}
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    onClick={() => setActive(tab.key)}
                    className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full font-sans text-sm tracking-wide transition-colors duration-300 ${
                      active === tab.key
                        ? "text-lavender-light"
                        : "text-lavender-light/35 hover:text-lavender-light/60"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-light tabular-nums transition-colors duration-300 ${
                        active === tab.key
                          ? "text-lavender/70"
                          : "text-lavender/25"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Credits List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-1"
          >
            {credits[active].map((credit, i) => (
              <CreditRow key={credit.title} credit={credit} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
