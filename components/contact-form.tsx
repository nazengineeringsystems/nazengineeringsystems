"use client"

import { useState, useTransition, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const validateForm = useCallback((formData: FormData) => {
    const errors: Record<string, string> = {}
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    const serviceInterest = formData.get("serviceInterest") as string

    if (!firstName?.trim()) errors.firstName = "First name is required"
    if (!lastName?.trim()) errors.lastName = "Last name is required"
    if (!email?.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!message?.trim()) errors.message = "Project details are required"
    if (!serviceInterest?.trim()) errors.serviceInterest = "Please select a service"

    return errors
  }, [])

  const handleSubmit = async (formData: FormData) => {
    // Clear previous results and validation errors
    setResult(null)
    setValidationErrors({})

    // Validate form client-side
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      return
    }

    startTransition(async () => {
      try {
        const result = await submitContactForm(formData)
        setResult(result)

        if (result.success) {
          // Reset form
          const form = document.getElementById("contact-form-element") as HTMLFormElement
          form?.reset()
          // Scroll to success message
          setTimeout(() => {
            const resultElement = document.querySelector('[data-success-message]')
            resultElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }, 100)
        }
      } catch (error) {
        setResult({
          success: false,
          error: "An unexpected error occurred. Please try again."
        })
      }
    })
  }

  return (
    <Card id="contact-form" className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-3">Send Us a Message</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent matters, please call us
          directly.
        </p>

        {result && (
          <div
            data-success-message={result.success}
            className={`mb-6 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 ${
              result.success
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <div className="flex items-center space-x-2">
              {result.success ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p className="text-sm font-medium">{result.success ? "Success!" : "Error"}</p>
            </div>
            <p className="text-sm">{result.success ? result.message : result.error}</p>
          </div>
        )}

        <form id="contact-form-element" action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
                First Name *
              </label>
              <Input
                name="firstName"
                placeholder="Enter your first name"
                required
                disabled={isPending}
                className={`border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm ${
                  validationErrors.firstName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              {validationErrors.firstName && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {validationErrors.firstName}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
                Last Name *
              </label>
              <Input
                name="lastName"
                placeholder="Enter your last name"
                required
                disabled={isPending}
                className={`border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm ${
                  validationErrors.lastName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              {validationErrors.lastName && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {validationErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
                Email Address *
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                disabled={isPending}
                className={`border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm ${
                  validationErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              {validationErrors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {validationErrors.email}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
                Phone Number
              </label>
              <Input
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                disabled={isPending}
                className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">Optional - Include country code</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
                Service Interest *
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                required
                disabled={isPending}
                defaultValue=""
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4DA8DA] focus:border-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm ${
                  validationErrors.serviceInterest ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              >
                <option value="">Select a service you&apos;re interested in</option>
                <option value="it-infrastructure">IT Infrastructure & Networking</option>
                <option value="networking">Network Solutions & Security</option>
                <option value="cctv">CCTV & Security Systems</option>
                <option value="power-backup">Power Backup & UPS Solutions</option>
                <option value="solar-energy">Solar Energy & Green Technology</option>
                <option value="engineering">Engineering & Technical Services</option>
                <option value="consultation">Consultation & Assessment</option>
                <option value="maintenance">Maintenance & Support</option>
              </select>
              {validationErrors.serviceInterest && (
                <p className="text-xs text-red-600 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {validationErrors.serviceInterest}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
                Budget Range
              </label>
              <select
                name="budgetRange"
                required
                disabled={isPending}
                defaultValue=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4DA8DA] focus:border-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10 text-sm"
              >
                <option value="" disabled>Select budget range</option>
                <option value="under-1lakh">Under ₹1 Lakh</option>
                <option value="1-5lakh">₹1 - 5 Lakhs</option>
                <option value="5-10lakh">₹5 - 10 Lakhs</option>
                <option value="10-25lakh">₹10 - 25 Lakhs</option>
                <option value="above-25lakh">Above ₹25 Lakhs</option>
                <option value="need-consultation">Need Consultation</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-[#4DA8DA] transition-colors">
              Project Details *
            </label>
            <Textarea
              name="message"
              placeholder="Please describe your project requirements, timeline, budget considerations, and any specific technical needs. The more details you provide, the better we can assist you."
              rows={4}
              required
              disabled={isPending}
              className={`border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors resize-none text-sm ${
                validationErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
            />
            {validationErrors.message && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {validationErrors.message}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">Minimum 10 characters recommended for better assistance</p>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="newsletterSignup"
              name="newsletterSignup"
              disabled={isPending}
              className="mt-1 h-4 w-4 text-[#4DA8DA] focus:ring-[#4DA8DA] border-gray-300 rounded"
            />
            <label htmlFor="newsletterSignup" className="text-xs text-gray-600">
              I would like to receive updates about NAZ Engineering Systems services and industry insights.
            </label>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white py-3 text-sm sm:text-base font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-4 space-y-2">
          <p className="text-xs text-gray-500 text-center">
            * Required fields. We respect your privacy and will never share your information.
          </p>
          <p className="text-xs text-gray-400 text-center">
            By submitting this form, you agree to our privacy policy and consent to being contacted about your inquiry.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
