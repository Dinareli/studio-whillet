import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* About Me */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Sobre Mim</h4>
            <p className="text-warm-gray text-sm leading-relaxed">
              Maquiadora profissional com mais de 8 anos de experiência na criação de looks 
              deslumbrantes para casamentos, eventos e ensaios fotográficos.
            </p>
          </div>
          
          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Úteis</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-warm-gray hover:text-coral transition-colors">Sobre Mim</a>
              <a href="#gallery" className="block text-warm-gray hover:text-coral transition-colors">Galeria</a>
              <a href="#pricing" className="block text-warm-gray hover:text-coral transition-colors">Serviços e Preços</a>
              <a href="#contact" className="block text-warm-gray hover:text-coral transition-colors">Contato</a>
            </div>
          </div>
          
          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Redes</h4>
            <p className="text-warm-gray text-sm">
              Siga-me para dicas de beleza, conteúdo dos bastidores e atualizações dos meus trabalhos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors cursor-pointer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors cursor-pointer"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors cursor-pointer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Newsletter</h4>
            <p className="text-warm-gray text-sm">
              Inscreva-se para receber dicas de beleza e ofertas exclusivas.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Seu Email"
                className="text-sm border-border bg-white"
              />
              <Button size="sm" className="bg-coral hover:bg-coral/90 text-white px-4">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-warm-gray text-sm">
            © 2025 Katie Whillet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;