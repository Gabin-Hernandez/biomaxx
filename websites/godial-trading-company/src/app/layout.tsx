import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Godial Trading Company — Licencias, Importación y Exportación | BIOMAXX",
  description:
    "Especializada en licencias de marcas internacionales, importaciones y exportaciones para la Argentina y el mundo. Unidad de negocio de BIOMAXX.",
  keywords: [
    "Godial Trading Company",
    "BIOMAXX",
    "Dyneema",
    "NORAM SX",
    "Importaciones",
    "Exportaciones",
    "Marcas internacionales",
  ],
  authors: [{ name: "Godial Trading Company" }],
  openGraph: {
    title: "Godial Trading Company — Licencias, Importación y Exportación",
    description:
      "Desarrollamos oportunidades de crecimiento a través de alianzas estratégicas y productos de alto valor.",
    siteName: "Godial Trading Company",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
