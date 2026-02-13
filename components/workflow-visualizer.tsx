"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface WorkflowNode {
  id: string
  label: string
  icon: React.ReactNode
  type: "trigger" | "action" | "condition" | "output"
}

interface WorkflowVisualizerProps {
  title: string
  nodes: WorkflowNode[]
  description?: string
}

export function WorkflowVisualizer({ title, nodes, description }: WorkflowVisualizerProps) {
  const getNodeColor = (type: string) => {
    switch (type) {
      case "trigger":
        return "from-green-500 to-emerald-600"
      case "action":
        return "from-blue-500 to-cyan-600"
      case "condition":
        return "from-purple-500 to-pink-600"
      case "output":
        return "from-orange-500 to-red-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        {description && <p className="text-white/60">{description}</p>}
      </div>

      <div className="glass premium-border p-8 md:p-12 rounded-2xl overflow-x-auto">
        <div className="flex items-center gap-2 md:gap-4 min-w-max md:min-w-full md:justify-center">
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <div
                className={`flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-xl bg-gradient-to-br ${getNodeColor(
                  node.type,
                )} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="text-white text-2xl md:text-3xl mb-1">{node.icon}</div>
                <div className="text-white text-center text-xs md:text-sm font-semibold px-2">{node.label}</div>
              </div>

              {index < nodes.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="hidden md:flex items-center justify-center w-8 h-8 mx-2"
                >
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </motion.div>
              )}

              {index < nodes.length - 1 && (
                <div className="flex md:hidden items-center justify-center w-6 h-6 mx-1">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
