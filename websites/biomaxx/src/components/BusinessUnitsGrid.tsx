import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { ArrowRightIcon } from "./Icons";

export function BusinessUnitsGrid() {
  return (
    <section id="servicios" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.businessUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between shadow-xs hover:border-emerald-200 transition-all"
            >
              <div>
                {/* Card Image */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-slate-200">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {unit.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed min-h-[36px]">
                  {unit.subtitle}
                </p>
              </div>

              {/* Card Action Button */}
              <div className="mt-4 flex justify-end">
                <Link
                  href={unit.href}
                  aria-label={`Ver información de ${unit.name}`}
                  className="w-9 h-9 rounded-full border border-[#008d36] text-[#008d36] hover:bg-[#008d36] hover:text-white flex items-center justify-center transition-colors"
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
