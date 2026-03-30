import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import contornoImg from '../assets/contorno.png';
import labialImg from '../assets/labial.png';

const portfolioItems = [
  {
    id: 1,
    category: 'Harmonização',
    title: 'Contorno Mandibular',
    image: contornoImg, // Custom real image
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    category: 'Odontologia',
    title: 'Facetas em Porcelana',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1974&auto=format&fit=crop', // Smile close up
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    category: 'Estética',
    title: 'Preenchimento Labial',
    image: labialImg, // Custom real image
    span: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    category: 'Odontologia',
    title: 'Reabilitação Estética',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop', // Natural smile
    span: 'col-span-1 md:col-span-3 row-span-2 h-[500px]'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-40 bg-[var(--color-noir-950)] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[var(--color-gold-500)] mb-4 block">
              Galeria de Excelência
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
              A Assinatura <br className="hidden md:block"/> Scaldini.
            </h2>
          </div>
          <a 
            href="https://instagram.com/clinicascaldini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-sans tracking-widest uppercase text-zinc-400 hover:text-[var(--color-gold-400)] transition-colors group"
          >
            Ver mais no Instagram
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Bento Grid Editorial - Vitrine de Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
            >
              <div className="absolute inset-0 bg-[#09090b]/40 z-10 transition-opacity duration-500 group-hover:bg-[#09090b]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/20 to-transparent z-10 opacity-80" />
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-gold-500)] font-sans mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-3xl font-serif text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
