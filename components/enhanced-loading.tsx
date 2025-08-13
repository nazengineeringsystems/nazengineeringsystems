"use client"

import { useEffect, useState } from 'react'

interface EnhancedLoadingProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  delay?: number
  timeout?: number
  minLoadTime?: number
}

export function EnhancedLoading({ 
  children, 
  fallback, 
  delay = 0, 
  timeout = 10000,
  minLoadTime = 300 
}: EnhancedLoadingProps) {
  const [showFallback, setShowFallback] = useState(delay === 0)
  const [isReady, setIsReady] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    let delayTimeout: NodeJS.Timeout
    let timeoutTimeout: NodeJS.Timeout

    // Show fallback after delay
    if (delay > 0) {
      delayTimeout = setTimeout(() => {
        setShowFallback(true)
      }, delay)
    }

    // Force show content after timeout
    if (timeout > 0) {
      timeoutTimeout = setTimeout(() => {
        setIsReady(true)
      }, timeout)
    }

    // Ensure minimum loading time for smooth UX
    const checkMinLoadTime = () => {
      const elapsed = Date.now() - startTime
      if (elapsed >= minLoadTime) {
        setIsReady(true)
      } else {
        setTimeout(checkMinLoadTime, minLoadTime - elapsed)
      }
    }

    // Simulate content loading
    const loadTimer = setTimeout(() => {
      checkMinLoadTime()
    }, 100)

    return () => {
      clearTimeout(delayTimeout)
      clearTimeout(timeoutTimeout)
      clearTimeout(loadTimer)
    }
  }, [delay, timeout, minLoadTime, startTime])

  if (!isReady && showFallback && fallback) {
    return <>{fallback}</>
  }

  if (!isReady && showFallback) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="relative">
          <div className="w-8 h-8 border-4 border-[#4DA8DA]/20 border-t-[#4DA8DA] rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-8 h-8 border-4 border-transparent border-r-[#4DA8DA]/40 rounded-full animate-ping"></div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

// Skeleton components for better loading states
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className={`h-4 bg-gray-200 rounded ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

export function SkeletonButton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-10 bg-gray-200 rounded-md w-32"></div>
    </div>
  )
}
