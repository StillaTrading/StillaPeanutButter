"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const useCases = [
  {
    title: "Control",
    outcome: "Unified command center",
    slug: "control",
    metric: "100% visibility",
  },
  {
    title: "Speed",
    outcome: "Sub-second response",
    slug: "speed",
    metric: "Real-time execution",
  },
  {
    title: "Reliability",
    outcome: "Enterprise uptime",
    slug: "reliability",
    metric: "99.9% SLA",
  },
  {
    title: "Scalability",
    outcome: "Zero capacity limits",
    slug: "scalability",
    metric: "Auto-scaling",
  },
  {
    title: "Integration",
    outcome: "Systems connected",
    slug: "integration",
    metric: "50+ integrations",
  },
  {
    title: "Security",
    outcome: "Enterprise compliance",
    slug: "security",
    metric: "End-to-end encrypted",
  },
]

export function IndustryCarousel() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
        {useCases.map((useCase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/industries/${useCase.slug}`} className="block h-full">
              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                className="relative h-full p-8 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-slate-400/12 bg-gradient-to-br from-slate-900/25 to-slate-800/5 hover:border-cyan-400/30 hover:shadow-[0_12px_40px_rgba(0,217,255,0.12)] transition-all duration-600 group overflow-hidden"
              >
                {/* Subtle hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />

                {/* Content container */}
                <div className="relative z-10 flex flex-col gap-7 sm:gap-8 h-full">
                  {/* Title and visual accent */}
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors duration-500">
                      {useCase.title}
                    </h3>
                    <div className="h-0.5 w-10 bg-gradient-to-r from-cyan-400 to-cyan-400/30 rounded-full group-hover:w-14 transition-all duration-500" />
                  </div>

                  {/* Outcome and metric - minimal text focus */}
                  <div className="flex-grow">
                    <div className="mb-4 sm:mb-5">
                      <p className="text-base sm:text-lg text-white font-bold leading-tight">
                        {useCase.outcome}
                      </p>
                    </div>
                    <div className="inline-block px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/25 rounded-lg">
                      <span className="text-xs sm:text-sm font-semibold text-cyan-300">
                        {useCase.metric}
                      </span>
                    </div>
                  </div>

                  {/* Minimal link indicator */}
                  <div className="pt-6 sm:pt-7 border-t border-white/10 group-hover:border-cyan-400/20 transition-colors duration-500">
                    <span className="text-xs sm:text-xs font-semibold text-white/50 group-hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                      Explore
                      <span className="inline-block group-hover:translate-x-1 transition-transform duration-500">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
