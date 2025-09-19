import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Heart } from "lucide-react";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const samplePhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Aventura en Buggy - Playa Dorada"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      title: "Explorando Cuevas Naturales"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop",
      title: "Cultura y Tradiciones Locales"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=400&h=300&fit=crop",
      title: "Gastronomía Dominicana Auténtica"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      title: "Paisajes Increíbles"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      title: "Momentos Únicos"
    }
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="galeria" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Galería de <span className="text-primary">Aventuras</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Mira las increíbles experiencias que nuestros clientes han vivido. ¡Comparte tus fotos y sé parte de nuestra comunidad de aventureros!
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            onClick={() => window.open('https://wa.me/18094986352?text=¡Hola! Me gustaría compartir fotos de mi tour', '_blank')}
          >
            <Upload className="w-5 h-5 mr-2" />
            Comparte Tus Fotos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {samplePhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none shadow-md cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold text-sm">{photo.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-2 rounded-full">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-background rounded-2xl p-8 shadow-lg">
          <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">¡Comparte Tu Experiencia!</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ¿Fuiste en uno de nuestros tours? Nos encantaría ver tus fotos y experiencias. 
            Envíanos tus mejores momentos y podrían aparecer en nuestra galería oficial.
          </p>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://wa.me/18094986352?text=¡Hola! Quiero compartir fotos de mi experiencia con Golden Pass Travel', '_blank')}
          >
            <Camera className="w-4 h-4 mr-2" />
            Enviar Mis Fotos
          </Button>
        </div>

        <ImageModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          images={samplePhotos}
          currentIndex={currentImageIndex}
        />
      </div>
    </section>
  );
};

export default Gallery;