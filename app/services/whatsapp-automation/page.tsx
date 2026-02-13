"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  MessageSquareText,
} from "lucide-react"
import Link from "next/link"
import { BackgroundParticles } from "@/components/background-particles"

const features = [
  {
    title: "Automated Replies & Flows",
    icon: MessageCircle,
    desc: "Instant responses with intelligent routing and contextual flows",
  },
  { title: "AI Agent Handling", icon: Zap, desc: "24/7 conversation management that qualifies leads automatically" },
  {
    title: "Order & Booking Integration",
    icon: CheckCircle2,
    desc: "Automated order confirmations and reservation reminders",
  },
  { title: "Team Collaboration", icon: Users, desc: "Seamless multi-agent support with escalation rules" },
  {
    title: "Analytics & Insights",
    icon: TrendingUp,
    desc: "Track engagement, conversions, and customer lifetime value",
  },
  { title: "API Integration", icon: MessageSquareText, desc: "Connect with Sheets, CRM, and custom business systems" },
]

const useCases = [
  { business: "Restaurants", example: "Order confirmation & reservation reminders reduce no-shows by 40%" },
  { business: "E-commerce", example: "Cart recovery & shipping notifications increase repeat purchases by 35%" },
  { business: "Clinics", example: "Appointment reminders & health tips improve patient engagement by 50%" },
  { business: "Service Businesses", example: "Job updates & follow-ups close 25% more deals" },
]

const metrics = [
  { stat: "24/7", label: "Always-On Engagement" },
  { stat: "80%", label: "Faster Response Times" },
  { stat: "40%", label: "Higher Conversion Rate" },
  { stat: "3x", label: "More Customer Interactions" },
]

export default function WhatsAppAutomation() {
  const handleGetStarted = () => {
    window.open("https://wa.me/233596302403", "_blank")
  }

  return (
    <main className="w-full overflow-x-hidden">
      <BackgroundParticles />

      <div className="flex flex-col items-center w-full">
        {/* Hero Section - Mobile-first padding and typography */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-24 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass border-2 border-emerald-400/30 flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400" strokeWidth={1.5} />
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.03em] mb-4 sm:mb-6 text-white leading-tight">
              WhatsApp
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Automation
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-2xl text-white/60 max-w-3xl mb-8 sm:mb-12 leading-relaxed font-bold px-2">
              Instantly engage customers, automate conversations, and close more sales — 24/7
            </p>

            <button
              onClick={handleGetStarted}
              className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-emerald-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Start Automating
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </section>

        {/* Problem Section - Mobile-first grid and typography */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              The Challenge Most Businesses Face
            </h2>
            <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
              Your customers expect instant responses. Yet manual reply to WhatsApp messages slows sales, frustrates
              customers, and leaves you unable to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "⏱️", title: "Reply Late or Not at All", desc: "Customers move to competitors while you sleep" },
              {
                icon: "📉",
                title: "Lose Customers Outside Hours",
                desc: "Peak sales time missed due to limited availability",
              },
              { icon: "💼", title: "Can't Scale Human Support", desc: "Hiring support staff is expensive and slow" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass premium-border p-6 sm:p-8 rounded-2xl border-red-400/20 hover:border-red-400/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-white/50 font-bold text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Solution Section - Mobile-first grid and padding */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              The Stilla Intelligence Solution
            </h2>
            <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
              Transform WhatsApp into your highest-performing sales and support channel with AI-powered automation that
              works while you sleep.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass premium-border p-6 sm:p-8 rounded-2xl border-emerald-400/30 bg-emerald-500/5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { num: "1", title: "Responds Instantly", desc: "AI agents reply within seconds, even at 3 AM" },
                {
                  num: "2",
                  title: "Qualifies Leads",
                  desc: "Automatically identifies and prioritizes high-value customers",
                },
                {
                  num: "3",
                  title: "Handles Orders & Bookings",
                  desc: "Complete transaction flow without human intervention",
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 text-white font-black rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto text-sm sm:text-base">
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 font-bold text-xs sm:text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How It Works - Mobile-first layout */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              How It Works
            </h2>
          </div>

          <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            {[
              { label: "Customer", icon: "👤" },
              { label: "Sends Message", icon: "💬" },
              { label: "AI Processes", icon: "🤖" },
              { label: "Action Taken", icon: "✅" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                  <p className="text-white/60 font-bold text-xs sm:text-sm">{item.label}</p>
                </div>
                {i < 3 && <ArrowRight className="text-emerald-400/50 w-5 h-5 sm:w-6 sm:h-6 rotate-90 sm:rotate-0" />}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Features Section - Mobile-first grid */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              Key Capabilities
            </h2>
            <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto px-2">
              Everything you need to automate customer engagement at scale
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass premium-border p-6 sm:p-8 rounded-2xl group hover:border-emerald-400/50 transition-all"
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 font-bold text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Business Impact Section - Mobile-first grid */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              Real Business Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass premium-border p-4 sm:p-6 rounded-2xl text-center hover:border-emerald-400/50 transition-all"
              >
                <div className="text-2xl sm:text-4xl font-black text-emerald-400 mb-1 sm:mb-2">{metric.stat}</div>
                <p className="text-white/70 font-bold text-xs sm:text-base">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases Section - Mobile-first layout */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              Built for Your Business
            </h2>
            <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto px-2">
              See how different industries benefit from WhatsApp automation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {useCases.map((use, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg border border-emerald-400/20 hover:border-emerald-400/50 transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-emerald-400 mb-1 sm:mb-2">{use.business}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{use.example}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section - Mobile-first padding and typography */}
        <section id="start" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="glass premium-border p-8 sm:p-16 md:p-24 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4 text-white tracking-tighter leading-tight">
                Start Automating Your Customer Engagement
              </h2>
              <p className="text-sm sm:text-lg text-white/60 mb-6 sm:mb-8 px-2">
                Join hundreds of businesses already transforming their WhatsApp channel into their #1 revenue driver
              </p>

              <button
                onClick={handleGetStarted}
                className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-emerald-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </section>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-6 sm:py-8 z-10 relative text-cyan-400 hover:text-cyan-300 transition-colors font-bold text-sm sm:text-base"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
