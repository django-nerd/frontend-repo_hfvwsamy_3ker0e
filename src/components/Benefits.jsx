import { motion } from 'framer-motion'

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
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Beneficios directos</h2>
            <p className="mt-3 text-slate-600">Resultados concretos para tu negocio, desde el primer día.</p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, idx) => (
                <motion.li key={b} className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-slate-700">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="absolute -inset-6 rounded-3xl bg-blue-100 blur-2xl" />
            <motion.div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
              animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 grid place-items-center text-slate-400">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-700/30" />
                  <p className="mt-4 text-sm">Mockup de insights y alertas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
