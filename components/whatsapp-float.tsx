"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// WhatsApp SVG Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce btn-cursor-effect btn-whatsapp-effect btn-pulse"
        size="lg"
      >
        <WhatsAppIcon className="h-6 w-6 icon-rotate" />
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
