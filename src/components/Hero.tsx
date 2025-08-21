import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="relative z-50 py-6 bg-soft-pink/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">
              Studio Belle
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <Button 
                size="sm"
                className="bg-gradient-accent text-white px-6 hover:shadow-soft transition-all duration-300"
              >
                AGENDAR
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-soft-pink relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-tight">
                  Glow like
                  <span className="block text-foreground">
                    never before!
                  </span>
                </h1>
                
                <p className="text-lg text-elegant-gray font-light uppercase tracking-wider">
                  STUDIO BELLE
                </p>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm shadow-elegant border-0 rounded-3xl">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      Primeira Consulta
                    </h3>
                    <p className="text-muted-foreground">
                      Preencha o formulário e entraremos em contato
                    </p>
                  </div>
                  
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Nome completo"
                        className="border-primary/30 focus:border-primary bg-white rounded-xl h-12"
                      />
                    </div>
                    
                    <div>
                      <Input 
                        type="email"
                        placeholder="E-mail"
                        className="border-primary/30 focus:border-primary bg-white rounded-xl h-12"
                      />
                    </div>
                    
                    <div>
                      <Input 
                        type="tel"
                        placeholder="WhatsApp"
                        className="border-primary/30 focus:border-primary bg-white rounded-xl h-12"
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Conte-nos sobre seus objetivos de beleza..."
                        className="border-primary/30 focus:border-primary bg-white resize-none rounded-xl"
                        rows={4}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-accent text-white py-3 text-lg font-medium hover:shadow-soft transition-all duration-300 rounded-xl h-12"
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
      </section>
    </>
  );
};

export default Hero;