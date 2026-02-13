"use client"

import { motion } from "framer-motion"
import { Headphones, MessageSquare, Zap, BarChart3, Clock, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import { BackgroundParticles } from "@/components/background-particles"

const features = [
  {
    title: "24/7 Availability",
    icon: Clock,
    desc: "Round-the-clock customer support without hiring night shift staff",
  },
  {
    title: "Natural Language Understanding",
    icon: MessageSquare,
    desc: "Contextual understanding of customer queries in multiple languages",
  },
  { title: "Instant Responses", icon: Zap, desc: "Sub-second response times that keep customers happy" },
  { title: "Smart Escalation", icon: Lightbulb, desc: "Route complex issues to human agents intelligently" },
  { title: "Performance Metrics", icon: BarChart3, desc: "Track satisfaction, resolution rate, and response quality" },
  { title: "Knowledge Integration", icon: Headphones, desc: "Feed your FAQ, help docs, and product info into the AI" },
]

const useCases = [
  { business: "SaaS Companies", example: "Product onboarding & billing support—resolve 80% of tickets without humans" },
  { business: "E-commerce", example: "Order status, returns & troubleshooting handle 70% of support volume" },
  { business: "Travel Agencies", example: "Booking info, cancellations & itineraries answered instantly 24/7" },
  { business: "Financial Services", example: "Account queries & transaction support with compliance safety" },
]

const metrics = [
  { stat: "70%", label: "Support Tickets Resolved" },
  { stat: "80%", label: "Cost Reduction" },
  { stat: "95%", label: "Customer Satisfaction" },
  { stat: "24/7", label: "Availability" },
]

export default function AISupport() {
  const handleGetStarted = () => {
    window.open("https://wa.me/233596302403", "_blank")
  }

  return (
    <main className="w-full overflow-x-hidden">
      <BackgroundParticles />

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-24 z-10 relative">
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
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass border-2 border-cyan-400/30 flex items-center justify-center mx-auto">
              <Headphones className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-400" strokeWidth={1.5} />
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.03em] mb-4 sm:mb-6 text-white leading-tight">
            24/7 AI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Customer Support
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl text-white/60 max-w-3xl mb-8 sm:mb-12 leading-relaxed font-bold px-2">
            Deliver instant, accurate responses to customers—day or night, powered by advanced AI
          </p>

          <button
            onClick={handleGetStarted}
            className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-cyan-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.3)] text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
              Deploy AI Support
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
            The Support Challenge
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Your support team is overwhelmed, customers expect instant responses, and you're losing revenue to slow
            reply times.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: "👥", title: "Limited Support Staff", desc: "You can't hire enough people to scale globally" },
            {
              icon: "🔄",
              title: "Repeated Questions",
              desc: "Your team answers the same questions hundreds of times daily",
            },
            {
              icon: "⏰",
              title: "Customers Expect Instant Replies",
              desc: "Slow responses lead to refunds and negative reviews",
            },
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

      {/* Solution Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
            The Stilla AI Support Engine
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Deploy intelligent AI agents that understand your business and respond like your best support agent.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass premium-border p-6 sm:p-8 rounded-2xl border-cyan-400/30 bg-cyan-500/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "1",
                title: "Understand Intent",
                desc: "AI reads between the lines to understand what customers really need",
              },
              {
                num: "2",
                title: "Respond Intelligently",
                desc: "Generate accurate, helpful responses using your knowledge base",
              },
              { num: "3", title: "Escalate When Needed", desc: "Route complex issues to humans with full context" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 text-white font-black rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto text-sm sm:text-base">
                  {step.num}
                </div>
                <h3 className="text-base sm:text-lg font-black text-white mb-2">{step.title}</h3>
                <p className="text-white/60 font-bold text-xs sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
            Core Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 sm:p-8 rounded-2xl group hover:border-cyan-400/50 transition-all h-full flex flex-col"
            >
              <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">{feature.title}</h3>
              <p className="text-white/50 font-bold text-xs sm:text-sm flex-grow">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Impact Section */}
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
              className="glass premium-border p-4 sm:p-6 rounded-2xl text-center hover:border-cyan-400/50 transition-all"
            >
              <div className="text-2xl sm:text-4xl font-black text-cyan-400 mb-1 sm:mb-2">{metric.stat}</div>
              <p className="text-white/70 font-bold text-xs sm:text-base">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
            Built for Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {useCases.map((use, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 sm:p-8 rounded-2xl border-cyan-400/20 hover:border-cyan-400/50 transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-black text-cyan-400 mb-2 sm:mb-3">{use.business}</h3>
              <p className="text-white/70 font-bold text-sm">{use.example}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="start" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="glass premium-border p-8 sm:p-16 md:p-24 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4 text-white tracking-tighter leading-tight">
              Support Your Customers At Scale
            </h2>
            <p className="text-sm sm:text-lg text-white/60 mb-6 sm:mb-8 px-2">
              Deploy AI agents in minutes, not months. No complex setup required.
            </p>

            <button
              onClick={handleGetStarted}
              className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-cyan-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.3)] text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                Book a Free Demo
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
    </main>
  )
}
