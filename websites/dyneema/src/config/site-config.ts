export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface ProductCard {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export const siteConfig = {
  siteName: "Dyneema®",
  subtitle: "Tecnología Balística",
  parentCompany: "GODIAL TRADING COMPANY",
  tagline: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",

  // Hero section content
  heroDescription:
    "Dyneema® es una fibra de polietileno de ultra alto peso molecular (UHMWPE), reconocida mundialmente por su extraordinaria relación entre resistencia y peso. Es uno de los materiales más avanzados utilizados en chalecos antibalas y soluciones de protección personal.",

  heroCheckmarks: [
    "Protección balística de alto rendimiento.",
    "Hasta un 40% más liviano que alternativas tradicionales.",
    "Mayor flexibilidad y confort para el usuario.",
    "Excelente resistencia a la humedad y a la corrosión.",
    "Aplicaciones en fuerzas armadas, seguridad y protección civil.",
  ],

  // 6 Product Cards
  productCards: [
    {
      id: "chaleco-balistico",
      name: "Chaleco balístico",
      description:
        "Chalecos antibalas fabricados con Dyneema®, que brindan máxima protección con un peso reducido.",
      image: "/images/chaleco-balistico.png",
      href: "#chaleco-balistico",
    },
    {
      id: "tela-dyneema",
      name: "Tela Dyneema",
      description:
        "Rollos de tela de Dyneema® para equipos de protección personal y soluciones técnicas.",
      image: "/images/rollo-tejido-dynema.png",
      href: "#tela-dyneema",
    },
    {
      id: "casco-balistico",
      name: "Casco balístico",
      description:
        "Protección balística con materiales livianos para aplicaciones de seguridad.",
      image: "/images/casco-balistico.png",
      href: "#casco-balistico",
    },
    {
      id: "guantes-proteccion",
      name: "Guantes de protección",
      description:
        "Guantes con fibras Dyneema® para protección, flexibilidad y comodidad.",
      image: "/images/guantes-anticorte.png",
      href: "#guantes-proteccion",
    },
    {
      id: "cuerdas-dyneema",
      name: "Cuerdas Dyneema",
      description: "Cuerdas para aplicaciones náuticas e industriales.",
      image: "/images/cuerdas-dynema.png",
      href: "#cuerdas-dyneema",
    },
    {
      id: "placa-antitrauma",
      name: "Placa antitrauma",
      description:
        "Placas para complementar sistemas de protección balística.",
      image: "/images/placa-antitrauma.png",
      href: "#placa-antitrauma",
    },
  ] as ProductCard[],

  // Video Section
  videoSection: {
    tag: "VIDEO",
    brandName: "Dyneema®",
    tagline: "Tecnología que protege",
    videoTitle: "Dyneema®",
    duration: "0:08 / 4:46",
    backgroundImage: "/images/rollo-tejido-dynema.png",
  },

  footerSlogan: "CRECEMOS JUNTOS, CONSTRUYENDO SOLUCIONES PARA UN MUNDO MEJOR.",
  copyright: "© 2024 BIOMAXX. Todos los derechos reservados.",

  // Navigation Links
  navLinks: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Biomaxx", href: "#biomaxx" },
    { label: "Pampa grill", href: "#pampa-grill" },
    { label: "NaNoDaK", href: "#nanodak" },
    { label: "Godial Trading Company", href: "#godial", active: true },
    { label: "Contacto", href: "#contacto" },
  ] as NavLink[],

  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};
