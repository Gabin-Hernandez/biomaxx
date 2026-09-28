import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PampaHero } from "@/components/PampaHero";
import {
  ArrowRightIcon,
  LeafIcon,
  FlameIcon,
  ClockIcon,
  SmokeIcon,
  TreeIcon,
  ChartIcon,
} from "@/components/Icons";

interface SpecItem {
  label: string;
  value: string;
}

interface BadgeItem {
  title: string;
  icon: "leaf" | "flame" | "clock" | "smoke" | "tree" | "chart";
  style?: "red" | "green" | "outline";
}

interface ProductData {
  id: string;
  slug: string;
  title: string;
  categoryTag: string;
  description: string;
  homeDescription: string;
  packImage: string;
  individualImage: string;
  individualTitle: string;
  individualDimensions?: string;
  topBadges: BadgeItem[];
  specs: SpecItem[];
  benefits: BadgeItem[];
}

function renderBadgeIcon(icon: string, className: string = "w-5 h-5") {
  switch (icon) {
    case "leaf":
      return <LeafIcon className={className} />;
    case "flame":
      return <FlameIcon className={className} />;
    case "clock":
      return <ClockIcon className={className} />;
    case "smoke":
      return <SmokeIcon className={className} />;
    case "tree":
      return <TreeIcon className={className} />;
    case "chart":
      return <ChartIcon className={className} />;
    default:
      return <LeafIcon className={className} />;
  }
}

const PAMPA_PRODUCTS_MAP: Record<string, ProductData> = {
  "pellets-quebracho-colorado": {
    id: "pellets-quebracho-colorado",
    slug: "pellets-quebracho-colorado",
    title: "Pellets de quebracho colorado premium blend",
    categoryTag: "PRODUCTO DESTACADO",
    description: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento. Ideales para parrillas, ahumadores, pits y hornos al aire libre.",
    homeDescription: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento.",
    packImage: "/images/pampa/pellets/medidas.webp",
    individualImage: "/images/pampa/pellets/empaque.webp",
    individualTitle: "PELLET INDIVIDUAL",
    individualDimensions: "1,5 cm x 0,5 cm",
    topBadges: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "SABOR AHUMADO AUTÉNTICO", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "ALTO RENDIMIENTO", icon: "chart" },
    ],
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
      { title: "SABOR AHUMADO AUTÉNTICO", icon: "flame", style: "red" },
      { title: "LARGA DURACIÓN", icon: "clock", style: "outline" },
      { title: "BAJO HUMO COMBUSTIÓN LIMPIA", icon: "smoke", style: "outline" },
      { title: "100% NATURAL", icon: "leaf", style: "green" },
      { title: "MADERA DURA ARGENTINA", icon: "tree", style: "outline" },
      { title: "ALTO RENDIMIENTO", icon: "chart", style: "outline" },
    ],
  },
  "carbon-quebracho-premium": {
    id: "carbon-quebracho-premium",
    slug: "carbon-quebracho-premium",
    title: "Carbón de quebracho premium",
    categoryTag: "PRODUCTO DESTACADO",
    description: "Carbón de quebracho blanco argentino, seleccionado manualmente para ofrecer el máximo poder calorífico, larga duración y un sabor auténtico en cada cocción.",
    homeDescription: "Carbón de quebracho blanco argentino, máximo poder calorífico y larga duración.",
    packImage: "/images/pampa/carbon/empaque.webp",
    individualImage: "/images/pampa/carbon/medidas.webp",
    individualTitle: "CARBÓN INDIVIDUAL",
    individualDimensions: "15 cm x 10 cm",
    topBadges: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "ALTO PODER CALORÍFICO", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "ALTO RENDIMIENTO", icon: "chart" },
    ],
    specs: [
      { label: "Producto", value: "Carbón de quebracho premium" },
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
      { title: "SABOR AHUMADO AUTÉNTICO", icon: "flame", style: "red" },
      { title: "LARGA DURACIÓN", icon: "clock", style: "outline" },
      { title: "BAJO HUMO COMBUSTIÓN LIMPIA", icon: "smoke", style: "outline" },
      { title: "100% NATURAL", icon: "leaf", style: "green" },
      { title: "MADERA DURA ARGENTINA", icon: "tree", style: "outline" },
      { title: "ALTO RENDIMIENTO", icon: "chart", style: "outline" },
    ],
  },
  "grill-torch": {
    id: "grill-torch",
    slug: "grill-torch",
    title: "Disco de carbón vegetal",
    categoryTag: "PRODUCTO DESTACADO",
    description: "Discos compactos de alta densidad, 100% naturales, con larga duración y calor constante. Ideales para parrillas, asadores, hornos y fuegos al aire libre.",
    homeDescription: "Disco de carbón vegetal de quebracho blanco con pizca de quebracho colorado.",
    packImage: "/images/pampa/grill-torch/medidas.webp",
    individualImage: "/images/pampa/grill-torch/empaque.webp",
    individualTitle: "DISCO INDIVIDUAL",
    individualDimensions: "12 cm x 4 cm",
    topBadges: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "ENCENDIDO RÁPIDO", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "ALTO RENDIMIENTO", icon: "chart" },
    ],
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
      { title: "SABOR AHUMADO AUTÉNTICO", icon: "flame", style: "red" },
      { title: "LARGA DURACIÓN", icon: "clock", style: "outline" },
      { title: "BAJO HUMO COMBUSTIÓN LIMPIA", icon: "smoke", style: "outline" },
      { title: "100% NATURAL", icon: "leaf", style: "green" },
      { title: "MADERA DURA ARGENTINA", icon: "tree", style: "outline" },
      { title: "ALTO RENDIMIENTO", icon: "chart", style: "outline" },
    ],
  },
  "briquetas-quebracho-blanco": {
    id: "briquetas-quebracho-blanco",
    slug: "briquetas-quebracho-blanco",
    title: "Briquetas premium blanco",
    categoryTag: "PRODUCTO DESTACADO",
    description: "Briquetas de quebracho blanco argentino, 100% naturales y seleccionadas. Máximo calor, larga duración y un sabor ahumado auténtico para todo tipo de cocción.",
    homeDescription: "Briquetas de quebracho blanco, máxima duración y calor constante.",
    packImage: "/images/pampa/briquetas/empaque.webp",
    individualImage: "/images/pampa/briquetas/medidas.webp",
    individualTitle: "BRIQUETA INDIVIDUAL",
    individualDimensions: "57 mm x 30 mm x 12 mm",
    topBadges: [
      { title: "100% NATURAL", icon: "leaf" },
      { title: "MÁXIMO CALOR", icon: "flame" },
      { title: "LARGA DURACIÓN", icon: "clock" },
      { title: "ALTO RENDIMIENTO", icon: "chart" },
    ],
    specs: [
      { label: "Producto", value: "Briquetas premium de quebracho" },
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
      { title: "SABOR AHUMADO AUTÉNTICO", icon: "flame", style: "red" },
      { title: "LARGA DURACIÓN", icon: "clock", style: "outline" },
      { title: "BAJO HUMO COMBUSTIÓN LIMPIA", icon: "smoke", style: "outline" },
      { title: "100% NATURAL", icon: "leaf", style: "green" },
      { title: "MADERA DURA ARGENTINA", icon: "tree", style: "outline" },
      { title: "ALTO RENDIMIENTO", icon: "chart", style: "outline" },
    ],
  },
};

export default async function PampaProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PAMPA_PRODUCTS_MAP[slug];

  if (!product) {
    notFound();
  }

  const allProducts = Object.values(PAMPA_PRODUCTS_MAP);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-[#f8faf9] selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1 pb-16">
        {/* Pampa Grill Hero Header Section (Matches Figma layout) */}
        <PampaHero />
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-gray-900">BIOMAXX</Link>
            <span>&gt;</span>
            <Link href="/pampa-grill" className="hover:text-gray-900">Pampa Grill</Link>
            <span>&gt;</span>
            <span className="text-[#13783e] font-semibold">{product.title}</span>
          </div>
        </div>

        {/* Main Product Feature Section (Exact Figma Layout Match) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10">
          {/* Main 12-Column Grid: 5 cols Left Image (Full Height) | 7 cols Right Content (Top Info & Bottom Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column (5 cols): Pack Image spanning FULL HEIGHT with rounded left corners only */}
            <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-[640px] h-full rounded-l-2xl sm:rounded-l-3xl rounded-r-none overflow-hidden bg-stone-100 flex items-center justify-center">
              <Image
                src={product.packImage}
                alt={product.title}
                fill
                priority
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-white hidden lg:block pointer-events-none" />
            </div>

            {/* Right Container (7 cols): Top Row (Details + Individual Item) & Bottom Row (Specs + Benefits) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-8">
              
              {/* Upper Section: Product Details & Right Individual Item Box */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                
                {/* Product Details, 4 Circular Badges & Button */}
                <div className="md:col-span-7 flex flex-col justify-between py-1 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#13783e] tracking-widest uppercase block mb-1">
                      {product.categoryTag}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight leading-snug mb-3">
                      {product.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* 4 Circular Line-Art Icon Badges */}
                  <div className="grid grid-cols-4 gap-1 py-3 border-y border-gray-100">
                    {product.topBadges.map((badge, idx) => {
                      const isGreen = badge.icon === "leaf";
                      return (
                        <div key={idx} className="flex flex-col items-center text-center">
                          <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center mb-2 shadow-2xs ${
                            isGreen ? "border-[#13783e] text-[#13783e] bg-emerald-50/20" : "border-slate-800 text-slate-800 bg-white"
                          }`}>
                            {renderBadgeIcon(badge.icon, "w-5 h-5")}
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0a192f] uppercase leading-tight tracking-tight">
                            {badge.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Button */}
                  <div>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all group"
                    >
                      <span>Dónde comprar</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Individual Item Box */}
                <div className="md:col-span-5 flex flex-col justify-stretch">
                  <div className="bg-[#f4f7f5] p-5 rounded-2xl border border-emerald-100/70 text-center flex flex-col items-center justify-center h-full min-h-[260px]">
                    <h3 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-3">
                      {product.individualTitle}
                    </h3>
                    <div className="relative w-full aspect-4/3 max-h-[170px] flex items-center justify-center">
                      <Image
                        src={product.individualImage}
                        alt={product.individualTitle}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {product.individualDimensions && (
                      <p className="text-xs font-bold text-gray-800 mt-2">
                        {product.individualDimensions}
                      </p>
                    )}
                    <span className="text-[10px] text-gray-400 mt-1">Medidas aproximadas.</span>
                  </div>
                </div>
              </div>

              {/* Lower Section: Specs & Benefits Cards sitting directly underneath */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                
                {/* Specs Box (Fits under product details) */}
                <div className="md:col-span-7 bg-[#f4f7f5] p-6 sm:p-7 rounded-2xl border border-emerald-100/70">
                  <h3 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-4">
                    ESPECIFICACIONES TÉCNICAS
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    {product.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-1.5 border-b border-gray-200/60 last:border-0"
                      >
                        <span className="font-medium text-gray-600">{spec.label}</span>
                        <span className="font-semibold text-gray-900 text-right max-w-[280px]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Box (Fits under individual item box) */}
                <div className="md:col-span-5 bg-[#f4f7f5] p-6 sm:p-7 rounded-2xl border border-emerald-100/70 flex flex-col justify-between">
                  <h3 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-6">
                    BENEFICIOS
                  </h3>
                  <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-center my-auto">
                    {product.benefits.map((b, idx) => {
                      let circleStyle = "bg-white border-2 border-slate-800 text-slate-800";
                      if (b.style === "red") {
                        circleStyle = "bg-red-600 text-white border-2 border-red-600";
                      } else if (b.style === "green") {
                        circleStyle = "bg-[#13783e] text-white border-2 border-[#13783e]";
                      }

                      return (
                        <div key={idx} className="flex flex-col items-center text-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2.5 shadow-xs ${circleStyle}`}>
                            {renderBadgeIcon(b.icon, "w-6 h-6")}
                          </div>
                          <span className="text-[10px] sm:text-xs font-extrabold text-[#0a192f] uppercase leading-tight tracking-tight px-1">
                            {b.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Products Section */}
        <section className="mt-16 bg-white py-12 border-t border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase">
                NUESTRA LÍNEA PAMPA GRILL
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a192f] mt-1">
                Descubrí todos nuestros productos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {allProducts.map((p) => {
                const isActive = p.slug === product.slug;
                return (
                  <div
                    key={p.id}
                    className={`rounded-2xl p-5 sm:p-6 transition-all flex flex-col sm:flex-row gap-5 items-stretch ${
                      isActive
                        ? "bg-[#eef8f2] border-2 border-[#13783e] shadow-xs"
                        : "bg-[#f8faf9] border border-gray-200/80 hover:border-emerald-200 hover:shadow-xs"
                    }`}
                  >
                    <div className="relative w-full sm:w-1/2 aspect-4/3 sm:aspect-auto min-h-[160px] rounded-xl bg-white overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center">
                      <Image
                        src={p.packImage}
                        alt={p.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-[#13783e] uppercase block mb-1">
                          PAMPAGRILL®
                        </span>
                        <h3 className="text-base font-extrabold text-[#0a192f] leading-snug mb-1.5">
                          {p.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {p.homeDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 flex justify-end">
                        <Link
                          href={`/pampa-grill/productos/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13783e] hover:text-[#0d5c2e] transition-colors group"
                        >
                          <span>Ver producto</span>
                          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
