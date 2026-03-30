import { motion } from 'framer-motion';
import bioImg from '../assets/bio.png';
import rehabImg from '../assets/rehabilitacao.png';

const services = [
  {
    id: '01',
    title: 'Harmonização Facial',
    description: 'Equilíbrio das proporções do rosto através de preenchimentos e toxina botulínica, desenhando contornos mais sofisticados sem perder sua identidade.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop', // Minimalist profile face
  },
  {
    id: '02',
    title: 'Facetas em Porcelana',
    description: 'A joalheria da odontologia. Sorrisos perfeitamente brancos e alinhados, devolvendo brilho e simetria com materiais da mais alta durabilidade.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2670&auto=format&fit=crop', // Lips/chin aesthetic
  },
  {
    id: '03',
    title: 'Bioestimuladores',
    description: 'O segredo da pele firme e viçosa. Tratamento profundo para incentivar a produção natural de colágeno, promovendo rejuvenescimento a longo prazo.',
    image: bioImg, // Custom real image
  },
  {
    id: '04',
    title: 'Reabilitação Oral',
    description: 'Devolução da função e estética completas através de implantes dentários, coroas e próteses. Uma nova chance de sorrir.',
    image: rehabImg, // Custom real image
  }
];

export function ServicesShowcase() {
  return (
    <section id="faciais" className="py-20 md:py-40 px-5 md:px-6 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[var(--color-gold-500)] mb-6 block">
            Portfólio de Procedimentos
          </span>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6 md:mb-8">
            A Anatomia da Beleza.
          </h2>
          <div className="w-16 h-px bg-[var(--color-gold-500)]/50 mb-8" />
          <p className="text-lg text-zinc-400 font-sans font-light text-balance">
            Nossos protocolos exclusivos combinam a vanguarda médica com um senso estético rigoroso, garantindo resultados extraordinariamente naturais.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col gap-8 md:gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Imagem (Metade da tela no desktop) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="w-full lg:w-1/2 aspect-[4/5] lg:aspect-square relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#18181b]/50 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>

              {/* Texto (Outra metade) */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <span className="text-4xl md:text-7xl font-serif text-[var(--color-gold-500)] opacity-40 mb-4 md:mb-6">
                  {service.id}
                </span>
                <h3 className="text-2xl md:text-5xl font-serif mb-4 md:mb-6">{service.title}</h3>
                <p className="text-base md:text-xl text-zinc-400 font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-lg">
                  {service.description}
                </p>
                <a 
                  href="#contato"
                  className="inline-flex items-center gap-4 text-sm font-sans tracking-[0.2em] uppercase text-white hover:text-[var(--color-gold-400)] transition-colors w-fit border-b border-zinc-800 hover:border-[var(--color-gold-400)] pb-2"
                >
                  Descobrir Tratamento
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
