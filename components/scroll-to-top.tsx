"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [pathname, mounted])

  return null
}
