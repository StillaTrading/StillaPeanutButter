"use client"

import { cn } from "@/lib/utils"
import { buttonVariants, buttonBase, buttonSizes } from "@/lib/button-system"
import React from "react"
import { motion } from "framer-motion"

interface UnifiedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

export const UnifiedButton = React.forwardRef<HTMLButtonElement, UnifiedButtonProps>(
  ({ variant = "primary", size = "md", isLoading, icon, children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
        {...props}
      >
        {icon}
        {children}
      </motion.button>
    )
  },
)
UnifiedButton.displayName = "UnifiedButton"
