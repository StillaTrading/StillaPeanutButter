"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

export function WhatsAppBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 30,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-2xl bg-emerald-400/30 backdrop-blur-sm border border-emerald-400/20"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size * 0.6,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        >
          <div className="absolute bottom-0 -left-2 w-4 h-4 bg-emerald-400/30 rotate-45" />
        </motion.div>
      ))}
    </div>
  )
}
