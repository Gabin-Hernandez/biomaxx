"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-6 h-6 text-[#0047ba]"} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.8L18.2 12 12 18.2 5.8 12 12 5.8z" />
    </svg>
  );
}

export function DyneemaVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* INLINE VIDEO CTA SECTION */}
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#e9f5f6] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#cce7eb]/70 shadow-xs">
            {/* Left Info Column */}
            <div className="w-full md:w-5/12 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0047ba] block">
                VIDEO
              </span>

              <div className="flex items-center gap-3">
                <DiamondIcon className="w-9 h-9 text-[#0047ba] shrink-0" />
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0047ba]">
                  Dyneema<sup className="text-lg font-bold text-[#0047ba] ml-0.5">®</sup>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tecnología que protege
              </h3>
            </div>

            {/* Right Video Container */}
            <div className="w-full md:w-7/12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-300/60 bg-slate-900 group">
                {!isPlaying ? (
                  <>
                    <Image
                      src="/images/dyneema/rollo-tejido-dynema.webp"
                      alt="Dyneema® Video Preview"
                      fill
                      className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay Center Watermark & Play Icon */}
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      aria-label="Reproducir video inline"
                      className="absolute inset-0 bg-black/25 hover:bg-black/35 transition-all flex flex-col items-center justify-center gap-3 p-4 w-full h-full cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white shadow-sm">
                        <DiamondIcon className="w-6 h-6 text-[#0047ba]" />
                        <span className="text-xl font-black text-white tracking-tight">
                          Dyneema<sup className="text-xs ml-0.5">®</sup>
                        </span>
                      </div>

                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center shadow-xl border border-white/30 transition-transform transform hover:scale-110">
                        <svg className="w-7 h-7 ml-1 fill-current text-white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>

                    {/* Video Control Bar */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 flex items-center gap-3 text-white text-xs font-mono z-10 pointer-events-auto">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(true)}
                        aria-label="Reproducir video"
                        className="hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>

                      <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden relative cursor-pointer" onClick={() => setIsPlaying(true)}>
                        <div className="w-[12%] h-full bg-[#0047ba] rounded-full" />
                      </div>

                      <span className="text-[11px] text-white/90 font-sans font-medium">0:08 / 4:46</span>

                      <div className="flex items-center gap-2.5 text-white/80 shrink-0">
                        {/* Fullscreen Modal trigger button */}
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          aria-label="Ver video en pantalla completa"
                          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-[11px] font-sans"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                          </svg>
                          <span className="hidden sm:inline">Pantalla completa</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src="/videos/dyneema.mp4"
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      aria-label="Ampliar video en modal"
                      className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg border border-white/20 transition-all z-20"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN / MODAL VIDEO PLAYER */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <DiamondIcon className="w-7 h-7 text-[#0047ba]" />
                <span className="text-lg font-black text-white tracking-tight">
                  Dyneema<sup className="text-xs ml-0.5">®</sup> - Tecnología que protege
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar reproductor"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Modal Video Player Body */}
            <div className="relative w-full aspect-[16/9] bg-black">
              <video
                src="/videos/dyneema.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
