export interface GalleryImage {
  src: string;
  alt: string;
  category: "headshot" | "en-escena" | "editorial" | "backstage";
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://static.wixstatic.com/media/103e26_efc5383dbc0248968e1d93e6dedcb1ca~mv2.jpg/v1/fill/w_800,h_1016,q_90/103e26_efc5383dbc0248968e1d93e6dedcb1ca~mv2.jpg",
    alt: "Daniela Pantano — Headshot editorial",
    category: "headshot",
    width: 800,
    height: 1016,
  },
  {
    src: "https://static.wixstatic.com/media/103e26_883bff16cc524a0ab47e15786669ad3c~mv2.jpg/v1/fill/w_800,h_800,q_90/103e26_883bff16cc524a0ab47e15786669ad3c~mv2.jpg",
    alt: "Daniela Pantano — Retrato dramático",
    category: "editorial",
    width: 800,
    height: 800,
  },
  {
    src: "https://static.wixstatic.com/media/103e26_7374564632c94a42963f3dc49a990eea~mv2.jpg/v1/fill/w_800,h_640,q_90/103e26_7374564632c94a42963f3dc49a990eea~mv2.jpg",
    alt: "Daniela Pantano — Foto artística B&W",
    category: "editorial",
    width: 800,
    height: 640,
  },
  {
    src: "https://static.wixstatic.com/media/103e26_734cae86d974433ca63d4b6dd1a2fd7a~mv2.jpg/v1/fill/w_800,h_1016,q_90/103e26_734cae86d974433ca63d4b6dd1a2fd7a~mv2.jpg",
    alt: "Daniela Pantano — Portrait natural",
    category: "headshot",
    width: 800,
    height: 1016,
  },
  {
    src: "https://static.wixstatic.com/media/103e26_2e6786903a5948e8b97e85cc2d8ebda7~mv2.jpg/v1/fill/w_800,h_652,q_90/103e26_2e6786903a5948e8b97e85cc2d8ebda7~mv2.jpg",
    alt: "Daniela Pantano — Sesión de fotos",
    category: "editorial",
    width: 800,
    height: 652,
  },
  {
    src: "https://static.wixstatic.com/media/103e26_b107d3d5d5f8499c960eefe5154b2520~mv2.jpg/v1/fill/w_800,h_1208,q_90/103e26_b107d3d5d5f8499c960eefe5154b2520~mv2.jpg",
    alt: "Daniela Pantano — Retrato artístico",
    category: "headshot",
    width: 800,
    height: 1208,
  },
  {
    src: "https://static.wixstatic.com/media/103e26_d8e138708ac549f0b05482534d06a7ac~mv2.jpg/v1/fill/w_800,h_800,q_90/103e26_d8e138708ac549f0b05482534d06a7ac~mv2.jpg",
    alt: "Daniela Pantano — Foto casual",
    category: "backstage",
    width: 800,
    height: 800,
  },
  {
    src: "https://resizer.glanacion.com/resizer/v2/daniela-pantano-dispuesta-a-los-desafios-6NJQSJ427BHM3B54N5UMYEZQ3E.JPG?auth=53749eb03f7b1bd71d492321d3534d197dd6044d9661bdcd5cf9896fb0aef83d&width=880&quality=70",
    alt: "Daniela Pantano — Entrevista LA NACION",
    category: "editorial",
    width: 880,
    height: 587,
  },
  {
    src: "https://resizer.glanacion.com/resizer/v2/me-encanta-bailar-pero-quedo-atras-mi-epoca-de-EMNV53SQKFAH5EHKIVDMB5HTSY.jpg?auth=8ccc3d2a14a1ba66b2606e17447b76f8268e4135dcd4c7335dfae8a1c6c09537&width=880&quality=70",
    alt: "Daniela Pantano — Retrato por Rodrigo Nespolo",
    category: "headshot",
    width: 880,
    height: 1320,
  },
  {
    src: "https://resizer.glanacion.com/resizer/v2/no-le-tengo-ni-rencor-ni-bronca-a-mi-papa-afirma-AIKTMP45ZVDP3MBWQVXPLBGNYM.JPG?auth=a6fa7adeaeb1cca09c7cf2e5e5e62e6bfef74c43f415ab11a412f7f6140017e3&width=880&quality=70",
    alt: "Daniela Pantano — Biodrama Y luego la calma",
    category: "en-escena",
    width: 880,
    height: 587,
  },
  {
    src: "https://blogger.googleusercontent.com/img/a/AVvXsEiRK_qrjcXEXfyHVr8pgGyrTWJDrx81K1g0PmPWmd8TswSwZzwxItYA-NYdk7tWORk9hL28c9lnpkT2L-7P_HyS60wRSlblsTU-3bNcyi4kUeCqWxzDvjidCJ-OXSpOwHsq4koefmOjESwl1mIHGHBw-mh93XIpHzlvgHNRfHM69cZtklH4bF2z9BDHIzg=w585-h585",
    alt: "Daniela Pantano — Musicales Baires",
    category: "headshot",
    width: 585,
    height: 585,
  },
  {
    src: "https://ociopatas.com/wp-content/uploads/2022/05/img-20220530-wa0003.jpg?w=1024",
    alt: "Daniela Pantano — Y luego la calma, teatro",
    category: "en-escena",
    width: 1024,
    height: 683,
  },
  {
    src: "https://elanartista.com.ar/wp-content/uploads/2021/11/daniel-1-copia.jpg",
    alt: "Daniela Pantano — Entrevista El Anartista",
    category: "editorial",
    width: 800,
    height: 600,
  },
  {
    src: "https://elanartista.com.ar/wp-content/uploads/2021/11/pantano2-padre-e-hija-Baruc-Selim9112585275156596.jpg",
    alt: "Daniela Pantano — Padre e hija, foto Baruc Selim",
    category: "en-escena",
    width: 800,
    height: 600,
  },
  {
    src: "https://ociopatas.com/wp-content/uploads/2022/05/img-20220530-wa0004.jpg?w=1024",
    alt: "Daniela Pantano — Y luego la calma, escena",
    category: "en-escena",
    width: 1024,
    height: 683,
  },
];
