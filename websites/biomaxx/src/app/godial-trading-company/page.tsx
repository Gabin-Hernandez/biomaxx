import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PresentationAndBrands } from "@/components/PresentationAndBrands";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";
import { GlobeIcon, ShipIcon, HandshakeIcon, ArrowRightIcon } from "@/components/Icons";

export default function GodialTradingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-grow space-y-2 pb-10">
        {/* HERO GODIAL TRADING (Full width panoramic composition) */}
        <section className="relative w-full overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-center bg-slate-900">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/godial/hero.png"
              alt="Godial Trading Company Hero composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            {/* Soft left gradient overlay for contrast */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
            <div className="max-w-xl text-left">
              {/* Brand Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/images/godial/logo-hero.png"
                    alt="Godial Logo"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                    BIOMAXX GROUP
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    Godial Trading Company
                  </h1>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium mb-6 max-w-lg">
                Licencias de marcas internacionales, importaciones y exportaciones para la Argentina y el mundo.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#marcas"
                  className="inline-flex items-center gap-2 bg-[#008d36] hover:bg-[#00772d] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Ver marcas</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/20 max-w-lg">
                <div className="flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-gray-200">Marcas internacionales</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShipIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-gray-200">Importación y exportación</span>
                </div>
                <div className="flex items-center gap-2">
                  <HandshakeIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-gray-200">Alianzas estratégicas</span>
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
