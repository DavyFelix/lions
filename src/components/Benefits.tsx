import { Shield, Percent, Wrench, Tag } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Fique Despreocupado",
    description: "Possuímos um ótimo sistema de atendimento pós-venda com equipe especializada e oficinas credenciadas.",
  },
  {
    icon: Tag,
    title: "Não Perca na Troca",
    description: "Somos especialistas em carros. Na troca, você pode receber até 90% do valor da tabela FIPE.",
  },
  {
    icon: Percent,
    title: "Nada de Juros Altos",
    description: "Somos líderes em financiamentos. Grandes bancos fornecem taxas de juros baixas para nossos clientes.",
  },
  {
    icon: Wrench,
    title: "Ótimos Preços",
    description: "Compramos carros em grandes lotes com grandes descontos. Repassamos essas vantagens para você.",
  },
];

const Benefits = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Por que escolher a <span className="text-primary">Auto Seminovos?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos a melhor experiência na compra do seu seminovo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-foreground font-bold text-lg mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
