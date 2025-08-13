"use client"

import dynamic from "next/dynamic"

// Dynamic imports that require ssr: false need to be in a Client Component
export const ResourcePrefetcher = dynamic(
  () => import("@/components/resource-prefetcher").then(mod => ({ default: mod.ResourcePrefetcher })),
  {
    ssr: false,
    loading: () => null
  }
)

export const ScrollToTop = dynamic(
  () => import("@/components/scroll-to-top").then(mod => ({ default: mod.ScrollToTop })),
  {
    ssr: false,
    loading: () => null
  }
)

export const WhatsAppFloat = dynamic(
  () => import("@/components/whatsapp-float").then(mod => ({ default: mod.WhatsAppFloat })),
  {
    ssr: false, // This is now allowed in a Client Component
    loading: () => null
  }
)

export const WebVitals = dynamic(
  () => import("@/components/web-vitals").then(mod => ({ default: mod.WebVitals })),
  {
    ssr: false // This is now allowed in a Client Component
  }
)
