import { Globe, Linkedin, Database, Share2, Bot } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Integrations() {
  const items = [
    { icon: Globe, name: 'Google', desc: 'Búsqueda avanzada, tendencias y señales públicas.' },
    { icon: Linkedin, name: 'LinkedIn', desc: 'Datos de empresas, equipo y anuncios.' },
    { icon: Database, name: 'Supabase', desc: 'Conectores y almacenaje de datos.' },
    { icon: Share2, name: 'Fuentes públicas', desc: 'Boletines, RSS, precios, catálogo y más.' },
    { icon: Bot, name: 'AI Agents', desc: 'Automatizaciones y acciones autónomas.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Integraciones</h2>
          <p className="mt-3 text-slate-600">Ecosistema preparado para conectar con tus herramientas clave.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {items.map(({ icon: Icon, name, desc }) => (
            <motion.div key={name}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-700/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{name}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
