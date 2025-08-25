import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Mobile: Menu button / Desktop: placeholder */}
          <div className="flex-1 flex items-center">
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-coral"
              aria-label="Abrir menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
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
              className="bg-rose-400 text-white hover:bg-coral/90 px-3 md:px-6 text-sm"
            >
              <span className="hidden sm:inline">Contrate Agora</span>
              <span className="sm:hidden">Contato</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <nav className="bg-white border-t border-border">
            <ul className="flex flex-col px-4 py-2">
              <li><a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-coral">Home</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-coral">Sobre Mim</a></li>
              <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-coral">Galeria</a></li>
              <li><a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-coral">Serviços e Preços</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-coral">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;