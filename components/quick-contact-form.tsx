"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitQuickContact } from "@/app/actions/contact"
import { ClientOnly } from "@/components/client-only"

export function QuickContactForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitQuickContact(formData)
      setResult(result)

      if (result.success) {
        // Reset form
        const form = document.getElementById("quick-contact-form") as HTMLFormElement
        form?.reset()
      }
    })
  }

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4 sm:mb-6">Quick Contact</h3>

        {result && (
          <div
            className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
              result.success
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {result.success ? (
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
            )}
            <p className="text-sm">{result.success ? result.message : result.error}</p>
          </div>
        )}

        <form id="quick-contact-form" action={handleSubmit} className="space-y-4">
          <Input 
            name="name" 
            placeholder="Your Full Name" 
            required 
            disabled={isPending} 
            className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm sm:text-base"
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email Address"
            required
            disabled={isPending}
            className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm sm:text-base"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your project or inquiry..."
            rows={4}
            required
            disabled={isPending}
            className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors resize-none text-sm sm:text-base"
          />
          <ClientOnly fallback={
            <Button 
              type="submit" 
              disabled={isPending} 
              className="w-full bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white py-3 text-sm sm:text-base font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Quick Message"
              )}
            </Button>
          }>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white py-3 text-sm sm:text-base font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 btn-cursor-effect btn-primary-effect btn-magnetic disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Quick Message"
              )}
            </Button>
          </ClientOnly>
          <p className="text-xs text-gray-500 text-center mt-3">
            We&apos;ll get back to you within 24 hours
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
