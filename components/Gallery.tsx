"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import ScrollReveal from "./ScrollReveal";

type FilterCategory = "all" | GalleryImage["category"];

const categoryLabels: Record<FilterCategory, string> = {
  all: "Todas",
  headshot: "Headshot",
  "en-escena": "En Escena",
  editorial: "Editorial",
  backstage: "Backstage",
};

const categoryOrder: FilterCategory[] = [
  "all",
  "headshot",
  "en-escena",
  "editorial",
  "backstage",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [direction, setDirection] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((i) =>
      i !== null
        ? (i - 1 + filteredImages.length) % filteredImages.length
        : null
    );
  }, [filteredImages.length]);
  const next = useCallback(() => {
    setDirection(1);
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % filteredImages.length : null
    );
  }, [filteredImages.length]);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Masonry: assign sizes based on aspect ratio for visual emphasis
  const getSpanClass = (image: GalleryImage, index: number) => {
    const aspect = image.width / image.height;
    // Make first and every 5th image in each column larger
    if (index === 0 || index % 5 === 0) return "row-span-2";
    if (aspect > 1.3) return ""; // landscape
    return ""; // portrait
  };

  // Split into 3 columns for masonry
  const columns = useMemo(() => {
    const cols: GalleryImage[][] = [[], [], []];
    filteredImages.forEach((img, i) => {
      cols[i % 3].push(img);
    });
    return cols;
  }, [filteredImages]);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-noir-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <ScrollReveal>
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Galeria
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="mb-14 flex justify-center">
            <div className="inline-flex items-center gap-2 flex-wrap justify-center">
              {categoryOrder.map((cat) => {
                const count =
                  cat === "all"
                    ? galleryImages.length
                    : galleryImages.filter((img) => img.category === cat)
                        .length;
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveFilter(cat);
                      setSelectedIndex(null);
                    }}
                    className={`relative px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-400 border ${
                      isActive
                        ? "text-lavender-light border-lavender/25 bg-lavender/8 shadow-[0_0_20px_rgba(180,140,200,0.08)]"
                        : "text-lavender-light/30 border-transparent hover:text-lavender-light/60 hover:border-lavender/10"
                    }`}
                  >
                    {categoryLabels[cat]}
                    <span
                      className={`ml-1.5 text-[10px] tabular-nums ${
                        isActive ? "text-lavender/60" : "text-lavender/20"
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

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3 md:gap-4">
                {col.map((image, imgIndex) => {
                  const globalIndex = filteredImages.indexOf(image);
                  const isEmphasized =
                    imgIndex === 0 || imgIndex === 3;
                  return (
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: globalIndex * 0.04,
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <button
                        onClick={() => setSelectedIndex(globalIndex)}
                        className="group relative block w-full overflow-hidden rounded-sm border border-lavender/[0.06] transition-all duration-700 hover:border-lavender/20 hover:shadow-[0_0_30px_rgba(180,140,200,0.08)]"
                        aria-label={`Ver ${image.alt}`}
                      >
                        <div
                          className={`relative overflow-hidden ${
                            isEmphasized ? "aspect-[3/4]" : ""
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          />

                          {/* Lavender tint overlay on hover */}
                          <div className="absolute inset-0 bg-lavender/0 group-hover:bg-lavender/10 transition-colors duration-700 mix-blend-overlay" />

                          {/* Dark gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Category label reveal */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="inline-block px-2.5 py-1 rounded-full font-sans text-[10px] tracking-widest uppercase text-lavender-light/90 bg-noir-950/50 border border-lavender/15 backdrop-blur-sm">
                              {
                                categoryLabels[
                                  image.category as FilterCategory
                                ]
                              }
                            </span>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Galeria de fotos"
          >
            {/* Backdrop with blur + grain */}
            <div className="absolute inset-0 bg-noir-950/95 backdrop-blur-xl" />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 z-20 group/close"
              aria-label="Cerrar galeria"
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-lavender/15 bg-noir-900/50 backdrop-blur-sm transition-all duration-300 group-hover/close:border-lavender/40 group-hover/close:bg-lavender/10">
                <svg
                  className="w-4 h-4 text-lavender-light/60 group-hover/close:text-lavender-light transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
            </button>

            {/* Image counter */}
            <div className="absolute top-7 left-1/2 -translate-x-1/2 z-20 font-sans text-sm tracking-[0.2em] text-lavender-light/30">
              <span className="text-lavender-light/70">
                {String(selectedIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-2 text-lavender/20">/</span>
              <span>{String(filteredImages.length).padStart(2, "0")}</span>
            </div>

            {/* Navigation: Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 group/nav"
              aria-label="Foto anterior"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-lavender/10 bg-noir-900/30 backdrop-blur-sm transition-all duration-300 group-hover/nav:border-lavender/30 group-hover/nav:bg-lavender/10">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-lavender-light/40 group-hover/nav:text-lavender-light transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* Main Image with Slide Transition */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selectedIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 max-h-[78vh] max-w-[85vw] flex flex-col items-center"
              >
                <Image
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].alt}
                  width={filteredImages[selectedIndex].width}
                  height={filteredImages[selectedIndex].height}
                  className="max-h-[75vh] w-auto object-contain rounded-sm"
                  priority
                />
                {/* Caption */}
                <p className="mt-4 font-sans text-xs tracking-wider text-lavender-light/30 text-center max-w-md">
                  {filteredImages[selectedIndex].alt}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation: Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 group/nav"
              aria-label="Foto siguiente"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-lavender/10 bg-noir-900/30 backdrop-blur-sm transition-all duration-300 group-hover/nav:border-lavender/30 group-hover/nav:bg-lavender/10">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-lavender-light/40 group-hover/nav:text-lavender-light transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
