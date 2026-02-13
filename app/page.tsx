"use client"
import { BackgroundParticles } from "@/components/background-particles"
import { ServiceCards } from "@/components/service-cards"
import { PhoneMockup } from "@/components/phone-mockup"
import { FooterPullup } from "@/components/footer-pullup"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { PricingPopup } from "@/components/pricing-popup"
import { usePopupSequencer } from "@/hooks/use-popup-sequencer"
import { ServicePopup } from "@/components/service-popup"
import { useServicePopupSequencer } from "@/hooks/use-service-popup-sequencer"
import { IndustryCarousel } from "@/components/industry-carousel"
import { SystemFlow } from "@/components/system-flow"

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.9])
  const featureY = useTransform(scrollY, [200, 1000], [0, -100])
  const cardsY = useTransform(scrollY, [600, 1400], [50, -50])
  const logoY = useTransform(scrollY, [0, 800], [0, 100])
  const logoOpacity = useTransform(scrollY, [0, 300, 800], [0.15, 0.1, 0.02])

  const [mounted, setMounted] = useState(false)
  const [whatsappOpen, setWhatsappOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const { closeWhatsapp, closeBooking } = usePopupSequencer({
    intervalMs: 120000,
    storageKey: "stilla_popups_shown",
  })

  const { automationsOpen, agentsOpen, closeAutomations, closeAgents } = useServicePopupSequencer({
    delayMs: 60000,
    storageKey: "stilla_service_popups_shown",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen relative flex flex-col items-center w-full selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />

      <BackgroundParticles />

      <motion.div
        style={{ y: logoY, opacity: logoOpacity }}
        className="fixed top-1/3 left-1/2 -translate-x-1/2 z-5 pointer-events-none"
      >
        <Image
          src="/stilla-logo-premium.png"
          alt="Stilla Systems Logo"
          width={200}
          height={200}
          loading="eager"
          priority
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 drop-shadow-[0_0_60px_rgba(0,217,255,0.08)]"
          aria-hidden="true"
        />
      </motion.div>

      <header className="w-full max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 text-center z-10 relative">
        <motion.div style={{ opacity, scale }} className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="absolute inset-0 -z-10 blur-2xl w-full max-w-[28rem] h-32 sm:h-40 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full mx-auto" />
            <div className="relative inline-block w-full">
              <div className="absolute inset-0 -z-10 backdrop-blur-xl border border-cyan-400/15 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-400/5 opacity-60" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black tracking-[-0.03em] leading-[1.1] text-white text-balance px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                Command Scale
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl leading-relaxed text-balance px-4 sm:px-2"
          >
            Enterprise automation across WhatsApp, bookings, and customer support. Built for precision and speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0 mt-4 sm:mt-6"
          >
            <Link
              href="/services/whatsapp-automation"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,217,255,0.3)] hover:scale-102 active:scale-98 text-center text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </Link>
            <Link
              href="#services"
              className="group w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-cyan-400/30 text-white font-semibold rounded-xl hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all duration-500 backdrop-blur-md text-center text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                Explore
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-10 sm:mt-12 flex flex-col items-center gap-2.5"
          >
            <div className="text-[9px] sm:text-xs font-semibold text-white/45 uppercase tracking-widest letter-spacing">
              Discover More
            </div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/35" />
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      <motion.section
        style={{ y: featureY }}
        className="relative w-full max-w-7xl flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 z-10 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

        <div className="w-full flex justify-center mb-12 sm:mb-16 md:mb-28 relative py-12 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl px-2 sm:px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Powerful Automation, <br className="hidden sm:block" />
              Built to Scale
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              Streamline communication, bookings, and support across every channel with one intelligent, enterprise-grade platform.
            </p>
          </motion.div>
        </div>

        <div className="w-full flex justify-center py-6 sm:py-12 mb-4 sm:mb-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl md:cantilever-right rounded-2xl overflow-hidden px-2 sm:px-0"
          >
            <video
              src="/system-architecture.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-500"
              aria-label="Business automation workflow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl sm:rounded-2xl pointer-events-none" />
          </motion.div>
        </div>

        <div className="w-full flex justify-center py-10 sm:py-20 overflow-hidden">
          <PhoneMockup />
        </div>

        <ReviewsCarousel />
      </motion.section>

      <motion.section
        id="services"
        style={{ y: cardsY }}
        className="w-full max-w-6xl z-10 pb-20 sm:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

        <div className="text-center mb-12 sm:mb-20 md:mb-28 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Our Solutions
          </h2>
          <p className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Enterprise-grade automation solutions designed for modern businesses
          </p>
          <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-cyan-400 to-cyan-400 mx-auto rounded-full mt-6 sm:mt-8" />
        </div>

        <div className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-3xl"
          >
            <video
              src="/system-architecture.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all"
              aria-label="Stilla Automation Engine - AI Agents and Optimized Business Flow"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl sm:rounded-2xl pointer-events-none" />
          </motion.div>
        </div>

        <ServiceCards onWhatsappClick={() => setWhatsappOpen(true)} onBookingClick={() => setBookingOpen(true)} />
      </motion.section>

      <SystemFlow />

      <section className="w-full max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:py-32 z-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/5 to-transparent" />

        <div className="text-center mb-20 sm:mb-28 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Deployment Outcomes
          </h2>
          <p className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 font-light">
            Control. Speed. Reliability. See what enterprises achieve with Stilla.
          </p>
          <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-cyan-400 to-cyan-400 mx-auto rounded-full mt-6 sm:mt-8" />
        </div>

        <IndustryCarousel />
      </section>

      <section className="w-full max-w-6xl px-4 sm:px-6 py-20 sm:py-28 md:py-36 text-center z-10">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 md:p-16 lg:p-20 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] max-w-4xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 text-white tracking-tight leading-tight">
              Ready to Transform
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Your Operations?</span>
            </h2>

            <p className="text-white/50 text-xs sm:text-sm md:text-base lg:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 font-light">
              Enterprise-grade automation with zero complexity. Start scaling your business with intelligent systems that work 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/services/whatsapp-automation"
                className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="w-full py-10 sm:py-14 text-center z-10 border-t border-white/5 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-md pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-white/35 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-3 sm:mb-4 letter-spacing">
            Stilla Systems
          </p>
          <div className="flex items-center justify-center gap-2 text-[8px] sm:text-[10px] font-semibold text-cyan-400/40 uppercase tracking-wider">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400/60 animate-pulse" />
            Enterprise Automation Platform
          </div>
          <p className="text-white/25 text-[8px] sm:text-[9px] mt-4 sm:mt-5 font-light">Built for scale, designed for simplicity</p>
        </div>
      </footer>

      <FooterPullup />

      <PricingPopup
        isOpen={whatsappOpen}
        onClose={closeWhatsapp}
        service="whatsapp"
        title="WhatsApp Automation"
        description="Automate your WhatsApp messaging, customer inquiries, and order processing with intelligent AI responses."
        features={[
          "Unlimited WhatsApp message handling",
          "AI-powered automatic responses",
          "Order & inquiry management",
          "24/7 customer engagement",
          "Real-time analytics & reporting",
          "Priority support & onboarding",
        ]}
      />

      <PricingPopup
        isOpen={bookingOpen}
        onClose={closeBooking}
        service="booking"
        title="Smart Booking System"
        description="Streamline appointments and reservations with automated scheduling, reminders, and customer management."
        features={[
          "Unlimited booking slots",
          "Automated appointment reminders",
          "Customer database management",
          "Calendar synchronization",
          "Payment integration",
          "Advanced scheduling analytics",
        ]}
      />

      <ServicePopup
        isOpen={automationsOpen}
        onClose={closeAutomations}
        service="automations"
        title="Business Automations"
        description="Streamline your entire business operations with intelligent automation systems designed for modern enterprises."
        features={[
          "Automated workflow management",
          "Multi-channel integration",
          "Real-time process monitoring",
          "Scalable infrastructure",
          "Advanced error handling",
          "Custom automation rules",
        ]}
        price="2500"
      />

      <ServicePopup
        isOpen={agentsOpen}
        onClose={closeAgents}
        service="agents"
        title="AI Agents"
        description="Intelligent AI agents that learn your business processes and optimize them continuously for maximum efficiency."
        features={[
          "24/7 autonomous operation",
          "Machine learning capabilities",
          "Natural language processing",
          "Predictive analytics",
          "Adaptive decision making",
          "Enterprise security",
        ]}
        price="2500"
      />
    </main>
  )
}
