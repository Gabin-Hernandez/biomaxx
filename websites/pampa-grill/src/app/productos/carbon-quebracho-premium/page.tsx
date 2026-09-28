import React from "react";
import { PAMPA_PRODUCTS } from "@/config/pampa-config";
import { ProductDetailView } from "@/components/ProductDetailView";

export default function CarbonPage() {
  const product = PAMPA_PRODUCTS.find((p) => p.slug === "carbon-quebracho-premium")!;
  return <ProductDetailView product={product} />;
}
