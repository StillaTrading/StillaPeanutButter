"use client"
import { useEffect, useState } from "react"

export function BackgroundParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* Subtle gradient for depth without distraction */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-30" />

      {/* Minimal vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Very subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.005] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  )
}
