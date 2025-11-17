import { MapPinned, LineChart, BellRing, Tags, ShieldCheck, Gauge, MessageCircle, FilePieChart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MapPinned,
    title: 'Mapa de Competidores en Tiempo Real',
    desc: 'Descubre y clasifica automáticamente quién compite contigo en cada segmento y geografía.',
    benefit: 'Visión total de tu panorama competitivo.'
  },
  {
    icon: LineChart,
    title: 'Análisis Financiero y Riesgo Empresarial',
    desc: 'Modelos que estiman salud financiera, crecimiento y probabilidad de riesgo.',
    benefit: 'Decisiones con base en métricas, no intuiciones.'
  },
  {
    icon: BellRing,
    title: 'Alertas Inteligentes 24/7',
    desc: 'Detección de cambios clave: pricing, lanzamientos, menciones y movimientos estratégicos.',
    benefit: 'Reacciona a tiempo y gana ventaja.'
  },
  {
    icon: Tags,
    title: 'Tracking de Precios y Catálogos',
    desc: 'Monitorea SKU, promociones y variaciones de precios en múltiples canales.',
    benefit: 'Optimiza tu margen y tu propuesta de valor.'
  },
  {
    icon: ShieldCheck,
    title: 'Auditoría Profunda de Competidores',
    desc: 'Analiza su funnel, SEO, UX, messaging, tecnología y performance.',
    benefit: 'Detecta puntos débiles y oportunidades.'
  },
  {
    icon: Gauge,
    title: 'Panel Estratégico con IA',
    desc: 'Resúmenes ejecutivos, insights y recomendaciones priorizadas automáticamente.',
    benefit: 'Estrategia clara, lista para ejecutar.'
  },
  {
    icon: MessageCircle,
    title: 'Menciones, reputación y redes sociales',
    desc: 'Escucha social, sentimiento y menciones relevantes por canal y marca.',
    benefit: 'Entiende la percepción del mercado.'
  },
  {
    icon: FilePieChart,
    title: 'Informe automático semanal',
    desc: 'Reportes listos para comité con KPIs, cambios, riesgos y oportunidades.',
    benefit: 'Ahorra horas de análisis manual.'
  },
  {
    icon: Sparkles,
    title: 'Recomendaciones accionables con IA',
    desc: 'Tareas y next steps sugeridos por impacto y esfuerzo.',
    benefit: 'Acción inmediata con foco en ROI.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Funcionalidades clave</h2>
          <p className="mt-3 text-slate-600">Todo lo que necesitas para saber siempre con quién compites y qué está haciendo tu competencia.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, benefit }) => (
            <div key={title} className="group relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-700/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <p className="mt-3 text-sm text-blue-700 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
