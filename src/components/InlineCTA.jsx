export default function InlineCTA() {
  return (
    <section id="cta" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Empieza a conocer a tu competencia hoy mismo</h3>
        <p className="mt-3 text-white/80">Crea tu cuenta gratuita y activa la monitorización en minutos.</p>
        <div className="mt-6">
          <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-slate-50">Probar gratis</a>
        </div>
      </div>
    </section>
  )
}
