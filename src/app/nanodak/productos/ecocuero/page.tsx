import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProductSelector } from "@/components/ProductSelector";
import { Footer } from "@/components/Footer";
import {
  NNDAtomLogo,
  ArrowRightIcon,
  LeafIcon,
  ShieldIcon,
  DropletIcon,
  SunIcon,
  GearIcon,
  GlobeIcon,
  RecycleIcon,
} from "@/components/Icons";

export default function EcocueroPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-100/60 border-b border-gray-200/50 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-2 font-medium">
            <Link href="/nanodak" className="hover:text-gray-900">NaNoDaK</Link>
            <span>&gt;</span>
            <Link href="/nanodak#productos" className="hover:text-gray-900">Productos</Link>
            <span>&gt;</span>
            <span className="text-[#13783e] font-semibold">Ecocuero</span>
          </div>
        </div>

        {/* HERO ECOCUERO (Full width background composition) */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/ecocuero/hero.png"
              alt="Ecocuero NaNoDak background composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-y-0 left-0 w-full md:w-7/12 lg:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-[1]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
            {/* Top Right Watermark matching Figma */}
            <div className="hidden lg:block absolute top-8 right-8 text-right max-w-[210px] z-10">
              <div className="font-extrabold tracking-widest text-[#0f294a] text-xs uppercase leading-relaxed">
                MATERIALES QUE IMPULSAN NUEVAS POSIBILIDADES
              </div>
              <div className="w-10 h-1 bg-[#13783e] rounded-full mt-2.5 ml-auto" />
            </div>

            <div className="max-w-xl lg:max-w-2xl">
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
                SOLUCIONES EN TELA NO TEJIDA
              </div>

              <div className="flex items-center gap-3 mb-2">
                <NNDAtomLogo className="w-10 h-10 text-gray-900" />
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  NaNoDak<sup className="text-xl font-bold text-gray-700 ml-0.5">®</sup>
                </h1>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13783e] mb-3">
                Ecocuero
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                Estética, resistencia y confort para un mundo en movimiento. Materiales que combinan diseño, durabilidad y funcionalidad para aplicaciones industriales de uso intensivo.
              </p>

              <div className="mb-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Solicitar información</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Badges Card Container */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xs border border-white/90 shadow-2xs max-w-lg">
                <div className="flex items-center gap-2">
                  <GearIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Desarrollo a medida</span>
                </div>
                <div className="flex items-center gap-2">
                  <LeafIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Soluciones industriales</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Calidad y confiabilidad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presentación Ecocuero Gallery */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-3">
                <NNDAtomLogo className="w-8 h-8 text-gray-900" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">ECOCUERO</h3>
                  <p className="text-xs font-bold text-gray-400 tracking-wider">ESTÉTICA, RESISTENCIA Y CONFORT</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 max-w-xl">
                El ecocuero NaNoDak es una solución versátil y confiable, pensada para aplicaciones de alto rendimiento. Ofrece una excelente combinación de diseño, funcionalidad y durabilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-6 relative min-h-[300px] rounded-2xl overflow-hidden shadow-xs">
                <Image src="/images/nanodak/ecocuero/principal.png" alt="Ecocuero principal" fill unoptimized className="object-cover object-center" />
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-4/3 bg-gray-100">
                    <Image src="/images/nanodak/ecocuero/detalles-de-textura.png" alt="Detalle de textura" fill unoptimized className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-[11px] font-bold uppercase">DETALLE DE TEXTURA</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-4/3 bg-gray-100">
                    <Image src="/images/nanodak/ecocuero/principal.png" alt="Variedad de colores" fill unoptimized className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-[11px] font-bold uppercase">VARIEDAD DE COLORES</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-4/3 bg-gray-100">
                    <Image src="/images/nanodak/ecocuero/aplicacion-transporte.png" alt="Aplicación transporte" fill unoptimized className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-[11px] font-bold uppercase">TRANSPORTE URBANO</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-4/3 bg-gray-100">
                    <Image src="/images/nanodak/ecocuero/terminaciones-de-calidad.png" alt="Terminaciones de calidad" fill unoptimized className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-[11px] font-bold uppercase">TERMINACIONES DE ALTA CALIDAD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Tech Icons Grid */}
        <section className="py-10 bg-gray-50/70 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">ALTA RESISTENCIA</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <DropletIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">IMPERMEABLE</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <SunIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">RANGO TÉRMICO</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <GearIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">FÁCIL LIMPIEZA</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <LeafIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">FLEXIBLE Y CONFORT</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">LARGA VIDA ÚTIL</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <GlobeIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">TEXTURAS Y COLORES</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <RecycleIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">SUSTENTABLE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones Principales & Technical Specs Table */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 3 Cards */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">APLICACIONES PRINCIPALES</span>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Sectores de uso intensivo</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                    <div className="relative aspect-4/3 bg-gray-100">
                      <Image src="/images/nanodak/ecocuero/aplicacion-urbano.png" alt="Transporte urbano" fill unoptimized className="object-cover" />
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-gray-900 mb-1">Transporte urbano</h4>
                      <p className="text-[11px] text-gray-500">Asientos de colectivos, trenes y transporte público.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                    <div className="relative aspect-4/3 bg-gray-100">
                      <Image src="/images/nanodak/ecocuero/mobiliario-comercial.png" alt="Mobiliario comercial" fill unoptimized className="object-cover" />
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-gray-900 mb-1">Mobiliario comercial</h4>
                      <p className="text-[11px] text-gray-500">Tapizados y equipamiento de alto tránsito.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                    <div className="relative aspect-4/3 bg-gray-100">
                      <Image src="/images/nanodak/ecocuero/aplicaciones-industriales.png" alt="Aplicaciones industriales" fill unoptimized className="object-cover" />
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-gray-900 mb-1">Uso industrial</h4>
                      <p className="text-[11px] text-gray-500">Soluciones duraderas para entornos exigentes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Technical Specification Table */}
              <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-200/80">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">INFORMACIÓN TÉCNICA</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Especificaciones de Ecocuero</h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-bold text-gray-700">Material</span>
                    <span className="text-gray-600 text-right max-w-[200px]">Base textil con recubrimiento vinílico</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-bold text-gray-700">Variedad</span>
                    <span className="text-gray-600 text-right">Amplia gama de texturas y colores</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-bold text-gray-700">Rango térmico</span>
                    <span className="text-gray-600 text-right">-30°C a +70°C</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-bold text-gray-700">Propiedades</span>
                    <span className="text-gray-600 text-right">Impermeable, antihongos, fácil limpieza</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-bold text-gray-700">Durabilidad</span>
                    <span className="text-gray-600 text-right">Alta resistencia al desgaste y uso continuo</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-bold text-gray-700">Sustentabilidad</span>
                    <span className="text-gray-600 text-right">Alternativa responsable para industrias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selector inferior */}
        <ProductSelector activeSlug="ecocuero" />
      </main>

      <Footer />
    </div>
  );
}
