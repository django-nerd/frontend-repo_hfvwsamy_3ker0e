export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/mes',
      highlight: false,
      features: [
        '1 proyecto',
        'Mapa básico de competidores',
        'Alertas limitadas',
        'Informe mensual',
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/mes',
      highlight: true,
      features: [
        'Hasta 5 proyectos',
        'Análisis financiero y auditorías',
        'Alertas 24/7 + tracking de precios',
        'Informes semanales',
        'Panel estratégico con IA'
      ]
    },
    {
      name: 'Business',
      price: 'A medida',
      period: '',
      highlight: false,
      features: [
        'Volúmenes altos y datos avanzados',
        'Integraciones y API',
        'Soporte prioritario',
        'Seguridad y cumplimiento'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Planes y Precios</h2>
          <p className="mt-3 text-slate-600">Elige el plan que se adapta a tu estrategia.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-6 shadow-sm bg-white ${p.highlight ? 'border-blue-600 shadow-blue-600/20' : 'border-slate-200'}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow">Recomendado</div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <div className="text-3xl font-extrabold text-slate-900">{p.price}</div>
                <div className="text-slate-500">{p.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />{f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className={`block w-full text-center px-4 py-2 rounded-lg font-semibold ${p.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>Probar gratis</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
