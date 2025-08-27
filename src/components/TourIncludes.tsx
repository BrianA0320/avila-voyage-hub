import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Shield, Clock, Users, ChevronDown, ChevronUp, Car, Waves, Star } from "lucide-react";
import { useState } from "react";
import buggyTourImg from "@/assets/buggy-tour.jpg";
import atvTourImg from "@/assets/atv-tour.jpg";
import yachtPartyImg from "@/assets/yacht-party.jpg";

const TourIncludes = () => {
  const [expandedTour, setExpandedTour] = useState<number | null>(null);

  const tours = [
    {
      id: 1,
      title: "Tours en Buggy",
      description: "Aventuras todo terreno por los paisajes más espectaculares de República Dominicana",
      price: "Desde $75",
      image: buggyTourImg,
      features: [
        "Guía certificado",
        "Equipo de seguridad", 
        "4 horas de duración"
      ],
      details: [
        "Transporte desde hotel incluido",
        "Visita a cenotes y cuevas naturales",
        "Parada en playa virgen", 
        "Degustación de café dominicano",
        "Seguro de accidentes incluido",
        "Fotografías profesionales",
        "Refrigerios y agua"
      ]
    },
    {
      id: 2,
      title: "Excursiones ATV 4x4",
      description: "Explora senderos extremos y paisajes únicos con nuestros ATVs de última generación",
      price: "Desde $85",
      image: atvTourImg,
      features: [
        "Guía especializado",
        "Equipo de protección completo",
        "3.5 horas de aventura"
      ],
      details: [
        "Recogida en hoteles principales",
        "Entrenamiento de seguridad previo",
        "Ruta por montañas y selva",
        "Vista panorámica desde miradores",
        "Visita a cascada natural",
        "Almuerzo típico dominicano",
        "Certificado de participación"
      ]
    },
    {
      id: 3,
      title: "Fiesta en Yate",
      description: "Disfruta de una experiencia exclusiva navegando por aguas cristalinas del Caribe",
      price: "Desde $95",
      image: yachtPartyImg,
      features: [
        "Capitán profesional",
        "Bebidas incluidas",
        "5 horas de diversión"
      ],
      details: [
        "Yate privado para grupos pequeños",
        "Barra libre de bebidas nacionales",
        "Almuerzo gourmet a bordo",
        "Equipo de snorkel incluido",
        "Música y sistema de sonido",
        "Paradas en islas paradisíacas",
        "Animación y juegos acuáticos"
      ]
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
                    {tour.id === 1 ? <Car className="w-6 h-6" /> : 
                     tour.id === 2 ? <Mountain className="w-6 h-6" /> :
                     <Waves className="w-6 h-6" />}
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
                  {/* Basic Features */}
                  <div className="space-y-2">
                    {tour.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Expandable Details */}
                  {expandedTour === tour.id && (
                    <div className="space-y-2 border-t pt-4">
                      <h4 className="font-semibold text-foreground mb-2">Lo que incluye:</h4>
                      {tour.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
                    >
                      {expandedTour === tour.id ? (
                        <>
                          Ocultar Detalles <ChevronUp className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Ver Más Detalles <ChevronDown className="w-4 h-4 ml-2" />
                        </>
                      )}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Seguridad Garantizada</h4>
              <p className="text-muted-foreground">Equipos certificados, seguros incluidos y guías profesionales con más de 5 años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Experiencia Premium</h4>
              <p className="text-muted-foreground">Tours exclusivos, grupos pequeños y experiencias personalizadas según tus preferencias</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Disponible 24/7</h4>
              <p className="text-muted-foreground">Soporte completo antes, durante y después de tu aventura. Siempre estamos aquí para ti</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lugares Únicos</h4>
              <p className="text-muted-foreground">Acceso exclusivo a lugares paradisíacos que solo los locales conocen</p>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-background rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Aventureros Felices</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Satisfacción Garantizada</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TourIncludes;