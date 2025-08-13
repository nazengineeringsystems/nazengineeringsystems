"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { NavGetQuoteButton } from "@/components/get-quote-button"

const PRIMARY_COLOR = "#4DA8DA";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false)

    // Navigate to the page
    router.push(href)

    // Scroll to top smoothly after a brief delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const handleGetQuoteClick = useCallback(() => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false)

    // Add visual feedback
    const button = document.querySelector('[data-get-quote-button]')
    if (button) {
      button.classList.add('animate-pulse')
      setTimeout(() => button.classList.remove('animate-pulse'), 1000)
    }

    // If we're already on the contact page, scroll to the form
    if (pathname === '/contact') {
      const contactForm = document.getElementById('contact-form')
      if (contactForm) {
        // Highlight the form briefly
        contactForm.classList.add('ring-2', 'ring-[#4DA8DA]', 'ring-opacity-50')
        contactForm.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
        setTimeout(() => {
          contactForm.classList.remove('ring-2', 'ring-[#4DA8DA]', 'ring-opacity-50')
        }, 2000)
        return
      }
    }

    // Otherwise, navigate to contact page with query parameter
    const url = new URL('/contact', window.location.origin)
    url.searchParams.set('source', 'get-quote')
    url.searchParams.set('timestamp', Date.now().toString())
    router.push(url.toString())
    
    // After navigation, scroll to form and highlight it
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form')
      if (contactForm) {
        contactForm.classList.add('ring-2', 'ring-[#4DA8DA]', 'ring-opacity-50')
        contactForm.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
        setTimeout(() => {
          contactForm.classList.remove('ring-2', 'ring-[#4DA8DA]', 'ring-opacity-50')
        }, 2000)
      } else {
        // Fallback to scrolling to top if form not found
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
    }, 500) // Increased delay to ensure page loads
  }, [pathname, router, setIsMobileMenuOpen])

  // Prevent hydration mismatch by not rendering scroll-dependent UI until mounted
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button 
              onClick={() => router.push("/")}
              variant="ghost" 
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200" 
              suppressHydrationWarning
            >
              <div className="bg-[#4DA8DA] text-white p-2 rounded-lg">
                <span className="font-bold text-lg">NAZ</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-[#0B1F3A] text-lg">NAZ Engineering</span>
                <span className="block text-xs text-gray-600 text-left">Systems</span>
              </div>
            </Button>
            <nav className="hidden lg:flex items-center space-x-8">
              <Button 
                onClick={() => router.push('/contact')}
                className="bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white hover:scale-105 transition-all duration-200"
              >
                Get Quote
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Button
            onClick={() => handleNavClick("/")}

            variant="ghost"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <div
              className="bg-[var(--primary-color)] text-white p-2 rounded-lg hover:bg-[var(--primary-color)]/90 transition-colors"
              style={{ "--primary-color": PRIMARY_COLOR } as React.CSSProperties}
            >
              <span className="font-bold text-lg">NAZ</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-[#0B1F3A] text-lg">NAZ Engineering</span>
              <span className="block text-xs text-gray-600 text-left">Systems</span>
            </div>
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                variant="ghost"
                className={`font-medium transition-all duration-200 hover:scale-105 cursor-pointer relative group ${
                  pathname === item.href ? "text-[var(--primary-color)]" : "text-gray-700 hover:text-[var(--primary-color)]"
                }`}
                style={{ "--primary-color": PRIMARY_COLOR } as React.CSSProperties}
              >
                {item.label}
              </Button>
            ))}
            <NavGetQuoteButton />
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden hover:scale-105 transition-transform">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <Button
                  onClick={() => handleNavClick("/")}
                  variant="ghost"
                  className="flex items-center space-x-2"
                >
                  <div
                    className="bg-[var(--primary-color)] text-white p-2 rounded-lg"
                    style={{ "--primary-color": PRIMARY_COLOR } as React.CSSProperties}
                  >
                    <span className="font-bold text-lg">NAZ</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0B1F3A] text-lg">NAZ Engineering</span>
                    <span className="block text-xs text-gray-600">Systems</span>
                  </div>
                </Button>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      variant="ghost"
                      className={`text-lg font-medium transition-all duration-200 hover:scale-105 cursor-pointer text-left relative group ${
                        pathname === item.href ? "text-[var(--primary-color)]" : "text-gray-700 hover:text-[var(--primary-color)]"
                      }`}
                      style={{ "--primary-color": PRIMARY_COLOR } as React.CSSProperties}
                    >
                      {item.label}
                    </Button>
                  ))}
                </nav>

                <div className="pt-4 border-t">
                  <div className="w-full">
                    <NavGetQuoteButton />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
