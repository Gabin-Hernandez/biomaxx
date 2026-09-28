"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

export function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = siteConfig.heroSlides;
  const currentSlide = slides[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
      {/* Unified Hero Banner Container */}
      <div className="relative w-full min-h-[460px] lg:min-h-[500px] flex items-center overflow-hidden rounded-3xl bg-white">
        
        {/* Right Slanted Background Image Composition */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] h-full z-0 overflow-hidden lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]">
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Mobile gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:hidden pointer-events-none z-10" />

          {/* Left Navigation Arrow on Image */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Diapositiva anterior"
            className="absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-transform hover:scale-105 z-20"
          >
            <ChevronLeftIcon />
          </button>

          {/* Right Navigation Arrow on Image */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente diapositiva"
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-transform hover:scale-105 z-20"
          >
            <ChevronRightIcon />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-5 left-1/2 lg:left-1/3 -translate-x-1/2 flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-1.5 rounded-full z-20">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Ir a diapositiva ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlideIndex
                    ? "w-6 bg-[#008d36]"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Left Text Content Area */}
        <div className="relative z-10 w-full lg:w-[46%] py-8 lg:py-12 pl-4 sm:pl-6 pr-4 space-y-4">
          <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#008d36] uppercase block">
            {siteConfig.tagline}
          </span>

          <h1 className="text-5xl lg:text-6xl font-black text-[#008d36] tracking-tight">
            {siteConfig.siteName}
          </h1>

          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            {siteConfig.heroSubtitle}
          </h2>

          <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-md">
            {siteConfig.heroDescription}
          </p>

          <div className="pt-2">
            <Link
              href={siteConfig.heroCta.href}
              className="inline-flex items-center gap-2 bg-[#008d36] hover:bg-[#00772d] text-white font-medium px-6 py-3 rounded-full transition-colors shadow-xs"
            >
              <span>{siteConfig.heroCta.label}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
