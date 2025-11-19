import React from 'react'
import { motion } from 'framer-motion'

const shots = [
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1956&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=2070&auto=format&fit=crop'
]

export default function LookbookScreen(){
  return (
    <div className="h-full overflow-y-auto no-scrollbar">
      <div className="px-4 pt-2">
        <h3 className="text-white text-xl font-semibold">Lookbook</h3>
        <p className="text-slate-400 text-sm">Collections in motion</p>
      </div>
      <div className="mt-3 space-y-3">
        {shots.map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img className="h-72 w-full object-cover" src={src} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-[11px] uppercase tracking-widest text-indigo-200">Editorial</p>
              <p className="text-sm font-semibold">Cinematic Study</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-24" />
    </div>
  )
}
