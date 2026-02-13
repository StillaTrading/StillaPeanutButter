"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceHeroOrbProps {
  icon: LucideIcon
  color: string
  borderColor: string
}

export function ServiceHeroOrb({ icon: Icon, color, borderColor }: ServiceHeroOrbProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="mb-8"
    >
      <motion.div
        className={`w-24 h-24 rounded-3xl glass border-2 ${borderColor} flex items-center justify-center mx-auto relative overflow-hidden`}
        animate={
          prefersReducedMotion
            ? {}
            : {
                boxShadow: [`0 0 20px ${color}20`, `0 0 40px ${color}40`, `0 0 20px ${color}20`],
              }
        }
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{ background: `radial-gradient(circle, ${color}10 0%, transparent 70%)` }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }
          }
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <Icon className={`w-12 h-12 ${color} relative z-10`} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  )
}
