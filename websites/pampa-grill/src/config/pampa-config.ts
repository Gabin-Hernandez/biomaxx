export interface ProductBenefit {
  title: string;
  icon: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  title: string;
  categoryTag: string;
  highlightBadge?: string;
  subtitle: string;
  description: string;
  homeDescription: string;
  packImage: string;
  individualImage: string;
  individualTitle: string;
  individualDimensions: string;
  buttonText: string;
  specs: { label: string; value: string }[];
  benefits: ProductBenefit[];
  topBadges: string[];
}

export const PAMPA_PRODUCTS: ProductDetail[] = [
  {
    id: "pellets-quebracho-colorado",
    slug: "pellets-quebracho-colorado",
    title: "Pellets de quebracho colorado premium blend",
    categoryTag: "PELLETS DE QUEBRACHO",
    highlightBadge: "PREMIUM BLEND",
    subtitle: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento.",
    description:
      "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento. Ideales para parrillas, ahumadores, pits y hornos al aire libre.",
    homeDescription:
      "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento.",
    packImage: "/images/pellets/medidas.png",
    individualImage: "/images/pellets/empaque.png",
    individualTitle: "PELLET INDIVIDUAL",
    individualDimensions: "1,5 cm x 0,5 cm",
    buttonText: "Dónde comprar",
    topBadges: ["100% NATURAL", "SABOR AHUMADO", "LARGA DURACIÓN", "ALTO RENDIMIENTO"],
    specs: [
      { label: "Producto", value: "Pellets de quebracho colorado" },
      { label: "Materia prima", value: "Quebracho colorado argentino" },
      { label: "Composición", value: "100% natural, sin aditivos" },
      { label: "Formato", value: "Pellets cilíndricos compactos" },
      { label: "Tamaño", value: "1,5 cm largo x 0,5 cm diámetro" },
      { label: "Poder calorífico", value: "Alto poder calorífico" },
      { label: "Encendido", value: "Rápido y fácil (5 a 10 minutos aprox.)" },
      { label: "Duración", value: "Hasta 3 horas" },
      { label: "Humo", value: "Bajo humo, combustión limpia" },
      { label: "Origen", value: "Industria argentina / Madera dura nativa" },
    ],
    benefits: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "SABOR AHUMADO", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "ALTO RENDIMIENTO", icon: "chart" },
    ],
  },
  {
    id: "carbon-quebracho-premium",
    slug: "carbon-quebracho-premium",
    title: "Carbón de quebracho premium",
    categoryTag: "CARBÓN DE QUEBRACHO",
    highlightBadge: "QUEBRACHO CHARCOAL",
    subtitle: "Carbón de quebracho blanco argentino, seleccionado manualmente.",
    description:
      "Carbón de quebracho blanco argentino, seleccionado manualmente para ofrecer el máximo poder calorífico, larga duración y un sabor auténtico en cada cocción.",
    homeDescription:
      "Carbón de quebracho blanco argentino, máximo poder calorífico y larga duración.",
    packImage: "/images/carbon/empaque.png",
    individualImage: "/images/carbon/medidas.png",
    individualTitle: "CARBÓN INDIVIDUAL",
    individualDimensions: "15 cm x 10 cm",
    buttonText: "Dónde comprar",
    topBadges: ["100% NATURAL", "ALTO PODER CALORÍFICO", "LARGA DURACIÓN"],
    specs: [
      { label: "Origen", value: "Argentina" },
      { label: "Materia prima", value: "Quebracho blanco seleccionado" },
      { label: "Tipo", value: "Carbón en trozos (lump)" },
      { label: "Poder calorífico", value: "Alto poder calorífico" },
      { label: "Encendido", value: "Rápido y fácil (15 minutos aprox.)" },
      { label: "Duración", value: "Hasta 3.5 horas" },
      { label: "Humo", value: "Bajo humo" },
      { label: "Ceniza", value: "Baja ceniza" },
      { label: "Presentación", value: "Bolsa de 4 kg (8.8 lb)" },
    ],
    benefits: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "ALTO PODER CALORÍFICO", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
    ],
  },
  {
    id: "grill-torch",
    slug: "grill-torch",
    title: "Disco de carbón vegetal",
    categoryTag: "GRILL TORCH",
    highlightBadge: "WHITE QUEBRACHO",
    subtitle: "Disco de carbón vegetal de quebracho blanco con pizca de quebracho colorado.",
    description:
      "Discos compactos de alta densidad, 100% naturales, con larga duración y calor constante. Ideales para parrillas, asadores, hornos y fuegos al aire libre.",
    homeDescription:
      "Disco de carbón vegetal de quebracho blanco con pizca de quebracho colorado.",
    packImage: "/images/grill-torch/medidas.png",
    individualImage: "/images/grill-torch/empaque.png",
    individualTitle: "DISCO INDIVIDUAL",
    individualDimensions: "12 cm x 4 cm",
    buttonText: "Dónde comprar",
    topBadges: ["100% NATURAL", "LARGA DURACIÓN", "BAJO HUMO"],
    specs: [
      { label: "Producto", value: "Grill Torch – Disco de carbón vegetal" },
      { label: "Materia prima", value: "Quebracho blanco con pizca de quebracho colorado" },
      { label: "Forma", value: "Cilíndrica" },
      { label: "Dimensiones", value: "12 cm de diámetro x 4 cm de altura" },
      { label: "Peso por unidad", value: "230 gramos" },
      { label: "Material", value: "Carbón vegetal compactado con aglutinante vegetal" },
      { label: "Densidad", value: "510 kg/m³" },
      { label: "Origen", value: "Industria Argentina" },
    ],
    benefits: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "BAJO HUMO", icon: "smoke" },
    ],
  },
  {
    id: "briquetas-quebracho-blanco",
    slug: "briquetas-quebracho-blanco",
    title: "Briquetas premium blanco",
    categoryTag: "BRIQUETAS DE QUEBRACHO",
    highlightBadge: "QUEBRACHO BLANCO",
    subtitle: "Briquetas de quebracho blanco argentino, 100% naturales y seleccionadas.",
    description:
      "Briquetas de quebracho blanco argentino, 100% naturales y seleccionadas. Máximo calor, larga duración y un sabor ahumado auténtico para todo tipo de cocción.",
    homeDescription:
      "Briquetas de quebracho blanco, máxima duración y calor constante.",
    packImage: "/images/briquetas/empaque.png",
    individualImage: "/images/briquetas/medidas.png",
    individualTitle: "BRIQUETA INDIVIDUAL",
    individualDimensions: "57 mm x 30 mm x 12 mm",
    buttonText: "Dónde comprar",
    topBadges: ["ENCENDIDO RÁPIDO", "LARGA DURACIÓN", "BAJO HUMO"],
    specs: [
      { label: "Origen", value: "Argentina" },
      { label: "Materia prima", value: "Quebracho blanco argentino" },
      { label: "Tipo", value: "Briquetas cilíndricas" },
      { label: "Poder calorífico", value: "Alto poder calorífico" },
      { label: "Encendido", value: "Rápido y fácil (15 minutos aprox.)" },
      { label: "Duración", value: "Hasta 3.5 horas" },
      { label: "Humo", value: "Bajo humo" },
      { label: "Ceniza", value: "Baja ceniza" },
      { label: "Presentación", value: "Bolsa de 4 kg (8.8 lb)" },
    ],
    benefits: [
      { title: "ENCENDIDO RÁPIDO", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "BAJO HUMO", icon: "smoke" },
    ],
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
    { name: "Pampa grill", href: formatUrl(PAMPA_GRILL_URL, "/"), active: true },
    { name: "NaNoDaK", href: formatUrl(NANODAK_URL, "/") },
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
