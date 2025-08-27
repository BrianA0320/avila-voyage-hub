import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TourIncludes from "@/components/TourIncludes";
import ReservationForm from "@/components/ReservationForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TourIncludes />
      <ReservationForm />
    </div>
  );
};

export default Index;
