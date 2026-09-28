import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BIOMAXX — Soluciones Reales para un Mundo en Movimiento",
  description:
    "Conectamos productos, tecnología, industria y oportunidades. Portal principal y landing global del ecosistema BIOMAXX.",
  keywords: [
    "BIOMAXX",
    "Pampa Grill",
    "NaNoDaK",
    "Godial Trading Company",
    "Soluciones industriales",
    "Comercio internacional",
  ],
  authors: [{ name: "BIOMAXX" }],
  openGraph: {
    title: "BIOMAXX — Soluciones Reales para un Mundo en Movimiento",
    description:
      "Impulsamos el desarrollo a través de soluciones innovadoras, comercio internacional y alianzas estratégicas.",
    siteName: "BIOMAXX",
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
