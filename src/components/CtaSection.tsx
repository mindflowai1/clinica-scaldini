import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#09090b] text-center overflow-hidden relative border-t border-zinc-900 border-b border-zinc-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-gold-500)]/5 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 60, opacity: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="w-px bg-gradient-to-b from-transparent via-[var(--color-gold-500)] to-transparent mb-12" 
        />
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8"
        >
          Pronto para experienciar <br className="hidden md:block"/> o seu melhor lado?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-zinc-400 font-sans font-light mb-16 max-w-xl text-balance"
        >
          Agende sua avaliação exclusiva e descubra um plano desenhado sob medida para a sua harmonização e saúde bucal.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://wa.me/31991512366?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20exclusiva."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold text-[#09090b] bg-[var(--color-gold-500)] hover:bg-[#ffe58f] transition-all duration-300 w-full md:w-auto shadow-[0_0_40px_-10px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.6)] hover:-translate-y-1"
          >
            Agendar Avaliação Privada
          </a>
        </motion.div>

        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[10px] font-sans tracking-widest uppercase text-zinc-500 mt-8 block"
        >
          Atendimento personalizado em Lagoa Santa
        </motion.span>
      </div>
    </section>
  );
}
