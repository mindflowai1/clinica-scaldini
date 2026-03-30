import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-12 transition-all duration-300 ${
        scrolled 
          ? 'h-16 lg:h-20 bg-[#09090b]/90 backdrop-blur-md shadow-md shadow-black/20' 
          : 'h-20 lg:h-28 bg-transparent'
      }`}
    >
      {/* Brand Identity — Logo */}
      <a href="#" className="flex items-center shrink-0">
        <img 
          src={logoImg} 
          alt="Clínica Scaldini" 
          className={`transition-all duration-300 ${scrolled ? 'h-20 lg:h-32' : 'h-24 lg:h-40'} w-auto object-contain`}
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        {['A Clínica', 'Faciais', 'Odontologia', 'Testemunhos'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-sans tracking-[0.1em] uppercase text-zinc-300 hover:text-[var(--color-gold-400)] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
        {/* Subtle CTA in Navbar */}
        <a 
          href="#contato"
          className="ml-6 px-7 py-3 text-xs uppercase tracking-widest text-[#09090b] bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] transition-colors"
        >
          Consultar
        </a>
      </nav>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden text-zinc-300 hover:text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-[#09090b]/98 backdrop-blur-md flex flex-col items-center justify-center gap-10 lg:hidden z-50">
          {['A Clínica', 'Faciais', 'Odontologia', 'Testemunhos'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-serif tracking-wider text-zinc-300 hover:text-[var(--color-gold-400)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="mt-4 w-64">
            <a 
              href="#contato"
              className="block w-full text-center py-4 text-sm uppercase tracking-widest text-[#09090b] bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
