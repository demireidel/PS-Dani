"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type HoverState = "default" | "interactive" | "image";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hoverState, setHoverState] = useState<HoverState>("default");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Dot follows exactly
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35, mass: 0.1 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35, mass: 0.1 });

  // Ring trails with spring physics
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });

  const checkDevice = useCallback(() => {
    if (typeof window === "undefined") return false;
    if (window.innerWidth < 1280) return false;
    if (window.matchMedia("(pointer: coarse)").matches) return false;
    if (!window.matchMedia("(pointer: fine)").matches) return false;
    return true;
  }, []);

  useEffect(() => {
    if (!checkDevice()) return;

    setVisible(true);

    // Add class to hide default cursor
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("img, picture, video, [data-cursor='image']")) {
        setHoverState("image");
      } else if (
        target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='interactive']")
      ) {
        setHoverState("interactive");
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("img, picture, video, [data-cursor='image']") ||
        target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='interactive']")
      ) {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY, checkDevice]);

  if (!visible) return null;

  const ringSize = hoverState === "interactive" ? 60 : hoverState === "image" ? 60 : 40;
  const ringBorderColor =
    hoverState === "interactive"
      ? "rgba(180, 140, 200, 0.5)"
      : hoverState === "image"
        ? "rgba(180, 140, 200, 0.35)"
        : "rgba(224, 208, 234, 0.15)";
  const ringBoxShadow =
    hoverState === "interactive"
      ? "0 0 20px rgba(180, 140, 200, 0.15), 0 0 40px rgba(180, 140, 200, 0.05)"
      : "none";

  return (
    <>
      {/* Inject cursor-hiding style */}
      <style jsx global>{`
        .custom-cursor-active,
        .custom-cursor-active * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer ring — trails behind with spring physics */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border flex items-center justify-center"
          animate={{
            width: ringSize,
            height: ringSize,
            borderColor: ringBorderColor,
            boxShadow: ringBoxShadow,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 22,
            mass: 0.8,
          }}
        >
          {/* "View" text for image hover */}
          <motion.span
            className="font-sans text-[9px] tracking-[0.2em] uppercase text-lavender-light/70 select-none"
            animate={{
              opacity: hoverState === "image" ? 1 : 0,
              scale: hoverState === "image" ? 1 : 0.5,
            }}
            transition={{ duration: 0.2 }}
          >
            View
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Dot — follows mouse exactly, with mix-blend-difference */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-lavender-light"
          animate={{
            width: hoverState === "default" ? 8 : 6,
            height: hoverState === "default" ? 8 : 6,
            opacity: hoverState === "default" ? 0.9 : 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      </motion.div>
    </>
  );
}
