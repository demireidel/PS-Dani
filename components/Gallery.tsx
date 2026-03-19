"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null
      ),
    []
  );
  const next = useCallback(
    () =>
      setSelectedIndex((i) =>
        i !== null ? (i + 1) % galleryImages.length : null
      ),
    []
  );

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, close, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  const columns = [
    galleryImages.filter((_, i) => i % 3 === 0),
    galleryImages.filter((_, i) => i % 3 === 1),
    galleryImages.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-noir-900">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Galería
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {col.map((image) => {
                const globalIndex = galleryImages.indexOf(image);
                return (
                  <ScrollReveal key={image.src} delay={globalIndex * 0.05}>
                    <button
                      onClick={() => setSelectedIndex(globalIndex)}
                      className="group relative block w-full overflow-hidden"
                      aria-label={`Ver ${image.alt}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-noir-900/0 group-hover:bg-noir-900/40 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="font-sans text-xs tracking-wide text-lavender-light/80 uppercase">
                          {image.alt}
                        </span>
                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/95 backdrop-blur-sm p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Galería de fotos"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-lavender-light/60 hover:text-lavender-light text-2xl font-light z-10"
              aria-label="Cerrar galería"
            >
              ✕
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-lavender-light/40 hover:text-lavender-light text-4xl z-10"
              aria-label="Foto anterior"
            >
              ‹
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[85vw]"
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                width={galleryImages[selectedIndex].width}
                height={galleryImages[selectedIndex].height}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-lavender-light/40 hover:text-lavender-light text-4xl z-10"
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
