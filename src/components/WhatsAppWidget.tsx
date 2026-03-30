import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppWidget() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "5500000000000"; // Replace with real number
  const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Clínica Scaldini.");
  const link = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="hidden md:block bg-[var(--color-noir-900)] border border-zinc-800 px-4 py-3 rounded-xl shadow-2xl shadow-black/50 mb-1 max-w-[220px] relative group"
          >
            <button 
              onClick={() => setShowBadge(false)}
              className="absolute -top-2 -left-2 bg-zinc-800 text-zinc-400 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={12} />
            </button>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Olá! Como podemos ajudar <span className="text-[var(--color-gold-400)] font-medium">você</span> hoje?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/20 group overflow-hidden"
      >
        {/* Emissive Glow Effect */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <MessageCircle size={28} fill="white" className="relative z-10 md:hidden" />
        <MessageCircle size={32} fill="white" className="relative z-10 hidden md:block" />
        
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-25" />
      </motion.a>
    </div>
  );
}
