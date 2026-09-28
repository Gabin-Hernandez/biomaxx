import React from "react";
import { PAMPA_PRODUCTS } from "@/config/pampa-config";
import { ProductDetailView } from "@/components/ProductDetailView";

export default function PelletsPage() {
  const product = PAMPA_PRODUCTS.find((p) => p.slug === "pellets-quebracho-colorado")!;
  return <ProductDetailView product={product} />;
}
