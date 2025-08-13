"use client"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import HeroSection from "./sections/HeroSection"
import { EnhancedLoading, SkeletonCard } from "@/components/enhanced-loading"
import { ResourcePrefetcher } from "@/components/resource-prefetcher"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"

// Optimized lazy loading with better performance
const ServicesSection = dynamic(() => import("./sections/ServicesSection").then(mod => ({ default: mod.default })), {
  ssr: false, // Load on client side for better initial performance
  loading: () => (
    <div className="py-16 bg-gray-50 min-h-[400px] flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

const WhyChooseUsSection = dynamic(() => import("./sections/WhyChooseUsSection").then(mod => ({ default: mod.default })), {
  ssr: false, // Load on client side for better initial performance
  loading: () => (
    <div className="py-16 min-h-[400px] flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

const QuickContactForm = dynamic(() => import("@/components/quick-contact-form").then(mod => ({ default: mod.QuickContactForm })), {
  ssr: false, // Load on client side for better initial performance
  loading: () => (
    <div className="animate-pulse min-h-[400px] flex items-center">
      <div className="h-96 bg-gray-200 rounded-lg w-full"></div>
    </div>
  ),
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ResourcePrefetcher />
      <HeroSection />
      <Suspense fallback={
        <div className="py-16 bg-gray-50 min-h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4DA8DA]"></div>
        </div>
      }>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={
        <div className="py-16 min-h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4DA8DA]"></div>
        </div>
      }>
        <WhyChooseUsSection />
      </Suspense>
      {/* Contact Preview Section */}
      <section className="py-12 sm:py-16 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">Ready to Get Started?</h2>
                <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
                  Contact us today for a free consultation and discover how we can transform your technology
                  infrastructure.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-[#4DA8DA] flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col space-y-1">
                      <a href="tel:+918377087801" className="hover:text-[#4DA8DA] transition-colors text-sm sm:text-base">
                        +91 83770 87801
                      </a>
                      <a href="tel:+911145006296" className="hover:text-[#4DA8DA] transition-colors text-sm sm:text-base">
                        +91 11450 06296
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-[#4DA8DA] flex-shrink-0 mt-0.5" />
                    <a href="mailto:nazengineeringsystems@gmail.com" className="hover:text-[#4DA8DA] transition-colors text-sm sm:text-base break-all">
                      nazengineeringsystems@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#4DA8DA] flex-shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base leading-relaxed">
                      <p>GALI NO 4 and 5, KH. NO. 5/3</p>
                      <p>Sangam Vihar, Wazirabad</p>
                      <p>Delhi - 110084, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-[#4DA8DA] flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col space-y-1">
                      <a
                        href="https://wa.me/919310756714?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4DA8DA] transition-colors text-sm sm:text-base"
                      >
                        WhatsApp: +91 93107 56714
                      </a>
                      <a
                        href="https://wa.me/918377087801?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20inquir%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4DA8DA] transition-colors text-sm sm:text-base"
                      >
                        WhatsApp: +91 83770 87801
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Suspense fallback={
                  <div className="animate-pulse min-h-[400px] flex items-center">
                    <div className="h-96 bg-gray-200 rounded-lg w-full"></div>
                  </div>
                }>
                  <QuickContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
