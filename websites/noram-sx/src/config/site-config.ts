export interface ProductCard {
  id: string;
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface FeatureItem {
  id: string;
  text: string;
}

export const SITE_CONFIG = {
  header: {
    logoText: "BIOMAXX",
    registeredSymbol: "®",
    slogan: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",
    navLinks: [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Biomaxx", href: "#biomaxx" },
      { name: "Pampa grill", href: "#pampagrill" },
      { name: "NaNoDaK", href: "#nanodak" },
      { name: "Godial Trading Company", href: "#godial", active: true },
      { name: "Contacto", href: "#contacto" },
    ],
  },
  hero: {
    category: "GODIAL TRADING COMPANY",
    brandTitle: "NORAM",
    brandRed: "SX",
    registeredSymbol: "®",
    subtitle: "Acero Inoxidable Especial",
    description:
      "NORAM SX® es un acero inoxidable de alta performance desarrollado para trabajar en ambientes altamente corrosivos, especialmente en plantas de ácido nítrico y procesos químicos donde la confiabilidad del material es crítica.",
    backgroundImage: "/images/hero.png",
  },
  products: [
    {
      id: "tuberias-y-accesorios",
      image: "/images/tuberiasyaccesorios.png",
      title: "Tuberías y accesorios",
      description:
        "Tuberías, accesorios y componentes de alta performance para sistemas de alta confiabilidad en ambientes altamente corrosivos.",
      linkText: "Ver más",
      linkHref: "#tuberias",
    },
    {
      id: "reactores-y-equipos",
      image: "/images/reactores-y-equipos.png",
      title: "Reactores y equipos",
      description:
        "Equipos y reactores utilizados en plantas de ácido nítrico, procesos químicos y por la industria de fertilizantes.",
      linkText: "Ver más",
      linkHref: "#reactores",
    },
    {
      id: "valvulas-industriales",
      image: "/images/valvulas-industriales.png",
      title: "Válvulas industriales",
      description:
        "Válvulas en acero inoxidable especial para sistemas de conducción y control de procesos.",
      linkText: "Ver más",
      linkHref: "#valvulas",
    },
    {
      id: "bridas-y-conexiones",
      image: "/images/bridas-y-contexiones.png",
      title: "Bridas y conexiones",
      description:
        "Bridas y conexiones en acero inoxidable especial para el ensamble de tuberías y equipos.",
      linkText: "Ver más",
      linkHref: "#bridas",
    },
  ] as ProductCard[],
  features: {
    title: "NORAM SX® – Acero Inoxidable Especial",
    items: [
      "Máxima resistencia a la corrosión por ácido nítrico.",
      "Larga vida útil en equipos de proceso y reactores.",
      "Alta estabilidad mecánica en condiciones industriales severas.",
      "Material utilizado por la industria química y de fertilizantes.",
      "Solución premium para proyectos de ingeniería de alta exigencia.",
    ],
  },
  sloganBanner: {
    mainText: "Conectamos productos, tecnología y conocimiento.",
    taglineLine1: "MÁS ALLÁ DE LAS FRONTERAS.",
    taglineLine2: "MÁS OPORTUNIDADES REALES.",
  },
  footer: {
    logoText: "BIOMAXX",
    registeredSymbol: "®",
    slogan: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",
    copyright: "© 2026 BIOMAXX. Todos los derechos reservados.",
    links: [
      { name: "Inicio", href: "#" },
      { name: "Nosotros", href: "#nosotros" },
      { name: "Productos", href: "#productos" },
      { name: "Contacto", href: "#contacto" },
    ],
  },
};
