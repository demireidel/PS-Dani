export interface PressArticle {
  publication: string;
  title: string;
  date?: string;
  url: string;
}

export const pressArticles: PressArticle[] = [
  {
    publication: "LA NACION",
    title: "Daniela Pantano recrea en un biodrama la triste historia que vivió con su padre",
    date: "Mayo 2022",
    url: "https://www.lanacion.com.ar/espectaculos/teatro/daniela-pantano-recrea-en-un-biodrama-la-triste-historia-que-vivio-con-su-padre-nid06052022/",
  },
  {
    publication: "LA NACION",
    title: "Daniela Pantano, una artista ecléctica que se hace su propio camino",
    date: "Marzo 2021",
    url: "https://www.lanacion.com.ar/espectaculos/teatro/daniela-pantano-una-artista-eclectica-que-se-hace-su-propio-camino-nid06032021/",
  },
  {
    publication: "Pronto",
    title: "Mi hija me eleva y me potencia como persona y como artista",
    date: "Marzo 2021",
    url: "https://www.pronto.com.ar/espectaculos/2021/3/17/daniela-pantano-mi-hija-me-eleva-me-potencia-como-persona-como-artista-172540.html",
  },
  {
    publication: "Diario Hoy",
    title: "Realizar mis propios proyectos me hace sentir plena",
    url: "https://diariohoy.net/espectaculos/daniela-pantano-realizar-mis-propios-proyectos-me-hace-sentir-plena-153213",
  },
  {
    publication: "El Anartista",
    title: "Un sí padre",
    date: "Noviembre 2021",
    url: "https://elanartista.com.ar/2021/11/29/un-si-padre/",
  },
];
