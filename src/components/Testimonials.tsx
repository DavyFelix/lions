import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    location: "São Paulo, SP",
    text: "Excelente atendimento e ótimo suporte. Comprei meu carro em menos de uma hora!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    location: "Rio de Janeiro, RJ",
    text: "Comprei e fiquei muito satisfeita! O vendedor foi super atencioso e me ajudou em todo o processo.",
    rating: 5,
  },
  {
    name: "Jorge Almeida",
    location: "Niterói, RJ",
    text: "Eu estava desacreditado, hoje estou satisfeito! Mesmo com restrições consegui aprovar meu crédito.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    location: "Osasco, SP",
    text: "Amei adquirir meu veículo aqui. Processo rápido, transparente e com ótimas condições de pagamento.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 15 mil clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
