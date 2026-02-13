"use client"

import { motion } from "framer-motion"
import { Store, CheckCircle2, Globe, TrendingUp, Package, ArrowRight, RefreshCw } from "lucide-react"
import Link from "next/link"
import { BackgroundParticles } from "@/components/background-particles"

const features = [
  {
    title: "Real-Time Inventory Sync",
    icon: RefreshCw,
    desc: "Synchronize products across Google, Facebook, WhatsApp, and web instantly",
  },
  {
    title: "Multi-Channel Distribution",
    icon: Globe,
    desc: "List on Google Maps, Facebook Shops, Airbnb, Booking.com, and more",
  },
  {
    title: "Dynamic Pricing",
    icon: TrendingUp,
    desc: "Adjust prices based on demand, competitor pricing, and seasonality",
  },
  { title: "Bulk Management", icon: Package, desc: "Manage thousands of products and updates with zero manual effort" },
  {
    title: "Rich Media Listings",
    icon: Store,
    desc: "Showcase products with images, videos, descriptions, and customer reviews",
  },
  {
    title: "Performance Analytics",
    icon: CheckCircle2,
    desc: "Track which channels drive the most sales and customer engagement",
  },
]

const useCases = [
  {
    business: "E-commerce Stores",
    example: "Sync inventory across Shopify, Amazon & your website—no manual updates, zero overselling",
  },
  { business: "Hotels & Lodging", example: "Auto-list on Booking, Airbnb & OTA platforms with real-time availability" },
  {
    business: "Restaurants",
    example: "Menu sync on Google, Uber Eats & Zomato with instant price & availability updates",
  },
  {
    business: "Real Estate",
    example: "List properties on Zillow, Redfin & local portals with automatic status changes",
  },
]

const metrics = [
  { stat: "90%", label: "Time Saved on Updates" },
  { stat: "10x", label: "More Sales Channels" },
  { stat: "50%", label: "Faster Sales Velocity" },
  { stat: "0", label: "Overselling Incidents" },
]

export default function BusinessListings() {
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
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass border-2 border-blue-400/30 flex items-center justify-center mx-auto">
              <Store className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" strokeWidth={1.5} />
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.03em] mb-4 sm:mb-6 text-white leading-tight">
            Smart Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Listings</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl text-white/60 max-w-3xl mb-8 sm:mb-12 leading-relaxed font-bold px-2">
            Showcase your products and services across every platform without building complex websites
          </p>

          <button
            onClick={handleGetStarted}
            className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-blue-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Create Listings Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
            The Listing Management Nightmare
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Managing product information across multiple platforms is time-consuming, error-prone, and costs you lost
            sales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: "📋", title: "Repeated Questions", desc: "Customers ask the same thing on every platform" },
            { icon: "📍", title: "Scattered Information", desc: "Product data exists in different formats everywhere" },
            { icon: "⏳", title: "Manual Sharing Slows Sales", desc: "Updates take hours and introduce errors" },
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
            Stilla Smart Listings Solution
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Create structured, interactive listings that work on every platform automatically.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass premium-border p-6 sm:p-8 rounded-2xl border-blue-400/30 bg-blue-500/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { num: "1", title: "Create Once", desc: "Build your product catalog with rich media and details" },
              {
                num: "2",
                title: "Deploy Everywhere",
                desc: "Automatically sync to Google, Facebook, WhatsApp, and more",
              },
              { num: "3", title: "Update Instantly", desc: "One change updates all platforms in real-time" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white font-black rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto text-sm sm:text-base">
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
            Key Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass premium-border p-6 sm:p-8 rounded-2xl group hover:border-blue-400/50 transition-all"
            >
              <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">{feature.title}</h3>
              <p className="text-white/50 font-bold text-sm">{feature.desc}</p>
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
              className="glass premium-border p-4 sm:p-6 rounded-2xl text-center hover:border-blue-400/50 transition-all"
            >
              <div className="text-2xl sm:text-4xl font-black text-blue-400 mb-1 sm:mb-2">{metric.stat}</div>
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
              className="glass premium-border p-6 sm:p-8 rounded-2xl border-blue-400/20 hover:border-blue-400/50 transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-black text-blue-400 mb-2 sm:mb-3">{use.business}</h3>
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4 text-white tracking-tighter leading-tight">
              Expand Your Reach Across Every Platform
            </h2>
            <p className="text-sm sm:text-lg text-white/60 mb-6 sm:mb-8 px-2">
              Stop wasting time on manual updates. Let Stilla handle it.
            </p>

            <button
              onClick={handleGetStarted}
              className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-blue-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] text-sm sm:text-base"
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
