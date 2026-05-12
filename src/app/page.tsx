import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import DiningExperienceSection from "@/components/sections/DiningExperienceSection";
import DishCarouselSection from "@/components/sections/DishCarouselSection";
import FounderVisionSection from "@/components/sections/FounderVisionSection";
import GuestReviewsSection from "@/components/sections/GuestReviewsSection";
import KeralaCultureSection from "@/components/sections/KeralaCultureSection";
import KeralaTableHero from "@/components/sections/KeralaTableHero";
import ReservationCTASection from "@/components/sections/ReservationCTASection";
import SadyaExperienceSection from "@/components/sections/SadyaExperienceSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <KeralaTableHero />
        <KeralaCultureSection />
        <SadyaExperienceSection />
        <DishCarouselSection />
        <DiningExperienceSection />
        <FounderVisionSection />
        <GuestReviewsSection />
        <ReservationCTASection />
      </main>
      <Footer />
    </>
  );
}
