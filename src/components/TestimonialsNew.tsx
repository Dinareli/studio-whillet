const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Katie fez eu me sentir deslumbrante no dia do meu casamento. Sua atenção aos detalhes é incrível!",
    image: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?_gl=1*1ww1gzb*_ga*MjEyMzk1MjIzNS4xNzU1ODAxNzYz*_ga_8JE65Q40S6*czE3NTU4MDE3NjMkbzEkZzEkdDE3NTU4MDI3MTYkajUkbDAkaDA."
  },
  {
    name: "Emma Wilson",
    text: "Profissional, talentosa e muito simpática! Nunca me senti tão confiante.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Chen",
    text: "A maquiagem da Katie é excepcional. Ela realmente entende como realçar a beleza natural.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsNew = () => {
  return (
    <section className="min-h-screen bg-muted relative flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <div className="w-full h-full bg-coral rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 w-full">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Avaliações
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center space-y-6">
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto shadow-soft"
              />
              
              <p className="text-warm-gray leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <h4 className="font-semibold text-foreground">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;