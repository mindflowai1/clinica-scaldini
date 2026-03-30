import { MoveDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

export function Hero() {
  return (
    <section className="relative h-svh min-h-[600px] md:min-h-[800px] w-full flex items-end overflow-hidden">
      {/* Background Image with slow cinematic zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir-950)] via-[var(--color-noir-950)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-noir-950)]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content — bottom-left anchored, editorial asymmetry */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 pb-28 md:pb-32">
        <div className="max-w-3xl">

          {/* Decorative gold accent line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-px bg-[var(--color-gold-500)] mb-6 md:mb-8"
          />

          {/* Category tag */}
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="inline-block mb-4 md:mb-5 text-[10px] md:text-[11px] font-sans tracking-[0.2em] md:tracking-[0.25em] uppercase text-[var(--color-gold-400)]"
          >
            Estética &amp; Odontologia de Excelência
          </motion.span>

          {/* Main Title — large, left-aligned, mobile-friendly */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.25rem] md:text-7xl lg:text-8xl font-serif text-white leading-[1.08] mb-6 md:mb-8"
          >
            A Arte do{' '}
            <br className="hidden md:block"/>
            <span className="text-[var(--color-gold-400)]">Sorriso</span> Perfeito.
          </motion.h1>

          {/* Supporting text */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="max-w-md md:max-w-lg text-sm md:text-lg text-zinc-300/90 font-sans font-light leading-relaxed mb-8 md:mb-10"
          >
            Uma experiência boutique que transforma sua autoimagem de maneira natural, sofisticada e exclusiva.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex items-center gap-8"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.15em] text-white/80 hover:text-[var(--color-gold-400)] transition-colors duration-300"
            >
              <span className="w-8 md:w-10 h-px bg-white/30 group-hover:bg-[var(--color-gold-500)] group-hover:w-14 transition-all duration-300" />
              Agendar Consulta
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — absolute bottom center */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-sans">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MoveDown size={16} strokeWidth={1} className="text-[var(--color-gold-500)]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
