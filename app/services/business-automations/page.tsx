"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, ArrowLeft, MessageSquare, Calendar, HeadphonesIcon, MapPin, Bot, CheckCircle } from "lucide-react"
import { FooterPullup } from "@/components/footer-pullup"

const AutomationHologram = dynamic(
  () => import("@/components/automation-hologram").then((mod) => mod.AutomationHologram),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 animate-pulse" />
      </div>
    ),
  },
)

const services = [
  {
    title: "WhatsApp Automation",
    description: "Intelligent chatbots and automated messaging for 24/7 customer engagement",
    icon: MessageSquare,
    color: "from-emerald-500 to-green-600",
    href: "/services/whatsapp-automation",
    features: ["Auto-replies", "Lead capture", "Order processing", "Broadcast campaigns"],
  },
  {
    title: "Smart Booking System",
    description: "Automated appointment scheduling with instant confirmations and reminders",
    icon: Calendar,
    color: "from-purple-500 to-violet-600",
    href: "/services/smart-booking",
    features: ["Calendar sync", "Payment integration", "SMS reminders", "Rescheduling"],
  },
  {
    title: "AI Support Agents",
    description: "Intelligent support bots that resolve customer issues instantly",
    icon: HeadphonesIcon,
    color: "from-blue-500 to-indigo-600",
    href: "/services/ai-support",
    features: ["24/7 availability", "Multi-language", "Ticket routing", "Knowledge base"],
  },
  {
    title: "Business Listings",
    description: "Manage your online presence across all major platforms automatically",
    icon: MapPin,
    color: "from-orange-500 to-amber-600",
    href: "/services/business-listings",
    features: ["Google Business", "Review management", "SEO optimization", "Analytics"],
  },
  {
    title: "AI Agents",
    description: "Custom AI agents tailored to your specific business workflows",
    icon: Bot,
    color: "from-pink-500 to-rose-600",
    href: "/services/ai-agents",
    features: ["Custom training", "API integration", "Workflow automation", "Reporting"],
  },
]

export default function BusinessAutomations() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10" />
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />

      {/* Hero Section with Hologram */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 sm:mb-12 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-semibold">Primary Service Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] text-white mb-4 sm:mb-6">
              Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Automations
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed mb-8">
              Your complete automation command center. Connect all your systems, streamline workflows, and scale
              operations with enterprise-grade automation solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="premium-btn">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="#services" className="premium-btn-secondary">
                <span className="text-cyan-400 font-semibold flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Hologram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <AutomationHologram />
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "500+", label: "Integrations" },
            { value: "99.9%", label: "Uptime" },
            { value: "50%", label: "Time Saved" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 rounded-2xl text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Services Showcase */}
      <section id="services" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive automation solutions designed for modern businesses
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={service.href} className="block group h-full">
                  <div className="glass premium-border p-6 sm:p-8 rounded-2xl h-full hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/40 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Work</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our proven methodology ensures seamless implementation and maximum ROI
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "We analyze your processes to identify automation opportunities" },
            { step: "02", title: "Design", desc: "Create custom workflows tailored to your business needs" },
            { step: "03", title: "Build", desc: "Implement and integrate with your existing systems" },
            { step: "04", title: "Optimize", desc: "Monitor and continuously improve for peak performance" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 rounded-2xl text-center relative overflow-hidden group hover:bg-white/5 transition-all"
            >
              <div className="absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-cyan-400/10 transition-colors">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="glass premium-border p-10 sm:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Stilla Systems to automate their operations and scale efficiently.
            </p>
            <Link href="/contact" className="premium-btn inline-flex">
              <span className="flex items-center gap-2">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 w-full py-8 sm:py-12 text-center border-t border-white/5 mt-12 sm:mt-20">
        <p className="text-white/30 text-sm">© 2026 Stilla Systems. All rights reserved.</p>
      </footer>

      <FooterPullup />
    </main>
  )
}
