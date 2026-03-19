"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type EasingPreset = "smooth" | "dramatic" | "snappy" | "gentle";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  easing?: EasingPreset;
  stagger?: number;
  staggerChildren?: boolean;
  scale?: boolean;
  duration?: number;
}

const easingMap: Record<EasingPreset, [number, number, number, number]> = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  dramatic: [0.16, 1, 0.3, 1],
  snappy: [0.34, 1.56, 0.64, 1],
  gentle: [0.4, 0, 0.2, 1],
};

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: 50 },
  right: { y: 0, x: -50 },
  none: { y: 0, x: 0 },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  easing = "smooth",
  stagger = 0.08,
  staggerChildren = false,
  scale = true,
  duration = 0.8,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const { x, y } = directionMap[direction];
  const ease = easingMap[easing];

  if (staggerChildren) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
        scale: scale ? 0.97 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease,
        opacity: { duration: duration * 0.75, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger child item — wrap each child in this when parent has staggerChildren */
export function ScrollRevealItem({
  children,
  className = "",
  direction = "up",
  scale = true,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
}) {
  const { x, y } = directionMap[direction];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x, y, scale: scale ? 0.97 : 1 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
