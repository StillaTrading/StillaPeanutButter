"use client"

import { motion } from "framer-motion"

export function LegalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="legal-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="100" height="100" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="rgba(6, 182, 212, 0.4)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#legal-grid)" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(67,56,202,0.02)_0%,transparent_50%)]" />

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
