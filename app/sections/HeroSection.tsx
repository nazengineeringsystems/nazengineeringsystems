"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle, Users, Award, Target, Clock } from "lucide-react"
import Link from "next/link"
import { ClientOnly } from "@/components/client-only"
import { usePagePerformance } from "@/hooks/usePerformance"
import { HeroGetQuoteButton } from "@/components/get-quote-button"

export default function HeroSection() {
  // Monitor page performance
  usePagePerformance()
  
  return (
    <>
      {/* Hero Section - Optimized for LCP */}
      <section className="relative bg-gradient-to-br from-[#0B1F3A] to-[#4DA8DA] text-white py-20 lg:py-28 mt-16 will-change-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Professional Technology Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              NAZ ENGINEERING
              <span className="block text-[#4DA8DA]">SYSTEMS</span>
            </h1>
            <p className="text-xl text-white/90 mb-6 font-medium select-none">
              Enhancing Efficiency, Security & Sustainability
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto select-none">
              Your trusted partner for comprehensive technology, energy, and infrastructure solutions. We deliver
              excellence through innovation and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <ClientOnly fallback={
                  <Button size="lg" className="bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white px-8 py-3 text-lg group">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }>
                  <Button
                    size="lg"
                    className="bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white px-8 py-3 text-lg group btn-cursor-effect btn-primary-effect btn-glow"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform icon-rotate" />
                  </Button>
                </ClientOnly>
              </Link>
              <ClientOnly fallback={
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B1F3A] px-8 py-3 text-lg bg-transparent">
                  Get Free Quote
                </Button>
              }>
                <HeroGetQuoteButton />
              </ClientOnly>
              <a
                href="https://wa.me/919310756714?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClientOnly fallback={
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                }>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg flex items-center btn-cursor-effect btn-whatsapp-effect btn-pulse"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 icon-rotate" />
                    WhatsApp Us
                  </Button>
                </ClientOnly>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Who We Are Section - Optimized */}
      <section className="py-16 bg-white will-change-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              NAZ Engineering Systems is a leading provider of comprehensive technology and infrastructure solutions.
              With over 15 years of experience, we specialize in delivering cutting-edge IT infrastructure, networking,
              security systems, power solutions, and sustainable energy technologies.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center transform transition-transform hover:scale-105 duration-200">
                <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center transition-colors hover:bg-[#4DA8DA]/20">
                  <Users className="h-8 w-8 text-[#4DA8DA]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#0B1F3A] select-none">500+</h3>
                <p className="text-sm text-gray-600 select-none">Happy Clients</p>
              </div>
              <div className="text-center transform transition-transform hover:scale-105 duration-200">
                <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center transition-colors hover:bg-[#4DA8DA]/20">
                  <Award className="h-8 w-8 text-[#4DA8DA]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#0B1F3A] select-none">15+</h3>
                <p className="text-sm text-gray-600 select-none">Years Experience</p>
              </div>
              <div className="text-center transform transition-transform hover:scale-105 duration-200">
                <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center transition-colors hover:bg-[#4DA8DA]/20">
                  <Target className="h-8 w-8 text-[#4DA8DA]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#0B1F3A] select-none">1000+</h3>
                <p className="text-sm text-gray-600 select-none">Projects Completed</p>
              </div>
              <div className="text-center transform transition-transform hover:scale-105 duration-200">
                <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center transition-colors hover:bg-[#4DA8DA]/20">
                  <Clock className="h-8 w-8 text-[#4DA8DA]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#0B1F3A] select-none">24/7</h3>
                <p className="text-sm text-gray-600 select-none">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
