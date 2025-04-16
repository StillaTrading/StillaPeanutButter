"use client"

import { useEffect } from "react"

export default function PaystackLogoRemover() {
  useEffect(() => {
    // Function to hide Paystack logo
    const hidePaystackLogo = () => {
      // Target common selectors used by Paystack for their branding
      const selectors = [
        'img[alt*="Paystack"]',
        'img[src*="paystack"]',
        ".paystack-badge",
        ".paystack-footer",
        ".paystack-attribution",
        ".powered-by-paystack",
        '[class*="paystack-logo"]',
        '[class*="paystack-badge"]',
      ]

      // Apply to both the main document and any iframes
      const applyToDocument = (doc) => {
        selectors.forEach((selector) => {
          const elements = doc.querySelectorAll(selector)
          elements.forEach((el) => {
            el.style.display = "none"
            el.style.visibility = "hidden"
            el.style.opacity = "0"
          })
        })
      }

      // Apply to main document
      applyToDocument(document)

      // Apply to iframes
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        try {
          if (iframe.contentDocument) {
            applyToDocument(iframe.contentDocument)
          }
        } catch (e) {
          // Cross-origin iframe access will throw an error, which we can ignore
        }
      })
    }

    // Run immediately and then periodically to catch dynamically added elements
    hidePaystackLogo()

    // Set an interval to keep checking (in case of dynamic content loading)
    const interval = setInterval(hidePaystackLogo, 2000)

    // Clean up on component unmount
    return () => clearInterval(interval)
  }, [])

  // This component doesn't render anything visible
  return null
}
