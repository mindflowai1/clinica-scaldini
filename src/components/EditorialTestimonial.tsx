import { motion } from 'framer-motion';

export function EditorialTestimonial() {
  return (
    <section id="testemunhos" className="py-20 md:py-28 bg-[#18181b] px-5 md:px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Imagem Editorial */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-5/12 aspect-[3/4] relative"
        >
          {/* Decoração minimalista vazada */}
          <div className="absolute -inset-4 border border-[var(--color-gold-500)]/30 z-0" />
          
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
            alt="Paciente Satisfeita" 
            className="w-full h-full object-cover relative z-10"
            loading="lazy"
          />
        </motion.div>

        {/* Texto do Testemunho */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-7/12 flex flex-col"
        >
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[var(--color-gold-500)] mb-8">
            Estudo de Caso
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-snug mb-12 relative">
            <span className="absolute -top-10 -left-6 md:-left-12 text-[120px] font-serif opacity-10 text-[var(--color-gold-500)] select-none">"</span>
            Não foi apenas uma mudança no meu sorriso. A Clínica Scaldini me devolveu a vontade de sorrir para as câmeras, de falar em público. É uma arte invisível, mas que muda tudo.
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[var(--color-gold-500)]" />
            <div>
              <p className="text-white font-sans tracking-widest uppercase text-sm">Carolina T.</p>
              <p className="text-zinc-500 font-sans font-light text-xs mt-1">Harmonização Facial & Facetas</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
