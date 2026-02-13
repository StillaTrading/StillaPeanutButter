"use client"

import { motion } from "framer-motion"
import { Send, Sparkles, CheckCircle2 } from "lucide-react"

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] md:w-[360px] md:h-[720px] group"
    >
      {/* Outer Device Frame - Samsung Galaxy Style */}
      <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-2xl">
        <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-[2px] rounded-[2.4rem] sm:rounded-[2.9rem] md:rounded-[3.4rem] bg-gradient-to-br from-slate-900 to-black" />
      </div>

      {/* Camera Module */}
      <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-slate-800 border border-slate-700/50 shadow-inner" />
        <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-slate-800/80 rounded-full" />
      </div>

      {/* Screen Content */}
      <div className="absolute inset-[10px] sm:inset-[12px] md:inset-[14px] bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent pointer-events-none z-20" />

        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 pb-3 sm:pb-5 border-b border-white/5 backdrop-blur-xl bg-black/40">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 overflow-hidden">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full border-2 border-black shadow-lg"
              />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-white font-bold tracking-wide">Stilla Agent</p>
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-[8px] sm:text-[10px] text-cyan-400 font-semibold flex items-center gap-1 sm:gap-1.5"
              >
                <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                AI Processing
              </motion.p>
            </div>
          </div>
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400/80" />
        </div>

        <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06)_0%,transparent_50%)]" />

          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[85%]"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl rounded-tl-sm shadow-xl">
              <p className="text-[10px] sm:text-xs text-white/90 leading-relaxed font-medium">
                Hello! I've analyzed your business workflow. Ready to deploy automated booking and customer support?
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative ml-auto max-w-[85%]"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 p-3 sm:p-4 rounded-2xl sm:rounded-3xl rounded-tr-sm shadow-xl shadow-cyan-500/10">
              <p className="text-[10px] sm:text-xs text-white/95 text-right leading-relaxed font-medium">
                Yes! Please integrate with my calendar and enable auto-responses on WhatsApp.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 2.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[85%]"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl rounded-tl-sm shadow-xl">
              <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
                />
                <p className="text-[8px] sm:text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                  Deployment Complete
                </p>
              </div>
              <p className="text-[10px] sm:text-xs text-white/90 leading-relaxed font-medium">
                All systems activated! Your booking automation and WhatsApp AI are now live and synchronized.
              </p>
            </div>
          </motion.div>

          {/* Typing Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
            className="flex items-center gap-2 max-w-[85%]"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl sm:rounded-3xl rounded-tl-sm">
              <div className="flex items-center gap-1 sm:gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: i * 0.15 }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400/60"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-auto p-4 sm:p-6 pt-0">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-2.5 sm:p-3.5 rounded-full flex items-center gap-3 sm:gap-4 shadow-lg">
            <div className="flex-1 h-2 sm:h-2.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 cursor-pointer"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating elements - hidden on mobile for performance */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute -z-10 hidden sm:block"
          style={{
            top: `${15 + i * 25}%`,
            left: i % 2 === 0 ? "-15%" : "105%",
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.15, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl" />
        </motion.div>
      ))}

      <div className="absolute -inset-4 bg-gradient-to-b from-cyan-500/5 to-blue-500/10 blur-3xl -z-20 opacity-60" />
    </motion.div>
  )
}
