import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, User, Mail, Car, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const AgendarVisita = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento enviado!",
      description: "Entraremos em contato para confirmar sua visita.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      vehicle: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">Agende sua Visita</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-background mb-6">
                Venha conhecer seu <span className="text-primary">próximo carro</span>
              </h1>
              <p className="text-background/70 text-lg">
                Agende uma visita e venha conhecer nosso showroom. Nossa equipe estará pronta para atendê-lo.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Preencha seus dados</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">Nome completo</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-muted-foreground text-sm mb-2 block">E-mail</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          name="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-muted-foreground text-sm mb-2 block">Telefone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          name="phone"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                          className="pl-10 h-12"
                          maxLength={15}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-muted-foreground text-sm mb-2 block">Data preferida</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-muted-foreground text-sm mb-2 block">Horário preferido</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">Veículo de interesse (opcional)</label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="vehicle"
                        placeholder="Ex: Honda Civic 2023"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">Mensagem (opcional)</label>
                    <Textarea
                      name="message"
                      placeholder="Deixe uma mensagem..."
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-lime-light text-primary-foreground font-bold h-14 text-lg shadow-lime">
                    Agendar Visita
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Por que visitar nosso showroom?</h2>
                  <ul className="space-y-4">
                    {[
                      "Atendimento personalizado com nossos consultores",
                      "Test drive disponível para os veículos",
                      "Ambiente confortável e climatizado",
                      "Estacionamento gratuito",
                      "Café e água à vontade",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-dark rounded-3xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-background mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-background font-semibold">Endereço</p>
                        <p className="text-background/70">Av. Principal, 1234 - Centro<br />São Paulo - SP</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-background font-semibold">Telefone</p>
                        <p className="text-background/70">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-background font-semibold">Horário de Funcionamento</p>
                        <p className="text-background/70">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 14h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-muted rounded-3xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Mapa da localização</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AgendarVisita;
