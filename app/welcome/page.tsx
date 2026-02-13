"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function WelcomePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleVideoClick = () => {
    setIsLoading(true)
    document.cookie = "stilla_visited=true; path=/; max-age=31536000; SameSite=Lax"

    // Small delay for smooth transition
    setTimeout(() => {
      router.push("/")
      router.refresh()
    }, 300)
  }

  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex items-center justify-center">
          <div className="text-white text-xl animate-pulse">Entering Platform...</div>
        </div>
      )}

      <div
        onClick={handleVideoClick}
        className="w-full h-full cursor-pointer relative overflow-hidden"
        role="button"
        aria-label="Click to enter Stilla Systems platform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-6xl font-bold text-white">S</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-4">STILLA SYSTEMS</h1>
            <p className="text-white/60 text-lg">Click anywhere to enter the platform</p>
          </div>
        </div>
      </div>
    </main>
  )
}
