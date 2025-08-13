"use client"

import { useEffect } from 'react'
import { initializePerformanceMonitor } from '@/lib/performance-monitor'

export function WebVitals() {
  useEffect(() => {
    // Initialize performance monitoring
    const monitor = initializePerformanceMonitor()
    
    // Only load web-vitals in production and when browser is idle
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const loadWebVitals = () => {
        import('web-vitals').then((webVitals) => {
          // Enhanced reporting with better context
          const reportVital = (metric: any) => {
            // Log to console in development
            if (process.env.NODE_ENV === 'development') {
              console.log(metric)
            }
            
            // Send to analytics in production
            if (typeof window !== 'undefined' && 'gtag' in window) {
              // @ts-ignore
              window.gtag('event', metric.name, {
                event_category: 'Web Vitals',
                event_label: metric.id,
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                non_interaction: true,
              })
            }
          }

          // Track all core web vitals
          webVitals.onCLS(reportVital)
          webVitals.onINP(reportVital)
          webVitals.onFCP(reportVital)
          webVitals.onLCP(reportVital)
          webVitals.onTTFB(reportVital)
        })
      }

      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadWebVitals)
      } else {
        setTimeout(loadWebVitals, 0)
      }
    }
  }, [])

  return null
}
