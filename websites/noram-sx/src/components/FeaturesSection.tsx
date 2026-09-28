import React from "react";
import { SITE_CONFIG } from "@/config/site-config";
import { CheckCircleIcon } from "./Icons";

export function FeaturesSection() {
  const { features } = SITE_CONFIG;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0f7f2] border border-[#d8ebe0] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          {/* Section Header */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#13783e] mb-6 sm:mb-8">
            {features.title}
          </h2>

          {/* List of 5 Features */}
          <ul className="space-y-3.5 sm:space-y-4">
            {features.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#13783e]" />
                </div>
                <span className="text-sm sm:text-base text-gray-800 font-medium leading-normal">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
