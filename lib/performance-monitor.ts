"use client"

interface PerformanceMetrics {
  lcp: number | null // Largest Contentful Paint
  fid: number | null // First Input Delay
  cls: number | null // Cumulative Layout Shift
  fcp: number | null // First Contentful Paint
  ttfb: number | null // Time to First Byte
  dom: number | null // DOM Content Loaded
  load: number | null // Full Load Time
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    dom: null,
    load: null
  }

  private observers: PerformanceObserver[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers()
      this.measureNavigationTiming()
    }
  }

  private initializeObservers() {
    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        this.metrics.lcp = lastEntry.startTime
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)
    } catch (e) {
      console.warn('LCP observer not supported')
    }

    // FID Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      this.observers.push(fidObserver)
    } catch (e) {
      console.warn('FID observer not supported')
    }

    // CLS Observer
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value
            this.metrics.cls = clsValue
          }
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (e) {
      console.warn('CLS observer not supported')
    }

    // Paint Observer (FCP)
    try {
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime
          }
        })
      })
      paintObserver.observe({ entryTypes: ['paint'] })
      this.observers.push(paintObserver)
    } catch (e) {
      console.warn('Paint observer not supported')
    }
  }

  private measureNavigationTiming() {
    // Wait for navigation timing to be available
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart
        this.metrics.dom = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        this.metrics.load = navigation.loadEventEnd - navigation.loadEventStart
      }
    }, 0)
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public getScores() {
    const { lcp, fid, cls, fcp, ttfb } = this.metrics
    
    return {
      lcp: this.getLCPScore(lcp),
      fid: this.getFIDScore(fid),
      cls: this.getCLSScore(cls),
      fcp: this.getFCPScore(fcp),
      ttfb: this.getTTFBScore(ttfb)
    }
  }

  private getLCPScore(lcp: number | null): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
    if (lcp === null) return 'unknown'
    if (lcp <= 2500) return 'good'
    if (lcp <= 4000) return 'needs-improvement'
    return 'poor'
  }

  private getFIDScore(fid: number | null): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
    if (fid === null) return 'unknown'
    if (fid <= 100) return 'good'
    if (fid <= 300) return 'needs-improvement'
    return 'poor'
  }

  private getCLSScore(cls: number | null): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
    if (cls === null) return 'unknown'
    if (cls <= 0.1) return 'good'
    if (cls <= 0.25) return 'needs-improvement'
    return 'poor'
  }

  private getFCPScore(fcp: number | null): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
    if (fcp === null) return 'unknown'
    if (fcp <= 1800) return 'good'
    if (fcp <= 3000) return 'needs-improvement'
    return 'poor'
  }

  private getTTFBScore(ttfb: number | null): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
    if (ttfb === null) return 'unknown'
    if (ttfb <= 800) return 'good'
    if (ttfb <= 1800) return 'needs-improvement'
    return 'poor'
  }

  public logMetrics() {
    if (process.env.NODE_ENV === 'development') {
      console.group('Performance Metrics')
      const metrics = this.getMetrics()
      const scores = this.getScores()
      
      Object.entries(metrics).forEach(([key, value]) => {
        const score = scores[key as keyof typeof scores]
        const emoji = score === 'good' ? '✅' : score === 'needs-improvement' ? '⚠️' : score === 'poor' ? '❌' : '❓'
        console.log(`${emoji} ${key.toUpperCase()}: ${value}ms (${score})`)
      })
      console.groupEnd()
    }
  }

  public sendToAnalytics() {
    // Send metrics to analytics service
    const metrics = this.getMetrics()
    const scores = this.getScores()
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== null) {
          (window as any).gtag('event', 'performance_metric', {
            event_category: 'Web Vitals',
            event_label: key,
            value: Math.round(key === 'cls' ? value * 1000 : value),
            custom_parameter_1: scores[key as keyof typeof scores]
          })
        }
      })
    }
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Global performance monitor instance
let performanceMonitor: PerformanceMonitor | null = null

export function initializePerformanceMonitor() {
  if (typeof window !== 'undefined' && !performanceMonitor) {
    performanceMonitor = new PerformanceMonitor()
    
    // Log metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        performanceMonitor?.logMetrics()
        performanceMonitor?.sendToAnalytics()
      }, 1000)
    })

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      performanceMonitor?.cleanup()
    })
  }
  
  return performanceMonitor
}

export function getPerformanceMonitor() {
  return performanceMonitor
}

// Hook for React components
export function usePerformanceMonitor() {
  if (typeof window === 'undefined') return null
  
  if (!performanceMonitor) {
    performanceMonitor = initializePerformanceMonitor()
  }
  
  return performanceMonitor
}

// Resource timing utilities
export function measureResourceTiming() {
  if (typeof window === 'undefined') return []
  
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  
  return resources.map(resource => ({
    name: resource.name,
    type: resource.initiatorType,
    size: resource.transferSize || 0,
    duration: resource.duration,
    startTime: resource.startTime,
    endTime: resource.responseEnd
  }))
}

// Memory usage monitoring
export function getMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in performance)) return null
  
  const memory = (performance as any).memory
  return {
    used: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
    total: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) // MB
  }
}

// Network connection monitoring
export function getConnectionInfo() {
  if (typeof window === 'undefined' || !('connection' in navigator)) return null
  
  const connection = (navigator as any).connection
  return {
    effectiveType: connection.effectiveType || 'unknown',
    downlink: connection.downlink || 0,
    rtt: connection.rtt || 0,
    saveData: connection.saveData || false
  }
}
