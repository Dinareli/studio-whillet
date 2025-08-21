import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* About Me */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">About Me</h4>
            <p className="text-warm-gray text-sm leading-relaxed">
              Professional makeup artist with 8+ years of experience creating 
              stunning looks for weddings, events, and photoshoots.
            </p>
          </div>
          
          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Useful Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-warm-gray hover:text-coral transition-colors">About</a>
              <a href="#gallery" className="block text-warm-gray hover:text-coral transition-colors">Gallery</a>
              <a href="#pricing" className="block text-warm-gray hover:text-coral transition-colors">Services</a>
              <a href="#contact" className="block text-warm-gray hover:text-coral transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Twitter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Twitter</h4>
            <p className="text-warm-gray text-sm">
              Follow me for beauty tips, behind-the-scenes content, and latest work updates.
            </p>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get Our Newsletter</h4>
            <p className="text-warm-gray text-sm">
              Subscribe for beauty tips and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your Email"
                className="text-sm border-border bg-white"
              />
              <Button size="sm" className="bg-coral hover:bg-coral/90 text-white px-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-warm-gray text-sm">
            © 2024 Katie Whillet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;