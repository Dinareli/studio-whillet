import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PromoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Promo */}
        <div className="text-center mb-20">
          <Card className="max-w-2xl mx-auto p-12 bg-soft-pink/50 border-0 rounded-3xl">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Promoção Especial
              </h2>
              <p className="text-2xl lg:text-3xl font-bold text-primary">
                Até 40% de desconto
              </p>
              <p className="text-elegant-gray">
                Aproveite nossa promoção especial em tratamentos selecionados
              </p>
              <Button 
                size="lg"
                className="bg-primary text-white px-8 py-4 text-lg font-medium hover:shadow-soft transition-all duration-300 rounded-full"
              >
                APROVEITAR AGORA
              </Button>
            </div>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <Card className="relative overflow-hidden rounded-3xl border-0 group hover:shadow-elegant transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-rose-gold/20 p-8 flex flex-col justify-between">
              <div className="text-6xl">💄</div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Maquiagem</h3>
                <p className="text-sm text-muted-foreground">
                  Realce sua beleza natural com nossa linha premium
                </p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  VER MAIS
                </Button>
              </div>
            </div>
          </Card>

          {/* Feature 2 */}
          <Card className="relative overflow-hidden rounded-3xl border-0 group hover:shadow-elegant transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-rose-gold/20 to-primary/20 p-8 flex flex-col justify-between">
              <div className="text-6xl">✨</div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Skincare</h3>
                <p className="text-sm text-muted-foreground">
                  Cuidados especiais para todos os tipos de pele
                </p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  VER MAIS
                </Button>
              </div>
            </div>
          </Card>

          {/* Feature 3 */}
          <Card className="relative overflow-hidden rounded-3xl border-0 group hover:shadow-elegant transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-soft-pink/40 p-8 flex flex-col justify-between">
              <div className="text-6xl">💋</div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Lábios</h3>
                <p className="text-sm text-muted-foreground">
                  Hidratação e cor perfeita para seus lábios
                </p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  VER MAIS
                </Button>
              </div>
            </div>
          </Card>

          {/* Feature 4 */}
          <Card className="relative overflow-hidden rounded-3xl border-0 group hover:shadow-elegant transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-soft-pink/40 to-rose-gold/20 p-8 flex flex-col justify-between">
              <div className="text-6xl">🌟</div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Tratamentos</h3>
                <p className="text-sm text-muted-foreground">
                  Procedimentos estéticos personalizados
                </p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  VER MAIS
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;