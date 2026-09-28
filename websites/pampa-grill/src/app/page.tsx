import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PAMPA_PRODUCTS } from "@/config/pampa-config";
import { ArrowRightIcon } from "@/components/Icons";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* Full width Hero composition */}
        <Hero />

        {/* Nuestra Línea Pampa Grill Section */}
        <section className="py-12 md:py-16 bg-white" id="productos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase">
                  NUESTRA LÍNEA PAMPA GRILL
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
                  Todo lo que necesitás para una experiencia única.
                </h2>
              </div>
              <div className="hidden lg:block text-xs font-bold tracking-widest text-gray-400 uppercase">
                FUEGO NATURAL | SABOR AUTÉNTICO | ORIGEN ARGENTINO
              </div>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PAMPA_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-5 items-stretch"
                >
                  {/* Product Pack Image */}
                  <div className="relative w-full sm:w-1/2 aspect-4/3 sm:aspect-auto min-h-[160px] sm:min-h-[190px] rounded-xl overflow-hidden bg-white flex-shrink-0 border border-gray-200/50">
                    <Image
                      src={product.packImage}
                      alt={product.title}
                      fill
                      unoptimized
                      className="object-contain p-3"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                        {product.categoryTag}
                      </span>
                      <h3 className="text-lg font-extrabold text-gray-900 leading-snug mb-2">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {product.homeDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200/60">
                      <Link
                        href={`/productos/${product.slug}`}
                        className="inline-flex items-center text-xs font-bold text-[#13783e] hover:text-[#0d5c2e] transition-colors group"
                      >
                        <span>Conocer producto</span>
                        <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
