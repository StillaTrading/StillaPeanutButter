"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { FooterPullup } from "@/components/footer-pullup"
import { WorkflowVisualizer } from "@/components/workflow-visualizer"
import { MessageSquare, Settings, CheckCircle, BarChart3, Zap } from "lucide-react"

export default function AIAgents() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />

      {/* Header - Mobile-first responsive padding and typography */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 sm:mb-12 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-[-0.03em] text-white mb-3 sm:mb-4">
            AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Agents</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed px-2">
            Intelligent AI-powered agents that learn your business, make autonomous decisions, and continuously optimize
            operations.
          </p>
        </motion.div>
      </header>

      {/* Capabilities - Mobile-first grid and padding */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">Core Capabilities</h2>
          <p className="text-sm sm:text-lg text-white/60">Powerful AI features designed for enterprise operations</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Intelligent Decision Making",
              description:
                "AI agents that understand context and make smart decisions based on business rules and data.",
              features: ["Pattern recognition", "Predictive analytics", "Smart routing", "Context awareness"],
            },
            {
              title: "24/7 Customer Support",
              description:
                "AI-powered support agents that handle customer inquiries round the clock with natural conversations.",
              features: ["Natural language", "Multi-language", "Sentiment analysis", "Human handoff"],
            },
            {
              title: "Lead Qualification",
              description:
                "Automatically qualify and score leads with AI agents that learn your ideal customer profile.",
              features: ["Lead scoring", "Auto-qualification", "Priority routing", "Conversion optimization"],
            },
            {
              title: "Autonomous Operations",
              description: "AI agents that operate independently to manage tasks, schedules, and customer journeys.",
              features: ["Self-learning", "Autonomous tasks", "Proactive actions", "Continuous improvement"],
            },
          ].map((capability, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-4 sm:p-6 rounded-2xl hover:bg-white/5 transition-all h-full flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{capability.title}</h3>
              <p className="text-white/60 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow">{capability.description}</p>
              <ul className="space-y-1.5 sm:space-y-2">
                {capability.features.map((f, j) => (
                  <li key={j} className="text-white/50 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Workflow Section - Mobile-first padding */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <WorkflowVisualizer
          title="Sample AI Agent Workflow"
          description="See how our AI agents intelligently handle customer interactions end-to-end"
          nodes={[
            {
              id: "1",
              label: "Customer Message",
              icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
              type: "trigger",
            },
            { id: "2", label: "AI Analysis", icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />, type: "action" },
            {
              id: "3",
              label: "Intent Detection",
              icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
              type: "condition",
            },
            { id: "4", label: "Smart Response", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, type: "action" },
            {
              id: "5",
              label: "Customer Satisfied",
              icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
              type: "output",
            },
          ]}
        />
      </section>

      {/* How It Works - Mobile-first grid and spacing */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">How AI Agents Work</h2>
          <p className="text-white/60 text-sm sm:text-lg max-w-3xl">
            Our AI agents combine machine learning, natural language processing, and business logic to deliver
            exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              step: "01",
              title: "Learn Your Business",
              description:
                "AI agents analyze your data, processes, and customer patterns to understand your unique business model.",
              icon: "🧠",
            },
            {
              step: "02",
              title: "Make Smart Decisions",
              description:
                "Using trained models and real-time data, agents make autonomous decisions aligned with your business goals.",
              icon: "⚡",
            },
            {
              step: "03",
              title: "Continuously Improve",
              description:
                "Agents learn from every interaction, optimizing performance and adapting to new challenges.",
              icon: "📈",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 sm:p-8 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="text-3xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
              <div className="text-cyan-400 text-xs sm:text-sm font-bold mb-2">STEP {item.step}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases - Mobile-first grid */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
            Real-World Applications
          </h2>
          <p className="text-white/60 text-sm sm:text-lg max-w-3xl">
            Discover how leading businesses use AI agents to transform their operations and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {[
            {
              industry: "E-Commerce",
              use_case: "AI agents handle customer support, upsell recommendations, and order tracking autonomously.",
              result: "70% reduction in support costs",
            },
            {
              industry: "SaaS",
              use_case: "Lead scoring, qualification, and nurturing through intelligent AI conversations.",
              result: "50% faster sales cycles",
            },
            {
              industry: "Finance",
              use_case: "Risk assessment, fraud detection, and compliance monitoring in real-time.",
              result: "99.9% fraud detection rate",
            },
            {
              industry: "Healthcare",
              use_case: "Patient appointment scheduling, follow-ups, and health recommendations.",
              result: "60% improved patient engagement",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 sm:p-8 rounded-2xl hover:bg-white/5 transition-all group"
            >
              <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-2 sm:mb-3">{item.industry}</h3>
              <p className="text-white mb-3 sm:mb-4 text-sm">{item.use_case}</p>
              <div className="flex items-center gap-2 text-purple-400 text-xs sm:text-sm font-bold">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {item.result}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Mobile-first padding and typography */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="glass premium-border p-8 sm:p-12 md:p-20 rounded-3xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-white/60 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the power of intelligent AI agents that work 24/7 to grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-black font-bold rounded-full hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Schedule Demo
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </section>

      <footer className="relative z-10 w-full py-8 sm:py-12 text-center border-t border-white/5 mt-12 sm:mt-20">
        <p className="text-white/30 text-xs sm:text-sm">© 2026 Stilla Systems. All rights reserved.</p>
      </footer>

      <FooterPullup />
    </main>
  )
}
