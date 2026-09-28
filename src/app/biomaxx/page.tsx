import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowRightIcon,
  LeafIcon,
  GlobeIcon,
  ShieldIcon,
  GearIcon,
  HandshakeIcon,
  ChartIcon,
} from "@/components/Icons";

function TargetIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function DiamondIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 9-8 9-8-9 8-9z" />
    </svg>
  );
}

function CubeIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function SawIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function SparkIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="3" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="21" y2="12" />
      <line x1="5.64" y1="5.64" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="18.36" y2="18.36" />
      <line x1="5.64" y1="18.36" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="18.36" y2="5.64" />
    </svg>
  );
}

function CogIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function WrenchIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function TruckIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function DocumentIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function PackageIcon({ className = "w-5 h-5 text-[#13783e]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

function CleanBadgeItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 py-1">
      <div className="w-5 h-5 flex items-center justify-center text-[#13783e] shrink-0">
        {icon}
      </div>
      <span className="text-xs font-semibold text-slate-700 leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function BiomaxxCorporatePage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO BIOMAXX CORPORATIVO (Exact Figma Aspect Ratio & Layout Match) */}
        <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 flex items-center min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[460px] max-h-[540px]">
          {/* Panoramic Cargo Ship Hero Image */}
          <div className="absolute inset-0 w-full h-full max-w-[1920px] mx-auto">
            <Image
              src="/images/HERO-PARTE-BLANCA-FFF-.webp"
              alt="Biomaxx industrial hero background"
              fill
              priority
              className="object-cover object-right sm:object-center w-full h-full"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 md:py-14 z-10">
            <div className="max-w-xl text-left">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block mb-2 sm:mb-3">
                SOLUCIONES REALES PARA UN MUNDO EN MOVIMIENTO
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13783e] tracking-tight leading-none mb-2 sm:mb-3">
                BIOMAXX<sup className="text-xl sm:text-2xl font-bold text-[#13783e] ml-0.5">®</sup>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0f294a] leading-snug mb-2 sm:mb-3">
                Conectamos mercados. <br /> Impulsamos tu industria.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 sm:mb-8 max-w-md">
                Importación, exportación y soluciones metalmecánicas para acompañar el crecimiento de tu empresa.
              </p>

              <div>
                <Link
                  href="#soluciones"
                  className="inline-flex items-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all group"
                >
                  <span>Conocé nuestras soluciones</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NUESTRAS SOLUCIONES SECTION */}
        <section className="py-12 md:py-16 bg-white" id="soluciones">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <LeafIcon className="w-7 h-7 text-[#13783e]" />
              <div className="h-6 w-0.5 bg-[#13783e]" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Nuestras <span className="text-[#13783e]">soluciones</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Experiencia industrial y alcance internacional para tu negocio.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: Metalmecánica */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-2 sm:p-3 lg:p-3 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative w-full aspect-[21/9] sm:aspect-video rounded-2xl overflow-hidden mb-3.5 border border-slate-100">
                    <Image
                      src="/images/corporate/home/metalmecanica.webp"
                      alt="Metalmecánica Biomaxx"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="text-[11px] font-bold text-[#13783e] tracking-widest uppercase block mb-1">
                    SOLUCIONES INDUSTRIALES A MEDIDA
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-1.5">
                    Metalmecánica
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    Desarrollo y fabricación de piezas, componentes y soluciones para la industria.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-2">
                    <CleanBadgeItem icon={<TargetIcon />} label="Cortes a medida" />
                    <CleanBadgeItem icon={<DiamondIcon />} label="Pulidos" />
                    <CleanBadgeItem icon={<CubeIcon />} label="Piezas y componentes" />
                    <CleanBadgeItem icon={<SawIcon />} label="Rebabado" />
                    <CleanBadgeItem icon={<SparkIcon />} label="Soldaduras" />
                    <CleanBadgeItem icon={<GearIcon className="w-5 h-5 text-[#13783e]" />} label="Desarrollo a medida" />
                    <CleanBadgeItem icon={<CogIcon />} label="Mecanizados" />
                    <CleanBadgeItem icon={<WrenchIcon />} label="Trabajos especiales" />
                    <CleanBadgeItem icon={<ShieldIcon className="w-5 h-5 text-[#13783e]" />} label="Control de calidad" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13783e] hover:underline group"
                  >
                    <span>Conocer más</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Importación / Exportación */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-2 sm:p-3 lg:p-3 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative w-full aspect-[21/9] sm:aspect-video rounded-2xl overflow-hidden mb-3.5 border border-slate-100">
                    <Image
                      src="/images/corporate/home/import-export.webp"
                      alt="Importación y Exportación Biomaxx"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="text-[11px] font-bold text-[#13783e] tracking-widest uppercase block mb-1">
                    SOLUCIONES GLOBALES PARA TU NEGOCIO
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-1.5">
                    Importación / Exportación
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    Gestión integral de productos, materias primas e insumos para mercados internacionales.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-2">
                    <CleanBadgeItem icon={<GlobeIcon className="w-5 h-5 text-[#13783e]" />} label="Red global" />
                    <CleanBadgeItem icon={<PackageIcon />} label="Provisión a medida" />
                    <CleanBadgeItem icon={<TruckIcon />} label="Logística integral" />
                    <CleanBadgeItem icon={<LeafIcon className="w-5 h-5 text-[#13783e]" />} label="Productos sustentables" />
                    <CleanBadgeItem icon={<DocumentIcon />} label="Gestión aduanera" />
                    <CleanBadgeItem icon={<ChartIcon className="w-5 h-5 text-[#13783e]" />} label="Seguimiento y control" />
                    <CleanBadgeItem icon={<HandshakeIcon className="w-5 h-5 text-[#13783e]" />} label="Negociación internacional" />
                    <CleanBadgeItem icon={<ShieldIcon className="w-5 h-5 text-[#13783e]" />} label="Seguridad en la cadena" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13783e] hover:underline group"
                  >
                    <span>Conocer más</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM SLOGAN BANNER (Matching Figma Image 1 Box Style) */}
        <section className="py-8 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f0f5f2] rounded-2xl p-6 lg:px-10 lg:py-7 flex flex-col md:flex-row items-center justify-between gap-4 border border-emerald-50/50 shadow-xs relative overflow-hidden">
              {/* Main Slogan with Leaf Icon */}
              <div className="flex items-center gap-3.5 z-10">
                <LeafIcon className="w-8 h-8 text-[#13783e] shrink-0" />
                <div className="h-7 w-0.5 bg-[#13783e] hidden sm:block" />
                <p className="text-lg lg:text-2xl font-bold text-slate-800 tracking-tight">
                  Conectamos{" "}
                  <span className="font-extrabold text-[#13783e]">
                    productos, tecnología y conocimiento.
                  </span>
                </p>
              </div>

              {/* Side Tagline */}
              <div className="flex items-center gap-6 z-10">
                <div className="hidden md:block h-8 w-px bg-slate-300/70" />
                <span className="text-xs uppercase font-bold tracking-widest text-[#13783e] text-center md:text-right leading-tight">
                  MÁS QUE NEGOCIOS. <br className="hidden md:inline" />
                  OPORTUNIDADES REALES.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
