import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { id: number; url: string; title: string }[];
  currentIndex: number;
}

const ImageModal = ({ isOpen, onClose, images, currentIndex }: ImageModalProps) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[activeIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 bg-black/95 border-none">
        <div className="relative flex items-center justify-center h-full">
          {/* Close button */}
          <DialogClose className="absolute top-4 right-4 z-50">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
              <X className="w-6 h-6" />
            </Button>
          </DialogClose>

          {/* Previous button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          )}

          {/* Image */}
          <div className="flex flex-col items-center justify-center p-8">
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-semibold">{currentImage.title}</h3>
              {images.length > 1 && (
                <p className="text-white/70 text-sm mt-2">
                  {activeIndex + 1} de {images.length}
                </p>
              )}
            </div>
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-full px-4 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;