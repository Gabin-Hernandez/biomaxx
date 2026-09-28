import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon, ShieldIcon } from "@/components/Icons";

const NORAM_PRODUCTS = [
  {
    id: "tuberias-y-accesorios",
    image: "/images/noram-sx/tuberiasyaccesorios.png",
    title: "Tuberías y accesorios",
    description: "Tuberías, accesorios y componentes de alta performance para sistemas de alta confiabilidad en ambientes altamente corrosivos.",
  },
  {
    id: "reactores-y-equipos",
    image: "/images/noram-sx/reactores-y-equipos.png",
    title: "Reactores y equipos",
    description: "Equipos y reactores utilizados en plantas de ácido nítrico, procesos químicos y por la industria de fertilizantes.",
  },
  {
    id: "valvulas-industriales",
    image: "/images/noram-sx/valvulas-industriales.png",
    title: "Válvulas industriales",
    description: "Válvulas en acero inoxidable especial para sistemas de conducción y control de procesos.",
  },
  {
    id: "bridas-y-conexiones",
    image: "/images/noram-sx/bridas-y-contexiones.png",
    title: "Bridas y conexiones",
    description: "Bridas y conexiones en acero inoxidable especial para el ensamble de tuberías y equipos.",
  },
];

export default function NoramSxPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/60 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2 font-medium">
            <Link href="/godial-trading-company" className="hover:text-slate-900">Godial Trading Company</Link>
            <span>&gt;</span>
            <span>Marcas</span>
            <span>&gt;</span>
            <span className="text-[#008d36] font-semibold">NORAM SX®</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/noram-sx/hero.png"
              alt="NORAM SX background composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-y-0 left-0 w-full md:w-7/12 lg:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-1 bg-[#008d36] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  GODIAL TRADING COMPANY
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  NORAM <span className="text-red-600">SX</span><sup className="text-xl font-bold text-slate-700 ml-0.5">®</sup>
                </h1>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#008d36] mb-3">
                Acero Inoxidable Especial
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                NORAM SX® es un acero inoxidable de alta performance desarrollado para trabajar en ambientes altamente corrosivos, especialmente en plantas de ácido nítrico y procesos químicos donde la confiabilidad del material es crítica.
              </p>

              <div className="mb-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-[#008d36] hover:bg-[#00772d] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Solicitar información</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-1">PRODUCTOS Y EQUIPOS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Soluciones NORAM SX®</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {NORAM_PRODUCTS.map((prod) => (
                <div key={prod.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-4/3 bg-gray-100">
                      <Image src={prod.image} alt={prod.title} fill unoptimized className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{prod.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{prod.description}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex justify-end">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#008d36] hover:text-[#00772d]"
                    >
                      <span>Ver más</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES LIST */}
        <section className="py-12 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-1">CARACTERÍSTICAS TÉCNICAS</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">NORAM SX® – Acero Inoxidable Especial</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70">
                  <ShieldIcon className="w-5 h-5 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">Máxima resistencia a la corrosión por ácido nítrico.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70">
                  <ShieldIcon className="w-5 h-5 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">Larga vida útil en equipos de proceso y reactores.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70">
                  <ShieldIcon className="w-5 h-5 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">Alta estabilidad mecánica en condiciones industriales severas.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70">
                  <ShieldIcon className="w-5 h-5 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">Material utilizado por la industria química y de fertilizantes.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70">
                  <ShieldIcon className="w-5 h-5 text-[#008d36] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">Solución premium para proyectos de ingeniería de alta exigencia.</span>
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
