import { Phone, Instagram, Facebook, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-black text-lg md:text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-background font-bold text-lg md:text-xl tracking-tight">AUTO</span>
              <span className="text-primary font-extrabold text-xs md:text-sm -mt-1">SEMINOVOS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("catalogo")} className="text-background/80 hover:text-primary transition-colors font-medium">
              Catálogo
            </button>
            <button onClick={() => scrollToSection("diferenciais")} className="text-background/80 hover:text-primary transition-colors font-medium">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-background/80 hover:text-primary transition-colors font-medium">
              Depoimentos
            </button>
            <Link to="/agendar-visita" className="text-background/80 hover:text-primary transition-colors font-medium">
              Agendar Visita
            </Link>
            <button onClick={() => scrollToSection("contato")} className="text-background/80 hover:text-primary transition-colors font-medium">
              Contato
            </button>
          </nav>

          {/* Social & WhatsApp */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-2">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <Button 
              className="bg-primary hover:bg-lime-light text-primary-foreground font-bold gap-2 shadow-lime animate-pulse-lime"
              size="sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
            <button 
              className="lg:hidden text-background"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-dark-soft animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("catalogo")} className="text-background/80 hover:text-primary transition-colors font-medium text-left">
                Catálogo
              </button>
              <button onClick={() => scrollToSection("diferenciais")} className="text-background/80 hover:text-primary transition-colors font-medium text-left">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection("depoimentos")} className="text-background/80 hover:text-primary transition-colors font-medium text-left">
                Depoimentos
              </button>
              <Link to="/agendar-visita" className="text-background/80 hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Agendar Visita
              </Link>
              <button onClick={() => scrollToSection("contato")} className="text-background/80 hover:text-primary transition-colors font-medium text-left">
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
