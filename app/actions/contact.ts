"use server"

import { supabaseServer } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  serviceInterest?: string
  budgetRange?: string
  message: string
  newsletterSignup?: boolean
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      serviceInterest: (formData.get("serviceInterest") as string) || undefined,
      budgetRange: (formData.get("budgetRange") as string) || undefined,
      message: formData.get("message") as string,
      newsletterSignup: formData.get("newsletterSignup") === "on",
    }

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Insert into Supabase
    const { error } = await supabaseServer.from("contact_submissions").insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      service_interest: data.serviceInterest,
      budget_range: data.budgetRange,
      message: data.message,
      newsletter_signup: data.newsletterSignup || false,
      status: "new",
    })

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit form. Please try again later.",
      }
    }

    // Also create a service inquiry record if service interest is specified
    if (data.serviceInterest && data.serviceInterest !== "") {
      await supabaseServer.from("service_inquiries").insert({
        service_type: data.serviceInterest,
        client_email: data.email,
        client_phone: data.phone,
        inquiry_source: "website",
        message: data.message,
        urgency_level: "normal",
        status: "new",
      })
    }

    revalidatePath("/contact")

    return {
      success: true,
      message: "Thank you for your inquiry! We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

export async function submitQuickContact(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all fields.",
      }
    }

    // Split name into first and last name
    const nameParts = name.trim().split(" ")
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(" ") || firstName

    const { error } = await supabaseServer.from("contact_submissions").insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      message: message,
      status: "new",
    })

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit form. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Message sent successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Quick contact submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
