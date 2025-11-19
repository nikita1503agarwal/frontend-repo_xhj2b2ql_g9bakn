import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, ShoppingBag, Images, User, Sparkles } from 'lucide-react'

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'shop', label: 'Shop', icon: ShoppingBag },
  { key: 'lookbook', label: 'Lookbook', icon: Images },
  { key: 'featured', label: 'Featured', icon: Sparkles },
  { key: 'profile', label: 'Profile', icon: User },
]

export default function MobileShell({ screens }) {
  const [active, setActive] = useState('home')
  const ActiveScreen = screens[active]

  return (
    <div className="min-h-screen w-full bg-slate-950 relative overflow-hidden">
      {/* Cinematic gradient + lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 -right-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%),linear-gradient(160deg,rgba(16,185,129,0.03),transparent_40%)]" />
      </div>

      {/* Mobile frame */}
      <div className="relative mx-auto max-w-sm min-h-screen flex flex-col">
        <div className="h-12" />
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.6, ease:'easeOut'}} className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-600 shadow-[0_0_35px_rgba(99,102,241,0.35)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Tasmeem</p>
                <h1 className="-mt-0.5 text-lg font-semibold tracking-tight text-slate-100">Contemporary</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm" />
              <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="relative flex-1 mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <ActiveScreen />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom nav */}
        <div className="sticky bottom-4 w-full px-4 pb-4">
          <div className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-indigo-900/30">
            <div className="relative grid grid-cols-5">
              {tabs.map((t) => {
                const Icon = t.icon
                const isActive = active === t.key
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className="relative flex items-center justify-center gap-2 py-3 text-[11px] font-medium text-slate-400"
                  >
                    <div className="relative">
                      {isActive && (
                        <motion.span layoutId="glow" className="absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.22),transparent_60%)]" />
                      )}
                      <Icon size={20} className={isActive ? 'text-indigo-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]' : 'text-slate-400'} />
                    </div>
                    <span className={isActive ? 'text-indigo-200' : 'text-slate-400'}>{t.label}</span>
                  </button>
                )
              })}
              <motion.div
                layoutId="active-pill"
                className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400"
                style={{ width: `${100 / tabs.length}%`, left: `${tabs.findIndex((x) => x.key === active) * (100 / tabs.length)}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
