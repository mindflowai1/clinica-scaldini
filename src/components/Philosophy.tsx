import { motion } from 'framer-motion';
import doctorsImg from '../assets/doctors.png';

const pillars = [
  { id: '01', title: 'Exclusividade', text: 'Atendimento sob medida em um ambiente planejado para o seu conforto absoluto.' },
  { id: '02', title: 'Alta Tecnologia', text: 'Protocolos modernos que garantem previsibilidade e segurança em cada procedimento.' },
  { id: '03', title: 'Naturalidade', text: 'Nosso foco não é a mudança drástica, mas o realce da sua beleza autêntica.' },
];

export function Philosophy() {
  return (
    <section id="a_clinica" className="relative py-20 md:py-40 px-5 md:px-6 bg-[var(--color-noir-950)] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Main: Doctors + Description (Asymmetric Editorial) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] rounded-sm">
              <img 
                src={doctorsImg} 
                alt="Dra. Mariana Scaldini e Dr. Iago Bezerra" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              {/* Subtle gold accent border */}
              <div className="absolute inset-0 border border-[var(--color-gold-500)]/10 rounded-sm pointer-events-none" />
            </div>
            {/* Floating caption card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-4 right-4 md:left-auto md:-right-4 lg:right-8 bg-[var(--color-noir-900)]/90 backdrop-blur-sm border border-zinc-800 px-5 py-3 md:px-6 md:py-4 rounded-sm"
            >
              <p className="text-[var(--color-gold-500)] font-serif text-base md:text-lg leading-tight">Dra. Mariana Scaldini</p>
              <p className="text-zinc-500 text-xs tracking-wider uppercase mt-0.5">Harmonização Facial</p>
              <div className="w-8 h-px bg-zinc-700 my-2.5" />
              <p className="text-[var(--color-gold-500)] font-serif text-base md:text-lg leading-tight">Dr. Iago Bezerra</p>
              <p className="text-zinc-500 text-xs tracking-wider uppercase mt-0.5">Cirurgião-Dentista</p>
            </motion.div>
          </motion.div>

          {/* Text content — Title lives here now */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center mt-10 lg:mt-0 lg:py-8"
          >
            {/* Section tag */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.25em] text-xs text-[var(--color-gold-500)] mb-6"
            >
              Nossa Filosofia
            </motion.span>

            {/* Main headline — anchored to this column */}
            <h2 className="text-2xl md:text-[2.75rem] lg:text-5xl font-serif text-white leading-[1.15] mb-8 md:mb-10">
              A verdadeira elegância é natural e imperceptível.
            </h2>

            {/* Thin gold divider */}
            <div className="w-16 h-px bg-[var(--color-gold-500)]/30 mb-10" />

            <span className="uppercase tracking-[0.2em] text-xs text-zinc-600 mb-4">Quem Somos</span>
            <h3 className="text-xl md:text-2xl font-serif text-white/90 leading-snug mb-6">
              Ciência e arte a serviço da sua autoconfiança.
            </h3>
            <p className="text-zinc-400 font-sans font-light leading-relaxed mb-6 text-balance">
              Na Clínica Scaldini, não tratamos apenas de dentes ou rostos. Nós esculpimos autoconfiança. 
              Unimos ciência avançada a um senso artístico refinado para entregar resultados que 
              harmonizam perfeitamente com a sua essência.
            </p>
            <p className="text-zinc-500 font-sans font-light leading-relaxed text-balance">
              Com formação nas melhores instituições do país e uma obsessão por detalhes, 
              nossa equipe combina técnica de excelência com um olhar sensível — porque cada 
              rosto conta uma história única que merece ser valorizada.
            </p>

            {/* Signature line */}
            <div className="mt-10 pt-8 border-t border-zinc-800/80">
              <p className="text-zinc-400 text-lg md:text-xl italic font-serif">
                "Nosso compromisso é com a beleza que respeita a individualidade."
              </p>
            </div>
          </motion.div>
        </div>  

        {/* ── Bottom: Pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="border-t border-zinc-800/50 pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative pl-8 border-l border-zinc-800 hover:border-[var(--color-gold-500)]/40 transition-colors duration-500"
              >
                <span className="absolute top-0 left-6 text-5xl font-serif text-[var(--color-gold-500)]/15 -translate-y-3 select-none pointer-events-none">{pillar.id}</span>
                <h4 className="uppercase tracking-[0.12em] text-sm text-zinc-200 mb-3">{pillar.title}</h4>
                <p className="text-sm font-light text-zinc-500 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
