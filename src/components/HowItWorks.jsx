import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Introduce tu empresa',
    desc: 'Indica tu web y sector. Nuestro crawler y modelos de IA comienzan a trabajar.'
  },
  {
    title: 'Detectamos todos tus competidores',
    desc: 'Identificamos, clasificamos y priorizamos competidores directos e indirectos.'
  },
  {
    title: 'Recibes insights y alertas continuas',
    desc: 'Panel estratégico, reportes y auditorías automáticas, siempre actualizados.'
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Cómo funciona</h2>
          <p className="mt-3 text-slate-600">Tres pasos para transformar la manera en que analizas a tu competencia.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {steps.map((s, i) => (
            <motion.div key={s.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white grid place-items-center font-bold shadow-md shadow-blue-700/30">{i+1}</div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
