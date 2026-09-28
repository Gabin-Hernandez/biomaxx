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
} from "@/components/Icons";

export default function CordurasYLonasPage() {
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
            <span className="text-[#053F85] font-semibold">Corduras y lonas</span>
          </div>
        </div>

        {/* HERO CORDURAS (Full width background composition) */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/corduras/hero-1.png"
              alt="Corduras y lonas NaNoDak background composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
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
              <div className="flex items-center gap-3 mb-2">
                <NNDAtomLogo className="w-10 h-10 text-gray-900" />
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  NaNoDak<sup className="text-xl font-bold text-gray-700 ml-0.5">®</sup>
                </h1>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#053F85] mb-3">
                Corduras y lonas
              </h2>

              <p className="text-md sm:text-2xl text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                Resistencia textil para usos <br /> industriales, comerciales y outdoor.
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

              {/* 4 Badges Cards Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xs border border-white/90 shadow-2xs max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="w-4 h-4 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Alta resistencia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DropletIcon className="w-4 h-4 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Impermeable y antihongos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <SunIcon className="w-4 h-4 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Resiste UV y clima
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LeafIcon className="w-4 h-4 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Amplia variedad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Banner */}
        <section className="py-6 bg-gray-50 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center text-[#13783e] shrink-0">
                  <LeafIcon className="w-6 h-6" />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  Tejidos de alta resistencia para{" "}
                  <span className="font-bold text-[#13783e]">
                    un mundo en movimiento
                  </span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 max-w-lg">
                Corduras y lonas NaNoDak combinan durabilidad, funcionalidad y versatilidad para acompañar las necesidades de la industria, el comercio y la vida al aire libre.
              </p>
            </div>
          </div>
        </section>

        {/* Resistencia en cada aplicación - Full Width Hero Composition matching Figma */}
        <section className="relative w-full overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center bg-white my-6">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/corduras/hero-2.png"
              alt="Resistencia en cada aplicación corduras"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            {/* Left side white gradient overlay */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
            <div className="max-w-xl">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0f294a] block uppercase mb-1">
                RESISTENCIA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f294a] tracking-tight uppercase mb-2">
                EN CADA APLICACIÓN
              </h2>
              
              {/* Green Accent Line */}
              <div className="w-12 h-1 bg-[#13783e] rounded-full my-3" />

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 max-w-md">
                Nuestras corduras y lonas están diseñadas para enfrentar los entornos más exigentes, brindando soluciones textiles duraderas, impermeables y versátiles.
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>Solicitar cotización</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7 Tech Icons Grid - White Icons on Blue Circles with Vertical Separators matching Figma */}
        <section className="py-8 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              <div className="flex flex-col items-center text-center p-2.5 sm:px-3">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <DropletIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  IMPERMEABLE <br /> 100%
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 sm:px-3">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <SunIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  RESISTE UV <br /> Y ALTAS TEMPERATURAS <br /> (-30°C a +70°C)
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 sm:px-3">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <ShieldIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  ALTA RESISTENCIA <br /> A LA TRACCIÓN <br /> Y DESGARRO
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 sm:px-3">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <GearIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  FÁCIL LIMPIEZA <br /> Y MANTENIMIENTO
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 sm:px-3">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <LeafIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  ANTI HONGOS <br /> Y ANTI MOHO
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 sm:px-3">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <GlobeIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  AMPLIA VARIEDAD <br /> DE COLORES <br /> Y GRAMAJES
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 sm:px-3 col-span-2 sm:col-span-1">
                <div className="w-12 h-12 rounded-full bg-[#0f294a] flex items-center justify-center text-white mb-2.5 shadow-xs shrink-0">
                  <ShieldIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0f294a] uppercase leading-tight">
                  DIFERENTES <br /> ESPESORES <br /> Y TERMINACIONES
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones Principales (5 Cards) */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  APLICACIONES PRINCIPALES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Soluciones para cada sector
                </h2>
              </div>
              <p className="text-sm text-gray-600 max-w-xl">
                Una solución confiable y versátil para múltiples industrias y necesidades, dentro y fuera del trabajo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/corduras/lona-camiones.png" alt="Lonas para camiones" fill unoptimized className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">LONAS PARA CAMIONES</div>
                </div>
                <div className="p-3 text-xs text-gray-600">Transporte seguro y protegido en todo tipo de condiciones.</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/corduras/toldos-y-estructuras.png" alt="Toldos y estructuras" fill unoptimized className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">TOLDOS Y ESTRUCTURAS</div>
                </div>
                <div className="p-3 text-xs text-gray-600">Soluciones para eventos, ferias y espacios comerciales.</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/corduras/lonas-pvc.png" alt="Detalle de lona PVC" fill unoptimized className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">DETALLE DE LONA PVC</div>
                </div>
                <div className="p-3 text-xs text-gray-600">Terminaciones reforzadas y gran resistencia.</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/corduras/corduras-mochilas-y-equipamientos.png" alt="Corduras para mochilas" fill unoptimized className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">CORDURAS MOCHILAS</div>
                </div>
                <div className="p-3 text-xs text-gray-600">Materiales resistentes para uso industrial, comercial y outdoor.</div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/corduras/cubiertas-industriales-y-agricolas.png" alt="Cubiertas industriales" fill unoptimized className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">CUBIERTAS AGRÍCOLAS</div>
                </div>
                <div className="p-3 text-xs text-gray-600">Protección confiable para múltiples aplicaciones.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Hero-3: Materiales que acompañan grandes desafíos */}
        <section className="relative w-full overflow-hidden min-h-[280px] md:min-h-[340px] flex items-center bg-slate-900 my-8">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/corduras/hero-3.png"
              alt="Materiales que acompañan grandes desafíos NaNoDak"
              fill
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            {/* Left side white gradient overlay */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-14 z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Content */}
              <div className="max-w-md lg:max-w-lg">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f294a] tracking-tight uppercase leading-tight">
                  MATERIALES <br />
                  QUE ACOMPAÑAN <br />
                  GRANDES DESAFÍOS
                </h2>

                {/* Green Accent Line */}
                <div className="w-12 h-1 bg-[#13783e] rounded-full my-3" />

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Desde la industria hasta la vida al aire libre, las corduras y lonas NaNoDak son la elección confiable para proyectos que exigen resistencia y durabilidad.
                </p>
              </div>

              {/* Right Content Overlay */}
              <div className="hidden lg:block text-right max-w-[260px]">
                <div className="w-10 h-1 bg-[#13783e] rounded-full mb-3 ml-auto" />
                <div className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase leading-relaxed">
                  VARIEDAD <br />
                  DE COLORES, <br />
                  GRAMAJES Y <br />
                  TERMINACIONES <br />
                  PARA CADA NECESIDAD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selector inferior */}
        <ProductSelector activeSlug="corduras-y-lonas" />
      </main>

      <Footer />
    </div>
  );
}
