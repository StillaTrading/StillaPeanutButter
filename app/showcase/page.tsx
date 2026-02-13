import type React from 'react'
import { PremiumAutomationFlow } from '@/components/premium-automation-flow'

export const metadata = {
  title: 'Stilla Systems - Premium AI Automation',
  description: 'Experience the future of business automation with intelligent glass systems floating in a digital universe.',
}

export default function PremiumShowcase(): React.ReactNode {
  return (
    <main className="relative min-h-screen cosmic-bg overflow-hidden">
      {/* Cosmic background texture */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, #00d9ff, rgba(0, 217, 255, 0.1)),
              radial-gradient(2px 2px at 60px 70px, #1e3a8a, rgba(30, 58, 138, 0.1)),
              radial-gradient(1px 1px at 50px 50px, #0369a1, rgba(3, 105, 161, 0.05))
            `,
            backgroundSize: '500px 500px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <PremiumAutomationFlow />
      </div>

      {/* Scroll indicator - Fixed position, stays visible */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-cyan-400/60 text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-cyan-400/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}
