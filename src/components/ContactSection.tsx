import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-light text-foreground">
                Entre Em Contato
              </h2>
              <p className="text-warm-gray leading-relaxed">
              Pronto para ficar linda e se sentir incrível? 
              Entre em contato para agendar sua consulta ou tirar dúvidas sobre meus serviços.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Telefone</h4>
                <p className="text-warm-gray">+55 (11)0123-4567</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-warm-gray">katie@emailficticio.com</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Endereço</h4>
                <p className="text-warm-gray">
                  Av. Paulista, 1410
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors cursor-pointer">
                <span className="text-sm">ig</span>
              </div>
              <div className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors cursor-pointer">
                <span className="text-sm">tw</span>
              </div>
            </div>
          </div>
          
          {/* Right - Contact Form */}
          <Card className="p-8 bg-white border border-border shadow-soft">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Primeiro Nome"
                  className="border-border focus:border-coral bg-white"
                />
                <Input 
                  placeholder="Último Nome"
                  className="border-border focus:border-coral bg-white"
                />
              </div>
              
              <Input 
                type="email"
                placeholder="E-mail"
                className="border-border focus:border-coral bg-white"
              />
              
              <Input 
                type="tel"
                placeholder="Telefone"
                className="border-border focus:border-coral bg-white"
              />
              
              <Textarea 
                placeholder="Conte um pouco sobre o que deseja com nosso serviço..."
                className="border-border focus:border-coral bg-white resize-none"
                rows={5}
              />
              
              <Button 
                type="submit"
                className="w-full bg-coral text-white hover:bg-coral/90 py-3"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;