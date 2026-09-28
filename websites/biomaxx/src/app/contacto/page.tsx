"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SendIcon } from "@/components/Icons";

const CONTACTO_DATA = {
  email: "info@biomaxx.com",
  phone: "+54 9 11 1234 5678",
  officeLine1: "Buenos Aires, Argentina",
  officeLine2: "Operaciones internacionales",
  scheduleLine1: "Lunes a Viernes",
  scheduleLine2: "9:00 a 18:00 (GMT-3)",
};

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-1">
        {/* HERO CONTACTO */}
        <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center bg-[#07361b]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/corporate/contacto/hero.png"
              alt="Biomaxx Contact port background composition"
              fill
              priority
              unoptimized
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07361b] via-[#07361b]/90 to-transparent md:w-2/3 lg:w-1/2" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
            <div className="max-w-xl text-left">
              <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
                CONTACTO
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
                Contacto
              </h1>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                Estamos para asesorarte, responder tus preguntas y ayudarte a encontrar la mejor solución para tu negocio.
              </p>
            </div>
          </div>
        </section>

        {/* Form and Contact Info Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Box */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
                <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase block mb-1">
                  ENVIANOS UN MENSAJE
                </span>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                  Completa el formulario
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">
                  Nos pondremos en contacto contigo a la brevedad.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                    <h3 className="text-lg font-bold text-[#13783e] mb-2">¡Consulta enviada exitosamente!</h3>
                    <p className="text-sm text-gray-700">Muchas gracias por contactarte con BIOMAXX. Te responderemos a la brevedad.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Tu nombre completo"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#13783e]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Empresa
                        </label>
                        <input
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#13783e]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="tu@empresa.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#13783e]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Teléfono
                        </label>
                        <input
                          type="text"
                          placeholder="+54 9 11 1234 5678"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#13783e]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Asunto *
                      </label>
                      <select
                        required
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#13783e]"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="metalmecanica">Consulta sobre Metalmecánica</option>
                        <option value="import-export">Consulta sobre Importación / Exportación</option>
                        <option value="comercial">Alianzas comerciales</option>
                        <option value="otro">Otro motivo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Mensaje *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#13783e]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#13783e] hover:bg-[#0d5c2e] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer"
                    >
                      <SendIcon className="w-4 h-4" />
                      <span>Enviar consulta →</span>
                    </button>

                    <p className="text-[11px] text-gray-400 text-center mt-2">
                      🔒 Tus datos están protegidos. Solo serán utilizados para responder tu consulta.
                    </p>
                  </form>
                )}
              </div>

              {/* Info Box */}
              <div className="lg:col-span-5 bg-[#f0f7f2] p-6 sm:p-8 rounded-2xl border border-[#d8ebe0] shadow-xs">
                <span className="text-xs font-bold tracking-widest text-[#13783e] uppercase block mb-1">
                  NUESTROS DATOS
                </span>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Estamos para asesorarte
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                  Si tienes preguntas sobre nuestros productos, servicios o quieres explorar oportunidades comerciales, no dudes en contactarnos.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#13783e] shrink-0">
                      📧
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-700 block">Correo electrónico</span>
                      <a href={`mailto:${CONTACTO_DATA.email}`} className="text-sm font-bold text-[#13783e] hover:underline">
                        {CONTACTO_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#13783e] shrink-0">
                      📞
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-700 block">Teléfono</span>
                      <span className="text-sm font-bold text-[#13783e]">
                        {CONTACTO_DATA.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#13783e] shrink-0">
                      📍
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-700 block">Oficinas</span>
                      <span className="text-xs text-gray-600 block">{CONTACTO_DATA.officeLine1}</span>
                      <span className="text-xs text-gray-500 block">{CONTACTO_DATA.officeLine2}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#13783e] shrink-0">
                      🕒
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-700 block">Horario de atención</span>
                      <span className="text-xs text-gray-600 block">{CONTACTO_DATA.scheduleLine1}</span>
                      <span className="text-xs text-gray-500 block">{CONTACTO_DATA.scheduleLine2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
