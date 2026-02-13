"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Zap, Smartphone, Settings, ArrowRight, CheckCircle2 } from "lucide-react"

type ServiceType = "website" | "support" | "automation" | null

interface Service {
  id: ServiceType
  name: string
  title: string
  icon: React.ReactNode
  description: string
  offerings: string[]
  color: string
  accentColor: string
}

const SERVICES: Service[] = [
  {
    id: "automation",
    name: "Business Automation",
    title: "Command & Control",
    icon: <Settings className="w-6 h-6" />,
    description: "End-to-end workflow orchestration and process automation across all your systems.",
    offerings: [
      "Workflow automation & orchestration",
      "System integration & data sync",
      "Process optimization",
      "Custom automation solutions",
    ],
    color: "from-cyan-500/20 to-blue-500/10",
    accentColor: "cyan",
  },
  {
    id: "support",
    name: "Customer Support Agent",
    title: "24/7 Assistance",
    icon: <MessageCircle className="w-6 h-6" />,
    description: "Intelligent AI-powered customer support handling inquiries round-the-clock.",
    offerings: [
      "AI chat & conversation management",
      "Multi-channel support",
      "Knowledge base integration",
      "Sentiment analysis & routing",
    ],
    color: "from-emerald-500/20 to-green-500/10",
    accentColor: "emerald",
  },
  {
    id: "website",
    name: "Website Development",
    title: "Digital Presence",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Modern, high-performance websites built for conversion and user experience.",
    offerings: [
      "Responsive web design",
      "Performance optimization",
      "SEO implementation",
      "CMS integration",
    ],
    color: "from-purple-500/20 to-pink-500/10",
    accentColor: "purple",
  },
]

interface FloatingChatAssistantProps {
  onServiceSelect?: (service: ServiceType) => void
  onChatOpen?: () => void
}

export function FloatingChatAssistant({ onServiceSelect, onChatOpen }: FloatingChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceType>(null)
  const [chatSessionId, setChatSessionId] = useState<string>("")
  const [highlightedService, setHighlightedService] = useState<ServiceType>(null)
  const [mounted, setMounted] = useState(false)

  // Determine highlighted service based on current page
  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname
      if (pathname.includes("pricing") || pathname.includes("website")) {
        setHighlightedService("website")
      } else if (pathname.includes("support") || pathname.includes("customer")) {
        setHighlightedService("support")
      } else if (pathname.includes("automation") || pathname.includes("business")) {
        setHighlightedService("automation")
      }
    }
  }, [])

  // Initialize or retrieve chat session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSessionId = localStorage.getItem("stilla_chat_session_id")
      if (storedSessionId) {
        setChatSessionId(storedSessionId)
      } else {
        const newSessionId = crypto.randomUUID()
        localStorage.setItem("stilla_chat_session_id", newSessionId)
        setChatSessionId(newSessionId)
      }
    }
  }, [])

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service)
    onServiceSelect?.(service)
  }

  const handleProceedToChat = () => {
    // Store service context in localStorage for the chat widget
    if (selectedService && typeof window !== "undefined") {
      const service = SERVICES.find((s) => s.id === selectedService)
      if (service) {
        localStorage.setItem("stilla_chat_context", JSON.stringify({
          serviceType: selectedService,
          serviceName: service.name,
          timestamp: Date.now(),
        }))
      }
    }

    // Close the assistant and trigger chat
    setIsOpen(false)
    setSelectedService(null)
    onChatOpen?.()

    // Emit custom event for chat widget
    if (typeof window !== "undefined") {
      const event = new CustomEvent("stilla-chat-open", {
        detail: {
          serviceType: selectedService,
          fromAssistant: true,
        },
      })
      window.dispatchEvent(event)
    }
  }

  const selectedServiceData = SERVICES.find((s) => s.id === selectedService)

  return (
    <>
      {/* Floating Assistant Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 group"
            aria-label="Open chat assistant"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 217, 255, 0.2)",
                  "0 0 40px rgba(0, 217, 255, 0.4)",
                  "0 0 20px rgba(0, 217, 255, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.5} />
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-20 right-0 whitespace-nowrap bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 shadow-xl pointer-events-none"
            >
              <p className="text-xs font-semibold text-white">How can we help you?</p>
              <p className="text-xs text-cyan-400">Click to explore</p>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Assistant Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md"
          >
            <div className="bg-slate-950/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-700/50 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-white">Stilla Assistant</h2>
                  <p className="text-xs text-slate-400 mt-1">Select a service to get started</p>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setSelectedService(null)
                  }}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
                  aria-label="Close assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content - Service Selection or Details */}
              <div className="p-6">
                {!selectedService ? (
                  // Service Selection View
                  <motion.div
                    key="services"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    {SERVICES.map((service) => (
                      <motion.button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left group relative overflow-hidden ${
                          highlightedService === service.id
                            ? `border-${service.accentColor}-400/50 bg-gradient-to-br ${service.color}`
                            : "border-slate-700/50 bg-slate-900/30 hover:border-slate-600/50 hover:bg-slate-900/50"
                        }`}
                      >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex items-start gap-3">
                          <div className={`mt-1 p-2 rounded-lg bg-white/10 text-${service.accentColor}-400`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-white text-sm">{service.title}</h3>
                              {highlightedService === service.id && (
                                <span className="text-xs px-2 py-0.5 bg-cyan-400/20 border border-cyan-400/50 rounded-full text-cyan-300 font-semibold">
                                  Recommended
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-300 mt-1">{service.name}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                ) : selectedServiceData ? (
                  // Service Details View
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    {/* Back button and title */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1 mb-4"
                    >
                      ← Back to services
                    </button>

                    {/* Service title */}
                    <div>
                      <h3 className="text-xl font-black text-white mb-2">{selectedServiceData.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{selectedServiceData.description}</p>
                    </div>

                    {/* Offerings list */}
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                        What's Included
                      </p>
                      <div className="space-y-2">
                        {selectedServiceData.offerings.map((offering, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{offering}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={handleProceedToChat}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Speak with Specialist</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
