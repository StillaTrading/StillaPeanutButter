"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

interface SuccessAnimationProps {
  show: boolean
}

export default function SuccessAnimation({ show }: SuccessAnimationProps) {
  useEffect(() => {
    if (show && typeof window !== "undefined") {
      // Load and trigger confetti
      import("canvas-confetti").then((confetti) => {
        // Initial burst from the center
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFD700", "#FF0000", "#FFA500", "#32CD32"],
        })

        // Left side cannon
        setTimeout(() => {
          confetti.default({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#FFD700", "#FF0000", "#FFA500"],
          })
        }, 250)

        // Right side cannon
        setTimeout(() => {
          confetti.default({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#FFD700", "#FF0000", "#FFA500"],
          })
        }, 400)

        // Final burst
        setTimeout(() => {
          confetti.default({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.8 },
            gravity: 0.8,
            colors: ["#FFD700", "#FF0000", "#FFA500", "#32CD32", "#1E90FF"],
            ticks: 300,
          })
        }, 1000)
      })
    }
  }, [show])

  if (!show) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 0.8, times: [0, 0.6, 1], ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ delay: 0.3, duration: 0.8, times: [0, 0.6, 1] }}
          className="absolute inset-0 bg-green-500 rounded-full opacity-20"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 2, 1.5] }}
          transition={{ delay: 0.5, duration: 1, times: [0, 0.6, 1] }}
          className="absolute inset-0 bg-green-500 rounded-full opacity-10"
        />
      </motion.div>
    </div>
  )
}
