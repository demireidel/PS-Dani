"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/daniela_pantano/", icon: "IG" },
  { label: "Twitter / X", href: "https://x.com/rubiasdedani", icon: "X" },
  { label: "Facebook", href: "https://www.facebook.com/danipantanok/", icon: "FB" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-noir-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(180,140,200,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-muted" />
            <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
              Contacto
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-muted" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-xs tracking-wider uppercase text-lavender/60 mb-2">
                  Representación
                </h3>
                <a
                  href="https://www.alejandrovannelli.com.ar/daniela-pantano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl text-lavender-light hover:text-lavender transition-colors"
                >
                  Agencia Vannelli
                </a>
              </div>

              <div>
                <h3 className="font-sans text-xs tracking-wider uppercase text-lavender/60 mb-4">
                  Redes
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 border border-lavender/20 text-lavender-light/60 hover:text-lavender-light hover:border-lavender/40 hover:bg-lavender/5 transition-all duration-300 font-sans text-xs tracking-wide"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="font-serif text-xl text-lavender-light/80">
                  Mensaje enviado. ¡Gracias!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                  className="w-full bg-transparent border-b border-lavender/20 py-3 font-sans text-sm text-lavender-light placeholder:text-lavender-light/30 focus:border-lavender/50 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-lavender/20 py-3 font-sans text-sm text-lavender-light placeholder:text-lavender-light/30 focus:border-lavender/50 focus:outline-none transition-colors"
                />
                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full bg-noir-900 border-b border-lavender/20 py-3 font-sans text-sm text-lavender-light/30 focus:border-lavender/50 focus:outline-none transition-colors"
                >
                  <option value="" disabled>Asunto</option>
                  <option value="casting">Casting</option>
                  <option value="prensa">Prensa</option>
                  <option value="general">General</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-lavender/20 py-3 font-sans text-sm text-lavender-light placeholder:text-lavender-light/30 focus:border-lavender/50 focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="mt-4 px-8 py-3 border border-lavender/30 font-sans text-sm tracking-wider uppercase text-lavender-light/80 hover:bg-lavender/10 hover:border-lavender/50 hover:text-lavender-light hover:shadow-[0_0_20px_rgba(180,140,200,0.15)] transition-all duration-300"
                >
                  Enviar
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
