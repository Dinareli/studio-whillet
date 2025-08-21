import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    title: "Lipstick",
    description: "Cores vibrantes e hidratação duradoura para lábios perfeitos",
    icon: "💄",
    gradient: "from-primary/30 to-rose-gold/30"
  },
  {
    title: "Base & Corretor",
    description: "Cobertura natural e acabamento impecável para todos os tons de pele",
    icon: "✨",
    gradient: "from-rose-gold/30 to-soft-pink/50"
  },
  {
    title: "Skincare",
    description: "Cuidados especializados para manter sua pele saudável e radiante",
    icon: "🌸",
    gradient: "from-soft-pink/50 to-primary/30"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-soft-pink/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden rounded-3xl border-0 group hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${category.gradient} p-8 text-center space-y-6 min-h-[400px] flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="text-6xl mb-4 group-hover:animate-float">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3 font-medium transition-all duration-300 hover:shadow-soft"
                >
                  AGENDAR AGORA
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;