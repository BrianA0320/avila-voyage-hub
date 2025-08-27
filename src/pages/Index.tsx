import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TourIncludes from "@/components/TourIncludes";
import Gallery from "@/components/Gallery";
import ReservationForm from "@/components/ReservationForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TourIncludes />
      <Gallery />
      <ReservationForm />
    </div>
  );
};

export default Index;
