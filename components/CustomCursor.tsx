"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1280) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, iframe")) {
        setHovering(true);
      }
    };

    const onOut = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[99] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          width: hovering ? 48 : 20,
          height: hovering ? 48 : 20,
          opacity: hovering ? 0.6 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full bg-lavender-light -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}
