import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site-config";

export function Footer() {
  const { footer } = SITE_CONFIG;

  return (
    <footer className="bg-[#18222a] text-gray-300 py-12 border-t border-slate-800" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-800">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black tracking-tight text-white">
                {footer.logoText}
              </span>
              <span className="text-xs font-semibold text-emerald-400 align-top">
                {footer.registeredSymbol}
              </span>
              <svg
                className="w-5 h-5 text-emerald-400 -ml-2 -mt-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 8C8 10 5.5 16.5 3 22C3 22 3.5 10.5 12 5C17 2 21 2 21 2S21 5 17 8Z" />
              </svg>
            </div>
            <span className="text-xs tracking-wider text-gray-400 font-medium mt-1">
              {footer.slogan}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {footer.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 text-center text-xs text-gray-500">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
