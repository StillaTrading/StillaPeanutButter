"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

export function SupportBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nodes = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }))
  }, [])

  const connections = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: Math.random() * 3,
    }))
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      {/* Neural Network Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: node.delay,
          }}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="rgba(6, 182, 212, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: conn.delay,
            }}
          />
        ))}
      </svg>

      {/* Orbiting Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[200, 300, 400].map((size, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/20 rounded-full"
            style={{
              width: size,
              height: size,
              left: -size / 2,
              top: -size / 2,
            }}
            animate={{
              rotate: 360,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              opacity: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>
    </div>
  )
}
