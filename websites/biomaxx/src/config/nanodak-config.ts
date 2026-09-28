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
    image: "/images/nanodak/home/delantales-de-pvc.png",
    href: "/nanodak/productos/delantales-pvc",
  },
  {
    id: "pisos-alto-transito",
    slug: "pisos-alto-transito",
    title: "Pisos de alto tránsito",
    subtitle: "Soluciones resistentes para entornos exigentes.",
    image: "/images/nanodak/home/pisos-de-alto-transito.png",
    href: "/nanodak/productos/pisos-alto-transito",
  },
  {
    id: "ecocuero",
    slug: "ecocuero",
    title: "Ecocuero",
    subtitle: "Estética, resistencia y confort.",
    image: "/images/nanodak/home/ecocuero.png",
    href: "/nanodak/productos/ecocuero",
  },
  {
    id: "geomembranas",
    slug: "geomembranas",
    title: "Geomembranas",
    subtitle: "Protección y seguridad para suelos y ambientes exigentes.",
    image: "/images/nanodak/home/geomembranas.png",
    href: "/nanodak/productos/geomembranas",
  },
  {
    id: "corduras-y-lonas",
    slug: "corduras-y-lonas",
    title: "Corduras y lonas",
    subtitle: "Tejidos de alta resistencia para usos industriales, comerciales y outdoor.",
    image: "/images/nanodak/home/corduras-y-lonas.png",
    href: "/nanodak/productos/corduras-y-lonas",
  },
];
