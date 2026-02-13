"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Star } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    name: "Sarah Chen",
    role: "Salon Owner",
    business: "Luxe Hair Studio",
    review: "We cut our booking time by 70% and reduced no-shows to almost zero. Game-changing for our operations.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Restaurant Manager",
    business: "The Grill House",
    review:
      "Our customer response time dropped from hours to seconds. The WhatsApp automation handles 80% of inquiries.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Medical Practice Manager",
    business: "Wellness Clinic",
    review: "Patient satisfaction improved dramatically. Appointment reminders reduced cancellations by 45%.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "E-commerce Owner",
    business: "StyleHub Online",
    review: "Our support team can now focus on complex issues. The AI handles routine questions instantly.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Real Estate Agent",
    business: "Prime Properties",
    review: "Lead follow-up is now automated. We've increased conversions by 60% without hiring extra staff.",
    rating: 5,
  },
]

export function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:py-32 z-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="text-center mb-10 sm:mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 tracking-tight px-2">
            Trusted by Forward-Thinking Businesses
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Real results from real customers running their operations smarter
          </p>
          <div className="h-1 w-16 sm:w-20 bg-cyan-400 mx-auto rounded-full mt-4 sm:mt-6" />
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[280px] sm:h-[300px] md:h-[280px] flex items-center justify-center">
          <div className="absolute inset-0 flex">
            {reviews.map((review, idx) => {
              const offset = (idx - activeIndex + reviews.length) % reviews.length
              const isVisible = offset === 0
              const isPrev = offset === reviews.length - 1
              const isNext = offset === 1

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 1000 }}
                  animate={{
                    opacity: isVisible ? 1 : isPrev ? 0.2 : isNext ? 0.2 : 0,
                    x: isVisible ? 0 : isPrev ? -200 : isNext ? 200 : 1000,
                    zIndex: isVisible ? 50 : isPrev ? 10 : isNext ? 10 : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="absolute w-full px-2 sm:px-6 md:px-0"
                >
                  <div className="glass premium-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 max-w-2xl mx-auto h-full flex flex-col justify-between">
                    {/* Star Rating */}
                    <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium mb-4 sm:mb-6 flex-grow">
                      "{review.review}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg">{review.name}</p>
                        <p className="text-white/60 text-xs sm:text-sm">
                          {review.role} • {review.business}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-10">
          {reviews.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full transition-all ${
                idx === activeIndex
                  ? "bg-cyan-400 w-6 sm:w-8 h-1.5 sm:h-2"
                  : "bg-white/20 w-1.5 sm:w-2 h-1.5 sm:h-2 hover:bg-white/40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 sm:mt-16 text-center"
      >
        <p className="text-white/60 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-2">
          Join hundreds of businesses already automating their operations
        </p>
        <Link
          href="https://g.page/r/CZ3Rce-c8ICOEBI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 glass premium-border rounded-full text-white font-bold hover:bg-white/10 transition-all group text-sm sm:text-base"
        >
          Drop us a review
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}
