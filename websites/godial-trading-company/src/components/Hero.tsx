import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { GlobeIcon, ShipIcon, HandshakeIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative w-full min-h-[440px] lg:min-h-[480px] flex items-center overflow-hidden bg-white">
      {/* Full Width Hero Background Image (hero.png) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.png"
          alt="Godial Trading Company Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle gradient on left side for maximum text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:w-[50%]" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-xl space-y-5">
          {/* Logo Godial Trading Company */}
          <div className="relative w-72 sm:w-84 h-20 sm:h-24">
            <Image
              src={siteConfig.heroLogo}
              alt="Godial Trading Company"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Paragraph Text */}
          <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
            {siteConfig.heroDescription}
          </p>

          {/* 3 Feature Badges Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-800">
            {/* Badge 1 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100/90 text-[#008d36] flex items-center justify-center shrink-0">
                <GlobeIcon className="w-4 h-4" />
              </div>
              <span>Marcas internacionales</span>
            </div>

            <span className="text-slate-300 font-light hidden sm:inline">|</span>

            {/* Badge 2 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100/90 text-[#008d36] flex items-center justify-center shrink-0">
                <ShipIcon className="w-4 h-4" />
              </div>
              <span>Importación y exportación</span>
            </div>

            <span className="text-slate-300 font-light hidden sm:inline">|</span>

            {/* Badge 3 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100/90 text-[#008d36] flex items-center justify-center shrink-0">
                <HandshakeIcon className="w-4 h-4" />
              </div>
              <span>Alianzas estratégicas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
