import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-soft relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
              Beleza & Estética
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Studio
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Belle
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-elegant-gray font-light">
                Você trouxer você to face?
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transforme sua beleza natural com nossos tratamentos personalizados. 
                Agende agora e descubra o seu melhor eu.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-white px-8 py-4 text-lg font-medium hover:shadow-elegant transition-all duration-300 animate-glow"
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary-light px-8 py-4 text-lg"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="lg:flex lg:justify-end animate-fade-in">
            <Card className="w-full max-w-md p-8 bg-card/90 backdrop-blur-sm shadow-elegant border-primary/20">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Vou cuidar do Primeiro
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário e entraremos em contato
                  </p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Nome completo"
                      className="border-primary/30 focus:border-primary bg-background"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email"
                      placeholder="E-mail"
                      className="border-primary/30 focus:border-primary bg-background"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="tel"
                      placeholder="WhatsApp"
                      className="border-primary/30 focus:border-primary bg-background"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Conte-nos sobre seus objetivos de beleza..."
                      className="border-primary/30 focus:border-primary bg-background resize-none"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-accent text-white py-3 text-lg font-medium hover:shadow-soft transition-all duration-300"
                  >
                    Agendar Agora
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Seus dados estão seguros conosco
                  </p>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-glow rounded-full opacity-30 animate-float" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-rose-gold rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;