import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { UsersIcon, MailIcon, ChevronRightIcon } from "./Icons";

export function NavigationCards() {
  const { nosotros, contacto } = siteConfig.sectionCards;

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nosotros Card */}
          <Link
            id="nosotros"
            href={nosotros.href}
            className="bg-[#f4f7f5] hover:bg-[#ebf2ee] rounded-2xl p-6 lg:p-7 flex items-center justify-between border border-slate-100 transition-all shadow-xs group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-[#008d36] shrink-0 group-hover:bg-[#008d36] group-hover:text-white transition-colors">
                <UsersIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#008d36] transition-colors">
                  {nosotros.title}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {nosotros.subtitle}
                </p>
              </div>
            </div>

            <div className="text-[#008d36] group-hover:translate-x-1 transition-transform">
              <ChevronRightIcon className="w-6 h-6" />
            </div>
          </Link>

          {/* Contacto Card */}
          <Link
            id="contacto"
            href={contacto.href}
            className="bg-[#f4f7f5] hover:bg-[#ebf2ee] rounded-2xl p-6 lg:p-7 flex items-center justify-between border border-slate-100 transition-all shadow-xs group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-[#008d36] shrink-0 group-hover:bg-[#008d36] group-hover:text-white transition-colors">
                <MailIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#008d36] transition-colors">
                  {contacto.title}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {contacto.subtitle}
                </p>
              </div>
            </div>

            <div className="text-[#008d36] group-hover:translate-x-1 transition-transform">
              <ChevronRightIcon className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
