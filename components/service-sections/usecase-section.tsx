"use client"

import { motion } from "framer-motion"

interface UseCase {
  industry: string
  description: string
  icon: string
  outcome?: string
  metric?: string
}

interface UseCaseSectionProps {
  title: string
  subtitle?: string
  useCases: UseCase[]
}

export function UseCaseSection({ title, subtitle, useCases }: UseCaseSectionProps) {
  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative h-full p-8 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-slate-400/12 bg-gradient-to-br from-slate-900/25 to-slate-800/5 hover:border-cyan-400/30 hover:shadow-[0_12px_40px_rgba(0,217,255,0.12)] transition-all duration-600 overflow-hidden flex flex-col">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-6 sm:gap-8 h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div className="text-5xl sm:text-6xl flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors duration-500">
                        {useCase.industry}
                      </h3>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-cyan-400/30 rounded-full mt-2" />
                    </div>
                  </div>

                  {/* Outcome or Description */}
                  <div className="flex-grow">
                    <p className="text-base sm:text-lg text-white font-semibold leading-snug">
                      {useCase.outcome || useCase.description}
                    </p>
                    {useCase.metric && (
                      <div className="mt-4 inline-block px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/25 rounded-lg">
                        <span className="text-xs sm:text-sm font-semibold text-cyan-300">
                          {useCase.metric}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Link indicator */}
                  <div className="pt-5 sm:pt-6 border-t border-white/10 group-hover:border-cyan-400/20 transition-colors duration-500">
                    <span className="text-xs sm:text-xs font-semibold text-white/50 group-hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5">
                      Learn More
                      <span className="inline-block group-hover:translate-x-1 transition-transform duration-500">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
