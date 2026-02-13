"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface OrbitingIcon {
  icon: LucideIcon
  radius: number
  speed: number
  color: string
}

interface HeroWithOrbProps {
  title: string
  subtitle: string
  ctaText: string
  ctaAction: () => void
  centerIcon: LucideIcon
  centerIconColor: string
  orbitingIcons: OrbitingIcon[]
}

export function HeroWithOrb({
  title,
  subtitle,
  ctaText,
  ctaAction,
  centerIcon: CenterIcon,
  centerIconColor,
  orbitingIcons,
}: HeroWithOrbProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative w-full min-h-[600px] flex justify-center items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Tech gradient overlay with animated mesh effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] opacity-50" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
        {/* Breathing Orb with Orbiting Icons */}
        <div className="relative w-[500px] h-[500px] mb-12 flex items-center justify-center">
          {/* Central Breathing Orb */}
          <motion.div
            className={`w-40 h-40 rounded-full bg-gradient-to-tr ${centerIconColor} shadow-2xl flex items-center justify-center relative z-20 orb-glow`}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: [1, 1.05, 1],
                  }
            }
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <CenterIcon className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>

          {/* Orbiting Icons */}
          {orbitingIcons.map(({ icon: Icon, radius, speed, color }, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0 flex items-center justify-center"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{ duration: speed, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ width: radius * 2, height: radius * 2 }}
            >
              <motion.div
                className="absolute"
                style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${color} shadow-lg flex items-center justify-center backdrop-blur-sm cursor-pointer`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Hero Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white leading-tight max-w-4xl text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl text-pretty">{subtitle}</p>
          <button
            onClick={ctaAction}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
