export default function BeforeAfter() {
  const before = [
    'Análisis manual y desordenado',
    'Horas perdidas recopilando datos',
    'Falta de visión y prioridades',
    'Reaccionar tarde a movimientos clave'
  ]
  const after = [
    'Automatización total del seguimiento',
    'Datos confiables en tiempo real',
    'Claridad estratégica y foco',
    'Ventaja competitiva constante'
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Antes</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Después</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {after.map((b) => (
                <li key={b} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
