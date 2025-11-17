import { motion } from 'framer-motion'

export default function Comparison() {
  const items = [
    {
      before: 'Análisis manual, desorden y hojas de cálculo',
      after: 'Automatización total, claridad y foco estratégico'
    },
    {
      before: 'Reaccionar tarde a cambios del mercado',
      after: 'Alertas en tiempo real y acciones proactivas'
    },
    {
      before: 'Información dispersa y poco confiable',
      after: 'Datos consolidados y verificados con IA'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Antes vs Después</h2>
          <p className="mt-3 text-slate-600">De la incertidumbre a la ventaja competitiva constante.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 space-y-4"
        >
          {items.map((it, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Antes</h3>
                  <p className="mt-2 text-slate-700">{it.before}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Después</h3>
                  <p className="mt-2 text-slate-700">{it.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
