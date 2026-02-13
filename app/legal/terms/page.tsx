"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LegalBackground } from "@/components/legal-background"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <LegalBackground />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="legal-scroll p-12 md:p-16 rounded-xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Terms of Service</h1>
          <p className="text-white/50 text-lg mb-12 legal-text">Last updated: January 2026</p>

          <div className="space-y-12 legal-text text-white/80">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Stilla Systems' services, you agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">2. Description of Services</h2>
              <p className="mb-4">Stilla Systems provides AI-powered business automation solutions including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WhatsApp automation for customer communication</li>
                <li>Business listing management across multiple platforms</li>
                <li>Smart booking and appointment systems</li>
                <li>24/7 AI-powered customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not misuse or attempt to disrupt our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">4. Payment Terms</h2>
              <p>
                All fees are billed in advance on a monthly or annual basis. Subscriptions automatically renew unless
                cancelled before the renewal date. Refunds are provided on a case-by-case basis within 14 days of
                initial purchase.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">5. Data Ownership</h2>
              <p>
                You retain all rights to your data. We collect and process data only as necessary to provide our
                services, in accordance with our Privacy Policy. You may export or delete your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">6. Service Availability</h2>
              <p>
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance
                will be announced in advance when possible. We are not liable for service interruptions beyond our
                control.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">7. Limitation of Liability</h2>
              <p>
                Stilla Systems shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of our services. Our total liability is limited to the amount paid by you in the
                past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">8. Termination</h2>
              <p>
                Either party may terminate this agreement at any time. Upon termination, your access to our services
                will cease, and you will be responsible for any outstanding fees. We reserve the right to suspend or
                terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">9. Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Significant changes will be communicated via email.
                Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">10. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
                <br />
                <a href="mailto:legal@stillasystems.com" className="text-cyan-400 hover:text-cyan-300">
                  legal@stillasystems.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-20 pt-12 border-t border-white/10 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold">
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
