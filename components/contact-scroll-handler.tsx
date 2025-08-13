"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function ContactPageScrollHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Step 3: ContactPageScrollHandler detects the get-quote source parameter
    const source = searchParams.get('source')
    const timestamp = searchParams.get('timestamp')
    
    if (source === 'get-quote' && timestamp) {
      // Step 4: Automatic scroll and highlight occurs after 800ms delay to the contact form with ID contact-form
      const scrollTimer = setTimeout(() => {
        const contactForm = document.getElementById('contact-form')
        
        if (contactForm) {
          // Step 5: Form gets prominent highlighting with blue ring and shadow effects
          contactForm.classList.add('ring-4', 'ring-[#4DA8DA]', 'ring-opacity-75', 'rounded-lg', 'shadow-lg')
          
          // Calculate scroll position with header offset
          const headerOffset = 100
          const elementPosition = contactForm.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          
          // Automatic scroll to the contact form
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          // Step 6: First input field (firstName) gets focus and scrolls into view
          setTimeout(() => {
            const firstInput = contactForm.querySelector('input[name="firstName"]') as HTMLElement
            if (firstInput) {
              firstInput.focus()
              firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }, 500)
          
          // Step 7: Highlighting fades after 4 seconds
          setTimeout(() => {
            contactForm.classList.remove('ring-4', 'ring-[#4DA8DA]', 'ring-opacity-75', 'shadow-lg')
          }, 4000)
        }
      }, 800) // 800ms delay to ensure everything is loaded
      
      return () => clearTimeout(scrollTimer)
    }
  }, [searchParams])

  // This component doesn't render anything visible
  return null
}
