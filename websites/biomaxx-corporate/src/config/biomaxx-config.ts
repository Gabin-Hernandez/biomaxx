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

export const SITE_CONFIG = {
  header: {
    logoText: "BIOMAXX",
    registeredSymbol: "®",
    slogan: "SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO",
    navLinks: [
      { name: "Nosotros", href: formatUrl(BIOMAXX_CORPORATE_URL, "/nosotros"), key: "nosotros" },
      { name: "Biomaxx", href: formatUrl(BIOMAXX_URL, "/"), key: "home" },
      { name: "Pampa grill", href: formatUrl(PAMPA_GRILL_URL, "/"), key: "pampagrill" },
      { name: "NaNoDaK", href: formatUrl(NANODAK_URL, "/"), key: "nanodak" },
      { name: "Godial Trading Company", href: formatUrl(GODIAL_URL, "/"), key: "godial" },
      { name: "Contacto", href: formatUrl(BIOMAXX_CORPORATE_URL, "/contacto"), key: "contacto" },
      { name: "Legales", href: formatUrl(BIOMAXX_CORPORATE_URL, "/legales"), key: "legales" },
    ],
  },
  sloganBanner: {
    mainText: "Conectamos productos, tecnología y conocimiento.",
    taglineLine1: "MÁS QUE NEGOCIOS.",
    taglineLine2: "OPORTUNIDADES REALES.",
  },
  footer: {
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
  },
  homeSolutions: [
    {
      id: "metalmecanica",
      tag: "SOLUCIONES INDUSTRIALES A MEDIDA",
      title: "Metalmecánica",
      description: "Desarrollo y fabricación de piezas, componentes y soluciones para la industria.",
      image: "/images/home/metalmecanica.png",
      badges: [
        { label: "Cortes a medida", icon: "scissors" },
        { label: "Rebabado", icon: "tool" },
        { label: "Mecanizados", icon: "cog" },
        { label: "Pulidos", icon: "sparkles" },
        { label: "Soldaduras", icon: "fire" },
        { label: "Trabajos especiales", icon: "wrench" },
        { label: "Piezas y componentes", icon: "cube" },
        { label: "Desarrollo a medida", icon: "gear" },
        { label: "Control de calidad", icon: "shield" },
      ],
      linkHref: "/contacto",
    },
    {
      id: "import-export",
      tag: "SOLUCIONES GLOBALES PARA TU NEGOCIO",
      title: "Importación / Exportación",
      description: "Gestión integral de productos, materias primas e insumos para mercados internacionales.",
      image: "/images/home/import-export.png",
      badges: [
        { label: "Red global", icon: "globe" },
        { label: "Logística integral", icon: "truck" },
        { label: "Gestión aduanera", icon: "document" },
        { label: "Negociación internacional", icon: "handshake" },
        { label: "Provisión a medida", icon: "box" },
        { label: "Productos sustentables", icon: "leaf" },
        { label: "Seguimiento y control", icon: "chart" },
        { label: "Seguridad en la cadena", icon: "shield" },
      ],
      linkHref: "/contacto",
    },
  ],
  nosotrosValues: [
    {
      title: "Misión",
      image: "/images/nosotros/mision.png",
      description:
        "Impulsar el desarrollo a través de soluciones innovadoras, comercio internacional y alianzas estratégicas, generando valor sostenible para un mundo en movimiento.",
    },
    {
      title: "Visión",
      image: "/images/nosotros/vision.png",
      description:
        "Ser un referente global en soluciones industriales sostenibles, reconocidos por nuestra integridad, innovación y por el impacto positivo en las comunidades y el medio ambiente.",
    },
    {
      title: "Valores",
      image: "/images/nosotros/valores.png",
      items: [
        "Integridad",
        "Innovación",
        "Sostenibilidad",
        "Colaboración",
        "Orientación a resultados",
      ],
    },
  ],
  clientLogos: [
    { name: "Chedraui", image: "/images/nosotros/clientes/1.png" },
    { name: "Smart & Final", image: "/images/nosotros/clientes/2.png" },
    { name: "Metropol", image: "/images/nosotros/clientes/3.png" },
    { name: "Arcor", image: "/images/nosotros/clientes/4.png" },
    { name: "FM", image: "/images/nosotros/clientes/5.png" },
    { name: "Euroswiss", image: "/images/nosotros/clientes/6.png" },
    { name: "Prysmian", image: "/images/nosotros/clientes/7.png" },
  ],
  legalesCards: [
    {
      title: "Términos y condiciones",
      description:
        "El uso de este sitio web y de nuestros servicios implica la aceptación de los presentes términos y condiciones. Estos términos regulan el acceso, navegación y uso de la información, productos y servicios de BIOMAXX, estableciendo las responsabilidades de los usuarios y de la empresa.",
      linkText: "Leer términos y condiciones",
      icon: "document",
    },
    {
      title: "Política de privacidad",
      description:
        "En BIOMAXX cuidamos la información personal de nuestros usuarios, clientes y colaboradores. Esta política describe cómo recopilamos, utilizamos, protegemos y tratamos sus datos personales, de acuerdo con la normativa vigente en materia de protección de datos.",
      linkText: "Leer política de privacidad",
      icon: "lock",
    },
    {
      title: "Política de cookies",
      description:
        "Este sitio utiliza cookies para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenidos. Podés configurar tus preferencias de cookies en cualquier momento. Al continuar navegando, aceptás el uso de cookies de acuerdo con nuestra política.",
      linkText: "Leer política de cookies",
      icon: "cookie",
    },
    {
      title: "Propiedad intelectual",
      description:
        "Todos los contenidos de este sitio web, incluidos textos, imágenes, logotipos, diseños, marcas y demás materiales, son propiedad de BIOMAXX o de sus respectivos titulares. Queda prohibida su reproducción, distribución o uso no autorizado sin el consentimiento previo y por escrito.",
      linkText: "Más información",
      icon: "lightbulb",
    },
    {
      title: "Datos societarios y contacto legal",
      isCustomContent: true,
      company: "BIOMAXX S.A.",
      cuit: "CUIT: 30-12345678-9",
      address: "Domicilio legal: Av. del Progreso 1234, Piso 7 C1000AAU, Buenos Aires, Argentina.",
      email: "legales@biomaxx.com",
      phone: "+54 11 5234-5678",
      icon: "building",
    },
    {
      title: "Última actualización",
      description:
        "Esta información fue actualizada por última vez el 15 de abril de 2024. Nos reservamos el derecho de modificar estos documentos en cualquier momento. Te recomendamos revisarlos periódicamente.",
      icon: "calendar",
    },
  ],
  contactoData: {
    email: "info@biomaxx.com",
    phone: "+54 9 11 1234 5678",
    officeLine1: "Buenos Aires, Argentina",
    officeLine2: "Operaciones internacionales",
    scheduleLine1: "Lunes a Viernes",
    scheduleLine2: "9:00 a 18:00 (GMT-3)",
  },
};
