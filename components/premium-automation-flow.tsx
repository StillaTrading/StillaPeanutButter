'use client'

import React from "react"

import { ArrowRight, Zap, Brain, Cog, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

interface AutomationCard {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  details: string[]
}

const automationCards: AutomationCard[] = [
  {
    id: 'trigger',
    title: 'Client Triggers',
    icon: <Zap className="w-8 h-8" />,
    description: 'Event detection',
    details: ['Real-time events', 'API webhooks', 'User actions'],
  },
  {
    id: 'engine',
    title: 'Stilla AI Engine',
    icon: <Brain className="w-8 h-8" />,
    description: 'Intelligence core',
    details: ['AI Agents', 'Workflow Logic', 'Smart Routing'],
  },
  {
    id: 'process',
    title: 'Process Automation',
    icon: <Cog className="w-8 h-8" />,
    description: 'Business flow',
    details: ['Workflow execution', 'Data mapping', 'Integration'],
  },
  {
    id: 'optimize',
    title: 'Optimized Output',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Business impact',
    details: ['Performance boost', 'Cost reduction', 'Scale operations'],
  },
]

export function PremiumAutomationFlow() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Intelligent <span className="text-glow-cyan">Automation</span> Flow
          </h1>
          <p className="text-xl text-cyan-200/60 max-w-2xl mx-auto text-balance">
            Infrastructure for modern businesses. Transform your operations with AI-powered automation.
          </p>
        </div>

        {/* Automation Flow Cards */}
        <div className="relative">
          {/* Connecting lines - Hidden on mobile */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <div
                key={`line-${i}`}
                className="flex-1 relative"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(0, 217, 255, 0.2) 25%, 
                    rgba(0, 217, 255, 0.2) 75%, 
                    transparent 100%)`,
                }}
              >
                {/* Arrow connector */}
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-cyan-500/30 w-5 h-5" />
              </div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {automationCards.map((card, index) => (
              <div
                key={card.id}
                className={`group relative transition-all duration-500 ${
                  card.id === 'engine' ? 'lg:scale-110' : ''
                }`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Premium Glass Card */}
                <div className="glass-card p-6 h-full flex flex-col">
                  {/* Inner glow effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-600/5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />

                  {/* Icon Container */}
                  <div className={`relative mb-6 flex justify-center ${
                    card.id === 'engine' 
                      ? 'mb-8' 
                      : ''
                  }`}>
                    <div className={`relative flex items-center justify-center transition-all duration-500 ${
                      hoveredCard === card.id || card.id === 'engine'
                        ? 'scale-110'
                        : 'scale-100'
                    }`}>
                      {card.id === 'engine' ? (
                        // Central engine orb
                        <div className="orb-core glow-pulse" />
                      ) : (
                        // Regular icon containers
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-400/20 flex items-center justify-center group-hover:border-cyan-400/40 transition-all duration-300">
                          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            {card.icon}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Decorative glow circle */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-cyan-200/50 text-sm mb-4 group-hover:text-cyan-200/70 transition-colors">
                      {card.description}
                    </p>

                    {/* Details - Animated appearance */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      hoveredCard === card.id || card.id === 'engine'
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}>
                      {card.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-cyan-300/60 text-xs group-hover:text-cyan-300/80 transition-colors"
                        >
                          <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0 group-hover:bg-cyan-300" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full mt-4 transition-all duration-500 ${
                    hoveredCard === card.id || card.id === 'engine'
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-50 scale-x-75'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="premium-btn group">
            <span>Explore Automation Solutions</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
