import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/config/biomaxx-config";
import { LeafIcon, ArrowRightIcon, GenericBadgeIcon } from "@/components/Icons";

export default function Home() {
  const { homeSolutions } = SITE_CONFIG;

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO HOME (Full width background with slanted polygon left overlay) */}
        <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center bg-gray-50">
          {/* Background image composition */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/home/hero.png"
              alt="Biomaxx Port Cargo Ship background composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            {/* Slanted gradient/overlay on left side for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:w-2/3 lg:w-7/12" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
            <div className="max-w-xl lg:max-w-2xl text-left">
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0d5c2e] tracking-tight mb-2">
                BIOMAXX
              </h1>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                Conectamos mercados. <br className="hidden sm:block" />
                Impulsamos tu industria.
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-8 max-w-lg">
                Importación, exportación y soluciones metalmecánicas para acompañar el crecimiento de tu empresa.
              </p>

              <div>
                <Link
                  href="#soluciones"
                  className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Conocé nuestras soluciones</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestras Soluciones Section */}
        <section className="py-12 md:py-16 bg-white" id="soluciones">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center text-[#13783e] shrink-0">
                <LeafIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Nuestras <span className="text-[#13783e]">soluciones</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Experiencia industrial y alcance internacional para tu negocio.
                </p>
              </div>
            </div>

            {/* 2 Large Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {homeSolutions.map((sol) => (
                <div
                  key={sol.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative w-full aspect-16/9 bg-gray-100 overflow-hidden">
                      <Image
                        src={sol.image}
                        alt={sol.title}
                        fill
                        unoptimized
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase block mb-1">
                        {sol.tag}
                      </span>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {sol.description}
                      </p>

                      {/* 8/9 Badges Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {sol.badges.map((badge, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100"
                          >
                            <GenericBadgeIcon name={badge.icon} className="w-4 h-4 text-[#13783e] shrink-0" />
                            <span className="text-xs font-semibold text-gray-800">
                              {badge.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={sol.linkHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#13783e] hover:text-[#0d5c2e] transition-colors"
                    >
                      <span>Conocer más</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SloganBanner />
      </main>

      <Footer />
    </div>
  );
}
