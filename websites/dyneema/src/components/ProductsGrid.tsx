import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { ArrowRightIcon } from "./Icons";

export function ProductsGrid() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.productCards.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col sm:flex-row items-center gap-4 shadow-xs hover:border-emerald-200 transition-all group"
            >
              {/* Product Image */}
              <div className="relative w-full sm:w-5/12 h-40 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="w-full sm:w-7/12 flex flex-col justify-between h-full py-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0047ba] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Ver más Link */}
                <div className="mt-4 flex justify-end">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#008d36] hover:text-[#00772d] transition-colors"
                  >
                    <span>Ver más</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
