import { Car, Calendar, Fuel, Settings, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    id: 1,
    name: "Honda Civic EXL",
    year: "2022/2023",
    km: "32.000 km",
    fuel: "Flex",
    transmission: "Automático",
    price: 139900,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Toyota Corolla XEi",
    year: "2021/2022",
    km: "45.000 km",
    fuel: "Flex",
    transmission: "Automático",
    price: 129900,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Volkswagen T-Cross",
    year: "2023/2023",
    km: "18.000 km",
    fuel: "Flex",
    transmission: "Automático",
    price: 149900,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Jeep Compass Limited",
    year: "2022/2022",
    km: "28.000 km",
    fuel: "Diesel",
    transmission: "Automático",
    price: 179900,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Hyundai HB20 Platinum",
    year: "2023/2024",
    km: "12.000 km",
    fuel: "Flex",
    transmission: "Automático",
    price: 89900,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Chevrolet Onix Plus",
    year: "2022/2023",
    km: "35.000 km",
    fuel: "Flex",
    transmission: "Automático",
    price: 79900,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
  },
];

const VehicleCatalog = () => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    });
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Car className="w-4 h-4" />
            <span className="text-sm font-semibold">Nosso Estoque</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Catálogo de <span className="text-primary">Veículos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira nossos veículos seminovos selecionados com rigor. Todos passam por inspeção completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {vehicle.year}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-3">{vehicle.name}</h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{vehicle.km}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Fuel className="w-4 h-4 text-primary" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm col-span-2">
                    <Settings className="w-4 h-4 text-primary" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">A partir de</p>
                    <p className="text-2xl font-black text-primary">{formatPrice(vehicle.price)}</p>
                  </div>
                  <Button className="bg-primary hover:bg-lime-light text-primary-foreground font-bold gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
          >
            Ver Estoque Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleCatalog;
