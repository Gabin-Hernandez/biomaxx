import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BusinessUnitsGrid } from "@/components/BusinessUnitsGrid";
import { SloganBanner } from "@/components/SloganBanner";
import { NavigationCards } from "@/components/NavigationCards";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      <main className="flex-grow space-y-4 pb-12">
        <Hero />
        <BusinessUnitsGrid />
        <SloganBanner />
        <NavigationCards />
      </main>

      <Footer />
    </div>
  );
}
