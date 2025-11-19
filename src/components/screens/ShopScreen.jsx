import React from 'react'
import { motion } from 'framer-motion'

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i+1,
  title: `Studio Piece ${i+1}`,
  price: (120 + i * 5).toFixed(0),
  img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1887&auto=format&fit=crop'
}))

export default function ShopScreen(){
  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pb-24">
      <div className="pt-2">
        <h3 className="text-white text-xl font-semibold">Shop</h3>
        <p className="text-slate-400 text-sm">Refined silhouettes, premium fabrics</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {products.map((p)=> (
          <motion.div key={p.id} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img className="h-48 w-full object-cover" src={p.img} alt={p.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-indigo-200">{p.title}</p>
                <p className="text-white text-sm font-semibold">${p.price}</p>
              </div>
              <button className="relative overflow-hidden rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-[10px] text-indigo-100 backdrop-blur-md">
                <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.15),rgba(168,85,247,0.15))] opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Add</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
