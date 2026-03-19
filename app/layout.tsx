import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniela Pantano — Actriz, Cantante, Bailarina | Portfolio Oficial",
  description:
    "Portfolio oficial de Daniela Pantano. Actriz, cantante, bailarina y dramaturga argentina con más de 20 años de trayectoria en teatro musical, televisión y cine.",
  openGraph: {
    title: "Daniela Pantano — Actriz, Cantante, Bailarina",
    description:
      "Portfolio oficial de Daniela Pantano. Actriz, cantante, bailarina y dramaturga argentina.",
    type: "website",
    locale: "es_AR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniela Pantano",
  jobTitle: "Actriz, Cantante, Bailarina, Dramaturga",
  nationality: "Argentina",
  birthDate: "1985-03-06",
  sameAs: [
    "https://www.instagram.com/daniela_pantano/",
    "https://x.com/rubiasdedani",
    "https://www.facebook.com/danipantanok/",
    "https://www.imdb.com/name/nm3535705/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
