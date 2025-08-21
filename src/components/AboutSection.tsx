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
              src="https://images.unsplash.com/photo-1594736797933-d0b22d3e3134?w=500&h=600&fit=crop&crop=face"
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
                MEET KATIE
              </p>
              <h2 className="text-5xl font-light text-foreground">
                Makeup artist
              </h2>
            </div>
            
            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p>
                With over 8 years of experience in the beauty industry, I specialize 
                in creating stunning looks that enhance your natural beauty and boost 
                your confidence.
              </p>
              <p>
                From bridal makeup to special events, I use only the finest products 
                and techniques to ensure you look and feel absolutely radiant.
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