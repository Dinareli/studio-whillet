const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Decorative Element & Image */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-32 h-32 opacity-20">
              <div className="w-full h-full bg-coral rounded-full blur-xl"></div>
            </div>
            <img 
              src="https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?_gl=1*1ytgpzv*_ga*MjEyMzk1MjIzNS4xNzU1ODAxNzYz*_ga_8JE65Q40S6*czE3NTU4MDE3NjMkbzEkZzEkdDE3NTU4MDI1NDgkajMxJGwwJGgw"
              alt="Katie Whillet - Makeup Artist"
              className="w-full max-w-md mx-auto rounded-lg shadow-elegant object-cover"
            />
            <div className="absolute -right-10 -bottom-10 w-24 h-24 opacity-30">
              <div className="w-full h-full bg-soft-coral rounded-full blur-lg"></div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-warm-gray text-sm uppercase tracking-wider">
                CONHEÇA KATIE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
                Maquiadora
              </h2>
            </div>
            
            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p>
                Com mais de 8 anos de experiência no setor de beleza, sou especialista
                em criar looks deslumbrantes que realçam sua beleza natural e aumentam
                sua confiança.
              </p>
              <p>
                Da maquiagem para noivas a eventos especiais, uso apenas os melhores produtos e técnicas 
                para garantir que você esteja com uma aparência e se sinta absolutamente radiante.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-coral text-xl">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;