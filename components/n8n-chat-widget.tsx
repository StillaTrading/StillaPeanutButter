"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export function N8nChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [serviceContext, setServiceContext] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Generate or retrieve persistent sessionId
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

      // Retrieve service context if available
      const storedContext = localStorage.getItem("stilla_chat_context")
      if (storedContext) {
        setServiceContext(JSON.parse(storedContext))
      }

      // Listen for chat open events from assistant
      const handleChatOpen = (event: any) => {
        setIsOpen(true)
        if (event.detail?.serviceType) {
          const contextData = {
            serviceType: event.detail.serviceType,
            fromAssistant: true,
          }
          setServiceContext(contextData)
        }
      }

      window.addEventListener("stilla-chat-open", handleChatOpen)
      return () => window.removeEventListener("stilla-chat-open", handleChatOpen)
    }
  }, [])

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
    setError(null)
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
          serviceType: serviceContext?.serviceType,
          serviceName: serviceContext?.serviceName,
          fromAssistant: serviceContext?.fromAssistant || false,
        }),
      })

      if (!response.ok) {
        throw new Error("Network request failed")
      }

      const data = await response.json()

      // Handle various response formats from n8n
      const assistantMessage: Message = {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: data.output || data.text || data.response || "Unable to process your request.",
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Connection issue. Please try again."
      setError(errorMessage)

      // Add error message to chat
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
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-95 transition-all flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-40 w-full max-w-sm h-96 md:h-[32rem] rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950">
              <div>
                <h3 className="font-semibold text-white">Stilla Systems AI Assistant</h3>
                <p className="text-xs text-slate-400">
                  {serviceContext?.serviceName ? `Specialized in ${serviceContext.serviceName}` : "Online & Ready"}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false)
                  localStorage.removeItem("stilla_chat_context")
                }}
                className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="h-full flex items-center justify-center text-center">
                  <div className="text-slate-400">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Start a conversation with our AI assistant</p>
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
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-cyan-600 text-white rounded-br-none"
                        : "bg-slate-800 text-slate-100 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-slate-800 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-800 p-4 bg-slate-950">
              <form onSubmit={sendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading || !sessionId}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !sessionId || !input.trim()}
                  className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 text-white p-2 rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
