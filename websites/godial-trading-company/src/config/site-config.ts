export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface BrandCard {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
  titleColor?: string;
}

const BIOMAXX_URL = process.env.NEXT_PUBLIC_BIOMAXX_URL || "http://localhost:3000";
const PAMPA_GRILL_URL = process.env.NEXT_PUBLIC_PAMPA_GRILL_URL || "http://localhost:3008";
const NANODAK_URL = process.env.NEXT_PUBLIC_NANODAK_URL || "http://localhost:3007";
const GODIAL_URL = process.env.NEXT_PUBLIC_GODIAL_URL || "http://localhost:3005";
const BIOMAXX_CORPORATE_URL = process.env.NEXT_PUBLIC_BIOMAXX_CORPORATE_URL || "http://localhost:3009";
const DYNEEMA_URL = process.env.NEXT_PUBLIC_DYNEEMA_URL || "http://localhost:3006";
const NORAM_SX_URL = process.env.NEXT_PUBLIC_NORAM_SX_URL || "http://localhost:3004";

const formatUrl = (baseUrl: string, path: string = "") => {
  const cleanBase = baseUrl.replace(/\/+$/, "");
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  return `${cleanBase}${cleanPath}`;
};

export const siteConfig = {
  siteName: "Godial Trading Company",
  parentBrand: "BIOMAXX",
  tagline: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",
  
  // Hero section content
  heroLogo: "/images/logo-hero.png",
  heroDescription:
    "Licencias de marcas internacionales, importaciones y exportaciones para la Argentina y el mundo.",
  heroBadges: [
    { label: "Marcas internacionales", icon: "globe" },
    { label: "Importación y exportación", icon: "ship" },
    { label: "Alianzas estratégicas", icon: "handshake" },
  ],

  // Presentation & Brands Section
  presentation: {
    sectionTag: "NUESTRA UNIDAD DE NEGOCIO",
    title: "Presentación",
    paragraph:
      "Godial Trading Company es una unidad de negocio de BIOMAXX especializada en licencias de marcas internacionales. Además, desarrolla importaciones y exportaciones para la Argentina y el mundo, generando oportunidades de crecimiento a través de alianzas estratégicas y productos de alto valor.",
  },

  brandsSection: {
    sectionTag: "PRODUCTOS",
    title: "Marcas que representamos",
    noticeText:
      "Seguiremos incorporando nuevas marcas, licencias y líneas de negocio a medida que se definan.",
  },

  // 3 Featured Brand Cards
  brandCards: [
    {
      id: "dyneema",
      name: "Dyneema®",
      subtitle: "Fibras de alto rendimiento para un mundo más seguro.",
      image: "/images/dynema.png",
      href: "/dyneema",
      titleColor: "text-[#0047ba]",
    },
    {
      id: "noram-sx",
      name: "NORAM SX",
      subtitle: "Neumáticos fuera de ruta de máxima resistencia.",
      image: "/images/noram-sx.png",
      href: "/noram-sx",
      titleColor: "text-slate-900",
    },
    {
      id: "importacion",
      name: "Importación",
      subtitle:
        "Realizamos importaciones, buscamos clientes en el mundo y brindamos soluciones integrales para la importación de productos.",
      image: "/images/importacion.png",
      href: formatUrl(BIOMAXX_CORPORATE_URL, "/contacto"),
      titleColor: "text-[#0047ba]",
    },
  ] as BrandCard[],

  // Slogan Banner
  sloganBanner: {
    highlightText: "productos, tecnología y conocimiento.",
    sideText: "MÁS ALLÁ DE LAS FRONTERAS. MÁS OPORTUNIDADES REALES.",
  },

  footerSlogan: "CRECEMOS JUNTOS, CONSTRUYENDO SOLUCIONES PARA UN MUNDO MEJOR.",
  copyright: "© 2024 BIOMAXX. Todos los derechos reservados.",

  // Navigation Links - Godial Trading Company is ACTIVE
  navLinks: [
    { label: "Nosotros", href: formatUrl(BIOMAXX_CORPORATE_URL, "/nosotros") },
    { label: "Biomaxx", href: formatUrl(BIOMAXX_URL, "/") },
    { label: "Pampa grill", href: formatUrl(PAMPA_GRILL_URL, "/") },
    { label: "NaNoDaK", href: formatUrl(NANODAK_URL, "/") },
    { label: "Godial Trading Company", href: formatUrl(GODIAL_URL, "/"), active: true },
    { label: "Contacto", href: formatUrl(BIOMAXX_CORPORATE_URL, "/contacto") },
    { label: "Legales", href: formatUrl(BIOMAXX_CORPORATE_URL, "/legales") },
  ] as NavLink[],

  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};
