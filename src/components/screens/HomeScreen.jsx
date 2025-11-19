import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HomeScreen() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <div ref={ref} className="h-full overflow-y-auto no-scrollbar">
      <div className="relative">
        {/* Hero with parallax layers */}
        <div className="relative h-[62vh] overflow-hidden rounded-b-[2rem]">
          <motion.div style={{ y: y1 }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-105" />
          <motion.div style={{ y: y2 }} className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950" />

          <div className="relative z-10 p-6 pt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-indigo-100 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 animate-pulse" />
              New Drop: A/W Cinematics
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white leading-tight drop-shadow-[0_8px_25px_rgba(0,0,0,0.45)]">Tasmeem Studio</h2>
            <p className="mt-2 text-slate-200/90 max-w-xs">Cities, silhouettes, and light — crafted for the contemporary wardrobe.</p>

            <div className="mt-5 flex gap-3">
              <button className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-white">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="relative">Shop the Drop</span>
              </button>
              <button className="relative rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-100 backdrop-blur-md hover:bg-white/15">Lookbook</button>
            </div>
          </div>
        </div>

        {/* Highlights carousel */}
        <div className="px-4 -mt-10 relative z-10">
          <div className="flex gap-4 overflow-x-auto pb-3 no-scrollbar">
            {[1,2,3,4].map((i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="group relative w-56 h-72 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img alt="highlight" className="h-full w-full object-cover" src={`https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1389&auto=format&fit=crop`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-slate-300">Edit {i}</p>
                    <p className="text-sm font-semibold text-white">Urban Layers</p>
                  </div>
                  <div className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-[10px] text-indigo-100 backdrop-blur-md group-hover:bg-white/15">View</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Split banner */}
        <div className="px-4 mt-2 grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1974&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-[11px] uppercase tracking-widest text-indigo-200">Mens</p>
              <p className="text-sm font-semibold">Outerwear</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1887&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-[11px] uppercase tracking-widest text-indigo-200">Womens</p>
              <p className="text-sm font-semibold">New Season</p>
            </div>
          </div>
        </div>

        {/* Lifestyle panel */}
        <div className="px-4 mt-4 mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/60 via-fuchsia-900/20 to-cyan-900/20 p-5">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.25),transparent_60%)] blur-xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-xl" />
            <h3 className="text-white text-lg font-semibold">The City Capsule</h3>
            <p className="text-slate-300 text-sm mt-1">Performance fabrics, soft hues, and neon trims.</p>
            <div className="mt-4 flex gap-3">
              {[1,2,3].map((i)=> (
                <div key={i} className="group relative h-24 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img className="h-full w-full object-cover" src={`https://images.unsplash.com/photo-1520975659191-32421d0923e1?q=80&w=1374&auto=format&fit=crop`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
