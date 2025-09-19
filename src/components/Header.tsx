import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import goldenPassLogo from "@/assets/golden-pass-logo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">{/* Logo */}
          <div className="flex items-center">
            <img 
              src={goldenPassLogo} 
              alt="Golden Pass Travel Logo" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-card-foreground">Golden Pass Travel</h1>
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
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
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
              <span className="text-sm font-medium">809-498-6352</span>
            </div>
            <Button 
              size="sm" 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open('https://wa.me/18094986352', '_blank')}
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