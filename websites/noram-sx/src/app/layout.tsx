import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORAM SX® - Acero Inoxidable Especial | Godial Trading Company",
  description:
    "NORAM SX® es un acero inoxidable de alta performance desarrollado para trabajar en ambientes altamente corrosivos, especialmente en plantas de ácido nítrico y procesos químicos.",
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
