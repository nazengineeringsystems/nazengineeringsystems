"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Server,
  Network,
  Shield,
  Battery,
  Sun,
  Wrench,
  ChevronDown,
  ChevronUp,
  Check,
  MessageCircle,
} from "lucide-react"

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  // More accurate service IDs matching footer links
  const getServiceId = (index: number) => {
    const serviceIds = [
      "service-it-infrastructure",
      "service-networking-solutions",
      "service-cctv-security-systems",
      "service-power-backup-solutions",
      "service-solar-energy-systems",
      "service-engineering-services",
    ]
    return serviceIds[index]
  }

  useEffect(() => {
    // Handle anchor links with better timing
    const handleAnchorNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from hash
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        if (element) {
          // Add a delay to ensure page is fully loaded
          setTimeout(() => {
            const headerOffset = 80 // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }, 300)
        }
      }
    }

    // Handle initial load
    handleAnchorNavigation()

    // Handle hash changes (for same-page navigation)
    window.addEventListener("hashchange", handleAnchorNavigation)

    return () => {
      window.removeEventListener("hashchange", handleAnchorNavigation)
    }
  }, [])

  const services = [
    {
      icon: <Server className="h-10 w-10" />,
      title: "IT Infrastructure",
      description: "Complete IT setup and management solutions for modern businesses",
      offerings: [
        "Server Installation & Configuration",
        "Cloud Migration & Management",
        "Data Center Setup",
        "Virtualization Solutions",
        "IT Asset Management",
        "System Integration",
        "Performance Monitoring",
        "Disaster Recovery Planning",
      ],
      benefits: [
        "Improved system reliability",
        "Enhanced data security",
        "Scalable infrastructure",
        "24/7 monitoring support",
      ],
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Networking Solutions",
      description: "Advanced networking and connectivity solutions for seamless operations",
      offerings: [
        "LAN/WAN Setup & Configuration",
        "Wireless Network Design",
        "Network Security Implementation",
        "Firewall Configuration",
        "VPN Solutions",
        "Network Optimization",
        "Bandwidth Management",
        "Network Troubleshooting",
      ],
      benefits: [
        "Secure network connectivity",
        "Optimized performance",
        "Remote access capabilities",
        "Comprehensive security",
      ],
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "CCTV & Security Systems",
      description: "Comprehensive security and surveillance systems for complete protection",
      offerings: [
        "IP Camera Installation",
        "Access Control Systems",
        "Video Analytics",
        "Remote Monitoring",
        "Alarm Systems",
        "Biometric Solutions",
        "Perimeter Security",
        "Mobile App Integration",
      ],
      benefits: ["24/7 surveillance coverage", "Real-time alerts", "Remote monitoring", "Evidence recording"],
    },
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Power Backup Solutions",
      description: "Reliable UPS and backup power solutions for uninterrupted operations",
      offerings: [
        "UPS System Installation",
        "Generator Setup",
        "Power Quality Analysis",
        "Battery Management",
        "Load Balancing",
        "Automatic Transfer Switches",
        "Power Monitoring",
        "Maintenance Services",
      ],
      benefits: ["Uninterrupted power supply", "Equipment protection", "Automatic switching", "Extended battery life"],
    },
    {
      icon: <Sun className="h-10 w-10" />,
      title: "Solar Energy Systems",
      description: "Sustainable solar power installations for eco-friendly energy solutions",
      offerings: [
        "Solar Panel Installation",
        "Grid-Tie Systems",
        "Off-Grid Solutions",
        "Battery Storage",
        "Energy Monitoring",
        "System Maintenance",
        "Performance Optimization",
        "ROI Analysis",
      ],
      benefits: [
        "Reduced energy costs",
        "Environmental sustainability",
        "Energy independence",
        "Government incentives",
      ],
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Engineering Services",
      description: "Professional engineering and consulting services for complex projects",
      offerings: [
        "Project Management",
        "Technical Consulting",
        "System Design",
        "Feasibility Studies",
        "Quality Assurance",
        "Compliance Management",
        "Training & Support",
        "Documentation Services",
      ],
      benefits: ["Expert guidance", "Optimized solutions", "Compliance assurance", "Knowledge transfer"],
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#4DA8DA] text-white py-20 lg:py-28 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Technology
              <span className="block text-[#4DA8DA]">Solutions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From IT infrastructure to renewable energy, we provide end-to-end solutions that drive efficiency,
              security, and sustainability for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  id={getServiceId(index)}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 scroll-mt-20"
                >
                  <CardContent className="p-0">
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="bg-[#4DA8DA]/10 rounded-full p-3 sm:p-4 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                          <div className="text-[#4DA8DA]">{service.icon}</div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-3">{service.title}</h2>
                          <p className="text-gray-600 mb-4 text-base sm:text-lg">{service.description}</p>
                          <Button
                            onClick={() => toggleExpanded(index)}
                            variant="outline"
                            className="border-[#4DA8DA] text-[#4DA8DA] hover:bg-[#4DA8DA] hover:text-white btn-cursor-effect btn-outline-effect btn-magnetic w-full max-w-xs sm:max-w-none sm:w-auto px-4 sm:px-6 py-2 text-sm sm:text-base"
                          >
                            {expandedService === index ? (
                              <>
                                Show Less <ChevronUp className="ml-2 h-4 w-4 icon-rotate" />
                              </>
                            ) : (
                              <>
                                Learn More <ChevronDown className="ml-2 h-4 w-4 icon-rotate" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {expandedService === index && (
                      <div className="border-t bg-[#F4F4F4] p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Our Offerings</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.offerings.map((offering, offeringIndex) => (
                                <div key={offeringIndex} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-[#4DA8DA] rounded-full flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm">{offering}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Key Benefits</h3>
                            <div className="space-y-3">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center space-x-3">
                                  <Check className="h-5 w-5 text-[#4DA8DA] flex-shrink-0" />
                                  <span className="text-gray-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              Let our experts help you choose the right solutions for your specific needs. Contact us today for a free
              consultation and customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
              <a
                href="https://wa.me/919310756714?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20discuss%20your%20services%20and%20get%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm sm:max-w-none sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 py-3 text-sm sm:text-base md:text-lg flex items-center justify-center btn-cursor-effect btn-whatsapp-effect btn-pulse"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 icon-rotate" />
                  <span className="hidden sm:inline">WhatsApp Consultation</span>
                  <span className="sm:hidden">WhatsApp Us</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
