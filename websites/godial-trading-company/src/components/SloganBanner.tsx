import React from "react";
import { siteConfig } from "@/config/site-config";
import { LeafIcon } from "./Icons";

export function SloganBanner() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0f5f2] rounded-2xl p-6 lg:px-10 lg:py-7 flex flex-col md:flex-row items-center justify-between gap-4 border border-emerald-50/50 shadow-xs">
          {/* Main Slogan with Leaf Icon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <LeafIcon className="w-6 h-6 text-[#008d36]" />
            </div>
            <p className="text-lg lg:text-2xl font-normal text-slate-800 tracking-tight">
              Conectamos{" "}
              <span className="font-extrabold text-[#008d36]">
                {siteConfig.sloganBanner.highlightText}
              </span>
            </p>
          </div>

          {/* Side Tagline */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block h-8 w-px bg-slate-300/70" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#008d36] text-center md:text-right leading-tight max-w-xs">
              {siteConfig.sloganBanner.sideText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
