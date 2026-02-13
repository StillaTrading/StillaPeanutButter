"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  company: string
  quote: string
  role?: string
}

interface TestimonialSectionProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export function TestimonialSection({ title, subtitle, testimonials }: TestimonialSectionProps) {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(6,182,212,0.03)_12%,transparent_12.5%,transparent_87%,rgba(6,182,212,0.03)_87.5%,rgba(6,182,212,0.03)),linear-gradient(150deg,rgba(6,182,212,0.03)_12%,transparent_12.5%,transparent_87%,rgba(6,182,212,0.03)_87.5%,rgba(6,182,212,0.03))] bg-[size:80px_140px] opacity-50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{title}</h2>
          {subtitle && <p className="text-lg text-white/70 max-w-3xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass premium-border p-8 rounded-2xl backdrop-blur-md bg-black/40 relative"
            >
              <Quote className="w-10 h-10 text-cyan-400/30 mb-4" />
              <p className="text-white/90 text-lg mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm">
                  {testimonial.role ? `${testimonial.role}, ` : ""}
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
