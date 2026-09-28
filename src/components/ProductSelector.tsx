import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NANODAK_PRODUCTS } from "@/config/nanodak-config";
import { ArrowRightIcon } from "./Icons";

interface ProductSelectorProps {
  activeSlug?: string;
}

export function ProductSelector({ activeSlug }: ProductSelectorProps) {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-200/60" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              NUESTRAS SOLUCIONES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Productos
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-xl">
            Cada solución está diseñada para responder a necesidades reales de la industria, con materiales de alta calidad y un desempeño confiable.
          </p>
        </div>

        {/* 5 Cards Row / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {NANODAK_PRODUCTS.map((prod) => {
            const isActive = activeSlug === prod.slug;
            return (
              <Link
                key={prod.id}
                href={prod.href}
                className={`bg-white rounded-xl p-3 shadow-xs transition-all duration-200 flex flex-col justify-between group ${
                  isActive
                    ? "ring-2 ring-[#13783e] border-2 border-[#13783e] bg-emerald-50/20"
                    : "border border-gray-200 hover:border-emerald-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-100 mb-3">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3
                    className={`text-sm font-bold mb-1 ${
                      isActive ? "text-[#13783e]" : "text-gray-900 group-hover:text-[#13783e]"
                    }`}
                  >
                    {prod.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {prod.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-end">
                  <span
                    className={`inline-flex items-center text-xs font-bold ${
                      isActive ? "text-[#13783e]" : "text-gray-600 group-hover:text-[#13783e]"
                    }`}
                  >
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
