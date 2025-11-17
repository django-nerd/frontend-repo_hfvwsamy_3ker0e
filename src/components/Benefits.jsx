const benefits = [
  'Ahorra horas de análisis y seguimiento manual',
  'Visión completa y accionable del mercado',
  'Detección temprana de amenazas y movimientos',
  'Ventaja competitiva constante',
  'Decisiones basadas en datos, no en intuiciones'
]

export default function Benefits() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Beneficios directos</h2>
            <p className="mt-3 text-slate-600">Resultados concretos para tu negocio, desde el primer día.</p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-blue-100 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 grid place-items-center text-slate-400">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-700/30" />
                  <p className="mt-4 text-sm">Mockup de insights y alertas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
