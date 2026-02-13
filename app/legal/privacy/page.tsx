"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LegalBackground } from "@/components/legal-background"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <LegalBackground />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="legal-scroll p-12 md:p-16 rounded-xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Privacy Policy</h1>
          <p className="text-white/50 text-lg mb-12 legal-text">Last updated: January 2026</p>

          <div className="space-y-12 legal-text text-white/80">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">1. Information We Collect</h2>
              <p className="mb-4">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Account Information:</strong> Name, email address, company details
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> Service interactions, feature usage, performance
                  metrics
                </li>
                <li>
                  <strong className="text-white">Communication Data:</strong> Customer messages, support tickets,
                  feedback
                </li>
                <li>
                  <strong className="text-white">Technical Data:</strong> IP address, browser type, device information
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">2. How We Use Your Information</h2>
              <p className="mb-4">Your information is used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our automation services</li>
                <li>Process transactions and send service notifications</li>
                <li>Respond to support requests and provide customer service</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">3. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, secure data centers, regular
                security audits, and access controls. All data transmissions are encrypted using SSL/TLS protocols.
                While no system is completely secure, we continuously monitor and update our security practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">4. Data Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share data only in these circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in operations (under strict confidentiality)</li>
                <li>To comply with legal requirements or protect rights</li>
                <li>In connection with a merger or acquisition (with prior notice)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">5. Data Retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide services. After
                account deletion, data is retained for 30 days for recovery purposes, then permanently deleted. Some
                data may be retained longer for legal compliance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and download your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain data processing</li>
                <li>Withdraw consent at any time</li>
                <li>File a complaint with data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">7. Cookies and Tracking</h2>
              <p>
                We use essential cookies for authentication and functionality. Analytics cookies help us understand
                usage patterns. You can control cookie preferences through your browser settings, though disabling
                cookies may affect functionality.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">8. International Data Transfers</h2>
              <p>
                Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in
                place, including standard contractual clauses and adherence to international data protection frameworks.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 16. We do not knowingly collect information from
                children. If we discover such data has been collected, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">10. Updates to This Policy</h2>
              <p>
                We may update this policy periodically. Material changes will be notified via email or prominent notice
                on our website. The "Last updated" date reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">11. Contact Us</h2>
              <p>
                For privacy-related questions or to exercise your rights, contact us at:
                <br />
                <a href="mailto:privacy@stillasystems.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@stillasystems.com
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
