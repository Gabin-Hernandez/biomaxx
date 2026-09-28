import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ProductSelector } from "@/components/ProductSelector";
import { Footer } from "@/components/Footer";
import {
  NNDAtomLogo,
  GearIcon,
  LeafIcon,
  GlobeIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export default function NanodakPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* 1. HERO HOME COMPOSITION (Full width background) */}
        <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-gray-50">
          {/* Full width background image composition */}
          <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
            <Image
              src="/images/nanodak/home/hero.webp"
              alt="NaNoDak industrial non-woven fabrics background composition"
              fill
              priority
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
            {/* Top Right Watermark Card matching Figma */}
            <div className="hidden lg:block absolute top-8 right-8 z-10">
              <div className="bg-white/85 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/90 shadow-xs text-right max-w-[210px]">
                <div className="font-extrabold tracking-widest text-[#0f294a] text-xs uppercase leading-relaxed">
                  MATERIALES QUE IMPULSAN NUEVAS POSIBILIDADES
                </div>
                <div className="w-10 h-1 bg-[#13783e] rounded-full mt-2.5 ml-auto" />
              </div>
            </div>

            <div className="max-w-xl lg:max-w-2xl">
              {/* Category */}
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                SOLUCIONES EN TELA NO TEJIDA
              </div>

              {/* Brand Logo & Title */}
              <div className="flex items-center gap-3 mb-2">
                <NNDAtomLogo className="w-10 h-10 text-gray-900" />
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  NaNoDak<sup className="text-xl font-bold text-gray-700 ml-0.5">®</sup>
                </h1>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13783e] mb-3">
                Textiles que impulsan industrias
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-6 max-w-lg">
                Soluciones textiles industriales con calidad confiable, innovación y desarrollo técnico para múltiples aplicaciones.
              </p>

              {/* Button */}
              <div className="mb-8">
                <Link
                  href="#productos"
                  className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Conocer más</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/80 max-w-lg">
                <div className="flex items-center gap-2">
                  <GearIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Desarrollo a medida
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LeafIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Soluciones industriales
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-[#13783e] shrink-0" />
                  <span className="text-xs font-semibold text-gray-800">
                    Calidad y confiabilidad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SPECIALTY BANNER */}
        <section className="py-8 bg-gray-50 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-[#13783e] shrink-0">
                  <LeafIcon className="w-8 h-8" />
                </div>
                <div className="hidden sm:block h-8 w-px bg-gray-300" />
                <div>
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block">
                    NUESTRA ESPECIALIDAD
                  </span>
                  <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">
                    Soluciones textiles para{" "}
                    <span className="font-bold text-[#13783e]">
                      un mundo en movimiento
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 max-w-lg text-center lg:text-left">
                En NaNoDak combinamos más de 50 años de experiencia en el desarrollo de textiles industriales con innovación, conocimiento técnico y un profundo entendimiento de las necesidades de cada industria.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PRODUCT SELECTOR (5 Main Product Cards) */}
        <ProductSelector />

        {/* 4. MID BANNER (Full width hero-down composition) */}
        <section className="relative w-full overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/nanodak/home/hero-down.webp"
              alt="Textiles que hacen industrias más fuertes"
              fill
              className="object-cover object-center w-full h-full"
            />
            {/* Dark gradient overlay on left for title readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent md:w-2/3" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
