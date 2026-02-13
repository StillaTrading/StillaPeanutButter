"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function SystemFlow() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/20 to-transparent" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              System Architecture
            </h2>
            <p className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Enterprise-grade operational pipeline designed for reliability and scale
            </p>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all duration-500">
            <Image
              src="/stilla-voice-agents.png"
              alt="Stilla Voice Agents - System Architecture showing Voice Input, Speech-Text conversion, AI Agent with Memory & Logs, Business Actions, and Response"
              width={1200}
              height={700}
              priority
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Description Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20"
        >
          <div className="glass-card p-6 rounded-xl backdrop-blur-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
            <div className="text-cyan-400 font-bold text-lg mb-2">Input Processing</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Voice input and multi-channel communication capture with real-time processing across all platforms
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl backdrop-blur-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
            <div className="text-cyan-400 font-bold text-lg mb-2">AI Intelligence</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Advanced speech-to-text conversion and intelligent agent processing with contextual understanding
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl backdrop-blur-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
            <div className="text-cyan-400 font-bold text-lg mb-2">Output & Memory</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Intelligent response generation with persistent memory and action logs for continuous optimization
            </p>
          </div>
        </motion.div>

        {/* Bottom accent line */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}
