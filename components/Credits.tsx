"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { credits, type CreditCategory } from "@/data/credits";
import ScrollReveal from "./ScrollReveal";

const tabs: { key: CreditCategory; label: string }[] = [
  { key: "teatro", label: "Teatro" },
  { key: "tv", label: "TV" },
  { key: "cine", label: "Cine" },
  { key: "musica", label: "Música" },
];

export default function Credits() {
  const [active, setActive] = useState<CreditCategory>("teatro");

  return (
    <section id="credits" className="relative py-24 md:py-32 bg-noir-950">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Créditos
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex justify-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative px-5 py-2.5 font-sans text-sm tracking-wide transition-colors duration-300 ${
                  active === tab.key
                    ? "text-lavender-light"
                    : "text-lavender-light/40 hover:text-lavender-light/70"
                }`}
              >
                {tab.label}
                {active === tab.key && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 border border-lavender/20 bg-lavender/5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {credits[active].map((credit, i) => (
              <motion.div
                key={credit.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group flex items-start gap-4 p-4 border border-transparent hover:border-lavender/10 hover:bg-lavender/[0.02] transition-all duration-300"
              >
                <span className="shrink-0 w-12 font-sans text-sm text-lavender-muted/50 pt-0.5">
                  {credit.year || ""}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-serif text-lg text-lavender-light group-hover:text-lavender transition-colors">
                      {credit.title}
                    </h3>
                    {credit.awards?.map((award) => (
                      <span
                        key={`${award.name}-${award.year}`}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-sans tracking-wide bg-lavender/10 text-lavender border border-lavender/20 rounded-sm"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {award.name} {award.year}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-sm text-lavender-light/40 font-sans flex-wrap">
                    {credit.role && <span>{credit.role}</span>}
                    {credit.director && (
                      <>
                        <span className="text-lavender/20">&middot;</span>
                        <span>Dir. {credit.director}</span>
                      </>
                    )}
                    {credit.channel && (
                      <>
                        <span className="text-lavender/20">&middot;</span>
                        <span>{credit.channel}</span>
                      </>
                    )}
                    {credit.production && (
                      <>
                        <span className="text-lavender/20">&middot;</span>
                        <span>{credit.production}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
