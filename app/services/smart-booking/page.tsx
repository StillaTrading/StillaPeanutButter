"use client"

import { motion } from "framer-motion"
import { Clock, Users, Bell, CheckCircle2, Smartphone, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackgroundParticles } from "@/components/background-particles"
import { FeatureSection } from "@/components/service-sections/feature-section"
import { WorkflowSection } from "@/components/service-sections/workflow-section"
import { UseCaseSection } from "@/components/service-sections/usecase-section"

const features = [
  {
    title: "Instant Confirmations",
    icon: CheckCircle2,
    description: "Automatic SMS, email, and WhatsApp confirmations sent instantly",
  },
  {
    title: "Calendar Sync",
    icon: Clock,
    description: "Seamless integration with Google Calendar, Outlook, and Apple Calendar",
  },
  {
    title: "Smart Reminders",
    icon: Bell,
    description: "Reduce no-shows with timely notifications at the perfect moment",
  },
  {
    title: "Team Management",
    icon: Users,
    description: "Distribute bookings intelligently across staff and resources",
  },
  {
    title: "Mobile-First",
    icon: Smartphone,
    description: "Customers book appointments from any device, anywhere",
  },
  {
    title: "Capacity Planning",
    icon: AlertCircle,
    description: "Prevent double-booking with automatic availability management",
  },
]

const workflowSteps = [
  {
    number: "1",
    title: "Customer Selects Slot",
    description: "Easy-to-use booking interface with available time slots",
  },
  {
    number: "2",
    title: "Automatic Confirmation",
    description: "Instant SMS, email, and WhatsApp confirmations sent",
  },
  {
    number: "3",
    title: "Calendar Sync & Reminders",
    description: "Syncs to calendar and sends smart reminders before appointment",
  },
]

const useCases = [
  {
    industry: "Hair Salons",
    icon: "💇‍♂️",
    description: "Appointment scheduling with stylist assignment reduces no-shows by 45%",
  },
  {
    industry: "Medical Clinics",
    icon: "🏥",
    description: "Patient booking with insurance verification and history tracking",
  },
  {
    industry: "Fitness Centers",
    icon: "🏋️‍♀️",
    description: "Class & trainer booking with automated membership validation",
  },
  {
    industry: "Consultants",
    icon: "💼",
    description: "Meeting scheduling with timezone detection and prep reminders",
  },
]

const metrics = [
  { stat: "45%", label: "Fewer No-Shows" },
  { stat: "60%", label: "Faster Scheduling" },
  { stat: "30%", label: "Increased Bookings" },
  { stat: "5min", label: "Average Setup Time" },
]

export default function SmartBooking() {
  const handleGetStarted = () => {
    window.open("https://wa.me/233596302403", "_blank")
  }

  return (
    <main className="w-full overflow-x-hidden">
      <BackgroundParticles />

      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 sm:px-6">
        <section className="relative w-full min-h-[600px] flex justify-center items-center py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] opacity-50" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="mb-12 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center relative">
                <Image
                  src="/calendar-booking-app-icon-3d-premium-purple.jpg"
                  alt="Smart Booking"
                  width={160}
                  height={160}
                  className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-[0_8px_24px_rgba(168,85,247,0.4)]"
                  loading="eager"
                  priority
                />
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 text-white leading-tight max-w-4xl text-balance">
                Transform Appointments into Growth
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl text-pretty">
                Automate your booking process and reduce no-shows with Smart Booking
              </p>
              <button onClick={handleGetStarted} className="premium-btn-purple text-base sm:text-lg">
                <span className="relative z-10 flex items-center gap-3">
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 sm:py-24 z-10 relative">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              The Booking Management Crisis
            </h2>
            <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
              Manual booking systems are costing you thousands in no-shows, double-bookings, and lost revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "📞", title: "Missed Bookings", desc: "Customers can't reach you, so they book elsewhere" },
              {
                icon: "❌",
                title: "Manual Scheduling Errors",
                desc: "Double-bookings and mix-ups waste time and damage reputation",
              },
              {
                icon: "💤",
                title: "No Reminders = No-Shows",
                desc: "Up to 30% of appointments are missed without reminders",
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

        <WorkflowSection
          title="How Smart Booking Works"
          subtitle="A seamless 3-step process that takes seconds"
          steps={workflowSteps}
        />

        <FeatureSection
          title="Key Capabilities"
          subtitle="Everything you need to automate appointments"
          features={features}
        />

        <section className="w-full py-16 sm:py-24 z-10 relative">
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
                className="glass premium-border p-4 sm:p-6 rounded-2xl text-center hover:border-purple-400/50 transition-all"
              >
                <div className="text-2xl sm:text-4xl font-black text-purple-400 mb-1 sm:mb-2">{metric.stat}</div>
                <p className="text-white/70 font-bold text-xs sm:text-base">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <UseCaseSection
          title="Built for Your Business"
          subtitle="Trusted by businesses across industries"
          useCases={useCases}
        />

        <section id="start" className="w-full py-16 sm:py-24 z-10 relative">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="glass premium-border p-8 sm:p-16 md:p-24 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4 text-white tracking-tighter leading-tight">
                Never Miss an Appointment Again
              </h2>
              <p className="text-sm sm:text-lg text-white/60 mb-6 sm:mb-8 px-2">
                Eliminate no-shows and double-bookings forever
              </p>

              <button onClick={handleGetStarted} className="premium-btn-purple text-sm sm:text-base">
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
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
