const footerLinks = [
  { label: "Reel", href: "#reel" },
  { label: "Bio", href: "#bio" },
  { label: "Créditos", href: "#credits" },
  { label: "Galería", href: "#gallery" },
  { label: "Prensa", href: "#press" },
  { label: "Contacto", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/daniela_pantano/", icon: "IG" },
  { label: "Twitter / X", href: "https://x.com/rubiasdedani", icon: "X" },
  { label: "Facebook", href: "https://www.facebook.com/danipantanok/", icon: "FB" },
];

export default function Footer() {
  return (
    <footer className="border-t border-lavender/10 bg-noir-950 py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 font-serif text-2xl tracking-dramatic uppercase text-lavender/40">
          DP
        </div>

        <nav className="mb-6 flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-wide text-lavender-light/30 hover:text-lavender-light/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mb-6 flex justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 border border-lavender/10 text-lavender-light/30 hover:text-lavender-light/60 hover:border-lavender/20 transition-all duration-300 font-sans text-[10px] tracking-wide"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="font-sans text-xs text-lavender-light/20">
          Representación:{" "}
          <a
            href="https://www.alejandrovannelli.com.ar/daniela-pantano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lavender-light/40 transition-colors"
          >
            Agencia Vannelli
          </a>
        </p>

        <p className="mt-2 font-sans text-xs text-lavender-light/15">
          &copy; {new Date().getFullYear()} Daniela Pantano. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
