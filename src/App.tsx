import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Philosophy } from './components/Philosophy'
import { ServicesShowcase } from './components/ServicesShowcase'
import { EditorialTestimonial } from './components/EditorialTestimonial'
import { Portfolio } from './components/Portfolio'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { WhatsAppWidget } from './components/WhatsAppWidget'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-noir-950)] selection:bg-[var(--color-gold-500)] selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <ServicesShowcase />
        <EditorialTestimonial />
        <Portfolio />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App
