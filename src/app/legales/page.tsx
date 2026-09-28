import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GenericBadgeIcon, ArrowRightIcon } from "@/components/Icons";

const LEGALES_CARDS = [
  {
    title: "Términos y condiciones",
    description:
      "El uso de este sitio web y de nuestros servicios implica la aceptación de los presentes términos y condiciones. Estos términos regulan el acceso, navegación y uso de la información, productos y servicios de BIOMAXX, estableciendo las responsabilidades de los usuarios y de la empresa.",
    linkText: "Leer términos y condiciones",
    icon: "document",
  },
  {
    title: "Política de privacidad",
    description:
      "En BIOMAXX cuidamos la información personal de nuestros usuarios, clientes y colaboradores. Esta política describe cómo recopilamos, utilizamos, protegemos y tratamos sus datos personales, de acuerdo con la normativa vigente en materia de protección de datos.",
    linkText: "Leer política de privacidad",
    icon: "lock",
  },
  {
    title: "Política de cookies",
    description:
      "Este sitio utiliza cookies para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenidos. Podés configurar tus preferencias de cookies en cualquier momento. Al continuar navegando, aceptás el uso de cookies de acuerdo con nuestra política.",
    linkText: "Leer política de cookies",
    icon: "cookie",
  },
  {
    title: "Propiedad intelectual",
    description:
      "Todos los contenidos de este sitio web, incluidos textos, imágenes, logotipos, diseños, marcas y demás materiales, son propiedad de BIOMAXX o de sus respectivos titulares. Queda prohibida su reproducción, distribución o uso no autorizado sin el consentimiento previo y por escrito.",
    linkText: "Más información",
    icon: "lightbulb",
  },
  {
    title: "Datos societarios y contacto legal",
    isCustomContent: true,
    company: "BIOMAXX S.A.",
    cuit: "CUIT: 30-12345678-9",
    address: "Domicilio legal: Av. del Progreso 1234, Piso 7 C1000AAU, Buenos Aires, Argentina.",
    email: "legales@biomaxx.com",
    phone: "+54 11 5234-5678",
    icon: "building",
  },
  {
    title: "Última actualización",
    description:
      "Esta información fue actualizada por última vez el 15 de abril de 2024. Nos reservamos el derecho de modificar estos documentos en cualquier momento. Te recomendamos revisarlos periódicamente.",
    icon: "calendar",
  },
];

export default function LegalesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO LEGALES */}
        <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center bg-gray-50">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/corporate/legales/hero.png"
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
              {LEGALES_CARDS.map((card, idx) => (
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
                        href="/contacto"
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
      </main>

      <Footer />
    </div>
  );
}
