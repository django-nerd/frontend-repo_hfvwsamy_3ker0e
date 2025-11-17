import { motion } from 'framer-motion'

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {items.map((t) => (
            <motion.div
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">{t.name} — {t.role} en {t.company}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
