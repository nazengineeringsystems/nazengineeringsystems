"use server"

import { supabaseServer } from "@/lib/supabase/server"

export async function getFeaturedProjects() {
  try {
    const { data, error } = await supabaseServer
      .from("projects")
      .select("*")
      .eq("is_published", true)
      .eq("is_featured", true)
      .order("completion_date", { ascending: false })
      .limit(6)

    if (error) {
      console.error("Error fetching projects:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getAllProjects() {
  try {
    const { data, error } = await supabaseServer
      .from("projects")
      .select("*")
      .eq("is_published", true)
      .order("completion_date", { ascending: false })

    if (error) {
      console.error("Error fetching projects:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}
