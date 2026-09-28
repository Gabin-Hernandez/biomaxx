export interface ProductNavItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export const NANODAK_PRODUCTS: ProductNavItem[] = [
  {
    id: "delantales-pvc",
    slug: "delantales-pvc",
    title: "Delantales de PVC",
    subtitle: "De alto rendimiento para frigoríficos.",
    image: "/images/home/delantales-de-pvc.png",
    href: "/productos/delantales-pvc",
  },
  {
    id: "pisos-alto-transito",
    slug: "pisos-alto-transito",
    title: "Pisos de alto tránsito",
    subtitle: "Soluciones resistentes para entornos exigentes.",
    image: "/images/home/pisos-de-alto-transito.png",
    href: "/productos/pisos-alto-transito",
  },
  {
    id: "ecocuero",
    slug: "ecocuero",
    title: "Ecocuero",
    subtitle: "Estética, resistencia y confort.",
    image: "/images/home/ecocuero.png",
    href: "/productos/ecocuero",
  },
  {
    id: "geomembranas",
    slug: "geomembranas",
    title: "Geomembranas",
    subtitle: "Protección y seguridad para suelos y ambientes exigentes.",
    image: "/images/home/geomembranas.png",
    href: "/productos/geomembranas",
  },
  {
    id: "corduras-y-lonas",
    slug: "corduras-y-lonas",
    title: "Corduras y lonas",
    subtitle: "Tejidos de alta resistencia para usos industriales, comerciales y outdoor.",
    image: "/images/home/corduras-y-lonas.png",
    href: "/productos/corduras-y-lonas",
  },
];

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

export const SITE_HEADER = {
  logoText: "BIOMAXX",
  registeredSymbol: "®",
  slogan: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",
  navLinks: [
    { name: "Nosotros", href: formatUrl(BIOMAXX_CORPORATE_URL, "/nosotros") },
    { name: "Biomaxx", href: formatUrl(BIOMAXX_URL, "/") },
    { name: "Pampa grill", href: formatUrl(PAMPA_GRILL_URL, "/") },
    { name: "NaNoDaK", href: formatUrl(NANODAK_URL, "/"), active: true },
    { name: "Godial Trading Company", href: formatUrl(GODIAL_URL, "/") },
    { name: "Contacto", href: formatUrl(BIOMAXX_CORPORATE_URL, "/contacto") },
    { name: "Legales", href: formatUrl(BIOMAXX_CORPORATE_URL, "/legales") },
  ],
};

export const SITE_FOOTER = {
  logoText: "BIOMAXX",
  registeredSymbol: "®",
  tagline: "CRECEMOS JUNTOS, CONSTRUYENDO SOLUCIONES PARA UN MUNDO MEJOR.",
  copyright: "© 2026 BIOMAXX. Todos los derechos reservados.",
  links: [
    { name: "Nosotros", href: formatUrl(BIOMAXX_CORPORATE_URL, "/nosotros") },
    { name: "Biomaxx", href: formatUrl(BIOMAXX_URL, "/") },
    { name: "Pampa grill", href: formatUrl(PAMPA_GRILL_URL, "/") },
    { name: "NaNoDaK", href: formatUrl(NANODAK_URL, "/") },
    { name: "Godial Trading Company", href: formatUrl(GODIAL_URL, "/") },
    { name: "Contacto", href: formatUrl(BIOMAXX_CORPORATE_URL, "/contacto") },
    { name: "Legales", href: formatUrl(BIOMAXX_CORPORATE_URL, "/legales") },
  ],
};
