export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Toma el control de tu mercado. Empieza hoy.</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Activa tu prueba gratuita en minutos y descubre una nueva forma de competir.</p>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-xl shadow-blue-500/20">Crear cuenta gratis</a>
        </div>
      </div>
    </section>
  )
}
