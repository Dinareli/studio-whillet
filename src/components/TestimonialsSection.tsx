import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b732?w=100&h=100&fit=crop&crop=face",
    text: "O Studio Belle transformou completamente minha rotina de cuidados. Os tratamentos são incríveis!"
  },
  {
    name: "Ana Costa",
    role: "Cliente",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Profissionais excepcionais e ambiente acolhedor. Recomendo para todas as minhas amigas!"
  },
  {
    name: "Julia Santos",
    role: "Cliente", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    text: "Nunca me senti tão bem comigo mesma. O atendimento é personalizado e os resultados são fantásticos!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Depoimentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossas clientes dizem sobre sua experiência conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-0 bg-soft-pink/30 rounded-3xl hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6 text-center">
                <div className="flex flex-col items-center space-y-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;