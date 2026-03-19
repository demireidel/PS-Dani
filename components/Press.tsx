"use client";

import { pressArticles } from "@/data/press";
import ScrollReveal from "./ScrollReveal";

export default function Press() {
  return (
    <section id="press" className="relative py-24 md:py-32 bg-noir-950">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Prensa
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {pressArticles.map((article, i) => (
            <ScrollReveal key={article.url} delay={i * 0.08}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border border-lavender/10 hover:border-lavender/25 bg-noir-900/50 hover:bg-lavender/[0.03] transition-all duration-300"
              >
                <span className="font-sans text-xs tracking-wider uppercase text-lavender/60 group-hover:text-lavender transition-colors">
                  {article.publication}
                </span>
                {article.date && (
                  <span className="ml-3 font-sans text-xs text-lavender-light/30">
                    {article.date}
                  </span>
                )}
                <h3 className="mt-3 font-serif text-lg leading-snug text-lavender-light/80 group-hover:text-lavender-light transition-colors">
                  &ldquo;{article.title}&rdquo;
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 font-sans text-xs tracking-wide text-lavender/40 group-hover:text-lavender transition-colors">
                  Leer nota
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
