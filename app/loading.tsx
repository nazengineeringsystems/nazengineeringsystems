"use client"

import { useEffect, useState } from 'react'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')

  useEffect(() => {
    const messages = [
      'Initializing...',
      'Loading resources...',
      'Preparing interface...',
      'Almost ready...'
    ]

    let messageIndex = 0
    let currentProgress = 0

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5 // Random increment between 5-20
      
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(progressInterval)
        setLoadingText('Ready!')
      } else {
        // Change message based on progress
        const newMessageIndex = Math.floor((currentProgress / 100) * messages.length)
        if (newMessageIndex !== messageIndex && newMessageIndex < messages.length) {
          messageIndex = newMessageIndex
          setLoadingText(messages[messageIndex])
        }
      }
      
      setProgress(Math.min(currentProgress, 100))
    }, 200)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1F3A] to-[#4DA8DA] will-change-auto">
      <div className="text-center">
        <div className="relative">
          {/* Optimized Animated Logo */}
          <div className="bg-white text-[#4DA8DA] p-6 rounded-2xl shadow-2xl mb-6 transform transition-all duration-300 hover:scale-105">
            <span className="font-bold text-4xl select-none">NAZ</span>
          </div>
          
          {/* Enhanced Loading Spinner with multiple rings */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white"></div>
              <div className="absolute inset-0 animate-pulse rounded-full h-12 w-12 border-4 border-transparent border-r-white/40"></div>
            </div>
          </div>
          
          {/* Dynamic Loading Text */}
          <p className="text-white text-lg font-medium select-none transition-all duration-300">
            {loadingText}
          </p>
          <p className="text-white/80 text-sm mt-2 select-none">NAZ Engineering Systems</p>
          
          {/* Enhanced Progress indicator with percentage */}
          <div className="mt-6 w-64 bg-white/20 rounded-full h-2 mx-auto overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-xs mt-2">{Math.round(progress)}%</p>
          
          {/* Subtle pulse animation */}
          <div className="absolute -inset-4 bg-white/5 rounded-3xl animate-pulse -z-10"></div>
        </div>
      </div>
    </div>
  )
}
