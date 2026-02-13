"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

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

function OutcomeCard({ useCase, index }: { useCase: (typeof useCases)[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/industries/${useCase.slug}`} className="block h-full">
        <motion.div
          onClick={(e) => {
            e.preventDefault()
            setIsExpanded(!isExpanded)
          }}
          layout
          className="relative h-full cursor-pointer rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-slate-400/12 bg-gradient-to-br from-slate-900/25 to-slate-800/5 hover:border-cyan-400/30 transition-all duration-600 group overflow-hidden"
          whileHover={{ 
            borderColor: "rgba(0, 217, 255, 0.3)",
            boxShadow: "0 12px 40px rgba(0,217,255,0.12)",
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Subtle hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />

          {/* Content container with layout animation */}
          <motion.div
            layout
            className="relative z-10 flex flex-col h-full overflow-hidden"
            animate={isExpanded ? { padding: "32px 32px" } : { padding: "32px 32px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title and visual accent - always visible */}
            <motion.div
              layout="position"
              className="mb-4"
              animate={isExpanded ? { marginBottom: "20px" } : { marginBottom: "16px" }}
            >
              <motion.h3
                layout="position"
                className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors duration-500"
              >
                {useCase.title}
              </motion.h3>
              <motion.div
                layout="position"
                className="h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-400/30 rounded-full group-hover:w-14 transition-all duration-500"
                animate={isExpanded ? { width: "56px" } : { width: "40px" }}
              />
            </motion.div>

            {/* Metric - always visible */}
            <div className="mb-4">
              <motion.div
                layout="position"
                className="inline-block px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/25 rounded-lg"
              >
                <span className="text-xs sm:text-sm font-semibold text-cyan-300">
                  {useCase.metric}
                </span>
              </motion.div>
            </div>

            {/* Expandable outcome section */}
            <motion.div
              initial={false}
              animate={isExpanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-4"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: isExpanded ? 0.1 : 0 }}
                className="pt-2"
              >
                <p className="text-base sm:text-lg text-white font-bold leading-tight">
                  {useCase.outcome}
                </p>
              </motion.div>
            </motion.div>

            {/* Expand/collapse indicator */}
            <motion.div
              layout="position"
              className="pt-4 sm:pt-5 border-t border-white/10 group-hover:border-cyan-400/20 transition-colors duration-500 mt-auto"
            >
              <motion.span
                animate={{ color: isExpanded ? "rgb(34, 197, 94)" : "rgba(255, 255, 255, 0.5)" }}
                className="text-xs sm:text-xs font-semibold group-hover:text-cyan-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                {isExpanded ? "Collapse" : "Expand"}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  ↓
                </motion.span>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function IndustryCarousel() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
        {useCases.map((useCase, i) => (
          <OutcomeCard key={i} useCase={useCase} index={i} />
        ))}
      </div>
    </div>
  )
}
