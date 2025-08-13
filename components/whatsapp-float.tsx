"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <div className="fixed bottom-6 right-6 z-50">
      {showOptions && (
        <Card className="mb-4 shadow-xl border-0 animate-fade-in-up">
          <CardContent className="p-4 w-80">
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
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce btn-cursor-effect btn-whatsapp-effect btn-pulse"
        size="lg"
      >
        <MessageCircle className="h-6 w-6 icon-rotate" />
        <span className="sr-only">Open WhatsApp chat</span>
      </Button>

      {!showOptions && (
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-fade-in-up">
          Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )
}
