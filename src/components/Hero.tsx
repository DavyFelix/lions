import { Button } from "@/components/ui/button";
import { ArrowRight, BadgePercent } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2384cc16' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Voucher Card */}
      <div className="absolute top-24 right-4 md:top-32 md:right-8 lg:right-16 z-20 animate-float">
        <div className="bg-gradient-to-br from-primary to-lime-light p-4 md:p-6 rounded-2xl shadow-lime-lg max-w-[200px] md:max-w-[260px]">
          <div className="flex items-center gap-2 mb-2">
            <BadgePercent className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            <span className="text-primary-foreground font-bold text-xs md:text-sm">VOUCHER DE DESCONTO</span>
          </div>
          <div className="text-primary-foreground">
            <span className="text-2xl md:text-3xl font-black">R$ 3.000</span>
            <p className="text-xs md:text-sm opacity-80 mt-1">Desconto especial na troca!</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Líder em Seminovos</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-background leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Seu próximo carro está{" "}
            <span className="text-primary">aqui!</span>
          </h1>

          <p className="text-background/70 text-lg md:text-xl mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Mais de 500 veículos seminovos com garantia, procedência verificada e as melhores condições de financiamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-lime-light text-primary-foreground font-bold text-lg px-8 py-6 shadow-lime group"
            >
              Ver Estoque
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 font-bold text-lg px-8 py-6"
            >
              Simular Financiamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 border-t border-background/10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">500+</p>
              <p className="text-background/60 text-sm md:text-base">Veículos em estoque</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">8</p>
              <p className="text-background/60 text-sm md:text-base">Lojas no Brasil</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">15k+</p>
              <p className="text-background/60 text-sm md:text-base">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
