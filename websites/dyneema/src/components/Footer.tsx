import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import {
  LeafIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
} from "./Icons";

export function Footer() {
  return (
    <footer className="bg-[#141715] text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Block: Logo + Slogan */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-1.5">
              <LeafIcon className="w-5 h-5 text-[#008d36]" />
              <span className="text-xl font-extrabold tracking-tight text-white">
                BIOMAXX
              </span>
              <span className="text-[10px] font-bold text-[#008d36] align-super">
                ®
              </span>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            <span className="text-xs tracking-wider uppercase font-semibold text-slate-400">
              {siteConfig.footerSlogan}
            </span>
          </div>

          {/* Right Block: Navigation + Social + Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 text-center">
            {/* Links */}
            <nav className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-300">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors ${
                    link.active
                      ? "text-white font-bold underline underline-offset-4 decoration-[#008d36]"
                      : "hover:text-emerald-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <span className="hidden md:inline text-slate-700">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>

            <span className="hidden md:inline text-slate-700">|</span>

            {/* Copyright */}
            <span className="text-xs text-slate-400">
              {siteConfig.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
