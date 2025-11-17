export default function WhatIs() {
  return (
    <section id="que-es" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">¿Qué es ConQuienCompito?</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              ConQuienCompito es un SaaS de inteligencia competitiva diseñado para pymes, ecommerce, negocios digitales y equipos B2B.
              Obtiene datos en tiempo real desde la web, redes sociales, reputación y precios; procesa esa información con IA avanzada y te entrega
              insights accionables, alertas críticas y auditorías completas de tus competidores.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" /> Datos en tiempo real: web, RRSS, reputación, precios.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" /> Análisis automatizados por IA y priorización inteligente.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" /> Alertas críticas y auditorías profundas de competidores.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-100 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 grid place-items-center text-slate-400">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-700/30" />
                  <p className="mt-4 text-sm">Mockup de dashboard estratégico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
