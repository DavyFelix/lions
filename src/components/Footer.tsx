import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const stores = [
  {
    name: "São Paulo - Vila Prudente",
    address: "Av. Prof. Luiz Ignácio Anhaia Mello, 4272",
    phone: "0800-454-0505",
  },
  {
    name: "São Paulo - Osasco",
    address: "Av. Pref. Hirant Sanazar, 3 - Umuarama",
    phone: "0800-454-0505",
  },
  {
    name: "Rio de Janeiro - Niterói",
    address: "RJ-104, 2620 - Baldeador",
    phone: "0800-454-0505",
  },
  {
    name: "Rio de Janeiro - Nova Iguaçu",
    address: "Av. Carlos Marques Rollo, 137",
    phone: "0800-454-0505",
  },
];

const Footer = () => {
  return (
    <footer id="contato" className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-background/10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-background font-bold text-lg tracking-tight">AUTO</span>
                <span className="text-primary font-extrabold text-xs -mt-1">SEMINOVOS</span>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Há mais de 10 anos oferecendo os melhores seminovos com garantia, procedência e as melhores condições de financiamento.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Estoque</a></li>
              <li><a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Financiamento</a></li>
              <li><a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Venda seu carro</a></li>
              <li><a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Trabalhe conosco</a></li>
              <li><a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Política de privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background font-semibold">0800-454-0505</p>
                  <p className="text-background/60 text-sm">Ligação gratuita</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background font-semibold">contato@autoseminovos.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/60 text-sm">Seg-Sex: 9h às 22h</p>
                  <p className="text-background/60 text-sm">Sáb: 9h às 19h</p>
                  <p className="text-background/60 text-sm">Dom: 9h às 18h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Stores */}
          <div>
            <h4 className="text-background font-bold mb-6">Nossas Lojas</h4>
            <ul className="space-y-4">
              {stores.slice(0, 3).map((store) => (
                <li key={store.name} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-background text-sm font-medium">{store.name}</p>
                    <p className="text-background/60 text-xs">{store.address}</p>
                  </div>
                </li>
              ))}
              <li>
                <a href="#" className="text-primary text-sm font-semibold hover:underline">
                  Ver todas as lojas →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2024 Auto Seminovos. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-sm">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
