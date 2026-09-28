import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/config/biomaxx-config";
import { GenericBadgeIcon, ArrowRightIcon } from "@/components/Icons";

export default function LegalesPage() {
  const { legalesCards } = SITE_CONFIG;

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO LEGALES (Full width background with slanted white overlay) */}
        <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/legales/hero.png"
              alt="Biomaxx Legal office background composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:w-2/3 lg:w-7/12" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
            <div className="hidden lg:block absolute top-8 right-8 text-right font-black tracking-widest text-gray-400/70 text-xs uppercase max-w-[220px] leading-snug">
              INTEGRIDAD SOLUCIONES PERSONAS UN MUNDO MEJOR
              <div className="mt-2 text-[10px] text-gray-400">INDUSTRIA GLOBAL. OPORTUNIDADES REALES.</div>
            </div>

            <div className="max-w-xl lg:max-w-2xl text-left">
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0d5c2e] tracking-tight mb-2">
                Legales
              </h1>

              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
                Información legal, privacidad y condiciones de uso.
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium max-w-lg">
                Transparencia, integridad y cumplimiento en todo lo que hacemos. Ponemos a tu disposición la información legal de BIOMAXX para una relación clara y confiable.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Legal Cards Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {legalesCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#13783e] mb-4 shrink-0">
                      <GenericBadgeIcon name={card.icon} className="w-6 h-6 text-[#13783e]" />
                    </div>

                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {card.title}
                    </h3>

                    {card.isCustomContent ? (
                      <div className="space-y-2 text-xs text-gray-600 font-medium">
                        <p className="font-bold text-gray-900 text-sm">{card.company}</p>
                        <p>{card.cuit}</p>
                        <p>{card.address}</p>
                        <p>
                          Email:{" "}
                          <a href={`mailto:${card.email}`} className="text-[#13783e] font-bold hover:underline">
                            {card.email}
                          </a>
                        </p>
                        <p>Tel.: {card.phone}</p>
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    )}
                  </div>

                  {card.linkText && (
                    <div className="mt-6 pt-3 border-t border-gray-200/60">
                      <Link
                        href="#contacto"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13783e] hover:text-[#0d5c2e] transition-colors"
                      >
                        <span>{card.linkText}</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
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
