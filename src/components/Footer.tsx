import { MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#09090b] text-white py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        
        {/* Marca/Slogan */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <span className="font-serif text-3xl tracking-wide font-light text-white block">
            <span className="text-[var(--color-gold-500)]">/</span> SCALDINI
          </span>
          <p className="text-zinc-500 font-sans font-light text-sm leading-relaxed">
            Elevando a odontologia estética e a harmonização oro-facial a uma forma de arte. Atendimento exclusivo em um ambiente planejado para você.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://instagram.com/clinicascaldini" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[var(--color-gold-500)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Contato */}
        <div className="space-y-6">
          <h4 className="uppercase tracking-[0.2em] text-[10px] text-[var(--color-gold-500)] font-sans">Contato Direto</h4>
          <ul className="space-y-4 font-sans font-light text-sm text-zinc-400">
            <li>
              <a href="#contato" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} strokeWidth={1.5} />
                (31) 99151-2366
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} strokeWidth={1.5} className="mt-1 shrink-0" />
              <span className="leading-relaxed">Lagoa Santa, MG</span>
            </li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <div className="space-y-6">
          <h4 className="uppercase tracking-[0.2em] text-[10px] text-[var(--color-gold-500)] font-sans">Navegação</h4>
          <ul className="space-y-3 font-sans font-light text-sm text-zinc-400">
            <li><a href="#a_clinica" className="hover:text-white transition-colors">A Clínica</a></li>
            <li><a href="#faciais" className="hover:text-white transition-colors">Procedimentos</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Resultados</a></li>
            <li><a href="#testemunhos" className="hover:text-white transition-colors">Depoimentos</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-zinc-600">
        <p>© 2026 Clínica Scaldini. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido com sofisticação.</p>
      </div>
    </footer>
  );
}
