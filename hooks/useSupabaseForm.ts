"use client"

import { useState } from "react"
import { toast } from "sonner"

interface UseSupabaseFormOptions {
  onSuccess?: (data: any) => void
  onError?: (error: string) => void
  successMessage?: string
  errorMessage?: string
}

export function useSupabaseForm(options: UseSupabaseFormOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastResult, setLastResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = async (
    submitFunction: (formData: FormData) => Promise<{ success: boolean; message?: string; error?: string }>,
    formData: FormData
  ) => {
    setIsSubmitting(true)

    try {
      const result = await submitFunction(formData)
      setLastResult(result)

      if (result.success) {
        toast.success(options.successMessage || "Form submitted successfully!", {
          description: result.message,
        })
        options.onSuccess?.(result)
      } else {
        toast.error(options.errorMessage || "Form submission failed", {
          description: result.error,
        })
        options.onError?.(result.error || "Unknown error")
      }

      return result
    } catch (error) {
      const errorMessage = "An unexpected error occurred"
      setLastResult({ success: false, error: errorMessage })
      
      toast.error(options.errorMessage || "Form submission failed", {
        description: errorMessage,
      })
      options.onError?.(errorMessage)
      
      return { success: false, error: errorMessage }
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setLastResult(null)
    setIsSubmitting(false)
  }

  return {
    isSubmitting,
    lastResult,
    handleSubmit,
    reset,
  }
}

// Typed version for contact forms
export function useContactForm(options: UseSupabaseFormOptions = {}) {
  return useSupabaseForm({
    successMessage: "Message sent successfully!",
    errorMessage: "Failed to send message",
    ...options,
  })
}
