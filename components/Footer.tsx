"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Reel", href: "#reel" },
  { label: "Bio", href: "#bio" },
  { label: "Créditos", href: "#credits" },
  { label: "Galería", href: "#gallery" },
  { label: "Prensa", href: "#press" },
  { label: "Contacto", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/daniela_pantano/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/rubiasdedani",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/danipantanok/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative bg-noir-950 pt-20 pb-10 overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Large faded name */}
        <div className="mb-16 text-center select-none">
          <motion.h2
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase text-lavender/[0.06] leading-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            Daniela Pantano
          </motion.h2>
        </div>

        {/* Tagline */}
        <p className="text-center font-sans text-[11px] tracking-[0.3em] uppercase text-lavender/25 mb-12">
          Actriz &middot; Cantante &middot; Bailarina &middot; Dramaturga
        </p>

        {/* Navigation */}
        <nav className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] tracking-[0.15em] uppercase text-lavender-light/25 hover:text-lavender-light/60 transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="mb-10 flex justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 text-lavender-light/20 hover:text-lavender-light/60 transition-all duration-500"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Agency credit */}
        <p className="text-center font-sans text-[11px] tracking-wide text-lavender-light/15 mb-2">
          Representación:{" "}
          <a
            href="https://www.alejandrovannelli.com.ar/daniela-pantano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lavender-light/35 transition-colors duration-500"
          >
            Agencia Vannelli
          </a>
        </p>

        {/* Copyright */}
        <p className="text-center font-sans text-[10px] tracking-wide text-lavender-light/10">
          &copy; {new Date().getFullYear()} Daniela Pantano. Todos los derechos reservados.
        </p>

        {/* Back to top */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="group/top flex flex-col items-center gap-2 text-lavender-light/15 hover:text-lavender-light/40 transition-all duration-500"
            aria-label="Volver arriba"
          >
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover/top:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase">
              Top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
