import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Trophy } from 'lucide-react'

const steps = [
  { icon: Zap, title: 'Pick a case', desc: 'Choose from curated collections with transparent odds.' },
  { icon: ShieldCheck, title: 'Provably fair roll', desc: 'Each spin uses cryptographic seeds and can be verified.' },
  { icon: Trophy, title: 'Instant payouts', desc: 'Wins are credited instantly to your balance.' },
]

export default function HowItWorks() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">How it works</h2>
          <p className="mt-2 text-white/70">A sleek, modern experience designed for trust and excitement.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <div className="mx-auto mb-3 h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 grid place-items-center">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-white font-medium">{s.title}</div>
              <div className="text-white/70 text-sm mt-1">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
