"use server"

import { supabaseServer } from "@/lib/supabase/server"

export async function getFeaturedTestimonials() {
  try {
    const { data, error } = await supabaseServer
      .from("testimonials")
      .select("*")
      .eq("is_published", true)
      .eq("is_featured", true)
      .order("created_at", { ascending: false })
      .limit(6)

    if (error) {
      console.error("Error fetching testimonials:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function getAllTestimonials() {
  try {
    const { data, error } = await supabaseServer
      .from("testimonials")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching testimonials:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}
