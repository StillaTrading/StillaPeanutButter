"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const cards = [
  {
    title: "Command & Control",
    outcome: "Complete system automation",
    desc: "End-to-end workflow orchestration",
    image: "/business-automation-icon.jpg",
    color: "from-cyan-500/20 to-blue-600/10",
    borderColor: "border-cyan-400/20",
    accentGlow: "cyan",
    href: "/services/business-automations",
    primary: true,
  },
  {
    title: "Message Automation",
    outcome: "24/7 conversation handling",
    desc: "Intelligent WhatsApp responses",
    image: "/whatsapp-green-logo-3d-premium.jpg",
    color: "from-emerald-500/15 to-emerald-600/5",
    borderColor: "border-emerald-400/20",
    accentGlow: "emerald",
    href: "/services/whatsapp-automation",
  },
  {
    title: "Smart Scheduling",
    outcome: "Zero-touch appointment management",
    desc: "Automated booking confirmations",
    image: "/calendar-booking-app-icon-3d-premium-purple.jpg",
    color: "from-purple-500/15 to-purple-600/5",
    borderColor: "border-purple-400/20",
    accentGlow: "purple",
    href: "/services/smart-booking",
  },
]

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative ${card.primary ? "sm:col-span-2 lg:col-span-1" : ""}`}
        >
          <Link href={card.href} className="block h-full">
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
              className={`relative h-full overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-600 flex flex-col
              ${
                card.primary
                  ? "bg-gradient-to-br from-cyan-400/15 to-blue-500/10 border border-cyan-400/20 shadow-[0_0_60px_rgba(0,217,255,0.12)] hover:shadow-[0_0_80px_rgba(0,217,255,0.2)] hover:border-cyan-400/30"
                  : "bg-gradient-to-br from-slate-900/40 to-slate-800/20 border border-slate-400/12 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_40px_rgba(0,217,255,0.08)] hover:border-slate-400/20"
              }
              backdrop-blur-xl`}
            >
              {/* Enhanced backdrop glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

              {/* Hover glow effect */}
              <motion.div
                className={`absolute inset-0 ${card.color} opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
              />

              {/* Content container with improved spacing */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8 sm:gap-10 h-full">
                {/* Icon section with refined styling */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-slate-700/40 to-slate-800/30 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all duration-500">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        width={80}
                        height={80}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-lg"
                        priority={card.primary}
                        loading={card.primary ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                  {card.primary && (
                    <div className="px-2.5 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 backdrop-blur-md rounded-lg text-xs font-semibold text-cyan-300 border border-cyan-400/25">
                      Primary
                    </div>
                  )}
                </div>

                {/* Text hierarchy - emphasis on outcome first */}
                <div className="flex flex-col gap-4 sm:gap-5 flex-grow">
                  {/* Outcome - the primary message */}
                  <div>
                    <p className="text-xs sm:text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 letter-spacing">
                      Outcome
                    </p>
                    <h3
                      className={`text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors duration-500 ${
                        card.primary
                          ? "text-cyan-300 group-hover:text-cyan-200"
                          : "text-white group-hover:text-cyan-300"
                      }`}
                    >
                      {card.outcome}
                    </h3>
                  </div>

                  {/* Description - secondary context */}
                  <p className="text-sm sm:text-base text-white/60 group-hover:text-white/75 transition-colors leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                {/* CTA Button with improved styling */}
                <div className="pt-4 sm:pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-500">
                  <button
                    className={`w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-500 ${
                      card.primary
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_4px_16px_rgba(0,217,255,0.2)] hover:shadow-[0_8px_32px_rgba(0,217,255,0.3)] hover:scale-105"
                        : "bg-slate-700/40 border border-slate-400/25 text-cyan-300 hover:bg-slate-700/60 hover:border-cyan-400/40 hover:text-cyan-200"
                    }`}
                  >
                    <span className="text-sm sm:text-base">
                      {card.primary ? "Explore System" : "Learn More"}
                    </span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-500"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
