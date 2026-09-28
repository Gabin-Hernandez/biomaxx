"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site-config";
import { MenuIcon, CloseIcon } from "./Icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { header } = SITE_CONFIG;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Slogan */}
          <Link href="/" className="flex flex-col justify-center group">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {/* Green Leaf Emblem styled like BIOMAXX logo */}
                <span className="text-2xl font-black tracking-tight text-[#0d5c2e]">
                  BIOMAXX
                </span>
                <span className="text-xs font-semibold text-[#0d5c2e] align-top ml-0.5">
                  {header.registeredSymbol}
                </span>
                {/* Leaf graphic over the X */}
                <svg
                  className="w-5 h-5 text-[#40a835] -ml-2 -mt-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 8C8 10 5.5 16.5 3 22C3 22 3.5 10.5 12 5C17 2 21 2 21 2S21 5 17 8Z" />
                </svg>
              </div>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-gray-500 font-medium -mt-0.5">
              {header.slogan}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-gray-700">
            {header.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition-colors duration-150 ${
                  link.active
                    ? "text-gray-900 font-semibold border-b-2 border-[#13783e]"
                    : "hover:text-[#13783e]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {header.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.active
                  ? "bg-emerald-50 text-[#13783e] font-semibold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
