import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { ArrowRightIcon, PlusIcon } from "./Icons";

export function PresentationAndBrands() {
  const { presentation, brandsSection, brandCards } = siteConfig;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Presentación (Unidad de negocio) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              {presentation.sectionTag}
            </span>

            {/* Title with Green Accent Line */}
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-7 bg-[#008d36] rounded-full shrink-0" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {presentation.title}
              </h2>
            </div>

            <p className="text-slate-600 text-sm lg:text-base leading-relaxed pt-2">
              {presentation.paragraph}
            </p>
          </div>

          {/* Right Column: Marcas que representamos */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              {brandsSection.sectionTag}
            </span>

            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              {brandsSection.title}
            </h2>

            {/* 3 Brand Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {brandCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 flex flex-col justify-between shadow-xs hover:border-emerald-200 transition-all"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3 bg-slate-200">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <h3
                      className={`text-base font-bold leading-snug ${
                        card.titleColor || "text-slate-900"
                      }`}
                    >
                      {card.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 leading-relaxed min-h-[36px]">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-3 flex justify-end">
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#008d36] hover:text-[#00772d] transition-colors"
                    >
                      <span>Ver más</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Notice Banner */}
            <div className="bg-slate-100/70 rounded-full px-5 py-2.5 flex items-center gap-3 text-xs text-slate-600 mt-4 border border-slate-200/60">
              <div className="w-5 h-5 rounded-full border border-slate-400 text-slate-700 flex items-center justify-center shrink-0">
                <PlusIcon className="w-3 h-3" />
              </div>

              <span className="text-slate-300 font-light">|</span>

              <p className="font-medium text-slate-600">
                {brandsSection.noticeText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
