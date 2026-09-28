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

export default function GeomembranasPage() {
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
            <span className="text-[#033570] font-semibold">Geomembranas</span>
          </div>
        </div>

        {/* HERO GEOMEMBRANAS (Full width background composition) */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/geomembranas/hero-1.webp"
              alt="Geomembranas NaNoDak background composition"
              fill
              priority
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

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#033570] mb-3">
                Geomembranas
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                Protección y seguridad para suelos y ambientes exigentes. Soluciones de alta impermeabilidad diseñadas para proyectos industriales, mineros y agrícolas.
              </p>

              <div className="mb-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Solicitar asesoramiento</span>
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

        {/* 6 Feature Boxes Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">
                  NaNoDak®
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-[#033570]">
                  Geomembranas
                </h2>
                <h3 className="text-lg font-bold text-[#053F85] mb-3">
                  Máxima impermeabilidad y confiabilidad
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nuestras geomembranas están fabricadas con materiales de alta calidad que garantizan un desempeño superior en condiciones exigentes, protegiendo el suelo y los recursos en proyectos de infraestructura, minería y agricultura.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80 text-center">
                  <ShieldIcon className="w-8 h-8 text-[#053F85] mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-1">MÁXIMA IMPERMEABILIDAD</h4>
                  <p className="text-[11px] text-gray-600">Evita filtraciones y garantiza la contención de líquidos.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80 text-center">
                  <DropletIcon className="w-8 h-8 text-[#053F85] mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-1">RESISTENCIA QUÍMICA</h4>
                  <p className="text-[11px] text-gray-600">Resiste ácidos y químicos de alta agresividad.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80 text-center">
                  <GearIcon className="w-8 h-8 text-[#033570] mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-1">ALTA RESISTENCIA MECÁNICA</h4>
                  <p className="text-[11px] text-gray-600">Gran desempeño frente a tracción y punzado.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80 text-center">
                  <GearIcon className="w-8 h-8 text-[#033570] mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-1">FÁCIL INSTALACIÓN</h4>
                  <p className="text-[11px] text-gray-600">Soluciones prácticas y duraderas con bajo mantenimiento.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80 text-center">
                  <LeafIcon className="w-8 h-8 text-[#033570] mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-1">SOLUCIÓN SUSTENTABLE</h4>
                  <p className="text-[11px] text-gray-600">Contribuye a la protección del suelo y medio ambiente.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80 text-center">
                  <SunIcon className="w-8 h-8 text-[#033570] mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-1">RESISTE RAYOS UV</h4>
                  <p className="text-[11px] text-gray-600">Estabilidad (-30°C a +70°C) en climas extremos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones Principales (Mining Panel + 4 Cards) */}
        <section className="py-12 bg-gray-50/70 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Aplicaciones principales</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Feature Panel */}
              <div className="lg:col-span-5 relative min-h-[320px] rounded-2xl overflow-hidden shadow-xs flex items-end p-6">
                <Image
                  src="/images/nanodak/geomembranas/principal-servicios.webp"
                  alt="Protegiendo el presente"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">
                    PROTEGIENDO EL PRESENTE<br />
                    <span className="text-emerald-400">PARA UN FUTURO MÁS SEGURO</span>
                  </h3>
                </div>
              </div>

              {/* Right 4 Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-16/9 bg-gray-100">
                    <Image src="/images/nanodak/geomembranas/MINERIA-Y-LITIO.webp" alt="Minería y litio" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">MINERÍA Y LITIO</div>
                  </div>
                  <div className="p-3 text-xs text-gray-600">Impermeabilización de pilas de lixiviación, pozas de proceso y control.</div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-16/9 bg-gray-100">
                    <Image src="/images/nanodak/geomembranas/reservorios-de-agua.webp" alt="Reservorios de agua" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">RESERVORIOS DE AGUA</div>
                  </div>
                  <div className="p-3 text-xs text-gray-600">Almacenamiento seguro de agua para uso industrial, agrícola y consumo.</div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-16/9 bg-gray-100">
                    <Image src="/images/nanodak/geomembranas/fosas-cepticas.webp" alt="Fosas sépticas" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">FOSAS SÉPTICAS</div>
                  </div>
                  <div className="p-3 text-xs text-gray-600">Contención de residuos líquidos con alta resistencia química.</div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                  <div className="relative aspect-16/9 bg-gray-100">
                    <Image src="/images/nanodak/geomembranas/uso-agricola-y-riego.webp" alt="Uso agrícola y riego" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-2 text-center text-white text-xs font-bold uppercase">USO AGRÍCOLA Y RIEGO</div>
                  </div>
                  <div className="p-3 text-xs text-gray-600">Reservorios, canales y sistemas de riego que maximizan la eficiencia.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Tech Badges Bar */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4">Información técnica</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50">IMPERMEABLE 100%</div>
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50">RESISTE ÁCIDOS Y QUÍMICOS</div>
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50">RESISTE RAYOS UV (-30°C A +70°C)</div>
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50">TRACCIÓN Y PUNZADO</div>
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50">ESPESORES Y ANCHOS</div>
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50">FÁCIL INSTALACIÓN</div>
              <div className="p-3 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 bg-gray-50 col-span-2 sm:col-span-1">LARGA VIDA ÚTIL</div>
            </div>
          </div>
        </section>

        {/* Selector inferior */}
        <ProductSelector activeSlug="geomembranas" />
      </main>

      <Footer />
    </div>
  );
}
