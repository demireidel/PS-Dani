"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = ["Actriz", "Cantante", "Bailarina", "Dramaturga"];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
}

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo<Particle[]>(() => {
    if (!mounted) return [];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
      driftX: (Math.random() - 0.5) * 60,
      driftY: (Math.random() - 0.5) * 80,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [mounted]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 5 === 0
                ? "rgba(201, 169, 110, 0.5)"
                : "rgba(180, 140, 200, 0.5)",
          }}
          animate={{
            y: [0, p.driftY, 0],
            x: [0, p.driftX, 0],
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function RoleSequence() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentIndex];

    if (isTyping) {
      if (displayText.length < role.length) {
        const timer = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 1800);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  return (
    <span className="inline-flex items-center min-w-[140px] md:min-w-[200px]">
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-gold ml-1"
      />
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const lineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Layer 1: Deep noir base */}
      <div className="absolute inset-0 bg-noir-950" />

      {/* Layer 2: Subtle gradient warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-800/30 via-noir-950 to-noir-950" />

      {/* Layer 3: Radial spotlight - main */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(180, 140, 200, 0.15), transparent 70%)",
        }}
      />

      {/* Layer 4: Secondary spotlight - gold accent */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 10,
          delay: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 55% 45%, rgba(201, 169, 110, 0.12), transparent 60%)",
        }}
      />

      {/* Layer 5: Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(5, 5, 5, 0.7) 100%)",
        }}
      />

      {/* Layer 6: Top edge darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-950/60 via-transparent to-noir-950/80 pointer-events-none" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Scroll-driven overlay darkening */}
      <motion.div
        className="absolute inset-0 bg-noir-950 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: nameY, opacity: nameOpacity }}
      >
        {/* Roles - typewriter */}
        <motion.div
          variants={fadeUpVariant}
          className="mb-8 md:mb-10 font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-lavender-muted"
        >
          <RoleSequence />
        </motion.div>

        {/* DANIELA */}
        <motion.h1
          variants={fadeUpVariant}
          className="font-serif font-light text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] tracking-[0.2em] md:tracking-[0.25em] uppercase leading-[0.85] text-shimmer"
        >
          Daniela
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          variants={lineVariant}
          className="my-5 md:my-7 h-[1px] w-32 md:w-48 origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), var(--color-lavender), var(--color-gold), transparent)",
          }}
        />

        {/* PANTANO */}
        <motion.h2
          variants={fadeUpVariant}
          className="font-serif font-extralight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.35em] md:tracking-[0.45em] uppercase text-lavender-muted/80"
        >
          Pantano
        </motion.h2>

        {/* Subtle tagline */}
        <motion.p
          variants={fadeUpVariant}
          className="mt-8 md:mt-12 font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-lavender-muted/40"
        >
          Buenos Aires, Argentina
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <motion.span
          className="font-sans text-[9px] tracking-[0.4em] uppercase text-lavender-muted/30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>

        <motion.div
          className="relative h-12 w-px overflow-hidden"
          style={{ background: "rgba(180, 140, 200, 0.1)" }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-lavender/60 to-transparent"
            animate={{ height: ["0%", "100%"], top: ["0%", "80%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ height: "40%" }}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-lavender-muted/40"
        />
      </motion.div>
    </section>
  );
}
