import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseCarousel from './components/CaseCarousel'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Subtle starfield + gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(59,130,246,0.20),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(34,211,238,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage:'url(data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' opacity=\'0.3\'><defs><radialGradient id=\'g\'><stop offset=\'0%\' stop-color=\'white\'/><stop offset=\'100%\' stop-color=\'transparent\'/></radialGradient></defs><circle cx=\'10\' cy=\'20\' r=\'0.7\' fill=\'url(%23g)\'/><circle cx=\'40\' cy=\'70\' r=\'0.6\' fill=\'url(%23g)\'/><circle cx=\'80\' cy=\'30\' r=\'0.5\' fill=\'url(%23g)\'/><circle cx=\'60\' cy=\'90\' r=\'0.6\' fill=\'url(%23g)\'/></svg>)', backgroundSize:'600px 600px', backgroundRepeat:'repeat'}}></div>
      </div>

      <Navbar />
      <Hero />
      <CaseCarousel />
      <HowItWorks />

      <footer className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium">Play responsibly</p>
              <p className="text-white/60 text-sm">This is a design concept inspired by CS2 case opening platforms.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-white/70 hover:text-white text-sm">Terms</a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/70 hover:text-white text-sm">Privacy</a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/70 hover:text-white text-sm">Support</a>
            </div>
          </div>
          <p className="text-center text-white/50 text-xs mt-6">© {new Date().getFullYear()} CaseCraft — Modern, minimalist 3D design with glassmorphism</p>
        </div>
      </footer>
    </div>
  )
}

export default App
