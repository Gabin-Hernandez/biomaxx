import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { DiamondIcon, CheckCircleIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[560px] flex items-center overflow-hidden bg-white">
      {/* Full Width Hero Background Image (hero.png) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.png"
          alt="Dyneema® Tecnología Balística Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft gradient overlay on left for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent lg:w-[55%]" />
      </div>

      {/* Hero Content Container Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="max-w-xl space-y-4">
          
          {/* Subheader: GODIAL TRADING COMPANY */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-slate-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {siteConfig.parentCompany}
            </span>
          </div>

          {/* Logo & Main Title: Diamond Icon + Dyneema® + Tecnología Balística */}
          <div className="flex items-center gap-3">
            <DiamondIcon className="w-10 h-10 lg:w-12 lg:h-12 shrink-0" />
            <div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0047ba] flex items-center gap-1">
                Dyneema<span className="text-2xl lg:text-3xl font-bold align-super text-[#0047ba]">®</span>
              </h1>
              <p className="text-lg lg:text-xl font-bold text-slate-900 leading-none">
                {siteConfig.subtitle}
              </p>
            </div>
          </div>

          {/* Paragraph Text */}
          <p className="text-slate-700 text-xs sm:text-sm lg:text-base font-normal leading-relaxed pt-1">
            {siteConfig.heroDescription}
          </p>

          {/* 5 Vertical Checkmark List Items */}
          <div className="pt-2 space-y-2">
            {siteConfig.heroCheckmarks.map((text, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#008d36] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
