import type React from "react"
import type { Metadata } from "next"
import { FooterPullup } from "@/components/footer-pullup"

export const metadata: Metadata = {
  title: "Services - Stilla Systems",
  description: "Explore our ecosystem of automation solutions",
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      </div>
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />

      {children}

      <footer className="w-full py-16 text-center z-10 border-t border-white/5 bg-black/50 backdrop-blur-md mt-32 mb-20">
        <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em] mb-4">© 2026 Stilla Systems</p>
        <div className="flex items-center justify-center gap-2 text-[10px] font-black text-cyan-400/40 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          AI-Powered Business Automation
        </div>
      </footer>
      <FooterPullup />
    </main>
  )
}
