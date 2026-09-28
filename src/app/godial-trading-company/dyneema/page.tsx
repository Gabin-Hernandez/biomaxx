import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/Icons";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-6 h-6 text-[#0047ba]"} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.8L18.2 12 12 18.2 5.8 12 12 5.8z" />
    </svg>
  );
}

const DYNEEMA_PRODUCTS = [
  {
    id: "chaleco-balistico",
    name: "Chaleco balístico",
    description: "Chalecos antibalas fabricados con Dyneema®, que brindan máxima protección con un peso reducido.",
    image: "/images/dyneema/chaleco-balistico.webp",
  },
  {
    id: "tela-dyneema",
    name: "Tela Dyneema",
    description: "Rollos de tela de Dyneema® para equipos de protección personal y soluciones técnicas.",
    image: "/images/dyneema/rollo-tejido-dynema.webp",
  },
  {
    id: "casco-balistico",
    name: "Casco balístico",
    description: "Protección balística con materiales livianos para aplicaciones de seguridad.",
    image: "/images/dyneema/casco-balistico.webp",
  },
  {
    id: "guantes-proteccion",
    name: "Guantes de protección",
    description: "Guantes con fibras Dyneema® para protección, flexibilidad y comodidad.",
    image: "/images/dyneema/guantes-anticorte.webp",
  },
  {
    id: "cuerdas-dyneema",
    name: "Cuerdas Dyneema",
    description: "Cuerdas para aplicaciones náuticas e industriales.",
    image: "/images/dyneema/cuerdas-dynema.webp",
  },
  {
    id: "placa-antitrauma",
    name: "Placa antitrauma",
    description: "Placas para complementar sistemas de protección balística.",
    image: "/images/dyneema/placa-antitrauma.webp",
  },
];

export default function DyneemaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-grow space-y-4 pb-12">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/60 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2 font-medium">
            <Link href="/godial-trading-company" className="hover:text-slate-900">Godial Trading Company</Link>
            <span>&gt;</span>
            <span>Marcas</span>
            <span>&gt;</span>
            <span className="text-[#0047ba] font-semibold">Dyneema®</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative w-full min-h-[460px] lg:min-h-[520px] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/dyneema/hero.webp"
              alt="Dyneema® Tecnología Balística Hero Banner"
              fill
              priority
              className="object-cover object-left sm:object-[0%_center] translate-x-6 sm:translate-x-16 lg:translate-x-28"
            />
            <div className="absolute inset-y-0 left-0 w-full md:w-9/12 lg:w-[70%] bg-gradient-to-r from-white via-white via-white/95 to-transparent pointer-events-none z-[1]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
            <div className="max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-4 w-1 bg-[#008d36] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  GODIAL TRADING COMPANY
                </span>
              </div>

              <div className="flex items-center gap-3">
                <DiamondIcon className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 text-[#0047ba]" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0047ba] flex items-center gap-1">
                    Dyneema<span className="text-2xl lg:text-3xl font-bold align-super text-[#0047ba]">®</span>
                  </h1>
                  <p className="text-lg lg:text-xl font-bold text-slate-900 leading-none">
                    Tecnología Balística
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm lg:text-base font-normal leading-relaxed pt-1">
                Dyneema® es una fibra de polietileno de ultra alto peso molecular (UHMWPE), reconocida mundialmente por su extraordinaria relación entre resistencia y peso. Es uno de los materiales más avanzados utilizados en chalecos antibalas y soluciones de protección personal.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">Protección balística de alto rendimiento.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">Hasta un 40% más liviano que alternativas tradicionales.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">Mayor flexibilidad y confort para el usuario.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">Excelente resistencia a la humedad y a la corrosión.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">Aplicaciones en fuerzas armadas, seguridad y protección civil.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">LÍNEA DE PRODUCTOS</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Soluciones Dyneema®</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DYNEEMA_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 shadow-xs hover:border-emerald-300 transition-all group"
                >
                  <div className="relative w-full sm:w-5/12 h-40 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-7/12 flex flex-col justify-between h-full py-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0047ba] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#008d36] hover:text-[#00772d] transition-colors"
                      >
                        <span>Solicitar cotización</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO CTA SECTION */}
        <section className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#e9f5f6] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#cce7eb]/70 shadow-xs">
              <div className="w-full md:w-5/12 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0047ba] block">
                  VIDEO
                </span>
                
                <div className="flex items-center gap-3">
                  <DiamondIcon className="w-9 h-9 text-[#0047ba] shrink-0" />
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0047ba]">
                    Dyneema<sup className="text-lg font-bold text-[#0047ba] ml-0.5">®</sup>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Tecnología que protege
                </h3>
              </div>

              <div className="w-full md:w-7/12">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-300/60 bg-slate-900 group">
                  <Image
                    src="/images/dyneema/rollo-tejido-dynema.webp"
                    alt="Dyneema® Video Preview"
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Center Watermark & Play Icon */}
                  <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-3 p-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white shadow-sm">
                      <DiamondIcon className="w-6 h-6 text-[#0047ba]" />
                      <span className="text-xl font-black text-white tracking-tight">
                        Dyneema<sup className="text-xs ml-0.5">®</sup>
                      </span>
                    </div>

                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/70 hover:bg-black/80 text-white flex items-center justify-center shadow-xl border border-white/30 transition-transform transform group-hover:scale-110 cursor-pointer">
                      <svg className="w-7 h-7 ml-1 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Video Control Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 flex items-center gap-3 text-white text-xs font-mono">
                    <button type="button" aria-label="Play" className="hover:text-emerald-400 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    
                    <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden relative">
                      <div className="w-[12%] h-full bg-[#0047ba] rounded-full" />
                    </div>

                    <span className="text-[11px] text-white/90 font-sans font-medium">0:08 / 4:46</span>

                    <div className="flex items-center gap-2.5 text-white/80 shrink-0">
                      <svg className="w-4 h-4 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
                        <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
