"use client";

import React, { useState, useEffect } from "react";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-6 h-6 fill-current"} viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001l-1.415 5.169 5.293-1.387c1.46.797 3.109 1.217 4.776 1.218h.004c5.505 0 9.988-4.478 9.99-9.984 0-2.668-1.039-5.176-2.924-7.062-1.886-1.887-4.393-2.939-7.066-2.939zm6.012 14.288c-.255.719-1.282 1.315-1.782 1.369-.459.049-1.045.074-3.084-.754-2.607-1.06-4.288-3.708-4.417-3.882-.129-.174-1.053-1.401-1.053-2.671 0-1.27.666-1.895.903-2.152.237-.257.516-.322.688-.322.172 0 .344.002.495.009.159.007.373-.06.584.446.215.517.731 1.785.795 1.915.065.129.108.28.022.452-.086.172-.129.28-.258.431-.129.151-.271.337-.387.452-.129.129-.264.269-.114.527.151.258.671 1.107 1.44 1.792.989.88 1.82 1.153 2.078 1.282.258.129.409.108.56-.065.151-.172.645-.753.817-1.011.172-.258.344-.215.581-.129.237.086 1.505.71 1.763.839.258.129.43.194.495.301.065.108.065.625-.19 1.344z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    // Trigger pulse effect once every 2 minutes (120,000 ms) for 2 seconds
    const interval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => {
        setShowPulse(false);
      }, 2000);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5491151268576"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat por WhatsApp con BIOMAXX"
        className="group relative inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 leading-none"
      >
        {/* WhatsApp Icon centered */}
        <WhatsAppIcon className="w-6 h-6 fill-current text-white shrink-0" />
        
        <span className="hidden sm:inline font-bold text-sm tracking-wide text-white leading-none">
          WhatsApp
        </span>

        {/* Pulse Glow Ring - Triggered only once every 2 minutes */}
        {showPulse && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 -z-10 animate-ping opacity-75 pointer-events-none" />
        )}
      </a>
    </aside>
  );
}
