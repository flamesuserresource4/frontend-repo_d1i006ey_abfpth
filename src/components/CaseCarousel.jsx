import { motion } from 'framer-motion'

const cases = [
  { id: 1, name: 'Aurora', price: 2.49, accent: 'from-blue-500 to-cyan-400' },
  { id: 2, name: 'Nebula', price: 4.99, accent: 'from-fuchsia-500 to-rose-400' },
  { id: 3, name: 'Spectral', price: 9.99, accent: 'from-emerald-500 to-teal-400' },
  { id: 4, name: 'Obsidian', price: 14.99, accent: 'from-amber-500 to-orange-400' },
]

export default function CaseCarousel() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured Cases</h2>
          <button className="text-sm text-white/70 hover:text-white">View all</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${item.accent} opacity-30 blur-2xl`} />
              <div className="relative">
                <div className="h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{item.name} Case</div>
                    <div className="text-white/60 text-sm">Provably fair</div>
                  </div>
                  <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-white text-sm">Open ${'{'}item.price{'}'}</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
