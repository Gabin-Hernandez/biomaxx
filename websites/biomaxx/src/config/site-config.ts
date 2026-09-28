export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface BusinessUnit {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  brandBadge?: string;
}


export const siteConfig = {
  siteName: "BIOMAXX",
  tagline: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",
  heroSubtitle: "Conectamos productos, tecnología, industria y oportunidades.",
  heroDescription:
    "Impulsamos el desarrollo a través de soluciones innovadoras, comercio internacional y alianzas estratégicas para un futuro más sostenible.",
  heroCta: {
    label: "Conocé más",
    href: "#servicios",
  },
  sloganBanner: {
    highlightText: "productos, tecnología y conocimiento.",
    sideText: "MÁS QUE NEGOCIOS, OPORTUNIDADES REALES.",
  },
  footerSlogan: "CRECEMOS JUNTOS, CONSTRUYENDO SOLUCIONES PARA UN MUNDO MEJOR.",
  copyright: "© 2024 BIOMAXX. Todos los derechos reservados.",
  
  // Navigation Links - Single App Unified Internal Routes
  navLinks: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Biomaxx", href: "/" },
    { label: "Pampa grill", href: "/pampa-grill" },
    { label: "NaNoDaK", href: "/nanodak" },
    { label: "Godial Trading Company", href: "/godial-trading-company" },
    { label: "Contacto", href: "/contacto" },
    { label: "Legales", href: "/legales" },
  ] as NavLink[],

  // Hero Carousel Slides
  heroSlides: [
    {
      id: "pampa-grill",
      image: "/images/hero-pampa.png",
      title: "Tradición y energía natural para un mejor mañana.",
      subtitle: "Pampa Grill - Carbón y pellets premium de origen natural.",
      brandBadge: "Pampa Grill",
    },
    {
      id: "biomaxx",
      image: "/images/hero-biomaxx.png",
      title: "Soluciones industriales sin límites.",
      subtitle: "Biomaxx - Infraestructura y logística global.",
      brandBadge: "Biomaxx",
    },
    {
      id: "godial-trading",
      image: "/images/hero-godial.png",
      title: "Equipos industriales para un mundo en movimiento.",
      subtitle: "Godial Trading Company - Comercio internacional y tecnología.",
      brandBadge: "Godial Trading",
    },
    {
      id: "nanodak",
      image: "/images/hero-nanodak.png",
      title: "Productos premium para protección y rendimiento.",
      subtitle: "NaNoDaK - Materiales sintéticos y geomembranas.",
      brandBadge: "NaNoDaK",
    },
  ] as HeroSlide[],

  // 4 Main Business Unit Cards
  businessUnits: [
    {
      id: "biomaxx",
      name: "Biomaxx",
      subtitle: "Soluciones industriales sin límites.",
      image: "/images/card-biomaxx.png",
      href: "/",
    },
    {
      id: "nanodak",
      name: "NaNoDaK",
      subtitle: "Productos premium para protección y rendimiento.",
      image: "/images/card-nanodak.png",
      href: "/nanodak",
    },
    {
      id: "godial-trading",
      name: "Godial Trading Company",
      subtitle: "Equipos industriales para un mundo en movimiento.",
      image: "/images/card-godial.png",
      href: "/godial-trading-company",
    },
    {
      id: "pampa-grill",
      name: "Pampa grill",
      subtitle: "Fuego que une tradición, sabor y naturaleza.",
      image: "/images/card-pampa.png",
      href: "/pampa-grill",
    },
  ] as BusinessUnit[],

  // Secondary Navigation Cards
  sectionCards: {
    nosotros: {
      title: "Nosotros",
      subtitle: "Una visión global para un futuro con más oportunidades.",
      href: "/nosotros",
    },
    contacto: {
      title: "Contacto",
      subtitle: "Hablemos de nuevas posibilidades. Estamos para asesorarte.",
      href: "/contacto",
    },
  },

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};
