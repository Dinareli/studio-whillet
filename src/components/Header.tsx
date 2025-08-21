import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="text-2xl font-bold text-foreground">
            Bridge
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-coral transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-coral transition-colors">
              About
            </a>
            <a href="#gallery" className="text-foreground hover:text-coral transition-colors">
              Gallery
            </a>
            <a href="#pricing" className="text-foreground hover:text-coral transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-coral transition-colors">
              Contact
            </a>
          </nav>
          
          <Button 
            size="sm"
            className="bg-coral text-white hover:bg-coral/90 px-6"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;