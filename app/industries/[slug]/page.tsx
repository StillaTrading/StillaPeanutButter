"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { BackgroundParticles } from "@/components/background-particles"

const industryData: Record<
  string,
  {
    title: string
    icon: string
    description: string
    challenges: string[]
    solutions: string[]
    benefits: string[]
  }
> = {
  "salons-spas": {
    title: "Hair Salons & Spas",
    icon: "✂️",
    description: "Transform your salon or spa with intelligent booking and customer communication automation.",
    challenges: [
      "High no-show rates costing thousands monthly",
      "Manual appointment scheduling takes hours daily",
      "Missed opportunities from after-hours inquiries",
      "Difficulty managing peak booking periods",
    ],
    solutions: [
      "24/7 automated booking via WhatsApp",
      "Smart reminder system reduces no-shows by 60%",
      "Instant responses to customer inquiries",
      "Automated waitlist management",
    ],
    benefits: [
      "Increase revenue by 30% with optimized scheduling",
      "Save 10+ hours per week on admin tasks",
      "Improve customer satisfaction scores",
      "Reduce no-shows and last-minute cancellations",
    ],
  },
  medical: {
    title: "Medical Practices",
    icon: "🏥",
    description: "HIPAA-compliant patient communication and appointment management for modern healthcare.",
    challenges: [
      "Patient no-shows impact practice revenue",
      "Staff overwhelmed with appointment calls",
      "Compliance requirements for communication",
      "Difficulty managing multiple practitioners",
    ],
    solutions: [
      "Secure, HIPAA-compliant messaging",
      "Automated appointment reminders and confirmations",
      "Patient intake form automation",
      "Multi-practitioner calendar synchronization",
    ],
    benefits: [
      "Reduce no-shows by up to 70%",
      "Free up front desk staff for in-person care",
      "Maintain full HIPAA compliance",
      "Improve patient satisfaction and retention",
    ],
  },
  fitness: {
    title: "Fitness & Wellness",
    icon: "💪",
    description: "Streamline class bookings, membership management, and member engagement for gyms and studios.",
    challenges: [
      "Class capacity management complexity",
      "Membership renewal follow-ups",
      "Late cancellations leaving empty spots",
      "Manual waitlist management",
    ],
    solutions: [
      "Real-time class availability updates",
      "Automated membership renewal reminders",
      "Smart waitlist with auto-booking",
      "Member engagement campaigns",
    ],
    benefits: [
      "Maximize class attendance rates",
      "Increase membership retention by 25%",
      "Reduce admin workload significantly",
      "Improve member experience and loyalty",
    ],
  },
  restaurants: {
    title: "Restaurants",
    icon: "🍽️",
    description: "Enhance dining experiences with seamless reservations and customer communication.",
    challenges: [
      "Phone lines overwhelmed during peak hours",
      "Table management inefficiencies",
      "No-shows impacting revenue",
      "Difficulty managing special requests",
    ],
    solutions: [
      "WhatsApp-based reservation system",
      "Automated confirmation and reminders",
      "Digital waitlist management",
      "Special occasion tracking and preparation",
    ],
    benefits: [
      "Reduce no-shows by 50%",
      "Handle 3x more reservations effortlessly",
      "Improve table turnover rates",
      "Enhance customer dining experience",
    ],
  },
  "real-estate": {
    title: "Real Estate",
    icon: "🏠",
    description: "Automate property inquiries, viewings, and client communication for real estate professionals.",
    challenges: [
      "Managing multiple property inquiries simultaneously",
      "Scheduling viewings across different locations",
      "Following up with potential buyers",
      "Maintaining detailed client preferences",
    ],
    solutions: [
      "Instant property information responses",
      "Automated viewing scheduling",
      "Smart follow-up sequences",
      "Client preference tracking and matching",
    ],
    benefits: [
      "Handle 5x more inquiries efficiently",
      "Never miss a potential buyer",
      "Close deals 40% faster",
      "Build stronger client relationships",
    ],
  },
  legal: {
    title: "Legal Services",
    icon: "⚖️",
    description: "Streamline client intake, consultation scheduling, and case communication for law firms.",
    challenges: [
      "Complex client intake processes",
      "Difficulty scheduling consultations",
      "Maintaining client confidentiality",
      "Case update communication delays",
    ],
    solutions: [
      "Secure client intake automation",
      "Intelligent consultation booking",
      "Encrypted client communication",
      "Automated case status updates",
    ],
    benefits: [
      "Reduce intake time by 60%",
      "Increase consultation bookings",
      "Maintain strict confidentiality standards",
      "Improve client satisfaction and retention",
    ],
  },
  education: {
    title: "Education",
    icon: "🎓",
    description: "Connect with students and parents through automated enrollment, scheduling, and communication.",
    challenges: [
      "Parent-teacher communication gaps",
      "Manual enrollment processes",
      "Class scheduling complexities",
      "Event and activity coordination",
    ],
    solutions: [
      "Parent communication portal via WhatsApp",
      "Automated enrollment workflows",
      "Smart class scheduling system",
      "Event reminders and RSVP tracking",
    ],
    benefits: [
      "Improve parent engagement by 70%",
      "Streamline enrollment process",
      "Reduce administrative workload",
      "Enhance student and parent satisfaction",
    ],
  },
  ecommerce: {
    title: "E-commerce",
    icon: "🛍️",
    description: "Boost sales with automated order updates, customer support, and personalized recommendations.",
    challenges: [
      "High cart abandonment rates",
      "Customer inquiry response delays",
      "Manual order status updates",
      "Limited post-purchase engagement",
    ],
    solutions: [
      "Cart recovery automation",
      "24/7 AI customer support",
      "Real-time order tracking updates",
      "Personalized product recommendations",
    ],
    benefits: [
      "Recover 30% of abandoned carts",
      "Reduce support response time by 90%",
      "Increase repeat purchase rate",
      "Boost customer lifetime value",
    ],
  },
  automotive: {
    title: "Automotive",
    icon: "🚗",
    description: "Streamline service appointments, follow-ups, and customer communication for auto shops.",
    challenges: [
      "Service appointment scheduling conflicts",
      "Customer follow-up consistency",
      "Parts availability communication",
      "Service reminder management",
    ],
    solutions: [
      "Automated service booking system",
      "Smart service reminders",
      "Real-time service updates",
      "Parts availability notifications",
    ],
    benefits: [
      "Increase service bookings by 40%",
      "Improve customer retention",
      "Optimize service bay utilization",
      "Enhance customer satisfaction",
    ],
  },
  "home-services": {
    title: "Home Services",
    icon: "🔧",
    description:
      "Manage appointments, dispatching, and customer communication for plumbers, electricians, and contractors.",
    challenges: [
      "Complex scheduling across multiple technicians",
      "Emergency service request management",
      "Customer communication during service",
      "Follow-up and review requests",
    ],
    solutions: [
      "Multi-technician scheduling optimization",
      "Priority emergency booking system",
      "Real-time arrival notifications",
      "Automated post-service follow-ups",
    ],
    benefits: [
      "Increase daily job capacity by 35%",
      "Reduce emergency response time",
      "Improve first-call resolution rate",
      "Boost positive review collection",
    ],
  },
  hospitality: {
    title: "Hospitality",
    icon: "🏨",
    description: "Enhance guest experiences with automated bookings, concierge services, and communication.",
    challenges: [
      "Managing multiple booking channels",
      "Guest request and inquiry handling",
      "Check-in/check-out coordination",
      "Upselling opportunities missed",
    ],
    solutions: [
      "Unified booking management system",
      "24/7 automated guest concierge",
      "Pre-arrival and departure automation",
      "Smart upselling and cross-selling",
    ],
    benefits: [
      "Increase direct bookings by 45%",
      "Improve guest satisfaction scores",
      "Boost ancillary revenue",
      "Reduce operational overhead",
    ],
  },
  professional: {
    title: "Professional Services",
    icon: "💼",
    description: "Streamline client acquisition, project communication, and service delivery for consultants.",
    challenges: [
      "Initial client inquiry management",
      "Project scoping and proposal delivery",
      "Client update communication",
      "Service package explanation complexity",
    ],
    solutions: [
      "Automated lead qualification",
      "Smart proposal generation and delivery",
      "Project milestone updates",
      "Service package recommendation engine",
    ],
    benefits: [
      "Reduce sales cycle by 50%",
      "Increase proposal acceptance rate",
      "Improve client communication",
      "Scale service delivery efficiently",
    ],
  },
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industryData[params.slug]

  if (!industry) {
    return <div>Industry not found</div>
  }

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
      </div>

      <BackgroundParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-6xl mb-6">{industry.icon}</div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{industry.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">{industry.description}</p>
        </motion.div>

        {/* Challenges Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass premium-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Common Challenges</h2>
            <div className="space-y-4">
              {industry.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                  </div>
                  <p className="text-white/80">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Solutions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="glass premium-border rounded-3xl p-8 md:p-12 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Our Solutions</h2>
            <div className="space-y-4">
              {industry.solutions.map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">{solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="glass premium-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="glass premium-border rounded-xl p-6 hover:bg-white/5 transition-all"
                >
                  <p className="text-white font-semibold">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass premium-border rounded-3xl p-12">
            <h2 className="text-3xl font-black text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Join hundreds of {industry.title.toLowerCase()} already automating their operations with Stilla Systems
            </p>
            <Link
              href="/services/whatsapp-automation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
