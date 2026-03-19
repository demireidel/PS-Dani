"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Bio() {
  return (
    <section id="bio" className="relative py-24 md:py-32 bg-noir-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 border border-lavender/10" />
              <Image
                src="https://resizer.glanacion.com/resizer/v2/me-encanta-bailar-pero-quedo-atras-mi-epoca-de-EMNV53SQKFAH5EHKIVDMB5HTSY.jpg?auth=8ccc3d2a14a1ba66b2606e17447b76f8268e4135dcd4c7335dfae8a1c6c09537&width=600&quality=80"
                alt="Daniela Pantano"
                width={600}
                height={800}
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-900/40 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.2} className="md:col-span-3">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-8 bg-lavender-muted" />
              <h2 className="font-serif text-2xl md:text-3xl tracking-dramatic uppercase text-lavender-light">
                Biografía
              </h2>
            </div>

            <div className="space-y-6 font-serif text-base md:text-lg leading-relaxed text-lavender-light/70">
              <p>
                <span className="text-lavender">Daniela Pantano</span> es actriz, cantante, bailarina
                y dramaturga argentina. Con más de 20 años de trayectoria, ha desarrollado una carrera
                ecléctica que transita con igual soltura el circuito comercial y el off, lo audiovisual
                y lo escénico.
              </p>
              <p>
                Inició su formación a los 10 años. En actuación se formó con{" "}
                <span className="text-lavender/80">Javier Daulte</span>,{" "}
                <span className="text-lavender/80">Raúl Serrano</span> y{" "}
                <span className="text-lavender/80">Marcelo Savignone</span>. A los 19 años fue becada
                para estudiar comedia musical en{" "}
                <span className="text-lavender/80">Point Park University</span> (Pittsburgh, EE.UU.).
              </p>
              <p>
                Entre 2009 y 2011 continuó su formación en Nueva York en el{" "}
                <span className="text-lavender/80">Broadway Dance Center</span> y{" "}
                <span className="text-lavender/80">Steps on Broadway</span>.
              </p>
              <p>
                Su trabajo abarca teatro musical, televisión, cine y música. Ha sido nominada a los
                premios Hugo, ACE y Estrella de Mar. Como dramaturga, creó el biodrama{" "}
                <span className="italic text-lavender/80">Y luego la calma</span>, una obra íntima
                sobre la relación con su padre.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
