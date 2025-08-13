"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  // More accurate service paths with proper anchors
  const services = [
    { href: "/services#service-it-infrastructure", label: "IT Infrastructure" },
    { href: "/services#service-networking-solutions", label: "Networking Solutions" },
    { href: "/services#service-cctv-security-systems", label: "CCTV & Security Systems" },
    { href: "/services#service-power-backup-solutions", label: "Power Backup Solutions" },
    { href: "/services#service-solar-energy-systems", label: "Solar Energy Systems" },
    { href: "/services#service-engineering-services", label: "Engineering Services" },
  ]

  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#4DA8DA] text-white p-2 rounded-lg">
                <span className="font-bold text-lg">NAZ</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">NAZ Engineering</span>
                <span className="block text-xs text-white/70">Systems</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Professional technology, energy, and infrastructure solutions. Enhancing Efficiency, Security &
              Sustainability for your business.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/profile.php?id=61579203453958" className="text-white/60 hover:text-[#4DA8DA] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/nazengineering" className="text-white/60 hover:text-[#4DA8DA] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/nazengineeringsystems" className="text-white/60 hover:text-[#4DA8DA] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/nazengineeringsystems" className="text-white/60 hover:text-[#4DA8DA] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-[#4DA8DA] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-[#4DA8DA] transition-colors text-sm block hover:translate-x-1 transition-transform duration-200"
                    onClick={(e) => {
                      // Smooth scroll behavior for same-page navigation
                      if (window.location.pathname === "/services") {
                        e.preventDefault()
                        const anchor = service.href.split("#")[1]
                        const element = document.getElementById(anchor)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }
                    }}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#4DA8DA] flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a href="tel:+918377087801" className="block hover:text-[#4DA8DA] transition-colors">
                    +91 83770 87801
                  </a>
                  <a href="tel:+911145006296" className="block hover:text-[#4DA8DA] transition-colors">
                    +91 11450 06296
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#4DA8DA] flex-shrink-0" />
                <a
                  href="mailto:nazengineeringsystems@gmail.com"
                  className="text-white/80 hover:text-[#4DA8DA] transition-colors text-sm break-all"
                >
                  nazengineeringsystems@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#4DA8DA] flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <p>GALI NO 4 and 5, KH. NO. 5/3</p>
                  <p>Sangam Vihar, Wazirabad</p>
                  <p>Delhi - 110084, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a
                    href="https://wa.me/918377087801?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400 transition-colors"
                  >
                    WhatsApp: +91 83770 87801
                  </a>
                  <a
                    href="https://wa.me/919310756714?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-400 transition-colors"
                  >
                    WhatsApp: +91 93107 56714
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© {currentYear} NAZ Engineering Systems. All rights reserved</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/60 hover:text-[#4DA8DA] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#4DA8DA] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
