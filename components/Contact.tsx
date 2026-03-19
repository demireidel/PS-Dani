"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/daniela_pantano/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/danipantanok/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const subjectOptions = [
  { value: "", label: "Asunto", disabled: true },
  { value: "casting", label: "Casting" },
  { value: "prensa", label: "Prensa" },
  { value: "colaboracion", label: "Colaboración" },
  { value: "general", label: "General" },
];

interface FloatingFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  isTextarea?: boolean;
  rows?: number;
}

function FloatingField({ label, name, type = "text", required = true, isTextarea = false, rows = 4 }: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const isActive = focused || hasValue;

  const sharedClasses =
    "peer w-full bg-transparent border-0 border-b border-lavender/20 py-4 pt-6 font-sans text-sm text-lavender-light focus:border-lavender/60 focus:outline-none transition-all duration-500 placeholder-transparent";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
  };

  return (
    <div className="relative group">
      {isTextarea ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          name={name}
          id={name}
          rows={rows}
          required={required}
          placeholder={label}
          className={`${sharedClasses} resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={label}
          className={sharedClasses}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
        />
      )}

      <label
        htmlFor={name}
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-sans ${
          isActive
            ? "top-0 text-[11px] tracking-wider uppercase text-lavender/70"
            : "top-4 text-sm text-lavender-light/30"
        }`}
      >
        {label}
      </label>

      {/* Animated underline on focus */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-lavender-deep via-lavender to-lavender-deep"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [subjectValue, setSubjectValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-noir-900 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(138,95,160,0.06)_0%,transparent_70%)] spotlight-pulse" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(180,140,200,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ─── Left Side: Info ─── */}
          <ScrollReveal direction="left">
            <div className="flex flex-col justify-center h-full space-y-12">
              {/* Heading */}
              <div>
                <motion.div
                  className="h-px w-16 bg-gradient-to-r from-lavender/60 to-transparent mb-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ originX: 0 }}
                />
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-lavender-light leading-[1.1] tracking-tight">
                  Let&rsquo;s Work
                  <br />
                  <span className="text-lavender/80 italic">Together</span>
                </h2>
                <p className="mt-6 font-sans text-sm text-lavender-light/40 leading-relaxed max-w-sm">
                  Para casting, propuestas artísticas y representación comercial
                </p>
              </div>

              {/* Agency */}
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-lavender/40 mb-3">
                  Representación
                </p>
                <a
                  href="https://www.alejandrovannelli.com.ar/daniela-pantano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 font-serif text-xl text-lavender-light/80 hover:text-lavender-light transition-colors duration-300"
                >
                  Agencia Vannelli
                  <svg
                    className="w-4 h-4 text-lavender/40 group-hover/link:text-lavender transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-lavender/40 mb-5">
                  Redes
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex items-center justify-center w-12 h-12 border border-lavender/15 text-lavender-light/40 hover:text-lavender-light hover:border-lavender/40 hover:shadow-[0_0_20px_rgba(180,140,200,0.1)] transition-all duration-500 rounded-full"
                      aria-label={link.label}
                    >
                      <span className="transition-transform duration-300 group-hover/social:scale-110">
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 border border-lavender/10 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-lavender/30 rounded-full" />
                  </div>
                  <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-lavender/20 to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ─── Right Side: Form ─── */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              {/* Subtle border glow on the form area */}
              <div className="absolute -inset-px rounded-sm bg-gradient-to-b from-lavender/[0.08] via-transparent to-lavender/[0.04] pointer-events-none" />

              <div className="relative bg-noir-900/50 backdrop-blur-sm border border-lavender/[0.06] p-8 md:p-12 rounded-sm">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex flex-col items-center justify-center min-h-[400px] text-center"
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 border border-lavender/30 rounded-full flex items-center justify-center mb-8"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lavender">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </motion.div>
                      <h3 className="font-serif text-2xl text-lavender-light mb-3">
                        Mensaje Enviado
                      </h3>
                      <p className="font-sans text-sm text-lavender-light/40">
                        Gracias por escribir. Te responderemos pronto.
                      </p>
                      <motion.div
                        className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-lavender/30 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-8"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FloatingField label="Nombre" name="contact-name" />
                      <FloatingField label="Email" name="contact-email" type="email" />

                      {/* Subject dropdown with floating label */}
                      <div className="relative group">
                        <select
                          name="contact-subject"
                          id="contact-subject"
                          required
                          value={subjectValue}
                          onChange={(e) => setSubjectValue(e.target.value)}
                          onFocus={() => setSubjectFocused(true)}
                          onBlur={() => setSubjectFocused(false)}
                          className="peer w-full bg-transparent border-0 border-b border-lavender/20 py-4 pt-6 font-sans text-sm text-lavender-light focus:border-lavender/60 focus:outline-none transition-all duration-500 appearance-none cursor-pointer"
                        >
                          {subjectOptions.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              disabled={opt.disabled}
                              className="bg-noir-900 text-lavender-light"
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>

                        <label
                          htmlFor="contact-subject"
                          className={`absolute left-0 transition-all duration-300 pointer-events-none font-sans ${
                            subjectFocused || subjectValue
                              ? "top-0 text-[11px] tracking-wider uppercase text-lavender/70"
                              : "top-4 text-sm text-lavender-light/30"
                          }`}
                        >
                          Asunto
                        </label>

                        {/* Dropdown arrow */}
                        <svg
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-lavender/30 pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                        <motion.div
                          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-lavender-deep via-lavender to-lavender-deep"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: subjectFocused ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          style={{ originX: 0 }}
                        />
                      </div>

                      <FloatingField label="Mensaje" name="contact-message" isTextarea rows={5} />

                      {/* Submit button */}
                      <div className="pt-4">
                        <motion.button
                          type="submit"
                          className="relative overflow-hidden w-full sm:w-auto px-12 py-4 border border-lavender/30 font-sans text-[13px] tracking-[0.2em] uppercase text-lavender-light/80 transition-all duration-500 hover:border-lavender/60 hover:text-noir-950 hover:shadow-[0_0_30px_rgba(180,140,200,0.15)] group/btn"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Hover fill */}
                          <span className="absolute inset-0 bg-gradient-to-r from-lavender to-lavender-deep translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                          <span className="relative z-10">Enviar Mensaje</span>
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
