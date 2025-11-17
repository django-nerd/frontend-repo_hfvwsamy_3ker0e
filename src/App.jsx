import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import InlineCTA from './components/InlineCTA'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import MotionSection from './components/MotionSection'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <MotionSection>
          <Hero />
        </MotionSection>
        <MotionSection delay={0.05}>
          <WhatIs />
        </MotionSection>
        <MotionSection delay={0.1}>
          <Features />
        </MotionSection>
        <MotionSection delay={0.1}>
          <HowItWorks />
        </MotionSection>
        <MotionSection delay={0.12}>
          <Benefits />
        </MotionSection>
        <MotionSection delay={0.12}>
          <InlineCTA />
        </MotionSection>
        <MotionSection delay={0.14}>
          <Testimonials />
        </MotionSection>
        <MotionSection delay={0.14}>
          <Comparison />
        </MotionSection>
        <MotionSection delay={0.16}>
          <Integrations />
        </MotionSection>
        <MotionSection delay={0.16}>
          <Pricing />
        </MotionSection>
        <MotionSection delay={0.18}>
          <FinalCTA />
        </MotionSection>
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div>© {new Date().getFullYear()} ConQuienCompito</div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-700">Funcionalidades</a>
            <a href="#pricing" className="hover:text-slate-700">Precios</a>
            <a href="#" className="hover:text-slate-700">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
