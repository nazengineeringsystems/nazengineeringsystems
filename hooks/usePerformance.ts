"use client"

import { useEffect, useRef, useState } from 'react'

interface PerformanceMetrics {
  isLoading: boolean
  connectionSpeed: string
  memoryUsage: number | null
}

export function usePerformance(): PerformanceMetrics {
  const [isLoading, setIsLoading] = useState(true)
  const [connectionSpeed, setConnectionSpeed] = useState('unknown')
  const [memoryUsage, setMemoryUsage] = useState<number | null>(null)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    setIsLoading(false)

    // Detect connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      setConnectionSpeed(connection?.effectiveType || 'unknown')
    }

    // Monitor memory usage if available
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMemoryUsage(memory.usedJSHeapSize / 1024 / 1024) // Convert to MB
      }
    }

    updateMemoryUsage()
    const memoryInterval = setInterval(updateMemoryUsage, 5000) // Update every 5 seconds

    return () => {
      mounted.current = false
      clearInterval(memoryInterval)
    }
  }, [])

  return { isLoading, connectionSpeed, memoryUsage }
}

// Resource prioritization based on connection speed
export function getResourcePriority(connectionSpeed: string): 'high' | 'normal' | 'low' {
  switch (connectionSpeed) {
    case '4g':
      return 'high'
    case '3g':
      return 'normal'
    case '2g':
    case 'slow-2g':
      return 'low'
    default:
      return 'normal'
  }
}

// Debounced resize hook for performance
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Intersection Observer hook for lazy loading
export function useIntersectionObserver(
  elementRef: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [elementRef, options])

  return isInView
}

// Performance monitoring hook
export function usePagePerformance() {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Log performance entries in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`Performance: ${entry.name} - ${entry.duration}ms`)
        }
      })
    })

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] })

    return () => {
      observer.disconnect()
    }
  }, [])
}
