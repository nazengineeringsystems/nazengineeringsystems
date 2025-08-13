"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight, CheckCircle } from "lucide-react"

interface GetQuoteButtonProps {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  onSuccess?: () => void
}

export function GetQuoteButton({
  variant = "default",
  size = "default", 
  className = "",
  children,
  showIcon = true,
  onSuccess
}: GetQuoteButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [justClicked, setJustClicked] = useState(false)

  // Check if we came from a Get Quote click
  useEffect(() => {
    if (searchParams.get('source') === 'get-quote') {
      setJustClicked(true)
      const timer = setTimeout(() => setJustClicked(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [searchParams])

  const handleClick = useCallback(async () => {
    setIsLoading(true)
    
    try {
      // If we're already on the contact page, scroll to the form
      if (pathname === '/contact') {
        const contactForm = document.getElementById('contact-form')
        if (contactForm) {
          // Add highlighting with blue ring and shadow effects
          contactForm.classList.add('ring-4', 'ring-[#4DA8DA]', 'ring-opacity-75', 'rounded-lg', 'shadow-lg')
          
          // Scroll to form with proper positioning
          const headerOffset = 100 // Account for fixed header and padding
          const elementPosition = contactForm.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          // Focus on first input field (firstName) after scroll
          setTimeout(() => {
            const firstInput = contactForm.querySelector('input[name="firstName"]') as HTMLElement
            if (firstInput) {
              firstInput.focus()
              firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }, 300)
          
          // Highlighting fades after 4 seconds
          setTimeout(() => {
            contactForm.classList.remove('ring-4', 'ring-[#4DA8DA]', 'ring-opacity-75', 'shadow-lg')
          }, 4000)
          
          onSuccess?.()
          return
        }
      }

      // Step 2: Navigation occurs to /contact with query parameters
      const url = new URL('/contact', window.location.origin)
      url.searchParams.set('source', 'get-quote')
      url.searchParams.set('timestamp', Date.now().toString())
      url.searchParams.set('from', pathname)
      
      router.push(url.toString())
      
      // ContactPageScrollHandler will handle steps 3-7
      setTimeout(() => {
        onSuccess?.()
      }, 500)
      
    } finally {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [pathname, router, onSuccess])

  const buttonContent = children || "Get Quote"

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      disabled={isLoading}
      data-get-quote-button
      className={`
        relative overflow-hidden group font-medium
        ${variant === "default" ? "bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white" : ""}
        ${isLoading ? "animate-pulse" : ""}
        ${justClicked ? "ring-2 ring-green-400 ring-opacity-50" : ""}
        hover:scale-105 transition-all duration-200
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center">
        {showIcon && !isLoading && (
          <Quote className="mr-2 h-4 w-4" />
        )}
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {justClicked && (
          <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
        )}
        {buttonContent}
        {showIcon && !isLoading && (
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        )}
      </span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </Button>
  )
}

// Export a pre-configured hero button
export function HeroGetQuoteButton() {
  return (
    <GetQuoteButton 
      variant="outline"
      size="lg"
      className="border-white text-white hover:bg-white hover:text-[#0B1F3A] px-8 py-3 text-lg bg-transparent font-semibold shadow-lg btn-cursor-effect btn-outline-effect btn-magnetic"
    >
      Get Free Quote
    </GetQuoteButton>
  )
}

// Export a pre-configured navbar button
export function NavGetQuoteButton() {
  return (
    <GetQuoteButton 
      size="default"
      className="px-6 w-full sm:w-auto"
    >
      Get Quote
    </GetQuoteButton>
  )
}

// Export a pre-configured CTA button
export function CTAGetQuoteButton() {
  return (
    <GetQuoteButton 
      size="lg"
      className="px-12 py-4 text-xl font-bold shadow-xl"
    >
      Start Your Project
    </GetQuoteButton>
  )
}
