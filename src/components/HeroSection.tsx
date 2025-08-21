import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Beauty makeup artist"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-7xl lg:text-9xl font-light text-white leading-none">
          Katie
          <br />
          <span className="font-normal">Whillet</span>
        </h1>
        
        <div className="w-20 h-1 bg-coral mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;