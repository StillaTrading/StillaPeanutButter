"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

interface ServicePopupProps {
  isOpen: boolean
  onClose: () => void
  service: "automations" | "agents"
  title: string
  description: string
  features: string[]
  price?: string
}

export function ServicePopup({ isOpen, onClose, service, title, description, features, price }: ServicePopupProps) {
  const isAutomations = service === "automations"
  const accentGradient = isAutomations ? "from-cyan-400 to-blue-500" : "from-purple-400 to-pink-500"

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-2xl glass premium-border rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

              <div className="relative p-8 md:p-12">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="mb-6"
                >
                  <div className={`inline-block h-1 w-12 bg-gradient-to-r ${accentGradient} rounded-full mb-4`} />
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3">{title}</h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">{description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-sm font-bold text-cyan-400/80 uppercase tracking-wider mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 text-white/70 text-sm"
                      >
                        <div
                          className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentGradient} flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  {price && (
                    <div className="text-white">
                      <span className="text-3xl font-black">₵{price}</span>
                      <span className="text-white/50 text-sm ml-2">per month</span>
                    </div>
                  )}
                  <Link
                    href={`/services/${isAutomations ? "business-automations" : "ai-agents"}`}
                    className={`ml-auto px-8 py-3 bg-gradient-to-r ${accentGradient} text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95`}
                    onClick={onClose}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
