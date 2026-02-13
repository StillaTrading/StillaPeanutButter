"use client"

import { motion } from "framer-motion"

export function Orb() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />

      {/* Main Orb */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 via-primary/40 to-black/60 border border-white/20 backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
        <span className="text-4xl md:text-5xl font-black tracking-tighter text-white drop-shadow-2xl">S</span>
      </motion.div>
    </div>
  )
}
