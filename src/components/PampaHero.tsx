import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export function PampaHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center bg-white border-b border-slate-100">
      {/* Background Image Composition */}
      <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
        <Image
          src="/images/pampa/hero.png"
          alt="Pampa Grill BBQ panoramic background composition"
          fill
          priority
          unoptimized
          className="object-cover object-center w-full h-full"
        />
        {/* White gradient overlays for flawless text readability on wide screens / negative zoom */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-transparent z-[1] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[40%] bg-gradient-to-l from-white via-white/95 sm:via-white/85 to-transparent z-[1] pointer-events-none" />
      </div>

      {/* HTML Content Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-14 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 max-w-xl bg-white/70 sm:bg-white/50 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-4 sm:p-6 lg:p-0 rounded-2xl">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-4">
              FUEGO QUE UNE <br className="hidden sm:inline" /> TRADICIÓN Y NATURALEZA
            </div>

            {/* Pampa Grill Brand Logo */}
            <div className="mb-4 flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <svg className="w-10 h-10 text-amber-500" viewBox="0 0 36 36" fill="currentColor">
                  <circle cx="18" cy="18" r="7.5" fill="#F59E0B" />
                  <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="2" x2="18" y2="6" />
                    <line x1="18" y1="30" x2="18" y2="34" />
                    <line x1="2" y1="18" x2="6" y2="18" />
                    <line x1="30" y1="18" x2="34" y2="18" />
                    <line x1="6.7" y1="6.7" x2="9.5" y2="9.5" />
                    <line x1="26.5" y1="26.5" x2="29.3" y2="29.3" />
                    <line x1="6.7" y1="29.3" x2="9.5" y2="26.5" />
                    <line x1="26.5" y1="9.5" x2="29.3" y2="6.7" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black tracking-wider text-[#0088cc] leading-none font-sans uppercase">
                  PAMPA
                </span>
                <span className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-[#0088cc] leading-none mt-1 uppercase">
                  G R I L L
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 leading-snug">
              La línea premium para <br className="hidden sm:inline" />
              <span className="text-slate-900">vivir el fuego al máximo.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 max-w-lg">
              Carbón, briquetas, pellets y accesorios <br className="hidden sm:inline" /> de origen natural, pensados para una <br className="hidden sm:inline" /> experiencia auténtica de cocción.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="#productos"
                className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Conocé la línea</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Slogan Column */}
          <div className="hidden lg:flex lg:col-span-6 justify-end text-right">
            <div className="max-w-xs flex flex-col items-end bg-white/70 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl">
              <h2 className="text-3xl font-serif italic text-slate-900 leading-tight mb-2">
                “Más que fuego, <br />
                es un encuentro.”
              </h2>
              <div className="w-10 h-0.5 bg-[#13783e] my-2" />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Tradición y energía natural <br />
                para un mejor mañana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
