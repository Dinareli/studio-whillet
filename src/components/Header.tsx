import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo/Brand - lado esquerdo */}
          <div className="flex-1">
            {/* Espaço reservado para logo futuro */}
          </div>

            <nav className="flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-coral transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-coral transition-colors">
              Sobre Mim
            </a>
            <a href="#gallery" className="text-foreground hover:text-coral transition-colors">
              Galeria
            </a>
            <a href="#pricing" className="text-foreground hover:text-coral transition-colors">
              Serviços e Preços
            </a>
            <a href="#contact" className="text-foreground hover:text-coral transition-colors">
              Contato
            </a>
          </nav>
          
          {/* Botão - lado direito */}
          <div className="flex-1 flex justify-end">
            <Button 
              size="sm"
              className="bg-coral text-white hover:bg-coral/90 px-6"
            >
              Contrate Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;