const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Katie made me feel absolutely stunning on my wedding day. Her attention to detail is incredible!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b732?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emma Wilson",
    text: "Professional, talented, and so lovely to work with. I've never felt more confident!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Chen",
    text: "Katie's makeup artistry is exceptional. She truly understands how to enhance natural beauty.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsNew = () => {
  return (
    <section className="py-20 bg-muted relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <div className="w-full h-full bg-coral rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-light text-foreground">
            What They Say
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