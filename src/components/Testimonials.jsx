export default function Testimonials() {
  const items = [
    {
      name: 'María Gómez',
      role: 'CMO',
      company: 'EcomX',
      quote: 'Pasamos de reaccionar tarde a anticiparnos a cada movimiento de la competencia. El impacto en conversión fue inmediato.'
    },
    {
      name: 'Luis Fernández',
      role: 'Head of Growth',
      company: 'B2B Cloud',
      quote: 'Los reportes automáticos y el panel con IA nos ahorran horas cada semana. Tomamos decisiones con datos, no con intuiciones.'
    },
    {
      name: 'Andrea López',
      role: 'CEO',
      company: 'RetailPro',
      quote: 'Las alertas de pricing y catálogo nos dieron una ventaja brutal. Nuestra estrategia cambió por completo.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Lo dicen los equipos que ya lo usan</h2>
          <p className="mt-3 text-slate-600">Historias reales de impacto directo en negocio.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">{t.name} — {t.role} en {t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
