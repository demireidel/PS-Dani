export interface Award {
  name: string;
  category: string;
  year: number;
}

export interface Credit {
  year?: number;
  title: string;
  role?: string;
  director?: string;
  production?: string;
  channel?: string;
  awards?: Award[];
}

export type CreditCategory = "teatro" | "tv" | "cine" | "musica";

export const credits: Record<CreditCategory, Credit[]> = {
  teatro: [
    { title: "Y luego la calma", year: 2022, role: "Autora y actriz", director: "Dennis Smith", production: "Biodrama" },
    { title: "Piso de soltero", year: 2019, role: "Actriz", director: "Daniel Veronese", production: "Con Nicolás Cabré y Laurita Fernández" },
    { title: "Ni con perros, ni con chicos", year: 2016, role: "Actriz", awards: [{ name: "Estrella de Mar", category: "Mejor Actriz de Reparto", year: 2017 }] },
    { title: "Nosotros los amantes", year: 2015, role: "Actriz", awards: [{ name: "ACE", category: "Revelación Femenina", year: 2015 }] },
    { title: "Priscilla, Reina del Desierto", year: 2014, role: "Actriz", awards: [{ name: "Hugo", category: "Mejor Intérprete Femenina en Musical", year: 2014 }] },
    { title: "Más de 100 mentiras", year: 2013, role: "Actriz", awards: [{ name: "Hugo", category: "Revelación Femenina", year: 2013 }] },
    { title: "Solo quiero que me amen", role: "Co-autora y actriz", director: "Juan Álvarez Prado" },
    { title: "Clarividentes", role: "Actriz" },
    { title: "Hairspray", role: "Actriz" },
  ],
  tv: [
    { title: "Envidiosa", year: 2024, role: "Chica Fit", channel: "Netflix" },
    { title: "Psiconautas", role: "Actriz" },
    { title: "Pequeña Victoria", role: "Actriz" },
    { title: "100 días para enamorarse", role: "Actriz" },
    { title: "Las Estrellas", role: "Actriz" },
    { title: "Simona", role: "Actriz" },
    { title: "Fanny, la fan", role: "Actriz" },
    { title: "El Marginal", year: 2016, role: "Actriz" },
    { title: "Violetta", role: "Actriz", channel: "Disney Channel" },
  ],
  cine: [
    { title: "Una tumba para tres", year: 2021, role: "Actriz" },
    { title: "Body Language", year: 2011, role: "Actriz" },
    { title: "Blood: The Last Vampire", year: 2009, role: "Student", production: "Producción internacional" },
  ],
  musica: [
    { title: "Endulzame Que Soy Café (Amor Sincero)", year: 2020, role: "feat. Ezequiel Mylian" },
    { title: "La Curiosidad", role: "Single" },
  ],
};
