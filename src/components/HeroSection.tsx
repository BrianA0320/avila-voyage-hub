import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Aventura en Buggie
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Descubre la República Dominicana de una manera única. Playas cristalinas, cuevas misteriosas y la auténtica cultura dominicana te esperan.
        </p>
        <Button 
          onClick={scrollToReservation}
          size="lg" 
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          ¡Reserva Ahora!
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;