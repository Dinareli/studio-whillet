import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Maquiagem De Noiva", price: "R$500" },
  { name: "Maquiagem Noturna", price: "R$120" },
  { name: "Maquiagem Para Eventos Especiais", price: "R$150" },
  { name: "Maquiagem Para Sessões Fotográficas", price: "R$180" },
  { name: "Aula de Maquiagem", price: "R$250" },
];

const ServicesSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Services List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-light text-foreground">
                Serviços e Preços
              </h2>
            </div>
            
            <Card className="p-8 bg-white border-0 shadow-soft">
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-foreground">{service.name}</span>
                    <span className="text-coral font-semibold">{service.price}</span>
                  </div>
                ))}
                
                <Button className="w-full mt-6 bg-coral hover:bg-coral/90 text-white">
                  Agendar Serviço
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Right - Service Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
              alt="Professional makeup application"
              className="w-full rounded-lg shadow-elegant object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;