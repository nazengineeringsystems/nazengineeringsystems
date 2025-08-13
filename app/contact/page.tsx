import { Suspense } from "react"
import { ContactPageScrollHandler } from "@/components/contact-scroll-handler"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Award, Headphones, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us - NAZ Engineering Systems',
  description: 'Get in touch with NAZ Engineering Systems for expert technology solutions, IT infrastructure, and engineering services. 24/7 support available.',
  keywords: ['contact NAZ Engineering', 'technology support', 'IT consulting Delhi', 'engineering services contact'],
  openGraph: {
    title: 'Contact NAZ Engineering Systems - Expert Technology Solutions',
    description: 'Connect with our expert team for all your technology and engineering needs. Fast response guaranteed.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <ContactPageScrollHandler />
      </Suspense>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#4DA8DA] text-white py-20 lg:py-28 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors duration-300 text-xs sm:text-sm"
            >
              Get In Touch
            </Badge>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Contact Our
              <span className="block text-[#4DA8DA] mt-1">Expert Team</span>
            </h1>
            <p className="text-sm sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your technology needs? Our team of experts is here to help you find the perfect solutions
              for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Stats Section */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center group">
                <div className="bg-[#4DA8DA]/10 rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">500+</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Happy Clients</p>
              </div>
              <div className="text-center group">
                <div className="bg-[#4DA8DA]/10 rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300">
                  <Award className="h-4 w-4 sm:h-6 sm:w-6 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">15+</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Years Experience</p>
              </div>
              <div className="text-center group">
                <div className="bg-[#4DA8DA]/10 rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300">
                  <Headphones className="h-4 w-4 sm:h-6 sm:w-6 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">24/7</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Support Available</p>
              </div>
              <div className="text-center group">
                <div className="bg-[#4DA8DA]/10 rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300">
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">100%</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Contact Information - Compact Cards */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  We&apos;re here to help you with all your technology needs. Reach out to us and we&apos;ll get back to you
                  within 24 hours.
                </p>

                <div className="space-y-3">
                  {/* Phone Card */}
                  <Card className="border-l-4 border-l-[#4DA8DA] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#4DA8DA]/10 rounded-full p-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300 flex-shrink-0">
                          <Phone className="h-4 w-4 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#0B1F3A] text-sm mb-1">Phone Numbers</h3>
                          <div className="space-y-0.5">
                            <a
                              href="tel:+918377087801"
                              className="block text-gray-600 hover:text-[#4DA8DA] transition-colors text-xs"
                            >
                              +91 83770 87801 (Primary)
                            </a>
                            <a
                              href="tel:+911145006296"
                              className="block text-gray-600 hover:text-[#4DA8DA] transition-colors text-xs"
                            >
                              +91 11450 06296 (Secondary)
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email Card */}
                  <Card className="border-l-4 border-l-[#4DA8DA] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#4DA8DA]/10 rounded-full p-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300 flex-shrink-0">
                          <Mail className="h-4 w-4 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#0B1F3A] text-sm mb-1">Email Address</h3>
                          <a
                            href="mailto:nazengineeringsystems@gmail.com"
                            className="text-gray-600 hover:text-[#4DA8DA] transition-colors text-xs break-all"
                          >
                            nazengineeringsystems@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp Card */}
                  <Card className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-500/10 rounded-full p-2 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300 flex-shrink-0">
                          <MessageCircle className="h-4 w-4 text-green-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#0B1F3A] text-sm mb-1">WhatsApp Support</h3>
                          <div className="space-y-0.5">
                            <a
                              href="https://wa.me/918377087801?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-gray-600 hover:text-green-500 transition-colors text-xs"
                            >
                              +91 83770 87801
                            </a>
                            <a
                              href="https://wa.me/919310756714?text=Hello%20NAZ%20Engineering%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-gray-600 hover:text-green-500 transition-colors text-xs"
                            >
                              +91 93107 56714
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Address Card */}
                  <Card className="border-l-4 border-l-[#4DA8DA] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#4DA8DA]/10 rounded-full p-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300 flex-shrink-0">
                          <MapPin className="h-4 w-4 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#0B1F3A] text-sm mb-1">Office Address</h3>
                          <div className="text-gray-600 text-xs leading-relaxed">
                            <p>GALI NO 4 and 5, KH. NO. 5/3</p>
                            <p>Sangam Vihar, Wazirabad</p>
                            <p>Delhi - 110084</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours Card */}
                  <Card className="border-l-4 border-l-[#4DA8DA] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#4DA8DA]/10 rounded-full p-2 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300 flex-shrink-0">
                          <Clock className="h-4 w-4 text-[#4DA8DA] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#0B1F3A] text-sm mb-1">Business Hours</h3>
                          <div className="text-gray-600 text-xs space-y-0.5">
                            <p>
                              <span className="font-medium">Mon-Fri:</span> 9:00 AM - 7:00 PM
                            </p>
                            <p>
                              <span className="font-medium">Sat-Sun:</span> 10:00 AM - 4:00 PM
                            </p>
                            <p className="text-green-600 mt-1 flex items-center">
                              <MessageCircle className="inline h-3 w-3 mr-1" />
                              24/7 Emergency Support
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form - Optimized */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <Suspense fallback={
                  <div className="animate-pulse min-h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Loading contact form...</div>
                  </div>
                }>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-2">Visit Our Office</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Located in Sangam Vihar, Delhi, we&apos;re easily accessible for meetings and consultations.
              </p>
            </div>
            <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-0">
                <div className="h-64 sm:h-80 bg-gray-200 flex items-center justify-center relative overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6997.426736692239!2d77.20532923936845!3d28.728110871646965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff4e96b1f937%3A0x792669c17b3a725a!2sNaz%20Engineering%20Systems!5e0!3m2!1sen!2sin!4v1754142174969!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NAZ Engineering Systems Location - GALI NO 4 and 5, KH. NO. 5/3, Sangam Vihar, Wazirabad, Delhi 110084"
                    className="group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 sm:py-12 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Need Emergency Support?</h2>
            <p className="text-white/90 mb-6 text-sm sm:text-base leading-relaxed">
              For urgent technical issues or emergency support, our team is available 24/7. We guarantee response within
              2 hours for emergency calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-4xl mx-auto">
              <a href="tel:+911145006296">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +91 11450 06296
                </Button>
              </a>
              <a href="mailto:nazengineeringsystems@gmail.com?subject=EMERGENCY%20SUPPORT%20REQUIRED">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0B1F3A] px-6 bg-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Emergency Email
                </Button>
              </a>
              <a
                href="https://wa.me/919310756714?text=EMERGENCY:%20I%20need%20urgent%20technical%20support%20from%20NAZ%20Engineering%20Systems."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 flex items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Emergency WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
