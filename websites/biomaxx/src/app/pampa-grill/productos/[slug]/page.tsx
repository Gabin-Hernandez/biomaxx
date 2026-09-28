import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

interface SpecItem {
  label: string;
  value: string;
}

interface ProductData {
  id: string;
  slug: string;
  title: string;
  categoryTag: string;
  subtitle: string;
  description: string;
  homeDescription: string;
  packImage: string;
  individualImage: string;
  individualTitle?: string;
  individualDesc?: string;
  individualDimensions?: string;
  specsTitle?: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
  badge4?: string;
  badge5?: string;
  topBadges?: string[];
  buttonText?: string;
  benefits?: { title: string; desc?: string; icon?: string }[];
  specs: SpecItem[];
  usageItems?: string[];
}

const PAMPA_PRODUCTS_MAP: Record<string, ProductData> = {
  "pellets-quebracho-colorado": {
    id: "pellets-quebracho-colorado",
    slug: "pellets-quebracho-colorado",
    title: "Pellets de quebracho colorado premium blend",
    categoryTag: "PELLETS DE QUEBRACHO",
    subtitle: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento.",
    description: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento. Ideales para parrillas, ahumadores, pits y hornos al aire libre.",
    homeDescription: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento.",
    packImage: "/images/pampa/pellets/medidas.png",
    individualImage: "/images/pampa/pellets/empaque.png",
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
  "carbon-quebracho-premium": {
    id: "carbon-quebracho-premium",
    slug: "carbon-quebracho-premium",
    title: "Carbón de quebracho premium",
    categoryTag: "CARBÓN DE QUEBRACHO",
    subtitle: "Carbón de quebracho blanco argentino, seleccionado manualmente.",
    description: "Carbón de quebracho blanco argentino, seleccionado manualmente para ofrecer el máximo poder calorífico, larga duración y un sabor auténtico en cada cocción.",
    homeDescription: "Carbón de quebracho blanco argentino, máximo poder calorífico y larga duración.",
    packImage: "/images/pampa/carbon/empaque.png",
    individualImage: "/images/pampa/carbon/medidas.png",
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
  "grill-torch": {
    id: "grill-torch",
    slug: "grill-torch",
    title: "Disco de carbón vegetal",
    categoryTag: "GRILL TORCH",
    subtitle: "Disco de carbón vegetal de quebracho blanco con pizca de quebracho colorado.",
    description: "Discos compactos de alta densidad, 100% naturales, con larga duración y calor constante. Ideales para parrillas, asadores, hornos y fuegos al aire libre.",
    homeDescription: "Disco de carbón vegetal de quebracho blanco con pizca de quebracho colorado.",
    packImage: "/images/pampa/grill-torch/medidas.png",
    individualImage: "/images/pampa/grill-torch/empaque.png",
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
  "briquetas-quebracho-blanco": {
    id: "briquetas-quebracho-blanco",
    slug: "briquetas-quebracho-blanco",
    title: "Briquetas premium blanco",
    categoryTag: "BRIQUETAS DE QUEBRACHO",
    subtitle: "Briquetas de quebracho blanco argentino, 100% naturales y seleccionadas.",
    description: "Briquetas de quebracho blanco argentino, 100% naturales y seleccionadas. Máximo calor, larga duración y un sabor ahumado auténtico para todo tipo de cocción.",
    homeDescription: "Briquetas de quebracho blanco, máxima duración y calor constante.",
    packImage: "/images/pampa/briquetas/empaque.png",
    individualImage: "/images/pampa/briquetas/medidas.png",
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
};

export default async function PampaProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PAMPA_PRODUCTS_MAP[slug];

  if (!product) {
    notFound();
  }

  const allProducts = Object.values(PAMPA_PRODUCTS_MAP);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-100/60 border-b border-gray-200/50 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-gray-900">BIOMAXX</Link>
            <span>&gt;</span>
            <Link href="/pampa-grill" className="hover:text-gray-900">Pampa Grill</Link>
            <span>&gt;</span>
            <span className="text-[#13783e] font-semibold">{product.title}</span>
          </div>
        </div>

        {/* HERO PAMPA GRILL (Full width panoramic hero) */}
        <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center bg-[#07361b]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/pampa/hero.png"
              alt="Pampa Grill Hero composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
            <div className="max-w-xl text-left">
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-2">
                FUEGO NATURAL | SABOR AUTÉNTICO
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3">
                Pampa Grill<sup className="text-xl font-bold text-emerald-400 ml-0.5">®</sup>
              </h1>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium mb-8 max-w-lg">
                {product.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Column 1: Main Pack Image */}
              <div className="lg:col-span-4 relative min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/80 shadow-xs flex items-center justify-center p-4">
                <Image
                  src={product.packImage}
                  alt={product.title}
                  fill
                  priority
                  unoptimized
                  className="object-contain p-4"
                />
              </div>

              {/* Column 2: Specs & Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase block mb-1">
                    {product.categoryTag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
                    {product.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-2">
                  {product.topBadges?.map((badge: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-gray-50 rounded-xl border border-gray-200/80 flex flex-col items-center justify-center"
                    >
                      <span className="text-[10px] font-bold text-gray-800 uppercase leading-tight">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all"
                  >
                    <span>{product.buttonText}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>

                {/* Specs Table */}
                <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-200/80">
                  <h3 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-3">
                    ESPECIFICACIONES TÉCNICAS
                  </h3>
                  <div className="space-y-2 text-xs">
                    {product.specs.map((spec: SpecItem, idx: number) => (
                      <div
                        key={idx}
                        className="flex justify-between py-1.5 border-b border-gray-200/60 last:border-0"
                      >
                        <span className="font-bold text-gray-700">{spec.label}</span>
                        <span className="text-gray-600 text-right max-w-[220px]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Individual Diagram */}
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80 text-center">
                  <h4 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-2">
                    {product.individualTitle}
                  </h4>
                  <div className="relative w-full aspect-4/3 bg-white rounded-xl overflow-hidden mb-2 border border-gray-200/50">
                    <Image
                      src={product.individualImage}
                      alt={product.individualTitle || product.title}
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs font-bold text-gray-800">
                    {product.individualDimensions}
                  </p>
                  <span className="text-[10px] text-gray-400">Medidas aproximadas.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2x2 Product Grid */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Otros productos Pampa Grill</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {allProducts.map((p) => {
                const isActive = p.slug === product.slug;
                return (
                  <div
                    key={p.id}
                    className={`relative rounded-3xl p-5 transition-all flex flex-col sm:flex-row gap-5 ${
                      isActive ? "bg-[#eef8f2] border-2 border-[#13783e]" : "bg-[#f8faf9] border border-gray-200/70"
                    }`}
                  >
                    <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto min-h-[140px] rounded-2xl bg-white overflow-hidden shrink-0 flex items-center justify-center p-3 border border-gray-100">
                      <Image src={p.packImage} alt={p.title} fill unoptimized className="object-contain p-2" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-[#13783e] uppercase">{p.categoryTag}</span>
                        <h4 className="text-base font-extrabold text-[#0f294a] mt-1">{p.title}</h4>
                        <p className="text-xs text-slate-600 mt-1">{p.homeDescription}</p>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Link
                          href={`/pampa-grill/productos/${p.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#13783e] hover:underline"
                        >
                          <span>Ver producto</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
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
