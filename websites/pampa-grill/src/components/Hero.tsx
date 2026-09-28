import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center bg-white">
      {/* Background Image Composition - Clean without white overlay filter */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Pampa Grill BBQ panoramic background composition"
          fill
          priority
          unoptimized
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* HTML Content Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-14 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 max-w-xl">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-5">
              FUEGO QUE UNE <br className="hidden sm:inline" /> TRADICIÓN Y NATURALEZA
            </div>

            {/* Pampa Grill Brand Logo */}
            <div className="mb-4 flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <svg className="w-11 h-11 text-amber-500" viewBox="0 0 36 36" fill="currentColor">
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
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-snug">
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
                className="inline-flex items-center gap-2 bg-[#008d36] hover:bg-[#00702b] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>Conocé la línea</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Slogan Column */}
          <div className="hidden lg:flex lg:col-span-6 justify-end text-right">
            <div className="max-w-xs flex flex-col items-end">
              <h2 className="text-3xl font-serif italic text-slate-900 leading-tight mb-2">
                “Más que fuego, <br />
                es un encuentro.”
              </h2>
              <div className="w-10 h-0.5 bg-[#008d36] my-2" />
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
