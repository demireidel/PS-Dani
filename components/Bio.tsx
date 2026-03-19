"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="block font-serif text-3xl md:text-4xl font-light text-lavender">
        {count}
        {suffix}
      </span>
      <span className="mt-1 block text-xs tracking-wide uppercase text-lavender-light/40">
        {label}
      </span>
    </div>
  );
}

export default function Bio() {
  return (
    <section id="bio" className="relative py-24 md:py-36 bg-noir-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Pull Quote */}
        <ScrollReveal direction="up" easing="dramatic" className="mb-16 md:mb-24">
          <blockquote className="mx-auto max-w-4xl text-center">
            <span className="block font-serif text-2xl md:text-4xl lg:text-5xl italic font-light leading-snug text-lavender-light/80">
              &ldquo;Me formé en Buenos Aires, en Pittsburgh y en Nueva York.
              Pero lo que más me formó fue la vida misma.&rdquo;
            </span>
            <span className="mt-6 block text-sm tracking-wide uppercase text-lavender/50">
              &mdash; Daniela Pantano
            </span>
          </blockquote>
        </ScrollReveal>

        {/* Main Content: Asymmetric Grid */}
        <div className="relative grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Rotated "Biography" label — hidden on small screens */}
          <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-3 origin-center">
            <div className="h-px w-10 bg-lavender/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-lavender/30 whitespace-nowrap">
              Biography
            </span>
            <div className="h-px w-10 bg-lavender/20" />
          </div>

          {/* Photo — ~45% width (5 of 12 cols) */}
          <ScrollReveal direction="left" easing="dramatic" className="md:col-span-5">
            <div className="relative">
              {/* Outer border */}
              <div className="absolute -inset-5 border border-lavender/5 pointer-events-none" />
              {/* Inner border with gap */}
              <div className="absolute -inset-2 border border-lavender/10 pointer-events-none" />
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src="https://resizer.glanacion.com/resizer/v2/me-encanta-bailar-pero-quedo-atras-mi-epoca-de-EMNV53SQKFAH5EHKIVDMB5HTSY.jpg?auth=8ccc3d2a14a1ba66b2606e17447b76f8268e4135dcd4c7335dfae8a1c6c09537&width=600&quality=80"
                  alt="Daniela Pantano — retrato"
                  width={600}
                  height={800}
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900/50 via-transparent to-noir-900/10" />
              </div>
            </div>
          </ScrollReveal>

          {/* Text — ~55% width (7 of 12 cols) */}
          <ScrollReveal
            direction="right"
            delay={0.15}
            easing="dramatic"
            className="md:col-span-7"
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px w-10 bg-lavender-muted" />
              <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
                Biografía
              </h2>
            </div>

            <div className="space-y-6 font-serif text-base md:text-lg leading-relaxed text-lavender-light/70">
              {/* First paragraph with drop cap */}
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:leading-[0.8] first-letter:text-lavender">
                <span className="text-lavender">Daniela Pantano</span> es actriz,
                cantante, bailarina y dramaturga argentina. Con más de 20 años de
                trayectoria, ha desarrollado una carrera ecléctica que transita con igual
                soltura el circuito comercial y el off, lo audiovisual y lo escénico.
              </p>

              <p>
                Inició su formación a los 10 años. En actuación se formó con{" "}
                <span className="text-lavender/80">Javier Daulte</span>,{" "}
                <span className="text-lavender/80">Raúl Serrano</span> y{" "}
                <span className="text-lavender/80">Marcelo Savignone</span>. A los 19
                años fue becada para estudiar comedia musical en{" "}
                <span className="text-lavender/80">Point Park University</span>{" "}
                (Pittsburgh, EE.UU.).
              </p>

              <p>
                Entre 2009 y 2011 continuó su formación en Nueva York en el{" "}
                <span className="text-lavender/80">Broadway Dance Center</span> y{" "}
                <span className="text-lavender/80">Steps on Broadway</span>.
              </p>

              <p>
                Su trabajo abarca teatro musical, televisión, cine y música. Ha sido
                nominada a los premios{" "}
                <span className="text-lavender/80">Hugo</span>,{" "}
                <span className="text-lavender/80">ACE</span> y{" "}
                <span className="text-lavender/80">Estrella de Mar</span>, ganando
                varios de ellos. Como dramaturga, creó el biodrama{" "}
                <span className="italic text-lavender/80">Y luego la calma</span>, una
                obra íntima sobre la relación con su padre.
              </p>

              <p>
                Recientemente participó en la serie de Netflix{" "}
                <span className="text-lavender/80">Envidiosa</span> (2024). Madre
                orgullosa, su hija es el centro de su vida.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 md:mt-28"
        >
          <div className="mx-auto max-w-3xl">
            {/* Decorative top line */}
            <div className="mb-10 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-lavender/20" />
              <div className="h-1.5 w-1.5 rotate-45 border border-lavender/30" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-lavender/20" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter target={20} suffix="+" label="Años" />
              <AnimatedCounter target={4} suffix="" label="Premios" />
              <AnimatedCounter target={50} suffix="+" label="Obras" />
              <AnimatedCounter target={3} suffix="" label="Países" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
