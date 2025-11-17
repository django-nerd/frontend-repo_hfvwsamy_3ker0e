import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 grid place-items-center shadow-md shadow-blue-900/10">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">ConQuienCompito</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-blue-700 transition-colors">Funcionalidades</a>
          <a href="#how" className="hover:text-blue-700 transition-colors">Cómo funciona</a>
          <a href="#pricing" className="hover:text-blue-700 transition-colors">Precios</a>
          <a href="#testimonials" className="hover:text-blue-700 transition-colors">Clientes</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:text-blue-700">Entrar</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm shadow-blue-500/20">Probar gratis</a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"><Menu className="h-5 w-5" /></button>
      </div>
    </header>
  )
}
