"use client"

import { useEffect } from 'react'

export function CriticalCSS() {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href: string, type: string = 'font/woff2') => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = type
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    // Preload critical images
    const preloadImage = (src: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    }

    // Defer non-critical CSS
    const deferCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"][data-defer]')
      stylesheets.forEach((stylesheet) => {
        const link = stylesheet as HTMLLinkElement
        const newLink = document.createElement('link')
        newLink.rel = 'stylesheet'
        newLink.href = link.href
        newLink.onload = () => {
          link.remove()
        }
        document.head.appendChild(newLink)
      })
    }

    // Load deferred CSS after initial render
    setTimeout(deferCSS, 100)

    // Prefetch next likely pages based on current page
    const prefetchPages = () => {
      const currentPath = window.location.pathname
      let pagesToPrefetch: string[] = []

      switch (currentPath) {
        case '/':
          pagesToPrefetch = ['/services', '/about', '/contact']
          break
        case '/services':
          pagesToPrefetch = ['/contact', '/']
          break
        case '/about':
          pagesToPrefetch = ['/services', '/contact']
          break
        default:
          pagesToPrefetch = ['/']
      }

      pagesToPrefetch.forEach((page) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
      })
    }

    // Prefetch after a delay to avoid blocking initial load
    setTimeout(prefetchPages, 2000)

  }, [])

  return null
}

// Inline critical CSS styles
export const criticalStyles = {
  // Above-the-fold styles that need to be inline
  hero: `
    .hero-section {
      background: linear-gradient(135deg, #0B1F3A 0%, #4DA8DA 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  `,
  
  navigation: `
    .nav-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
    }
  `,

  loading: `
    .loading-spinner {
      width: 2rem;
      height: 2rem;
      border: 4px solid #4DA8DA20;
      border-top: 4px solid #4DA8DA;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `
}

// Component to inject critical CSS
export function InlineCriticalCSS() {
  const allStyles = Object.values(criticalStyles).join('\n')
  
  return (
    <style 
      dangerouslySetInnerHTML={{ __html: allStyles }}
      suppressHydrationWarning
    />
  )
}
