import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaNoDak® - Soluciones en Tela No Tejida y Textiles Industriales | BIOMAXX",
  description:
    "Soluciones textiles industriales con calidad confiable, innovación y desarrollo técnico para múltiples aplicaciones: Corduras y lonas, Geomembranas, Ecocuero, Pisos de alto tránsito y Delantales de PVC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
