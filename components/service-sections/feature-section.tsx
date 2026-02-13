"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface FeatureSectionProps {
  title: string
  subtitle?: string
  features: Feature[]
}

export function FeatureSection({ title, subtitle, features }: FeatureSectionProps) {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_70%)] opacity-50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{title}</h2>
          {subtitle && <p className="text-lg text-white/70 max-w-3xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass premium-border p-8 rounded-2xl group hover:border-cyan-400/50 transition-all backdrop-blur-md bg-black/30"
            >
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
