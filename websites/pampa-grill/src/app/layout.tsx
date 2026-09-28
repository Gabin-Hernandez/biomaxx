import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pampa Grill® - La Línea Premium para Vivir el Fuego al Máximo | BIOMAXX",
  description:
    "Carbón, briquetas, pellets y accesorios de origen natural, pensados para una experiencia auténtica de cocción: Pellets de quebracho colorado, Grill Torch, Briquetas de quebracho blanco y Carbón de quebracho premium.",
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
