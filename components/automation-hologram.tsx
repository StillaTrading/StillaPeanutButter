"use client"

import { useEffect, useRef, useState, useCallback, memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface HologramNode {
  id: string
  label: string
  x: number
  y: number
  color: string
  icon: string
}

const nodes: HologramNode[] = [
  { id: "core", label: "Business Hub", x: 50, y: 50, color: "#06b6d4", icon: "⚡" },
  { id: "whatsapp", label: "WhatsApp", x: 20, y: 25, color: "#22c55e", icon: "💬" },
  { id: "booking", label: "Booking", x: 80, y: 25, color: "#a855f7", icon: "📅" },
  { id: "crm", label: "CRM", x: 15, y: 70, color: "#3b82f6", icon: "👥" },
  { id: "payments", label: "Payments", x: 85, y: 70, color: "#f59e0b", icon: "💳" },
  { id: "analytics", label: "Analytics", x: 50, y: 90, color: "#ec4899", icon: "📊" },
]

const connections = [
  { from: "core", to: "whatsapp" },
  { from: "core", to: "booking" },
  { from: "core", to: "crm" },
  { from: "core", to: "payments" },
  { from: "core", to: "analytics" },
  { from: "whatsapp", to: "crm" },
  { from: "booking", to: "payments" },
]

interface DataPacket {
  id: number
  fromNode: string
  toNode: string
  progress: number
}

const HologramNode = memo(function HologramNode({
  node,
  index,
}: {
  node: HologramNode
  index: number
}) {
  const isCore = node.id === "core"

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%) translateZ(0)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        className={`relative flex flex-col items-center ${isCore ? "scale-125" : ""}`}
        animate={isCore ? { scale: [1.25, 1.35, 1.25] } : {}}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {/* Node glow */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-40"
          style={{ backgroundColor: node.color, transform: "scale(2)" }}
        />

        {/* Node circle - Core uses Stilla logo */}
        {isCore ? (
          <motion.div
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.1)",
                "0 0 30px rgba(6,182,212,0.6), 0 0 50px rgba(6,182,212,0.3), 0 0 80px rgba(6,182,212,0.15)",
                "0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src="/stilla-logo-premium.png"
              alt="Stilla Systems Hub"
              width={96}
              height={96}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        ) : (
          <div
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 backdrop-blur-sm"
            style={{
              borderColor: node.color,
              backgroundColor: "transparent",
              boxShadow: `0 0 20px ${node.color}40, inset 0 0 15px ${node.color}20`,
            }}
          >
            <span className="text-lg">{node.icon}</span>
          </div>
        )}

        {/* Label */}
        <span className="mt-2 text-xs font-bold whitespace-nowrap" style={{ color: node.color }}>
          {node.label}
        </span>
      </motion.div>
    </motion.div>
  )
})

export function AutomationHologram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [packets, setPackets] = useState<DataPacket[]>([])
  const packetIdRef = useRef(0)

  const createPacket = useCallback(() => {
    const connection = connections[Math.floor(Math.random() * connections.length)]
    const newPacket: DataPacket = {
      id: packetIdRef.current++,
      fromNode: connection.from,
      toNode: connection.to,
      progress: 0,
    }
    setPackets((prev) => [...prev.slice(-6), newPacket])
  }, [])

  useEffect(() => {
    const interval = setInterval(createPacket, 1000)
    return () => clearInterval(interval)
  }, [createPacket])

  useEffect(() => {
    const interval = setInterval(() => {
      setPackets((prev) => prev.map((p) => ({ ...p, progress: p.progress + 0.02 })).filter((p) => p.progress <= 1))
    }, 16)

    return () => clearInterval(interval)
  }, [])

  const getNodePosition = useCallback((nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId)
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 }
  }, [])

  const getPacketPosition = useCallback(
    (packet: DataPacket) => {
      const from = getNodePosition(packet.fromNode)
      const to = getNodePosition(packet.toNode)
      return {
        x: from.x + (to.x - from.x) * packet.progress,
        y: from.y + (to.y - from.y) * packet.progress,
      }
    },
    [getNodePosition],
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-lg mx-auto"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="absolute inset-0 rounded-full" />

      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="hologram-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hologram-grid)" />
      </svg>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, i) => {
          const from = getNodePosition(conn.from)
          const to = getNodePosition(conn.to)
          return (
            <g key={i}>
              <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="url(#line-gradient)"
                strokeWidth="1"
                opacity="0.3"
              />
              <motion.line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="url(#line-gradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="4 8"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </g>
          )
        })}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data packets */}
      {packets.map((packet) => {
        const pos = getPacketPosition(packet)
        return (
          <motion.div
            key={packet.id}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%) translateZ(0)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.8 }}
          />
        )
      })}

      {/* Nodes - using memoized component */}
      {nodes.map((node, i) => (
        <HologramNode key={node.id} node={node} index={i} />
      ))}

      {/* Outer ring - transparent background */}
      <motion.div
        className="absolute inset-4 rounded-full border border-cyan-400/20"
        style={{ transform: "translateZ(0)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-blue-400/10"
        style={{ transform: "translateZ(0)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
