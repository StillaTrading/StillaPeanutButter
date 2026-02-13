"use client"

import { useEffect, useState, useCallback } from "react"

export interface ServicePopupSequencerConfig {
  delayMs?: number
  storageKey?: string
}

export function useServicePopupSequencer(config: ServicePopupSequencerConfig = {}) {
  const { delayMs = 60000, storageKey = "stilla_service_popups_shown" } = config

  const [automationsOpen, setAutomationsOpen] = useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if popups have already been shown this session
    const shown = sessionStorage.getItem(storageKey)
    if (shown) return

    // Show Business Automations popup after delay
    const firstTimer = setTimeout(() => {
      setAutomationsOpen(true)
    }, delayMs)

    // Show AI Agents popup after first closes
    const secondTimer = setTimeout(() => {
      setAutomationsOpen(false)
      setAgentsOpen(true)
      // Mark popups as shown after both have been triggered
      sessionStorage.setItem(storageKey, "true")
    }, delayMs * 2)

    return () => {
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
    }
  }, [delayMs, storageKey])

  const closeAutomations = useCallback(() => {
    setAutomationsOpen(false)
  }, [])

  const closeAgents = useCallback(() => {
    setAgentsOpen(false)
    sessionStorage.setItem(storageKey, "true")
  }, [storageKey])

  return {
    automationsOpen,
    agentsOpen,
    closeAutomations,
    closeAgents,
    mounted,
  }
}
