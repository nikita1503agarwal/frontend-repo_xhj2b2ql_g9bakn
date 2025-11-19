import React from 'react'
import { motion } from 'framer-motion'

export default function FeaturedScreen(){
  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pb-24">
      <div className="pt-2">
        <h3 className="text-white text-xl font-semibold">Featured</h3>
        <p className="text-slate-400 text-sm">Promotions and stories</p>
      </div>
      <div className="mt-4 space-y-4">
        {[1,2,3].map((i)=>(
          <motion.div key={i} whileHover={{ scale: 1.01 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/30 via-fuchsia-900/20 to-cyan-900/20 p-5">
            <img className="absolute inset-0 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-indigo-100 backdrop-blur-md">Campaign</div>
              <h4 className="mt-3 text-white text-lg font-semibold">Neon Nights {i}</h4>
              <p className="text-slate-300 text-sm">Curated pieces with reflective accents and UV trims.</p>
              <div className="mt-4 flex gap-2">
                <button className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-white">
                  <span className="absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.25),rgba(168,85,247,0.25),rgba(59,130,246,0.25),rgba(34,211,238,0.25))] opacity-70 transition-opacity group-hover:opacity-100" />
                  <span className="relative">Explore</span>
                </button>
                <button className="relative rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-100 backdrop-blur-md hover:bg-white/15">Share</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
