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

// Base public URLs for independent applications with local development fallbacks
const BIOMAXX_URL = process.env.NEXT_PUBLIC_BIOMAXX_URL || "http://localhost:3000";
const PAMPA_GRILL_URL = process.env.NEXT_PUBLIC_PAMPA_GRILL_URL || "http://localhost:3008";
const NANODAK_URL = process.env.NEXT_PUBLIC_NANODAK_URL || "http://localhost:3007";
const GODIAL_URL = process.env.NEXT_PUBLIC_GODIAL_URL || "http://localhost:3005";
const BIOMAXX_CORPORATE_URL = process.env.NEXT_PUBLIC_BIOMAXX_CORPORATE_URL || "http://localhost:3009";

const formatUrl = (baseUrl: string, path: string = "") => {
  const cleanBase = baseUrl.replace(/\/+$/, "");
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  return `${cleanBase}${cleanPath}`;
};

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
  
  // Navigation Links - Configurable for independent sites
  navLinks: [
    { label: "Nosotros", href: formatUrl(BIOMAXX_CORPORATE_URL, "/nosotros"), external: true },
    { label: "Biomaxx", href: formatUrl(BIOMAXX_URL, "/"), external: true },
    { label: "Pampa grill", href: formatUrl(PAMPA_GRILL_URL, "/"), external: true },
    { label: "NaNoDaK", href: formatUrl(NANODAK_URL, "/"), external: true },
    { label: "Godial Trading Company", href: formatUrl(GODIAL_URL, "/"), external: true },
    { label: "Contacto", href: formatUrl(BIOMAXX_CORPORATE_URL, "/contacto"), external: true },
    { label: "Legales", href: formatUrl(BIOMAXX_CORPORATE_URL, "/legales"), external: true },
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
      href: "#biomaxx",
    },
    {
      id: "nanodak",
      name: "NaNoDaK",
      subtitle: "Productos premium para protección y rendimiento.",
      image: "/images/card-nanodak.png",
      href: "#nanodak",
    },
    {
      id: "godial-trading",
      name: "Godial Trading Company",
      subtitle: "Equipos industriales para un mundo en movimiento.",
      image: "/images/card-godial.png",
      href: "#godial-trading",
    },
    {
      id: "pampa-grill",
      name: "Pampa grill",
      subtitle: "Fuego que une tradición, sabor y naturaleza.",
      image: "/images/card-pampa.png",
      href: "#pampa-grill",
    },
  ] as BusinessUnit[],

  // Secondary Navigation Cards
  sectionCards: {
    nosotros: {
      title: "Nosotros",
      subtitle: "Una visión global para un futuro con más oportunidades.",
      href: "#nosotros",
    },
    contacto: {
      title: "Contacto",
      subtitle: "Hablemos de nuevas posibilidades. Estamos para asesorarte.",
      href: "#contacto",
    },
  },

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};
