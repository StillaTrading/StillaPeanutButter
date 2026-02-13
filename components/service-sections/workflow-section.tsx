"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface WorkflowStep {
  number: string
  title: string
  description: string
}

interface WorkflowSectionProps {
  title: string
  subtitle?: string
  steps: WorkflowStep[]
}

export function WorkflowSection({ title, subtitle, steps }: WorkflowSectionProps) {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass premium-border p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-black text-2xl rounded-full flex items-center justify-center mb-4 shadow-lg"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full -ml-4">
                    <ArrowRight className="w-8 h-8 text-cyan-400/40 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
