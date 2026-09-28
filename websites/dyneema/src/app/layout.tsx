import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dyneema® — Tecnología Balística y Fibras de Alto Rendimiento | BIOMAXX",
  description:
    "Fibra de polietileno de ultra alto peso molecular (UHMWPE) utilizada en chalecos antibalas, cascos balísticos, guantes y soluciones de protección personal.",
  keywords: [
    "Dyneema",
    "Tecnología Balística",
    "Chaleco balístico",
    "UHMWPE",
    "Godial Trading Company",
    "BIOMAXX",
    "Protección balística",
  ],
  authors: [{ name: "Dyneema / Godial Trading Company" }],
  openGraph: {
    title: "Dyneema® — Tecnología Balística y Fibras de Alto Rendimiento",
    description:
      "Protección balística de alto rendimiento, hasta un 40% más liviano que alternativas tradicionales.",
    siteName: "Dyneema®",
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
