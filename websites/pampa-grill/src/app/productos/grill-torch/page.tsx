import React from "react";
import { PAMPA_PRODUCTS } from "@/config/pampa-config";
import { ProductDetailView } from "@/components/ProductDetailView";

export default function GrillTorchPage() {
  const product = PAMPA_PRODUCTS.find((p) => p.slug === "grill-torch")!;
  return <ProductDetailView product={product} />;
}
