import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Tratamentos Faciais",
    description: "Limpeza de pele, peeling, hidratação profunda e rejuvenescimento facial",
    price: "A partir de R$ 120",
    icon: "✨"
  },
  {
    title: "Procedimentos Estéticos",
    description: "Botox, preenchimento, bioestimuladores e harmonização facial",
    price: "Consulte valores",
    icon: "💫"
  },
  {
    title: "Cuidados Corporais",
    description: "Massagens relaxantes, drenagem linfática e tratamentos corporais",
    price: "A partir de R$ 150",
    icon: "🌸"
  },
  {
    title: "Sobrancelhas & Cílios",
    description: "Design de sobrancelhas, micropigmentação e extensão de cílios",
    price: "A partir de R$ 80",
    icon: "👁️"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Nossos <span className="bg-gradient-hero bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa gama completa de tratamentos de beleza e bem-estar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 border-primary/20 hover:border-primary/40 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="text-4xl group-hover:animate-float">
                  {service.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-primary font-semibold">
                    {service.price}
                  </p>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary-light"
                  >
                    Agendar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-accent text-white px-8 py-4 text-lg font-medium hover:shadow-elegant transition-all duration-300"
          >
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;