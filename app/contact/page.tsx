"use client"

import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react"
import { motion } from "framer-motion"
import { BackgroundParticles } from "@/components/background-particles"

export default function ContactPage() {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/250597397912", "_blank")
  }

  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />
      <BackgroundParticles />

      <div className="max-w-4xl mx-auto px-6 py-20 z-10 relative w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Get In Touch</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to automate your business? Let's discuss how Stilla Systems can transform your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass premium-border p-8 rounded-3xl hover:border-cyan-400/50 transition-all group cursor-pointer"
            onClick={handleWhatsAppContact}
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors">
              WhatsApp
            </h3>
            <p className="text-white/60 mb-4">Get instant support and quick answers</p>
            <div className="text-cyan-400 font-bold text-sm">+250 597 397 912</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass premium-border p-8 rounded-3xl hover:border-cyan-400/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors">Email</h3>
            <p className="text-white/60 mb-4">For detailed inquiries and partnerships</p>
            <a href="mailto:support@stillasystems.com" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm">
              support@stillasystems.com
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass premium-border p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-black mb-8 text-center">Quick Contact Form</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 font-bold mb-2 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/80 font-bold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 font-bold mb-2 text-sm">Business Type</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 focus:outline-none transition-colors">
                <option value="">Select your business type</option>
                <option value="restaurant">Restaurant</option>
                <option value="ecommerce">E-commerce</option>
                <option value="clinic">Clinic/Healthcare</option>
                <option value="service">Service Business</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 font-bold mb-2 text-sm">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your automation needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full group relative px-8 py-4 bg-cyan-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>

          <p className="text-white/40 text-sm text-center mt-6">
            We typically respond within 24 hours during business days
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-black mb-6 text-white">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
              { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map((schedule, i) => (
              <div key={i} className="glass border border-white/5 p-4 rounded-xl">
                <div className="text-white/90 font-bold">{schedule.day}</div>
                <div className="text-cyan-400 text-sm">{schedule.hours}</div>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-6">All times in GMT (West Africa Time)</p>
        </motion.div>
      </div>
    </main>
  )
}
