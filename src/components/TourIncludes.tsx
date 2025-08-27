import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Camera, Utensils, Mountain } from "lucide-react";

const TourIncludes = () => {
  const activities = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Playas Paradisíacas",
      description: "Visita las mejores playas de arena blanca y aguas cristalinas de la República Dominicana."
    },
    {
      icon: <Mountain className="w-8 h-8 text-accent" />,
      title: "Exploración de Cuevas",
      description: "Adéntrate en misteriosas cuevas naturales y descubre formaciones rocosas únicas."
    },
    {
      icon: <Camera className="w-8 h-8 text-secondary" />,
      title: "Cultura Dominicana",
      description: "Conoce la rica historia y tradiciones locales de la mano de guías expertos."
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Gastronomía Local",
      description: "Degusta auténticos sabores dominicanos con comida tradicional preparada con amor."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tu Aventura Incluye
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una experiencia completa que combina adrenalina, naturaleza, cultura y gastronomía en un solo tour inolvidable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-none shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 p-4 bg-muted rounded-full w-fit mx-auto">
                  {activity.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourIncludes;