import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-6 pb-10 md:pt-10 md:pb-16 lg:pt-14 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Live drops happening now
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Open premium CS2 cases with a modern, provably-fair experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-white/70 text-lg"
            >
              Smooth animations, sleek design, and transparent odds. Spin up, watch the roll, and claim your winnings instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 flex flex-col sm:flex-row items-center gap-3"
            >
              <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/30">
                Browse Cases
              </button>
              <button className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 hover:text-white backdrop-blur-md">
                Learn More
              </button>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="text-2xl font-semibold text-white">500K+</div>
                <div className="text-xs text-white/60">Rolls completed</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="text-2xl font-semibold text-white">GLB</div>
                <div className="text-xs text-white/60">Glassmorphic</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="text-2xl font-semibold text-white">PF</div>
                <div className="text-xs text-white/60">Provably Fair</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative h-[420px] sm:h-[500px] lg:h-[560px]"
          >
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
