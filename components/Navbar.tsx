"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Reel", href: "#reel", num: "01" },
  { label: "Bio", href: "#bio", num: "02" },
  { label: "Cr\u00e9ditos", href: "#credits", num: "03" },
  { label: "Galer\u00eda", href: "#gallery", num: "04" },
  { label: "Prensa", href: "#press", num: "05" },
  { label: "Contacto", href: "#contact", num: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
    setScrollProgress(Math.min(progress, 1));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Scroll spy
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[1px]">
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: scrollProgress,
            background:
              "linear-gradient(90deg, var(--color-lavender-deep), var(--color-lavender), var(--color-gold))",
          }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-noir-950/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{
          borderBottom: scrolled
            ? "1px solid rgba(180, 140, 200, 0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 1px 20px rgba(180, 140, 200, 0.03)"
            : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          {/* Logo */}
          <a
            href="#"
            className="group relative font-serif text-xl tracking-dramatic uppercase text-lavender-light transition-all duration-500"
          >
            <span className="relative z-10 group-hover:text-gold-light transition-colors duration-500">
              DP
            </span>
            <span
              className="absolute inset-0 -m-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(201, 169, 110, 0.15), transparent 70%)",
              }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative flex items-center gap-2 py-2"
                >
                  <span
                    className={`font-sans text-[10px] tabular-nums transition-colors duration-300 ${
                      isActive
                        ? "text-gold/60"
                        : "text-lavender-muted/30 group-hover:text-lavender-muted/50"
                    }`}
                  >
                    {link.num}
                  </span>
                  <span
                    className={`font-sans text-[13px] tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-lavender-light"
                        : "text-lavender-light/50 group-hover:text-lavender-light/90"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                    <span
                      className={`block h-full transition-transform duration-500 ease-out origin-left ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{
                        background: isActive
                          ? "linear-gradient(90deg, var(--color-gold), var(--color-lavender))"
                          : "linear-gradient(90deg, var(--color-lavender-muted), transparent)",
                      }}
                    />
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative flex flex-col items-end gap-1.5 p-2 z-50"
            aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[1px] bg-lavender-light origin-center"
              style={{ width: 24 }}
            />
            <motion.span
              animate={
                mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 16 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[1px] bg-lavender-light"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[1px] bg-lavender-light origin-center"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "rgba(5, 5, 5, 0.98)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Men\u00fa de navegaci\u00f3n"
          >
            {/* Background decorative elements */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(180, 140, 200, 0.04), transparent 70%)",
              }}
            />

            {/* Decorative lines */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[15%] top-[10%] bottom-[10%] w-px origin-top"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(180, 140, 200, 0.08), transparent)",
              }}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-[15%] top-[10%] bottom-[10%] w-px origin-top"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(201, 169, 110, 0.06), transparent)",
              }}
            />

            {/* Navigation links */}
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center gap-4"
                >
                  <span className="font-sans text-xs text-gold-muted/60 tabular-nums">
                    {link.num}
                  </span>
                  <span
                    className={`font-serif text-4xl tracking-wide transition-colors duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-lavender-light"
                        : "text-lavender-light/50 group-hover:text-lavender-light"
                    }`}
                  >
                    {link.label}
                  </span>
                  {activeSection === link.href.replace("#", "") && (
                    <span className="w-2 h-px bg-gold" />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Bottom decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-12 font-sans text-[9px] tracking-[0.5em] uppercase text-lavender-muted/20"
            >
              Daniela Pantano
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
