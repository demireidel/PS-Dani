"use client";

import { motion } from "framer-motion";
import { pressArticles } from "@/data/press";
import ScrollReveal from "./ScrollReveal";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
      />
    </svg>
  );
}

function FeaturedArticle({
  article,
}: {
  article: (typeof pressArticles)[0];
}) {
  return (
    <ScrollReveal>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-sm border border-lavender/[0.08] bg-noir-900/40 transition-all duration-700 hover:border-lavender/20 hover:bg-lavender/[0.03] hover:shadow-[0_8px_60px_rgba(180,140,200,0.08)] hover:-translate-y-1"
      >
        <div className="relative p-8 md:p-12">
          {/* Decorative oversized quotation mark */}
          <div className="absolute top-4 right-8 md:top-6 md:right-12 font-serif text-[120px] md:text-[180px] leading-none text-lavender/[0.04] select-none pointer-events-none">
            &ldquo;
          </div>

          {/* Top row: Publication + Date */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-serif text-2xl md:text-3xl font-light tracking-wider text-lavender/25 uppercase">
                {article.publication}
              </span>
            </div>
            {article.date && (
              <span className="font-sans text-xs tracking-widest uppercase text-lavender-light/25">
                {article.date}
              </span>
            )}
          </div>

          {/* Headline */}
          <h3 className="relative font-serif text-xl md:text-2xl lg:text-3xl leading-snug text-lavender-light/80 group-hover:text-lavender-light transition-colors duration-500 max-w-3xl">
            &ldquo;{article.title}&rdquo;
          </h3>

          {/* Bottom row: Read more + decorative line */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-lavender/15 group-hover:w-12 group-hover:bg-lavender/30 transition-all duration-500" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-lavender/30 group-hover:text-lavender/60 transition-colors duration-500">
                Leer nota
              </span>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-lavender/10 group-hover:border-lavender/30 group-hover:bg-lavender/10 transition-all duration-500">
              <ArrowIcon className="w-3.5 h-3.5 text-lavender/30 group-hover:text-lavender-light/70 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/15 to-transparent group-hover:via-lavender/30 transition-all duration-700" />
      </a>
    </ScrollReveal>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: (typeof pressArticles)[0];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full overflow-hidden rounded-sm border border-lavender/[0.06] bg-noir-900/30 transition-all duration-700 hover:border-lavender/20 hover:bg-lavender/[0.03] hover:shadow-[0_6px_40px_rgba(180,140,200,0.06)] hover:-translate-y-1"
      >
        <div className="relative p-6 md:p-8">
          {/* Decorative quotation mark */}
          <div className="absolute top-2 right-4 font-serif text-[80px] leading-none text-lavender/[0.04] select-none pointer-events-none">
            &ldquo;
          </div>

          {/* Publication masthead */}
          <div className="mb-6">
            <span className="font-serif text-lg md:text-xl font-light tracking-wider text-lavender/20 uppercase">
              {article.publication}
            </span>
          </div>

          {/* Article title */}
          <h3 className="relative font-serif text-base md:text-lg leading-relaxed text-lavender-light/75 group-hover:text-lavender-light transition-colors duration-500">
            &ldquo;{article.title}&rdquo;
          </h3>

          {/* Date + Read more */}
          <div className="mt-6 flex items-center justify-between">
            {article.date ? (
              <span className="font-sans text-[11px] tracking-widest uppercase text-lavender-light/20">
                {article.date}
              </span>
            ) : (
              <span />
            )}
            <div className="flex items-center gap-2">
              <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-lavender/25 group-hover:text-lavender/50 transition-colors duration-500">
                Leer
              </span>
              <ArrowIcon className="w-3 h-3 text-lavender/25 group-hover:text-lavender/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Side accent */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-lavender/30 rounded-full transition-all duration-700 group-hover:h-12" />
      </a>
    </ScrollReveal>
  );
}

export default function Press() {
  const [featured, ...rest] = pressArticles;

  return (
    <section id="press" className="relative py-24 md:py-32 bg-noir-950">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Prensa
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        {/* Decorative press element */}
        <ScrollReveal delay={0.05}>
          <div className="mb-12 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-lavender/10" />
              <span className="font-serif text-sm italic tracking-wider text-lavender/20">
                Notas destacadas
              </span>
              <div className="h-px w-6 bg-lavender/10" />
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Article (first one, full width) */}
        <div className="mb-4 md:mb-6">
          <FeaturedArticle article={featured} />
        </div>

        {/* Grid of remaining articles */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {rest.map((article, i) => (
            <ArticleCard key={article.url} article={article} index={i} />
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
