"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// WhatsApp SVG Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      className={className}
      fill="currentColor"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  )
}

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) return null
  if (!isVisible) return null

  const whatsappNumbers = [
    {
      number: "919310756714",
      label: "Primary Support",
      message: "Hello NAZ Engineering Systems, I would like to inquire about your services.",
    },
    {
      number: "918377087801",
      label: "Secondary Support",
      message: "Hello NAZ Engineering Systems, I would like to inquire about your services.",
    },
  ]

  return (
    <div className="fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8">
      {showOptions && (
        <Card className="mb-4 shadow-xl border-0 animate-fade-in-up">
          <CardContent className="p-3 sm:p-4 w-72 sm:w-80">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#0B1F3A]">Contact us on WhatsApp</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowOptions(false)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 mb-4">Choose a number to start chatting with our team</p>
            <div className="space-y-2">
              {whatsappNumbers.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start border-green-200 hover:bg-green-50 hover:border-green-300 bg-transparent btn-cursor-effect btn-outline-effect btn-magnetic"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 text-green-600 icon-rotate" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">{contact.label}</div>
                      <div className="text-xs text-gray-500">
                        +{contact.number.replace(/(\d{2})(\d{5})(\d{5})/, "$1 $2 $3")}
                      </div>
                    </div>
                  </Button>
                </a>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t">
              <p className="text-xs text-gray-500 text-center">
                We typically reply within minutes during business hours
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 btn-cursor-effect btn-whatsapp-effect btn-pulse flex items-center justify-center p-0"
        size="lg"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
        <span className="sr-only">Open WhatsApp chat</span>
      </Button>

    </div>
  )
}
