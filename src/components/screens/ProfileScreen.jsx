import React from 'react'
import { motion } from 'framer-motion'

export default function ProfileScreen(){
  return (
    <div className="h-full overflow-y-auto no-scrollbar px-4 pb-24">
      <div className="pt-2">
        <h3 className="text-white text-xl font-semibold">Profile</h3>
        <p className="text-slate-400 text-sm">Personalized dashboard</p>
      </div>

      <div className="mt-4 space-y-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-600" />
            <div>
              <p className="text-white font-medium">Guest</p>
              <p className="text-slate-400 text-sm">Welcome to Tasmeem</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[['Orders','12'],['Wishlist','7'],['Points','240'],['Invites','3']].map(([k,v])=> (
            <div key={k} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-widest text-indigo-200">{k}</p>
              <p className="text-white text-2xl font-semibold mt-1">{v}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-indigo-600/10 p-4">
          <p className="text-white font-medium">Member Perks</p>
          <p className="text-slate-300 text-sm">Early access to drops and events.</p>
          <button className="mt-3 relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-white">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 opacity-90" />
            <span className="relative">Join Now</span>
          </button>
        </div>
      </div>
    </div>
  )
}
