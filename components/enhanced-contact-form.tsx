"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { submitContactForm } from "@/app/actions/contact"

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  newsletterSignup: z.boolean(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const serviceOptions = [
  { value: "it-infrastructure", label: "IT Infrastructure" },
  { value: "networking", label: "Networking Solutions" },
  { value: "cctv", label: "CCTV & Security Systems" },
  { value: "power-backup", label: "Power Backup Solutions" },
  { value: "solar-energy", label: "Solar Energy Systems" },
  { value: "engineering", label: "Engineering Services" },
  { value: "consultation", label: "General Consultation" },
]

const budgetOptions = [
  { value: "under-1lakh", label: "Under ₹1 Lakh" },
  { value: "1-5lakh", label: "₹1 - 5 Lakhs" },
  { value: "5-10lakh", label: "₹5 - 10 Lakhs" },
  { value: "10-25lakh", label: "₹10 - 25 Lakhs" },
  { value: "above-25lakh", label: "Above ₹25 Lakhs" },
  { value: "consultation", label: "Need Consultation" },
]

export function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      budgetRange: "",
      message: "",
      newsletterSignup: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Convert to FormData for the server action
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (key === "newsletterSignup") {
          formData.append(key, value ? "on" : "")
        } else {
          formData.append(key, value?.toString() || "")
        }
      })

      const result = await submitContactForm(formData)

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: result.message,
        })
        form.reset()
      } else {
        toast.error("Failed to send message", {
          description: result.error,
        })
      }
    } catch (error) {
      toast.error("An unexpected error occurred", {
        description: "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3">Send Us a Message</h3>
        <p className="text-gray-600 mb-6 text-sm">
          Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent matters, please call us
          directly.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                      First Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                      Last Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                      Email Address *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your number"
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serviceInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                      Service Interest
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                      Budget Range
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors h-10">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 group-hover:text-[#4DA8DA] transition-colors">
                    Project Details *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      rows={4}
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-[#4DA8DA] focus:ring-[#4DA8DA] hover:border-[#4DA8DA]/50 transition-colors resize-none text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newsletterSignup"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                      className="mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-xs text-gray-600">
                      I would like to receive updates about NAZ Engineering Systems services and industry insights.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white py-3 text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </CardContent>
    </Card>
  )
}
