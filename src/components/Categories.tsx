import { Car, Truck } from "lucide-react";

const categories = [
  {
    name: "SUV",
    icon: "🚙",
    count: 125,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop",
  },
  {
    name: "Sedan",
    icon: "🚗",
    count: 98,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
  },
  {
    name: "Hatch",
    icon: "🚘",
    count: 156,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
  },
  {
    name: "Utilitários",
    icon: "🛻",
    count: 67,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
];

const Categories = () => {
  return (
    <section id="estoque" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Encontre por <span className="text-primary">Categoria</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Navegue pelo nosso estoque e encontre o veículo ideal para você
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl mb-1">{category.icon}</p>
                    <h3 className="text-background font-bold text-lg md:text-xl">{category.name}</h3>
                    <p className="text-background/60 text-sm">{category.count} veículos</p>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                    <span className="text-primary-foreground font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
