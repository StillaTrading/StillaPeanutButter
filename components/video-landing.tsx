"use client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export function VideoLanding() {
  const router = useRouter()
  const [showLanding, setShowLanding] = useState(true)
  const [isPortrait, setIsPortrait] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const checkOrientation = () => {
        setIsPortrait(window.innerHeight > window.innerWidth)
      }

      checkOrientation()
      window.addEventListener("resize", checkOrientation)
      return () => window.removeEventListener("resize", checkOrientation)
    }
  }, [])

  const handleVideoClick = () => {
    setShowLanding(false)
    router.push("/#services")
  }

  if (!showLanding) return null

  return (
    <div
      className="fixed inset-0 z-50 w-full bg-black flex items-center justify-center overflow-hidden"
      style={{ height: "100dvh" }}
    >
      <video
        className={`
          cursor-pointer
          ${isPortrait ? "h-full w-auto min-w-full object-cover" : "w-full h-full object-cover"}
        `}
        autoPlay
        loop
        muted
        playsInline
        onClick={handleVideoClick}
        preload="auto"
        webkit-playsinline="true"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gen-4_Turbo_Create_a_dynamic_animation_for_Stilla_Systems%27_landing_page_with_the_following_featuresBackground_A_subtle%2C_moving_starfield_to_evoke_a_futuristic_theme_with_soft_pulsing_effectsMain_Orb%20%281%29-ylYKFRlDUE9moDUcROEFFVMC7hpJFg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse pointer-events-none">
        <span className="text-white/60 text-sm font-light tracking-wide">Tap to enter</span>
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
