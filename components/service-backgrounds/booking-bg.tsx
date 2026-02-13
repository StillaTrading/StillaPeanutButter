"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

export function BookingBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const timeSlots = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: (i % 5) * 20,
      y: Math.floor(i / 5) * 25,
      delay: Math.random() * 8,
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Calendar Grid */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 gap-4 p-8">
        {timeSlots.map((slot) => (
          <motion.div
            key={slot.id}
            className="rounded-lg bg-purple-400/20 backdrop-blur-sm border border-purple-400/30"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: slot.delay,
            }}
          >
            <div className="p-2">
              <div className="w-full h-1 bg-purple-400/30 rounded mb-1" />
              <div className="w-2/3 h-1 bg-purple-400/20 rounded" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Timeline */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
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
