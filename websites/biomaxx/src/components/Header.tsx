"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { LeafIcon, MenuIcon, CloseIcon } from "./Icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Subtitle */}
          <Link href="/" className="flex flex-col group">
            <div className="flex items-center gap-1.5">
              <LeafIcon className="w-6 h-6 text-[#008d36]" />
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                BIOMAXX
              </span>
              <span className="text-xs font-bold text-[#008d36] align-super">®</span>
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-[#008d36] mt-0.5">
              {siteConfig.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {siteConfig.navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#008d36] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#008d36] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#008d36] focus:outline-none"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white space-y-2">
            {siteConfig.navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-[#008d36] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-[#008d36] rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
