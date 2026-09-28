import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { PresentationAndBrands } from "@/components/PresentationAndBrands";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";
import { GlobeIcon, ShipIcon, HandshakeIcon } from "@/components/Icons";

export default function GodialTradingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-grow space-y-2 pb-10">
        {/* HERO GODIAL TRADING (Exact Figma Composition Match) */}
        <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 flex items-center min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
          {/* Panoramic Cargo Ship Hero Image */}
          <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
            <Image
              src="/images/godial-landing-hero.png"
              alt="Godial Trading Company Hero composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            {/* Soft left gradient fade for text legibility matching Figma */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-7/12 lg:w-[48%] bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-transparent z-[1] pointer-events-none" />
          </div>

          {/* HTML Overlay Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-14 z-10">
            <div className="max-w-xl text-left space-y-5">
              
              {/* Brand Logo & Title */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <Image
                    src="/images/godial/logo-hero.png"
                    alt="Godial Logo"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c2a4a] tracking-tight leading-none uppercase">
                    GODIAL
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#e30613] tracking-wider leading-none mt-1 uppercase">
                    TRADING COMPANY
                  </span>
                </div>
              </div>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold max-w-lg">
                Licencias de marcas internacionales, importaciones y exportaciones para la Argentina y el mundo.
              </p>

              {/* 3 Badges (Globe, Ship, Handshake) */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
                
                {/* Badge 1: Marcas internacionales */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-[#008d36] text-[#008d36] flex items-center justify-center shrink-0 bg-white shadow-2xs">
                    <GlobeIcon className="w-5 h-5 text-[#008d36]" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Marcas <br /> internacionales
                  </span>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                {/* Badge 2: Importación y exportación */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-[#008d36] text-[#008d36] flex items-center justify-center shrink-0 bg-white shadow-2xs">
                    <ShipIcon className="w-5 h-5 text-[#008d36]" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Importación <br /> y exportación
                  </span>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                {/* Badge 3: Alianzas estratégicas */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-[#008d36] text-[#008d36] flex items-center justify-center shrink-0 bg-white shadow-2xs">
                    <HandshakeIcon className="w-5 h-5 text-[#008d36]" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Alianzas <br /> estratégicas
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Presentation & Brand Cards */}
        <div id="marcas">
          <PresentationAndBrands />
        </div>

        {/* Slogan Banner */}
        <SloganBanner />
      </main>

      <Footer />
    </div>
  );
}
