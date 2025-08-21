const galleryImages = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop", 
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop",
  "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?_gl=1*iexeyn*_ga*MjEyMzk1MjIzNS4xNzU1ODAxNzYz*_ga_8JE65Q40S6*czE3NTU4MDE3NjMkbzEkZzEkdDE3NTU4MDI2MzMkajE3JGwwJGgw",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=500&fit=crop"
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-light text-foreground">
            Galeria
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            Explore meu portfólio de transformações de beleza e criações de maquiagens
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={image}
                alt={`Makeup work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;