import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute top-1/2 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs font-medium mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-400" /> En tiempo real
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Detecta, analiza y supera a tu competencia en tiempo real.
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              ConQuienCompito combina IA avanzada, análisis financiero y monitorización profunda para darte una visión completa de tu mercado.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20">
                Probar gratis
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/20">
                <PlayCircle className="h-5 w-5" /> Ver demo
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">Tu ventaja competitiva comienza aquí.</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-5">
                <div className="h-full w-full rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-5 grid grid-rows-6 gap-3">
                  <div className="row-span-1 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    </div>
                    <div className="text-xs text-slate-400">Dashboard</div>
                  </div>
                  <div className="row-span-5 grid grid-cols-12 gap-3">
                    <div className="col-span-8 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
                      <div className="h-28 rounded-md bg-gradient-to-tr from-blue-500/30 to-indigo-500/30" />
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="h-16 rounded bg-white/5" />
                        <div className="h-16 rounded bg-white/5" />
                        <div className="h-16 rounded bg-white/5" />
                      </div>
                    </div>
                    <div className="col-span-4 space-y-3">
                      <div className="h-14 rounded-lg bg-white/5 ring-1 ring-white/10" />
                      <div className="h-24 rounded-lg bg-white/5 ring-1 ring-white/10" />
                      <div className="h-24 rounded-lg bg-white/5 ring-1 ring-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
