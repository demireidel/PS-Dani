"use client";

import ScrollReveal from "./ScrollReveal";

export default function Showreel() {
  return (
    <section id="reel" className="relative py-24 md:py-32 bg-noir-950">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Showreel
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-lavender/10 pointer-events-none" />
            <div className="absolute -inset-6 border border-lavender/5 pointer-events-none" />

            {/* Video embed — placeholder URL, replace with actual reel */}
            <div className="relative aspect-video bg-noir-800 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/1BHhqzUyky0"
                title="Daniela Pantano — Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
