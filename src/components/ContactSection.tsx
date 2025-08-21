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
                Contact Me
              </h2>
              <p className="text-warm-gray leading-relaxed">
                Ready to look and feel amazing? Get in touch to book your 
                appointment or ask any questions about my services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-warm-gray">+1 (555) 123-4567</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-warm-gray">hello@katiewhillet.com</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-warm-gray">
                  Downtown Beauty Studio<br />
                  123 Main Street, City, State 12345
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
                  placeholder="First Name"
                  className="border-border focus:border-coral bg-white"
                />
                <Input 
                  placeholder="Last Name"
                  className="border-border focus:border-coral bg-white"
                />
              </div>
              
              <Input 
                type="email"
                placeholder="Email Address"
                className="border-border focus:border-coral bg-white"
              />
              
              <Input 
                type="tel"
                placeholder="Phone Number"
                className="border-border focus:border-coral bg-white"
              />
              
              <Textarea 
                placeholder="Tell me about your upcoming event or what service you're interested in..."
                className="border-border focus:border-coral bg-white resize-none"
                rows={5}
              />
              
              <Button 
                type="submit"
                className="w-full bg-coral text-white hover:bg-coral/90 py-3"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;