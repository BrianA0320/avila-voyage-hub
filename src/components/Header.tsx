import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-3">
              AE
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Avila Explorer</h1>
              <p className="text-xs text-muted-foreground">¡Vive la aventura!</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('excursiones')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Excursiones
            </button>
            <button 
              onClick={() => scrollToSection('por-que-elegirnos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              ¿Por qué elegirnos?
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 809 123 4567</span>
            </div>
            <Button 
              size="sm" 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open('https://wa.me/18091234567', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;