"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { formatFestivityDate, getGoogleCalendarLink } from "@/utils/festivity-dates"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PromoCountdownProps {
  targetDate?: string
}

export default function PromoCountdown({ targetDate }: PromoCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [calculatedTargetDate, setCalculatedTargetDate] = useState<string>("")
  const [festivityName, setFestivityName] = useState("Festivity")
  const [calendarLink, setCalendarLink] = useState("")

  useEffect(() => {
    // If a specific target date is provided, use it
    if (targetDate) {
      setCalculatedTargetDate(targetDate)
      setFestivityName("Christmas") // Default to Christmas for specific dates

      // Create calendar link
      const date = new Date(targetDate)
      setCalendarLink(getGoogleCalendarLink("Christmas", date))
    } else {
      // Otherwise, calculate the next festivity date (Christmas or Easter)
      const now = new Date()
      const currentYear = now.getFullYear()

      // Calculate Christmas date (December 25th)
      const christmas = new Date(currentYear, 11, 25) // Month is 0-indexed, so 11 = December

      // Calculate Easter date (it varies each year, this is a simplified calculation)
      // For a more accurate calculation, you would need a specific algorithm
      // This is a placeholder calculation - Easter is usually in March or April
      const easter = new Date(currentYear, 3, 15) // Approximate Easter to April 15th

      // If we're past Easter but before Christmas
      if (now > easter && now < christmas) {
        setCalculatedTargetDate(christmas.toISOString())
        setFestivityName("Christmas")
        setCalendarLink(getGoogleCalendarLink("Christmas", christmas))
      }
      // If we're past Christmas or before Easter
      else if (now > christmas || now < easter) {
        // If we're past Christmas, use next year's Easter
        if (now > christmas) {
          easter.setFullYear(currentYear + 1)
        }
        setCalculatedTargetDate(easter.toISOString())
        setFestivityName("Easter")
        setCalendarLink(getGoogleCalendarLink("Easter", easter))
      }

      // Add 2 months to the current date as a fallback
      const twoMonthsFromNow = new Date()
      twoMonthsFromNow.setMonth(now.getMonth() + 2)
      if (!calculatedTargetDate) {
        setCalculatedTargetDate(twoMonthsFromNow.toISOString())
        setFestivityName("Promotion")
        setCalendarLink(getGoogleCalendarLink("Promotion", twoMonthsFromNow))
      }
    }
  }, [targetDate, calculatedTargetDate])

  useEffect(() => {
    if (!calculatedTargetDate) return

    const calculateTimeLeft = () => {
      const difference = +new Date(calculatedTargetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [calculatedTargetDate])

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-sm font-medium">{festivityName} Ends:</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Calendar className="h-4 w-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to Google Calendar: {formatFestivityDate(new Date(calculatedTargetDate))}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex gap-2 md:gap-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center min-w-[60px]">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-xs md:text-sm">Days</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center min-w-[60px]">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm">Hours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center min-w-[60px]">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm">Mins</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center min-w-[60px]">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm">Secs</div>
        </div>
      </div>
    </div>
  )
}
