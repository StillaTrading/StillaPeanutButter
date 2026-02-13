"use client"

import { motion } from "framer-motion"
import { MessageSquare, List, Calendar, UserCheck, Settings } from "lucide-react"

const icons = [
  { Icon: MessageSquare, label: "WhatsApp", color: "text-green-400" },
  { Icon: List, label: "Listings", color: "text-blue-400" },
  { Icon: Calendar, label: "Booking", color: "text-purple-400" },
  { Icon: UserCheck, label: "Support", color: "text-orange-400" },
  { Icon: Settings, label: "CRM", color: "text-gray-400" },
]

export function OrbitingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((item, i) => {
        const radius = 160 + (i % 2) * 40
        const duration = 20 + i * 5
        const delay = i * (duration / icons.length)

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            animate={{ rotate: 360 }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: -delay,
            }}
          >
            <motion.div
              style={{ x: radius }}
              className="pointer-events-auto"
              animate={{ rotate: -360 }}
              transition={{
                duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: -delay,
              }}
            >
              <div className="glass-card p-3 rounded-2xl hover:scale-110 transition-transform cursor-pointer group">
                <item.Icon className={`w-6 h-6 ${item.color} group-hover:drop-shadow-[0_0_8px_currentColor]`} />
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
