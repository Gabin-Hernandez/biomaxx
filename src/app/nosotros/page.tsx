import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/Icons";

const NOSOTROS_VALUES = [
  {
    title: "Misión",
    image: "/images/corporate/nosotros/mision.webp",
    description:
      "Impulsar el desarrollo a través de soluciones innovadoras, comercio internacional y alianzas estratégicas, generando valor sostenible para un mundo en movimiento.",
  },
  {
    title: "Visión",
    image: "/images/corporate/nosotros/vision.webp",
    description:
      "Ser un referente global en soluciones industriales sostenibles, reconocidos por nuestra integridad, innovación y por el impacto positivo en las comunidades y el medio ambiente.",
  },
  {
    title: "Valores",
    image: "/images/corporate/nosotros/valores.webp",
    items: [
      "Integridad",
      "Innovación",
      "Sostenibilidad",
      "Colaboración",
      "Orientación a resultados",
    ],
  },
];

const CLIENT_LOGOS = [
  { name: "Chedraui", image: "/images/corporate/nosotros/clientes/1.webp" },
  { name: "Smart & Final", image: "/images/corporate/nosotros/clientes/2.webp" },
  { name: "Metropol", image: "/images/corporate/nosotros/clientes/3.webp" },
  { name: "Arcor", image: "/images/corporate/nosotros/clientes/4.webp" },
  { name: "FM", image: "/images/corporate/nosotros/clientes/5.webp" },
  { name: "Euroswiss", image: "/images/corporate/nosotros/clientes/6.webp" },
  { name: "Prysmian", image: "/images/corporate/nosotros/clientes/7.webp" },
];

export default function NosotrosPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO NOSOTROS (Full width background with slanted white overlay) */}
        <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/corporate/nosotros/hero.webp"
              alt="Biomaxx Corporate Headquarters background composition"
              fill
              priority
              className="object-cover object-center w-full h-full"
            />
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
                Más que negocios, <br className="hidden sm:block" />
                <span className="text-[#13783e]">un compromiso con el futuro.</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-8 max-w-lg">
                Somos una empresa global que conecta productos, tecnología, industria y conocimiento para impulsar un desarrollo más sostenible, generando valor real para las personas, las industrias y el planeta.
              </p>

              <div>
                <Link
                  href="#mision"
                  className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Conocé más</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Values Cards Section */}
        <section className="py-12 md:py-16 bg-white" id="mision">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {NOSOTROS_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-16/9 bg-gray-100 overflow-hidden">
                      <Image
                        src={val.image}
                        alt={val.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                        {val.title}
                      </h3>
                      {val.description && (
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                          {val.description}
                        </p>
                      )}
                      {val.items && (
                        <ul className="space-y-2 mt-2">
                          {val.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                              <CheckCircleIcon className="w-4 h-4 text-[#13783e] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestros Clientes Section */}
        <section className="py-12 bg-gray-50/80 border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                Nuestros <span className="text-[#13783e]">clientes</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Construimos relaciones de largo plazo con compañías que comparten nuestra visión.
              </p>
            </div>

            {/* 7 Logos Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center">
              {CLIENT_LOGOS.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-20"
                >
                  <div className="relative w-full h-12">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
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
