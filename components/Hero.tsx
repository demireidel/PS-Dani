"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Animated gradient fallback (visible when no video) */}
      <div className="absolute inset-0 bg-noir-900" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-900/60 via-noir-900/40 to-noir-900/90" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(180,140,200,0.08),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 font-sans text-xs tracking-[0.4em] uppercase text-lavender-muted"
        >
          Actriz &middot; Cantante &middot; Bailarina &middot; Dramaturga
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-dramatic uppercase text-lavender-light"
        >
          Daniela
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="my-4 h-px w-24 bg-gradient-to-r from-transparent via-lavender to-transparent"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] uppercase text-lavender-muted"
        >
          Pantano
        </motion.h2>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-lavender-muted" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-2 w-2 rotate-45 border-b border-r border-lavender-muted"
        />
      </motion.div>
    </section>
  );
}
