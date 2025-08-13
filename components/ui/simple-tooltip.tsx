"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SimpleTooltipProps {
  content: string | React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  trigger?: "hover" | "click"
  delay?: number
  className?: string
  contentClassName?: string
  disabled?: boolean
  showArrow?: boolean
}

export function SimpleTooltip({
  content,
  children,
  position = "top",
  trigger = "hover",
  delay = 300,
  className,
  contentClassName,
  disabled = false,
  showArrow = true
}: SimpleTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [adjustedPosition, setAdjustedPosition] = useState(position)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (disabled || trigger !== "hover") return
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (disabled || trigger !== "hover") return
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    setIsVisible(false)
  }

  const handleClick = () => {
    if (disabled || trigger !== "click") return
    setIsVisible(!isVisible)
  }

  // Check for WhatsApp widget collision
  const checkCollision = () => {
    if (!containerRef.current) return position
    
    const rect = containerRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // WhatsApp widget area (bottom-right)
    // Mobile: bottom-4 right-4 (16px), Desktop: bottom-8 right-8 (32px)
    const isMobile = viewportWidth < 768
    const whatsappMargin = isMobile ? 16 : 32
    const whatsappSize = 56 // 14 * 4 = 56px (w-14 h-14)
    const whatsappTooltipHeight = isMobile ? 40 : 56 // Approximate tooltip height
    
    const whatsappArea = {
      left: viewportWidth - whatsappSize - whatsappMargin,
      right: viewportWidth - whatsappMargin,
      top: viewportHeight - whatsappSize - whatsappMargin - whatsappTooltipHeight,
      bottom: viewportHeight - whatsappMargin
    }
    
    // Check if tooltip would overlap with WhatsApp area
    const tooltipRect = {
      left: rect.left - 100, // Approximate tooltip width
      right: rect.right + 100,
      top: rect.top - 50, // Approximate tooltip height
      bottom: rect.bottom + 50
    }
    
    // Check for overlap
    const overlaps = (
      tooltipRect.left < whatsappArea.right &&
      tooltipRect.right > whatsappArea.left &&
      tooltipRect.top < whatsappArea.bottom &&
      tooltipRect.bottom > whatsappArea.top
    )
    
    if (!overlaps) return position
    
    // If overlapping, adjust position
    if (position === "bottom" || position === "right") {
      return "top" // Move to top to avoid WhatsApp widget
    }
    if (position === "top" && rect.bottom > whatsappArea.top) {
      return "left" // Move to left if top would still overlap
    }
    
    return position
  }
  
  useEffect(() => {
    if (isVisible) {
      const newPosition = checkCollision()
      setAdjustedPosition(newPosition)
    }
  }, [isVisible, position])

  const getTooltipPosition = () => {
    const baseClasses = "absolute z-40" // Lower z-index than WhatsApp widget (z-50)
    switch (adjustedPosition) {
      case "top":
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2 sm:mb-3`
      case "bottom":
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-2 sm:mt-3`
      case "left":
        return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-2 sm:mr-3`
      case "right":
        return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-2 sm:ml-3`
      default:
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2 sm:mb-3`
    }
  }

  const getArrowClasses = () => {
    switch (adjustedPosition) {
      case "top":
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
      case "bottom":
        return "absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"
      case "left":
        return "absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"
      case "right":
        return "absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"
      default:
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
    }
  }

  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      
      {isVisible && (
        <div className={getTooltipPosition()}>
          <div
            className={cn(
              "bg-gray-900 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium shadow-lg border border-gray-700 whitespace-nowrap animate-fade-in-up max-w-xs sm:max-w-sm",
              contentClassName
            )}
          >
            {content}
            {showArrow && (
              <div className={getArrowClasses()}></div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Chat tooltip specifically styled like your WhatsApp component
export function ChatTooltip({
  children,
  text = "Chat with us!",
  position = "top",
  showIcon = true
}: {
  children: React.ReactNode
  text?: string
  position?: "top" | "bottom" | "left" | "right"
  showIcon?: boolean
}) {
  return (
    <SimpleTooltip
      content={
        <div className="flex items-center space-x-2 w-max">
          {showIcon && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512" 
              className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0"
              fill="currentColor"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          )}
          <span className="font-medium text-nowrap">{text}</span>
        </div>
      }
      position={position}
      contentClassName="w-auto whitespace-nowrap"
    >
      {children}
    </SimpleTooltip>
  )
}

// Quick text tooltip
export function TextTooltip({
  text,
  children,
  position = "top"
}: {
  text: string
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
}) {
  return (
    <SimpleTooltip content={text} position={position}>
      {children}
    </SimpleTooltip>
  )
}
