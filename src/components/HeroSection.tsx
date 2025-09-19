import { Button } from "@/components/ui/button";
import buggyBg from "@/assets/buggy-hero-bg.jpg";

const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExcursiones = () => {
    const element = document.getElementById('excursiones');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Buggy background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${buggyBg})`,
          filter: 'blur(3px)',
          transform: 'scale(1.1)'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          ¡Vive la aventura,<br />
          <span className="text-primary">descubre el paraíso!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Excursiones extremas, acuáticas y paradisíacas en República Dominicana. Tu próxima aventura te está esperando.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToExcursiones}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explora Ahora →
          </Button>
          <Button 
            onClick={scrollToReservation}
            variant="outline"
            size="lg" 
            className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            Reservar Aventura
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/80 text-sm mb-2">Descubre más</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
      
      {/* Ocean wave decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;