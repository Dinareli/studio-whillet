import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Bridal Makeup", price: "$150" },
  { name: "Evening Makeup", price: "$80" },
  { name: "Photoshoot Makeup", price: "$120" },
  { name: "Special Event Makeup", price: "$100" },
  { name: "Makeup Lesson", price: "$90" },
  { name: "Group Booking (5+)", price: "$70" }
];

const ServicesSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Services List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-light text-foreground">
                Services And Prices
              </h2>
            </div>
            
            <Card className="p-8 bg-white border-0 shadow-soft">
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-foreground">{service.name}</span>
                    <span className="text-coral font-semibold">{service.price}</span>
                  </div>
                ))}
                
                <Button className="w-full mt-6 bg-coral hover:bg-coral/90 text-white">
                  Book Appointment
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Right - Service Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
              alt="Professional makeup application"
              className="w-full rounded-lg shadow-elegant object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;