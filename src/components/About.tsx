import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Sobre o <span className="bg-gradient-hero bg-clip-text text-transparent">Studio Belle</span>
              </h2>
              <p className="text-xl text-elegant-gray font-light">
                Mais de 10 anos transformando vidas através da beleza
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                No Studio Belle, acreditamos que cada pessoa possui uma beleza única que merece ser realçada. 
                Nossa missão é proporcionar tratamentos personalizados que não apenas transformam a aparência, 
                mas também elevam a autoestima e confiança.
              </p>
              
              <p>
                Com uma equipe de profissionais altamente qualificados e equipamentos de última geração, 
                oferecemos um ambiente acolhedor onde você pode relaxar e se cuidar com total tranquilidade.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitas</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-accent text-white px-8 py-4 text-lg font-medium hover:shadow-elegant transition-all duration-300"
            >
              Conheça Nossa Equipe
            </Button>
          </div>
          
          {/* Right Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Excelência</h3>
                    <p className="text-sm text-muted-foreground">Padrão premium em todos os serviços</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl">
                    💎
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Personalização</h3>
                    <p className="text-sm text-muted-foreground">Tratamentos únicos para cada cliente</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl">
                    🌟
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Inovação</h3>
                    <p className="text-sm text-muted-foreground">Tecnologia avançada e técnicas modernas</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;