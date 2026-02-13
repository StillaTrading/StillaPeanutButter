"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

export function ListingsBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cards = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 60,
      rotation: Math.random() * 30 - 15,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 15,
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="absolute rounded-xl bg-blue-400/20 backdrop-blur-sm border border-blue-400/30"
          style={{
            left: `${card.x}%`,
            top: `${card.y}%`,
            width: card.size,
            height: card.size * 1.3,
            rotate: card.rotation,
          }}
          animate={{
            y: [0, -60, 0],
            rotate: [card.rotation, card.rotation + 10, card.rotation],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: card.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: card.delay,
          }}
        >
          {/* Card details */}
          <div className="p-3 space-y-2">
            <div className="w-full h-1/2 bg-blue-400/20 rounded" />
            <div className="w-3/4 h-2 bg-blue-400/15 rounded" />
            <div className="w-1/2 h-2 bg-blue-400/10 rounded" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
