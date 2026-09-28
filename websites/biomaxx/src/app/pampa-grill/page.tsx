import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const PAMPA_PRODUCTS = [
  {
    id: "pellets-quebracho-colorado",
    slug: "pellets-quebracho-colorado",
    title: "Pellets de quebracho colorado premium blend",
    categoryTag: "PELLETS DE QUEBRACHO",
    homeDescription: "Pellets de quebracho colorado, sabor ahumado auténtico y alto rendimiento.",
    packImage: "/images/pampa/pellets/medidas.png",
  },
  {
    id: "carbon-quebracho-premium",
    slug: "carbon-quebracho-premium",
    title: "Carbón de quebracho premium",
    categoryTag: "CARBÓN DE QUEBRACHO",
    homeDescription: "Carbón de quebracho blanco argentino, máximo poder calorífico y larga duración.",
    packImage: "/images/pampa/carbon/empaque.png",
  },
  {
    id: "grill-torch",
    slug: "grill-torch",
    title: "Disco de carbón vegetal",
    categoryTag: "GRILL TORCH",
    homeDescription: "Disco de carbón vegetal de quebracho blanco con pizca de quebracho colorado.",
    packImage: "/images/pampa/grill-torch/medidas.png",
  },
  {
    id: "briquetas-quebracho-blanco",
    slug: "briquetas-quebracho-blanco",
    title: "Briquetas premium blanco",
    categoryTag: "BRIQUETAS DE QUEBRACHO",
    homeDescription: "Briquetas de quebracho blanco, máxima duración y calor constante.",
    packImage: "/images/pampa/briquetas/empaque.png",
  },
];

export default function PampaGrillPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO PAMPA GRILL (Full width panoramic hero) */}
        <section className="relative w-full overflow-hidden min-h-[220px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px] bg-white flex items-center">
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
            <Image
              src="/images/pampa/hero.png"
              alt="Pampa Grill BBQ panoramic composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            {/* Clickable CTA overlay covering button region on image */}
            <Link
              href="#productos"
              className="absolute left-[4%] bottom-[12%] w-[20%] h-[15%] max-w-[220px] z-10 cursor-pointer"
              aria-label="Conocé la línea Pampa Grill"
            />
          </div>
        </section>

        {/* Nuestra Línea Pampa Grill Section */}
        <section className="py-12 md:py-16 bg-white" id="productos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase">
                  NUESTRA LÍNEA PAMPA GRILL
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
                  Todo lo que necesitás para una experiencia única.
                </h2>
              </div>
              <div className="hidden lg:block text-xs font-bold tracking-widest text-gray-400 uppercase">
                FUEGO NATURAL | SABOR AUTÉNTICO | ORIGEN ARGENTINO
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PAMPA_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-5 items-stretch"
                >
                  <div className="relative w-full sm:w-1/2 aspect-4/3 sm:aspect-auto min-h-[160px] sm:min-h-[190px] rounded-xl overflow-hidden bg-white shrink-0 border border-gray-200/50">
                    <Image
                      src={product.packImage}
                      alt={product.title}
                      fill
                      unoptimized
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                        {product.categoryTag}
                      </span>
                      <h3 className="text-lg font-extrabold text-gray-900 leading-snug mb-2">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {product.homeDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200/60">
                      <Link
                        href={`/pampa-grill/productos/${product.slug}`}
                        className="inline-flex items-center text-xs font-bold text-[#13783e] hover:text-[#0d5c2e] transition-colors group"
                      >
                        <span>Conocer producto</span>
                        <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
