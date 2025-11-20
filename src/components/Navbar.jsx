import { useState } from 'react'
import { Menu, Shield, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href="#" className="text-slate-200/90 hover:text-white transition-colors px-3 py-2">
      {label}
    </a>
  )

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center shadow-lg shadow-blue-500/30">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="font-semibold text-white tracking-tight">CaseCraft</div>
          </div>

          <nav className="hidden md:flex items-center">
            {navItem('Cases')}
            {navItem('How it works')}
            {navItem('Provably Fair')}
            {navItem('Support')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-slate-200 hover:text-white">Log in</button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30">
              <User className="h-4 w-4" /> Sign up
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 space-y-2">
            <div className="flex flex-col">
              {navItem('Cases')}
              {navItem('How it works')}
              {navItem('Provably Fair')}
              {navItem('Support')}
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-slate-200 hover:text-white flex-1">Log in</button>
              <button className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex-1">
                <User className="h-4 w-4" /> Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
