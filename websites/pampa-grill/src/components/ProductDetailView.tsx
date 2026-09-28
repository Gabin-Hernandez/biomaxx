import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductListSelector } from "@/components/ProductListSelector";
import { Footer } from "@/components/Footer";
import { ProductDetail } from "@/config/pampa-config";
import {
  FlameIcon,
  ClockIcon,
  SmokeIcon,
  LeafIcon,
  TreeIcon,
  ChartIcon,
  SteakIcon,
  ShieldIcon,
  AwardIcon,
  ArrowRightIcon,
} from "@/components/Icons";

function renderBenefitIcon(iconName: string) {
  switch (iconName) {
    case "flame":
      return <FlameIcon className="w-7 h-7 text-[#13783e]" />;
    case "clock":
      return <ClockIcon className="w-7 h-7 text-[#13783e]" />;
    case "smoke":
      return <SmokeIcon className="w-7 h-7 text-[#13783e]" />;
    case "leaf":
      return <LeafIcon className="w-7 h-7 text-[#13783e]" />;
    case "tree":
      return <TreeIcon className="w-7 h-7 text-[#13783e]" />;
    case "chart":
      return <ChartIcon className="w-7 h-7 text-[#13783e]" />;
    case "steak":
      return <SteakIcon className="w-7 h-7 text-[#13783e]" />;
    case "shield":
      return <ShieldIcon className="w-7 h-7 text-[#13783e]" />;
    case "award":
      return <AwardIcon className="w-7 h-7 text-[#13783e]" />;
    default:
      return <LeafIcon className="w-7 h-7 text-[#13783e]" />;
  }
}

export function ProductDetailView({ product }: { product: ProductDetail }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Hero full width */}
        <Hero />

        {/* Product Detail Section (3 Columns) */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Column 1: Main Pack Image (Left 4 cols) */}
              <div className="lg:col-span-4 relative min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/80 shadow-xs flex items-center justify-center p-4">
                <Image
                  src={product.packImage}
                  alt={product.title}
                  fill
                  priority
                  unoptimized
                  className="object-contain p-4"
                />
              </div>

              {/* Column 2: Specs & Details (Center 5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase block mb-1">
                    {product.categoryTag}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
                    {product.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                {/* 4 Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-2">
                  {product.topBadges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-gray-50 rounded-xl border border-gray-200/80 flex flex-col items-center justify-center"
                    >
                      <div className="mb-1">
                        {idx === 0 && <LeafIcon className="w-5 h-5 text-[#13783e]" />}
                        {idx === 1 && <FlameIcon className="w-5 h-5 text-[#13783e]" />}
                        {idx === 2 && <ClockIcon className="w-5 h-5 text-[#13783e]" />}
                        {idx >= 3 && <ChartIcon className="w-5 h-5 text-[#13783e]" />}
                      </div>
                      <span className="text-[10px] font-bold text-gray-800 uppercase leading-tight">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all"
                  >
                    <span>{product.buttonText}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>

                {/* Technical Specs Table */}
                <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-200/80">
                  <h3 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-3">
                    ESPECIFICACIONES TÉCNICAS
                  </h3>
                  <div className="space-y-2 text-xs">
                    {product.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between py-1.5 border-b border-gray-200/60 last:border-0"
                      >
                        <span className="font-bold text-gray-700">{spec.label}</span>
                        <span className="text-gray-600 text-right max-w-[220px]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Individual Item Diagram & Benefits (Right 3 cols) */}
              <div className="lg:col-span-3 space-y-6">
                {/* Individual Item Diagram Box */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80 text-center">
                  <h4 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-2">
                    {product.individualTitle}
                  </h4>
                  <div className="relative w-full aspect-4/3 bg-white rounded-xl overflow-hidden mb-2 border border-gray-200/50">
                    <Image
                      src={product.individualImage}
                      alt={product.individualTitle}
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs font-bold text-gray-800">
                    {product.individualDimensions}
                  </p>
                  <span className="text-[10px] text-gray-400">Medidas aproximadas.</span>
                </div>

                {/* Benefits Box */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
                  <h4 className="text-xs font-bold text-[#13783e] tracking-widest uppercase mb-3">
                    BENEFICIOS
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {product.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-2.5 rounded-xl border border-gray-200/60 flex flex-col items-center justify-center"
                      >
                        <div className="mb-1">{renderBenefitIcon(benefit.icon)}</div>
                        <span className="text-[10px] font-bold text-gray-800 uppercase leading-tight">
                          {benefit.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Selector list at bottom */}
        <ProductListSelector activeSlug={product.slug} />
      </main>

      <Footer />
    </div>
  );
}
