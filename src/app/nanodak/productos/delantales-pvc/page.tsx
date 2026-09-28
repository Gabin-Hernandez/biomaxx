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
  LeafIcon,
} from "@/components/Icons";

export default function DelantalesPVCPage() {
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
            <span className="text-[#13783e] font-semibold">Delantales de PVC</span>
          </div>
        </div>

        {/* HERO DELANTALES (Full width background composition) */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/delantales/hero.webp"
              alt="Delantales de PVC NaNoDak background composition"
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
                Delantales de PVC
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                Protección y comodidad para trabajos en frío. Delantal diseñado para brindar máxima protección e higiene en entornos exigentes de la industria alimentaria y cámaras frigoríficas.
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

              {/* 3 Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/80 max-w-lg">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Calidad confiable</span>
                </div>
                <div className="flex items-center gap-2">
                  <LeafIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Soluciones industriales</span>
                </div>
                <div className="flex items-center gap-2">
                  <GearIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">Diseño y rendimiento</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Delantales de PVC - Diagram & Details */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Diagram with dimensions */}
              <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-200/80 text-center flex flex-col items-center justify-center relative min-h-[380px]">
                <div className="relative w-full max-w-[280px] h-[340px]">
                  <Image src="/images/nanodak/delantales/0.webp" alt="Diagrama delantal PVC" fill className="object-contain" />
                </div>
                <div className="text-xs font-bold text-gray-700 mt-2">
                  1,2 m (alto) × 90 cm (ancho)
                </div>
              </div>

              {/* Right Side: Description + 5 Icons + Product Detail Cards */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">
                    NANODAK
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                    Delantales de PVC
                  </h2>
                  <h3 className="text-base font-bold text-[#13783e] mb-3">
                    De alto rendimiento para entornos frigoríficos
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Delantal frigorífico DF Soft, diseñado para proporcionar una máxima protección y comodidad en trabajos en frío. Ideal para la industria alimentaria, cámaras frigoríficas y plantas de procesamiento.
                  </p>
                </div>

                {/* 5 Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center pt-2">
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <ShieldIcon className="w-6 h-6 text-[#033570] mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase block">MÁXIMA PROTECCIÓN</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <SunIcon className="w-6 h-6 text-[#033570] mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase block">EN FRÍO</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <DropletIcon className="w-6 h-6 text-[#033570] mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase block">100% IMPERMEABLE</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <ShieldIcon className="w-6 h-6 text-[#033570] mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase block">RESISTENTE Y LIGERO</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-200 col-span-2 sm:col-span-1">
                    <GearIcon className="w-6 h-6 text-[#033570] mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase block">FÁCIL DE LIMPIAR</span>
                  </div>
                </div>

                {/* Detalle del Producto Box */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                  <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">DETALLE DEL PRODUCTO</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-xl border border-gray-200 text-center">
                      <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">DELANTAL INDIVIDUAL</h5>
                      <div className="relative aspect-4/3 bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <Image src="/images/nanodak/delantales/1.webp" alt="Ojal PVC" fill className="object-contain" />
                      </div>
                      <p className="text-[11px] text-gray-500">Detalle de sujeción con ojal de PVC de alta resistencia.</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-gray-200 text-center">
                      <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">DISEÑO FUNCIONAL</h5>
                      <div className="relative aspect-4/3 bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <Image src="/images/nanodak/delantales/2.webp" alt="Sujeción cuello" fill className="object-contain" />
                      </div>
                      <p className="text-[11px] text-gray-500">Diseño funcional y resistente para uso intensivo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificaciones Técnicas & Uso Recomendado */}
        <section className="py-12 bg-gray-50/70 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 2 Columns: Technical Specs */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">CARACTERÍSTICAS TÉCNICAS</span>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Especificaciones de fabricación</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Material</span>
                    <span className="text-gray-600">Tela vinílica de PVC blanco repelente a la suciedad.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Dimensiones</span>
                    <span className="text-gray-600">1200 mm (alto) x 900 mm (ancho).</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Composición</span>
                    <span className="text-gray-600">60% PVC, 40% Poliéster.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Espesor</span>
                    <span className="text-gray-600">550 micrones.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Refuerzo posterior</span>
                    <span className="text-gray-600">Tejido 100% poliéster de alta tenacidad, hidrorepelente.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Color</span>
                    <span className="text-gray-600">Blanco.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200 sm:col-span-2">
                    <span className="font-bold text-gray-900 block mb-1">Tiras y sujeción</span>
                    <span className="text-gray-600">Resistentes al uso intensivo, sujetas con ojales metálicos con refuerzo de PVC y soldadura de alta frecuencia.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Recommended Use */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">USO RECOMENDADO</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instrucciones y aplicaciones</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>Industria alimentaria, cámaras frigoríficas, plantas de procesamiento.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>Manipulación de alimentos y tareas en ambientes fríos.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>Fácil de limpiar y mantener.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>Resistente, impermeable e higiénico.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>No usar productos abrasivos.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>Lavar con agua y detergente neutro. Secar colgado.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0 mt-0.5" />
                    <span>Guardar en lugar seco y ventilado, protegido de la luz solar.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selector inferior */}
        <ProductSelector activeSlug="delantales-pvc" />
      </main>

      <Footer />
    </div>
  );
}
