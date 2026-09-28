import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PresentationAndBrands } from "@/components/PresentationAndBrands";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="flex-grow space-y-2 pb-10">
        <Hero />
        <PresentationAndBrands />
        <SloganBanner />
      </main>

      <Footer />
    </div>
  );
}
