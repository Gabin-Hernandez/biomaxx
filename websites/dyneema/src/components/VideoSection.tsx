import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { DiamondIcon, PlayIcon } from "./Icons";

export function VideoSection() {
  const { videoSection } = siteConfig;

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0f5f2] rounded-2xl p-6 lg:p-8 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          
          {/* Left Column: Video Tag & Title */}
          <div className="w-full lg:w-4/12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
              {videoSection.tag}
            </span>

            <div className="flex items-center gap-3">
              <DiamondIcon className="w-10 h-10 shrink-0" />
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                {videoSection.brandName}
              </h2>
            </div>

            <p className="text-xl font-bold text-slate-800">
              {videoSection.tagline}
            </p>
          </div>

          {/* Right Column: Institutional Video Player Frame */}
          <div className="w-full lg:w-8/12">
            <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden shadow-lg border border-slate-800/20 bg-slate-900 group">
              {/* Video Thumbnail Background */}
              <Image
                src={videoSection.backgroundImage}
                alt="Video Dyneema"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Overlay for Video Frame */}
              <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]" />

              {/* Center Overlay: Logo & Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3 z-10">
                <div className="flex items-center gap-2 drop-shadow-md">
                  <DiamondIcon className="w-8 h-8" />
                  <span className="text-2xl font-black tracking-tight">
                    {videoSection.videoTitle}
                  </span>
                </div>

                {/* Big Circular Play Button */}
                <button
                  type="button"
                  aria-label="Reproducir video institucional"
                  className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-xl transition-transform hover:scale-110"
                >
                  <PlayIcon className="w-7 h-7 ml-1 text-slate-900" />
                </button>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 flex flex-col gap-1 text-white text-xs">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-[#0055d4] rounded-full" />
                </div>

                {/* Controls Bar Row */}
                <div className="flex items-center justify-between pt-1 font-mono text-[11px] text-slate-200">
                  <div className="flex items-center gap-3">
                    <button type="button" aria-label="Play/Pause">
                      <PlayIcon className="w-4 h-4 fill-white" />
                    </button>
                    <span>{videoSection.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hover:text-white cursor-pointer font-sans font-bold text-[10px] border border-white/60 px-1 rounded">
                      CC
                    </span>
                    <span className="hover:text-white cursor-pointer text-sm">
                      ⚙
                    </span>
                    <span className="hover:text-white cursor-pointer text-sm">
                      ⛶
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
