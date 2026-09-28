import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PAMPA_PRODUCTS } from "@/config/pampa-config";
import {
  ArrowRightIcon,
  FlameIcon,
  LeafIcon,
  ClockIcon,
  ChartIcon,
  SmokeIcon,
  TreeIcon,
  SteakIcon,
  ShieldIcon,
  AwardIcon,
} from "./Icons";

interface ProductListSelectorProps {
  activeSlug?: string;
}

function renderBenefitIcon(iconKey: string) {
  switch (iconKey) {
    case "flame":
      return <FlameIcon className="w-4 h-4 text-[#13783e]" />;
    case "leaf":
      return <LeafIcon className="w-4 h-4 text-[#13783e]" />;
    case "clock":
      return <ClockIcon className="w-4 h-4 text-[#13783e]" />;
    case "chart":
      return <ChartIcon className="w-4 h-4 text-[#13783e]" />;
    case "smoke":
      return <SmokeIcon className="w-4 h-4 text-[#13783e]" />;
    case "tree":
      return <TreeIcon className="w-4 h-4 text-[#13783e]" />;
    case "steak":
      return <SteakIcon className="w-4 h-4 text-[#13783e]" />;
    case "shield":
      return <ShieldIcon className="w-4 h-4 text-[#13783e]" />;
    case "award":
      return <AwardIcon className="w-4 h-4 text-[#13783e]" />;
    default:
      return <FlameIcon className="w-4 h-4 text-[#13783e]" />;
  }
}

export function ProductListSelector({ activeSlug }: ProductListSelectorProps) {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase">
              NUESTRA LÍNEA PAMPA GRILL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f294a] mt-1">
              Descubrí todos nuestros productos
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg">
            Cuatro opciones, el mismo espíritu. Elegí el producto que mejor se adapte a tu forma de vivir el fuego.
          </p>
        </div>

        {/* 2x2 Product Grid (Matching Figma 4-card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PAMPA_PRODUCTS.map((product) => {
            const isActive = activeSlug === product.slug;
            return (
              <div
                key={product.id}
                className={`relative rounded-3xl p-5 sm:p-6 transition-all duration-200 flex flex-col sm:flex-row gap-5 items-stretch ${
                  isActive
                    ? "bg-[#eef8f2] border-2 border-[#13783e] shadow-xs"
                    : "bg-[#f8faf9] border border-gray-200/70 hover:border-emerald-300 hover:shadow-xs"
                }`}
              >
                {/* Left Product Image */}
                <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto min-h-[160px] rounded-2xl bg-white overflow-hidden shrink-0 flex items-center justify-center p-3 border border-gray-100/80">
                  <Image
                    src={product.packImage}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />
                </div>

                {/* Right Info Column */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    {/* Top Row: Category Tag & Arrow Link */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold tracking-wider text-[#13783e] uppercase">
                        {product.categoryTag}
                      </span>

                      <Link
                        href={`/productos/${product.slug}`}
                        aria-label={`Ver ${product.title}`}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          isActive
                            ? "bg-[#13783e] text-white"
                            : "border border-[#13783e] text-[#13783e] hover:bg-[#13783e] hover:text-white"
                        }`}
                      >
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Title & Active Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0f294a] leading-tight">
                        {product.title}
                      </h3>
                      {isActive && (
                        <span className="bg-[#13783e] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          Producto actual
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {product.homeDescription}
                    </p>
                  </div>

                  {/* Bottom Benefits Icon Badges */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 border-t border-gray-200/60">
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center max-w-[70px]">
                        <div className="w-9 h-9 rounded-full border border-gray-300/80 bg-white flex items-center justify-center text-[#13783e] shadow-2xs mb-1">
                          {renderBenefitIcon(benefit.icon)}
                        </div>
                        <span className="text-[8px] sm:text-[9px] font-bold leading-tight text-slate-700 uppercase">
                          {benefit.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
