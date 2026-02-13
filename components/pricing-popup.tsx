"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import Link from "next/link"

interface PricingPopupProps {
  isOpen: boolean
  onClose: () => void
  service: "whatsapp" | "booking"
  title: string
  description: string
  features: string[]
}

export function PricingPopup({ isOpen, onClose, service, title, description, features }: PricingPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass premium-border rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-all"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">{title}</h2>
              <p className="text-white/60 text-lg leading-relaxed">{description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-2xl p-8 mb-8 border border-cyan-500/20">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-black text-white">2,500</span>
                <span className="text-xl text-white/60">GHC</span>
              </div>
              <p className="text-white/50 text-sm mb-4 line-through">Original: 3,000 GHC</p>
              <p className="text-cyan-400 text-sm font-bold">Limited time offer • Save 500 GHC</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/services/${service === "whatsapp" ? "whatsapp-automation" : "smart-booking"}`}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-all text-center"
              >
                Get Started Now
              </Link>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
