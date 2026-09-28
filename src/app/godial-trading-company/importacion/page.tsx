import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SloganBanner } from "@/components/SloganBanner";
import { ArrowRightIcon, GlobeIcon, ShipIcon, WarehouseIcon } from "@/components/Icons";

export default function ImportacionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-grow space-y-4 pb-12">
        {/* HERO SECTION (Preserved intact) */}
        <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 flex items-center min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[460px] max-h-[540px]">
          <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
            <Image
              src="/images/godial-importaciones-hero.webp"
              alt="Godial Trading Importación Hero Banner"
              fill
              priority
              className="object-cover object-right sm:object-center w-full h-full"
            />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-14">
            <div className="max-w-xl text-left space-y-3">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block">
                COMERCIO INTERNACIONAL
              </span>

              {/* Godial Trading Company Brand Title / Sub-brand */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002f6c] tracking-tight leading-none">
                  GODIAL <br className="hidden sm:inline" />
                  <span className="text-[#e30613]">TRADING COMPANY</span>
                </h1>
                <span className="text-base sm:text-lg font-extrabold text-[#008d36] block">
                  Zona Franca Uruguay
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-md pt-1">
                Conectamos tu empresa con proveedores y oportunidades en el mundo.
              </p>

              <div className="pt-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-[#008d36] hover:bg-[#00772d] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all group"
                >
                  <span>Consultar</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUCIONES PARA TU NEGOCIO SECTION (Exact Reference Match) */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Tag, Title, Subtitle */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#008d36] tracking-[0.2em] uppercase block">
                SOLUCIONES PARA TU NEGOCIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2a4a] tracking-tight">
                Acompañamos tus <span className="text-[#008d36]">operaciones internacionales</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl pt-1">
                Buscamos proveedores y coordinamos soluciones para la importación y exportación de productos, materias primas e insumos, según las necesidades de cada empresa.
              </p>
            </div>

            {/* 3 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              
              {/* Card 1: Importación */}
              <div className="bg-[#f8faf9] rounded-2xl p-6 border border-slate-100 flex items-start gap-4 shadow-2xs hover:border-emerald-200 transition-all">
                <div className="w-14 h-14 rounded-full border border-[#008d36] text-[#008d36] flex items-center justify-center shrink-0 bg-white shadow-2xs">
                  <GlobeIcon className="w-8 h-8 text-[#008d36]" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-base font-bold text-[#0c2a4a]">
                    Importación
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Búsqueda de proveedores y abastecimiento de productos para tu empresa.
                  </p>
                </div>
              </div>

              {/* Card 2: Exportación */}
              <div className="bg-[#f8faf9] rounded-2xl p-6 border border-slate-100 flex items-start gap-4 shadow-2xs hover:border-emerald-200 transition-all">
                <div className="w-14 h-14 rounded-full border border-[#008d36] text-[#008d36] flex items-center justify-center shrink-0 bg-white shadow-2xs">
                  <ShipIcon className="w-8 h-8 text-[#008d36]" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-base font-bold text-[#0c2a4a]">
                    Exportación
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Acompañamiento comercial y coordinación para llegar a nuevos mercados.
                  </p>
                </div>
              </div>

              {/* Card 3: Zona Franca Uruguay */}
              <div className="bg-[#f8faf9] rounded-2xl p-6 border border-slate-100 flex items-start gap-4 shadow-2xs hover:border-emerald-200 transition-all">
                <div className="w-14 h-14 rounded-full border border-[#008d36] text-[#008d36] flex items-center justify-center shrink-0 bg-white shadow-2xs">
                  <WarehouseIcon className="w-8 h-8 text-[#008d36]" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-base font-bold text-[#0c2a4a]">
                    Zona Franca Uruguay
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Evaluación de alternativas logísticas para operaciones a través de zona franca en Uruguay.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SLOGAN BANNER (Present in reference) */}
        <SloganBanner />
      </main>

      <Footer />
    </div>
  );
}
