"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface PrefetchConfig {
  pages?: string[]
  images?: string[]
  fonts?: string[]
  scripts?: string[]
  priority?: 'high' | 'low' | 'auto'
}

const DEFAULT_PREFETCH_CONFIG: Record<string, PrefetchConfig> = {
  '/': {
    pages: ['/services', '/about', '/contact'],
    images: [
      // Add hero images or critical images here
    ],
    priority: 'high'
  },
  '/services': {
    pages: ['/contact', '/'],
    priority: 'high'
  },
  '/about': {
    pages: ['/services', '/contact'],
    priority: 'high'
  },
  '/contact': {
    pages: ['/'],
    priority: 'high'
  }
}

export function ResourcePrefetcher() {
  const pathname = usePathname()

  useEffect(() => {
    const config = DEFAULT_PREFETCH_CONFIG[pathname] || DEFAULT_PREFETCH_CONFIG['/']
    
    // Delay prefetching to avoid blocking critical resources
    const prefetchDelay = setTimeout(() => {
      // Prefetch pages
      if (config.pages) {
        config.pages.forEach(page => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = page
          link.setAttribute('data-prefetch', 'page')
          document.head.appendChild(link)
        })
      }

      // Prefetch images
      if (config.images) {
        config.images.forEach(image => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.as = 'image'
          link.href = image
          link.setAttribute('data-prefetch', 'image')
          document.head.appendChild(link)
        })
      }

      // Prefetch fonts
      if (config.fonts) {
        config.fonts.forEach(font => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.as = 'font'
          link.type = 'font/woff2'
          link.href = font
          link.crossOrigin = 'anonymous'
          link.setAttribute('data-prefetch', 'font')
          document.head.appendChild(link)
        })
      }

      // Prefetch scripts
      if (config.scripts) {
        config.scripts.forEach(script => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.as = 'script'
          link.href = script
          link.setAttribute('data-prefetch', 'script')
          document.head.appendChild(link)
        })
      }
    }, 2000) // Wait 2 seconds after page load

    return () => {
      clearTimeout(prefetchDelay)
      // Clean up prefetched resources if needed
      const prefetchedLinks = document.querySelectorAll('[data-prefetch]')
      prefetchedLinks.forEach(link => link.remove())
    }
  }, [pathname])

  return null
}

// Hook for programmatic prefetching
export function usePrefetch() {
  const prefetch = (url: string, type: 'page' | 'image' | 'font' | 'script' = 'page') => {
    // Check if already prefetched
    const existing = document.querySelector(`link[href="${url}"][data-prefetch="${type}"]`)
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = url
    link.setAttribute('data-prefetch', type)
    
    if (type === 'image') {
      link.as = 'image'
    } else if (type === 'font') {
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
    } else if (type === 'script') {
      link.as = 'script'
    }
    
    document.head.appendChild(link)
  }

  const preload = (url: string, type: 'image' | 'font' | 'script') => {
    // Check if already preloaded
    const existing = document.querySelector(`link[href="${url}"][rel="preload"]`)
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = url
    link.as = type
    
    if (type === 'font') {
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
    }
    
    document.head.appendChild(link)
  }

  return { prefetch, preload }
}

// Component for preloading critical resources
export function CriticalResourcePreloader({ 
  images = [], 
  fonts = [], 
  scripts = [] 
}: {
  images?: string[]
  fonts?: string[]
  scripts?: string[]
}) {
  useEffect(() => {
    // Preload critical images immediately
    images.forEach(image => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = image
      link.setAttribute('data-critical', 'image')
      document.head.appendChild(link)
    })

    // Preload critical fonts immediately
    fonts.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.href = font
      link.crossOrigin = 'anonymous'
      link.setAttribute('data-critical', 'font')
      document.head.appendChild(link)
    })

    // Preload critical scripts immediately
    scripts.forEach(script => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'script'
      link.href = script
      link.setAttribute('data-critical', 'script')
      document.head.appendChild(link)
    })

    return () => {
      // Cleanup on unmount
      const criticalLinks = document.querySelectorAll('[data-critical]')
      criticalLinks.forEach(link => link.remove())
    }
  }, [images, fonts, scripts])

  return null
}
