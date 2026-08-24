import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionsStrip from "@/components/SectionsStrip";
import Features from "@/components/Features";
import ScreensSlider from "@/components/ScreensSlider";
import ThemeShowcase from "@/components/ThemeShowcase";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionsStrip />
        <Features />
        <ScreensSlider />
        <ThemeShowcase />
        <Pricing />
        <Faq />
        <CtaBanner />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
