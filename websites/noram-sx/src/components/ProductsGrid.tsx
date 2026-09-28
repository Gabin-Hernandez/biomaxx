import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site-config";
import { ArrowRightIcon } from "./Icons";

export function ProductsGrid() {
  const { products } = SITE_CONFIG;

  return (
    <section className="py-12 md:py-16 bg-white" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200/80 rounded-xl lg:rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col sm:flex-row gap-5 items-stretch"
            >
              {/* Product Image Container */}
              <div className="relative w-full sm:w-1/2 aspect-4/3 sm:aspect-auto min-h-[160px] sm:min-h-[190px] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
              </div>

              {/* Product Content */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  {/* Title with green dash */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                    <span className="w-4 h-0.5 bg-[#13783e] inline-block flex-shrink-0" />
                    <span>{product.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Ver Más Link */}
                <div className="mt-4 pt-2">
                  <Link
                    href={product.linkHref}
                    className="inline-flex items-center text-sm font-bold text-[#13783e] hover:text-[#0d5c2e] transition-colors group"
                  >
                    <span>{product.linkText}</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-150" />
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
