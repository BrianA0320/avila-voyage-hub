import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Star, Shield, Clock, Users } from "lucide-react";

const TourIncludes = () => {
  const tours = [
    {
      id: 1,
      title: "Tours en Buggy",
      description: "Aventuras todo terreno por los paisajes más espectaculares de República Dominicana",
      price: "Desde $75",
      image: "https://images.unsplash.com/photo-1544965503-7ad532d7a8b0?w=800&h=600&fit=crop",
      features: [
        "Guía certificado",
        "Equipo de seguridad", 
        "4 horas de duración"
      ],
      highlights: ["Playas paradisíacas", "Exploración de cuevas", "Cultura dominicana", "Gastronomía local"]
    }
  ];

  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="excursiones" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestras <span className="text-primary">Excursiones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre la aventura perfecta para ti. Cada excursión está diseñada para brindarte experiencias únicas e inolvidables en el paraíso caribeño.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-none shadow-lg group">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {tour.price}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <Mountain className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground mb-2">{tour.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {tour.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {tour.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-secondary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={scrollToReservation}
                    >
                      Ver Detalles
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={scrollToReservation}
                    >
                      Reservar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Coming Soon Cards */}
          <Card className="overflow-hidden border-dashed border-2 border-muted-foreground/30 bg-muted/20">
            <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="bg-muted-foreground/10 p-4 rounded-full mb-4">
                <Mountain className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excursiones ATV 4x4</h3>
              <p className="text-muted-foreground mb-4">Próximamente disponible</p>
              <span className="text-lg font-bold text-muted-foreground">Desde $85</span>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-dashed border-2 border-muted-foreground/30 bg-muted/20">
            <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="bg-muted-foreground/10 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aventuras Polaris</h3>
              <p className="text-muted-foreground mb-4">Próximamente disponible</p>
              <span className="text-lg font-bold text-muted-foreground">Desde $95</span>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <section id="por-que-elegirnos" className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir Avila Explorer?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más de 10 años de experiencia creando aventuras inolvidables
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Seguridad Garantizada</h4>
              <p className="text-muted-foreground">Equipos certificados y guías profesionales</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Experiencia Premium</h4>
              <p className="text-muted-foreground">Tours exclusivos y personalizados</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Disponible 24/7</h4>
              <p className="text-muted-foreground">Soporte y asistencia en todo momento</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TourIncludes;