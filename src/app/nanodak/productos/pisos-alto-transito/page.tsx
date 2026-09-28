import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProductSelector } from "@/components/ProductSelector";
import { Footer } from "@/components/Footer";
import {
  NNDAtomLogo,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldIcon,
  DropletIcon,
  SunIcon,
  GearIcon,
  RecycleIcon,
} from "@/components/Icons";

export default function PisosAltoTransitoPage() {
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
            <span className="text-[#13783e] font-semibold">Pisos de alto tránsito</span>
          </div>
        </div>

        {/* HERO PISOS (Full width background composition) */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/pisos/hero.webp"
              alt="Pisos de alto tránsito NaNoDak background composition"
              fill
              priority
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-y-0 left-0 w-full md:w-7/12 lg:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-[1]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
            {/* Top Right Watermark matching Figma */}
            <div className="hidden lg:block absolute top-8 right-8 text-right max-w-[210px] z-10">
              <div className="font-extrabold tracking-widest text-white text-xs uppercase leading-relaxed">
                ESPACIOS MÁS FUERTES PARA UN MEJOR MAÑANA
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

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#033570] mb-3">
                Pisos de alto tránsito
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                Resistencia para un mundo en movimiento. Soluciones de pisos industriales con máxima resistencia, durabilidad y rendimiento para espacios que exigen más.
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
            </div>
          </div>
        </section>

        {/* 7 Tech Icons Grid */}
        <section className="py-8 bg-gray-50/70 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <DropletIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">LUGARES HÚMEDOS</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <SunIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">RESISTE A LA LLUVIA</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">ALTO RANGO TÉRMICO</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <GearIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">ANTIDESLIZANTE</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <GearIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">FÁCIL DE LIMPIAR</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">LARGA VIDA ÚTIL</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center col-span-2 sm:col-span-1">
                <RecycleIcon className="w-7 h-7 text-[#033570] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">RECICLABLES</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pisos Industriales NaNoDak Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">
                  PISOS INDUSTRIALES NaNoDak
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                  Diseñados para los espacios <span className="text-[#13783e]">más exigentes</span>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nuestros pisos de alto tránsito combinan materiales de alta calidad con tecnología avanzada, ofreciendo una superficie resistente, segura y durable para una amplia variedad de aplicaciones industriales, comerciales y deportivas.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <ShieldIcon className="w-8 h-8 text-[#033570] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase">MÁXIMA RESISTENCIA</h3>
                    <p className="text-xs text-gray-600 mt-1">Soporta alto tránsito, impactos y cargas pesadas sin perder su forma ni rendimiento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <GearIcon className="w-8 h-8 text-[#033570] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase">DURABILIDAD SUPERIOR</h3>
                    <p className="text-xs text-gray-600 mt-1">Materiales de alto desempeño que garantizan una larga vida útil en condiciones exigentes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <GearIcon className="w-8 h-8 text-[#033570] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase">FÁCIL LIMPIEZA Y MANTENIMIENTO</h3>
                    <p className="text-xs text-gray-600 mt-1">Superficie de bajo mantenimiento, resistente a manchas y productos de limpieza.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones (4 Cards) */}
        <section className="py-12 bg-gray-50/70 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">APLICACIONES</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Un piso, <span className="text-[#13783e]">múltiples posibilidades</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md">
                Ideales para entornos industriales, comerciales, deportivos y exteriores, brindando seguridad y rendimiento en cada espacio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/pisos/gymnacios.webp" alt="Gimnasios" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Gimnasios</h3>
                  <p className="text-xs text-gray-600">Superficies seguras, resistentes y duraderas para entrenamiento de alto rendimiento.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/pisos/industria.webp" alt="Industria" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Industria</h3>
                  <p className="text-xs text-gray-600">Soporta tránsito intenso de personas y maquinaria en entornos exigentes.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/pisos/transporte.webp" alt="Transporte" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Transporte</h3>
                  <p className="text-xs text-gray-600">Soluciones robustas y seguras para vehículos de transporte público y privado.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image src="/images/nanodak/pisos/exteriores.webp" alt="Exteriores" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Exteriores</h3>
                  <p className="text-xs text-gray-600">Resistente a la intemperie, ideal para espacios al aire libre y zonas de alto tránsito.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs & Tile Image */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative min-h-[280px] rounded-2xl overflow-hidden shadow-xs border border-gray-200">
                <Image src="/images/nanodak/pisos/rendimiento-confiable-cada-detalle.webp" alt="Rendimiento confiable" fill className="object-cover object-center" />
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">INFORMACIÓN TÉCNICA</span>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Rendimiento confiable <span className="text-[#13783e]">en cada detalle</span>
                </h2>
                <p className="text-xs text-gray-600 mb-6">
                  Nuestros pisos de alto tránsito están desarrollados con materiales de alto desempeño que garantizan resistencia, seguridad y durabilidad en una amplia gama de condiciones.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Materiales de alta calidad y resistencia</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Rango térmico: -30°C a +70°C</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Antideslizante y seguro</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Resistente a la humedad y rayos UV</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Fácil instalación y mantenimiento</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Disponibles en rollos y baldosas modulares</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-medium text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                    <span>Solución sustentable con materiales reciclables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selector inferior */}
        <ProductSelector activeSlug="pisos-alto-transito" />
      </main>

      <Footer />
    </div>
  );
}
