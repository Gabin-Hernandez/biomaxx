import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductsGrid } from "@/components/ProductsGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductsGrid />
        <FeaturesSection />
        <SloganBanner />
      </main>
      <Footer />
    </div>
  );
}
