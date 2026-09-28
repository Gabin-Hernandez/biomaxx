import React from "react";
import { PAMPA_PRODUCTS } from "@/config/pampa-config";
import { ProductDetailView } from "@/components/ProductDetailView";

export default function BriquetasPage() {
  const product = PAMPA_PRODUCTS.find((p) => p.slug === "briquetas-quebracho-blanco")!;
  return <ProductDetailView product={product} />;
}
