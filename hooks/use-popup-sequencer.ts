"use client"

import { useEffect, useState, useCallback } from "react"

export interface PopupSequencerConfig {
  intervalMs?: number
  storageKey?: string
}

export function usePopupSequencer(config: PopupSequencerConfig = {}) {
  const { intervalMs = 120000, storageKey = "stilla_popups_shown" } = config

  const [whatsappOpen, setWhatsappOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if popups have already been shown this session
    const shown = sessionStorage.getItem(storageKey)
    if (shown) return

    // Show first popup after a brief delay to let page settle
    const firstTimer = setTimeout(() => {
      setWhatsappOpen(true)
    }, 1000)

    // Show second popup after interval
    const secondTimer = setTimeout(() => {
      setWhatsappOpen(false)
      setBookingOpen(true)
      // Mark popups as shown after both have been triggered
      sessionStorage.setItem(storageKey, "true")
    }, intervalMs + 1000)

    return () => {
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
    }
  }, [intervalMs, storageKey])

  const closeWhatsapp = useCallback(() => {
    setWhatsappOpen(false)
  }, [])

  const closeBooking = useCallback(() => {
    setBookingOpen(false)
    sessionStorage.setItem(storageKey, "true")
  }, [storageKey])

  return {
    whatsappOpen,
    bookingOpen,
    closeWhatsapp,
    closeBooking,
    mounted,
  }
}
