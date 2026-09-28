import React from "react";
import { SITE_CONFIG } from "@/config/site-config";
import { SimpleLeafIcon } from "./Icons";

export function SloganBanner() {
  const { sloganBanner } = SITE_CONFIG;

  return (
    <section className="py-8 bg-gray-50 border-t border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* Left Block: Leaf icon + Main slogan */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Green Leaf Graphic */}
            <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-[#13783e] flex-shrink-0 shadow-xs">
              <SimpleLeafIcon className="w-8 h-8" />
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300" />

            <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">
              Conectamos{" "}
              <span className="font-bold text-[#13783e]">
                productos, tecnología y conocimiento.
              </span>
            </p>
          </div>

          {/* Right Block: Tagline */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block h-8 w-px bg-gray-300" />
            <div className="text-xs sm:text-sm font-extrabold tracking-wider text-gray-500 uppercase leading-snug">
              <div>{sloganBanner.taglineLine1}</div>
              <div>{sloganBanner.taglineLine2}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaf watermark in bottom right corner */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 transform translate-x-1/4 translate-y-1/4">
        <SimpleLeafIcon className="w-64 h-64 text-[#13783e]" />
      </div>
    </section>
  );
}
