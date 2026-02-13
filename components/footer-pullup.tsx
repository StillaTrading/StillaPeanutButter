"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, MessageSquare, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Send } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export function FooterPullup() {
  const [isOpen, setIsOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const storedSessionId = localStorage.getItem("stilla_chat_session_id")
      if (storedSessionId) {
        setSessionId(storedSessionId)
      } else {
        const newSessionId = crypto.randomUUID()
        localStorage.setItem("stilla_chat_session_id", newSessionId)
        setSessionId(newSessionId)
      }
    }
  }, [])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading || !sessionId) return

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("https://bitland.app.n8n.cloud/webhook/640c8d62-584a-4aad-b5d6-45c571e1f609/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: input,
          sessionId: sessionId,
        }),
      })

      if (!response.ok) {
        throw new Error("Network request failed")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: data.output || data.text || data.response || "Unable to process your request.",
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      const errorMsg: Message = {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: "Connection issue. Please try again.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.div initial={false} className="fixed bottom-0 left-0 right-0 z-40 pointer-events-auto">
        <AnimatePresence>
          {isOpen && !showChat && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass border-t border-white/10 backdrop-blur-xl bg-black/90 py-6 md:py-8 shadow-[0_-10px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

              <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
                  <button
                    onClick={() => {
                      setShowChat(true)
                    }}
                    className="group p-3 md:p-4 rounded-xl hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <MessageSquare className="w-5 h-5 text-cyan-400" />
                      <div className="text-white/90 font-bold text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                        Chat with an Agent
                      </div>
                    </div>
                    <div className="text-white/40 text-xs">Instant support</div>
                  </button>

                  <Link
                    href="/legal/terms"
                    className="group p-3 md:p-4 rounded-xl hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-white/90 font-bold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                      Terms of Service
                    </div>
                    <div className="text-white/40 text-xs">Legal agreements</div>
                  </Link>

                  <Link
                    href="/legal/privacy"
                    className="group p-3 md:p-4 rounded-xl hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-white/90 font-bold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                      Privacy Policy
                    </div>
                    <div className="text-white/40 text-xs">Data protection</div>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <a
                      href="tel:0597397912"
                      className="inline-flex items-center justify-center gap-2 text-white font-bold text-lg hover:text-cyan-400 transition-colors group"
                    >
                      <span className="text-2xl">📞</span>
                      <span>0597397912</span>
                    </a>
                    <div className="hidden md:block w-px h-8 bg-white/10" />
                    <a
                      href="mailto:support@stillasystems.com"
                      className="inline-flex items-center justify-center gap-2 text-white font-bold text-lg hover:text-cyan-400 transition-colors group"
                    >
                      <span className="text-2xl">✉️</span>
                      <span>support@stillasystems.com</span>
                    </a>
                  </div>
                  <p className="text-white/40 text-xs mt-3 text-center">Available 24/7 for your support needs</p>
                </div>
              </div>
            </motion.div>
          )}

          {showChat && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass border-t border-white/10 backdrop-blur-xl bg-slate-950 py-4 md:py-6 shadow-[0_-10px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

              <div className="max-w-4xl mx-auto px-6 h-[400px] md:h-[500px] flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Image src="/stilla-logo-premium.png" alt="Stilla Systems" width={32} height={32} className="w-8 h-8 rounded-lg" />
                    <div>
                      <h3 className="font-bold text-white text-sm">Stilla AI Assistant</h3>
                      <p className="text-xs text-cyan-400">Online & Ready to Help</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChat(false)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5 text-white/60" />
                  </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto py-4 space-y-3">
                  {messages.length === 0 && (
                    <div className="h-full flex items-center justify-center text-center">
                      <div className="text-white/60">
                        <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-40" />
                        <p className="text-sm">How can we help you automate your business?</p>
                      </div>
                    </div>
                  )}

                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                          message.role === "user"
                            ? "bg-cyan-500/80 text-white rounded-br-none"
                            : "bg-white/5 text-white/90 rounded-bl-none border border-white/10"
                        }`}
                      >
                        <p className="leading-relaxed">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-white/5 px-4 py-2 rounded-lg rounded-bl-none border border-white/10">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input Area */}
                <form onSubmit={sendMessage} className="flex gap-2 pt-4 border-t border-white/10">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading || !sessionId}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !sessionId || !input.trim()}
                    className="bg-cyan-500/80 hover:bg-cyan-500 disabled:bg-white/10 text-white p-2 rounded-lg transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center bg-black/80 backdrop-blur-md border-t border-white/5 py-2">
          <motion.button
            onClick={() => {
              if (showChat) {
                setShowChat(false)
              } else {
                setIsOpen(!isOpen)
              }
            }}
            className="glass premium-border px-6 py-2 rounded-full hover:bg-white/5 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen || showChat ? "Close" : "Open support"}
          >
            <motion.div
              animate={{ rotate: isOpen || showChat ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <ChevronUp className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">
                {isOpen || showChat ? "Close" : "Support"}
              </span>
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
