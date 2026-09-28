import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIOMAXX® - Soluciones Reales Para Un Mundo En Movimiento",
  description:
    "Importación, exportación y soluciones metalmecánicas para acompañar el crecimiento de tu empresa. Conectamos mercados. Impulsamos tu industria.",
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
