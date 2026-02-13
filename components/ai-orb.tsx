"use client"

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { MessageSquare, Calendar, BarChart3, Users } from "lucide-react"

const businessServices = [
  {
    icon: MessageSquare,
    label: "WhatsApp Automation",
    color: "from-emerald-400 to-emerald-500",
    iconColor: "text-emerald-400",
    radius: 120,
    speed: 20,
    size: 28,
    glowColor: "rgba(52, 211, 153, 0.4)",
  },
  {
    icon: Calendar,
    label: "Smart Booking",
    color: "from-blue-400 to-blue-500",
    iconColor: "text-blue-400",
    radius: 160,
    speed: 24,
    size: 26,
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    color: "from-purple-400 to-purple-500",
    iconColor: "text-purple-400",
    radius: 200,
    speed: 28,
    size: 26,
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: Users,
    label: "CRM Suite",
    color: "from-cyan-400 to-cyan-500",
    iconColor: "text-cyan-400",
    radius: 130,
    speed: 22,
    size: 26,
    glowColor: "rgba(34, 211, 238, 0.4)",
  },
]

export function AIOrb() {
  const { scrollY } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  const ySpring = useSpring(useTransform(scrollY, [0, 800], [0, 120]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#orbGradient)" strokeWidth="1" opacity="0.5" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="url(#orbGradient)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {businessServices.map((service, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              width: service.radius * 2,
              height: service.radius * 2,
            }}
            animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
            transition={{
              duration: service.speed,
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Orbit ring visualization */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-500/10"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />

            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto group/icon"
              animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
              transition={{
                duration: service.speed,
                repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <motion.div
                className="relative backdrop-blur-3xl bg-white/8 border border-white/20 p-4 rounded-2xl cursor-pointer shadow-2xl transition-all"
                style={{
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px ${service.glowColor}`,
                }}
                whileHover={{
                  scale: 1.25,
                  boxShadow: `0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 40px ${service.glowColor}`,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <service.icon className={`w-6 h-6 ${service.iconColor} relative z-10 transition-all`} strokeWidth={2} />

                {/* Hover glow effect */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)`,
                    filter: "blur(12px)",
                    zIndex: -1,
                  }}
                />

                {/* Tooltip label */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-[9px] font-bold text-white opacity-0 group-hover/icon:opacity-100 uppercase tracking-widest whitespace-nowrap transition-all duration-300 pointer-events-none backdrop-blur-xl border border-white/20"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 20, 0.8) 100%)",
                  }}
                >
                  {service.label}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-64 md:w-80 h-64 md:h-80 rounded-full"
        style={{ y: ySpring }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          scale: {
            duration: 6,
            repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.12, transition: { duration: 0.5 } }}
      >
        {/* Premium glass container */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-3xl border-2 border-white/25"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(6, 182, 212, 0.1) 100%)",
            boxShadow:
              "0 25px 100px rgba(0, 0, 0, 0.6), inset 0 2px 8px rgba(255, 255, 255, 0.35), inset 0 -2px 8px rgba(0, 0, 0, 0.2), 0 0 60px rgba(6, 182, 212, 0.35)",
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  boxShadow: [
                    "0 25px 100px rgba(0, 0, 0, 0.6), inset 0 2px 8px rgba(255, 255, 255, 0.35), 0 0 60px rgba(6, 182, 212, 0.25)",
                    "0 35px 120px rgba(0, 0, 0, 0.5), inset 0 2px 8px rgba(255, 255, 255, 0.45), 0 0 80px rgba(6, 182, 212, 0.5)",
                    "0 25px 100px rgba(0, 0, 0, 0.6), inset 0 2px 8px rgba(255, 255, 255, 0.35), 0 0 60px rgba(6, 182, 212, 0.25)",
                  ],
                }
          }
          transition={{
            duration: 4,
            repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Light highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-t-full" />

          {/* Interior radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.25)_0%,transparent_60%)]" />

          {/* Rotating conic gradient ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(6, 182, 212, 0.2) 90deg, transparent 180deg, rgba(139, 92, 246, 0.1) 270deg, transparent 360deg)",
            }}
            animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
            transition={{
              duration: 12,
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Central logo with pulse animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -8, 0],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{
              duration: 4,
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative"
            style={{
              filter: "drop-shadow(0 12px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.6))",
            }}
          >
            <div className="relative z-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">
              S
            </div>
          </motion.div>
        </div>

        {/* Outer concentric rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border pointer-events-none"
            style={{
              inset: -20 - i * 25,
              borderImage: `linear-gradient(${i % 2 === 0 ? "135deg" : "225deg"}, rgba(6, 182, 212, ${0.3 - i * 0.1}), rgba(139, 92, 246, ${0.2 - i * 0.07}), transparent) 1`,
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: i % 2 === 0 ? 360 : -360,
                    opacity: [0.3, 0.6, 0.3],
                  }
            }
            transition={{
              rotate: {
                duration: 16 + i * 8,
                repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              opacity: {
                duration: 4,
                repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
