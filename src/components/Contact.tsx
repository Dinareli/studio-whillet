import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Entre em <span className="bg-gradient-hero bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontas para cuidar de você. Agende sua consulta!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <Card className="p-8 text-center border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto group-hover:animate-float">
                📱
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Atendimento rápido e personalizado</p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Telefone */}
          <Card className="p-8 text-center border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto group-hover:animate-float">
                📞
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-4">(11) 99999-9999</p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary-light"
                  onClick={() => window.open('tel:+5511999999999')}
                >
                  Ligar Agora
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Localização */}
          <Card className="p-8 text-center border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto group-hover:animate-float">
                📍
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Localização</h3>
                <p className="text-muted-foreground mb-4">Rua da Beleza, 123 - Centro</p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary-light"
                >
                  Ver no Mapa
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* CTA Final */}
        <div className="text-center mt-16 p-8 bg-gradient-soft rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronta para se transformar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Agende sua consulta gratuita e descubra como podemos realçar sua beleza natural
          </p>
          <Button 
            size="lg"
            className="bg-gradient-accent text-white px-12 py-4 text-lg font-medium hover:shadow-elegant transition-all duration-300 animate-glow"
          >
            Agendar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;