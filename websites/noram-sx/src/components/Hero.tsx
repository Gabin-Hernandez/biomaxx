import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site-config";

export function Hero() {
  const { hero } = SITE_CONFIG;

  return (
    <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[500px] lg:min-h-[540px] flex items-center bg-gray-50">
      {/* Background Composition Image (Full Width Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={hero.backgroundImage}
          alt="NORAM SX High Performance Stainless Steel background composition"
          fill
          priority
          unoptimized
          className="object-cover object-center w-full h-full"
        />
        {/* Soft gradient overlay on left to ensure high readability on all screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent sm:from-white/85 sm:via-white/50 sm:to-transparent" />
      </div>

      {/* Content overlay container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* Category Tag */}
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-gray-600 uppercase mb-2">
            {hero.category}
          </div>

          {/* Main Title: NORAM in Black, SX in Red */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-none">
            <span>{hero.brandTitle}</span>
            <span className="text-[#e52320] ml-1 sm:ml-2">{hero.brandRed}</span>
            <sup className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 ml-0.5">
              {hero.registeredSymbol}
            </sup>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mt-2 mb-4">
            {hero.subtitle}
          </h2>

          {/* Body Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal max-w-lg">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
