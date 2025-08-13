import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Users, Award, Shield, Lightbulb, Heart, Globe, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description:
        "We deliver consistent, dependable solutions that you can trust for your critical business operations.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that drive your business forward.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-First",
      description: "Your success is our priority. We tailor our services to meet your unique requirements and goals.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Sustainability",
      description: "We promote eco-friendly solutions that benefit both your business and the environment.",
    },
  ]

  const expertise = [
    "IT Infrastructure Design & Implementation",
    "Network Architecture & Security",
    "Surveillance & Access Control Systems",
    "Power Management & Backup Solutions",
    "Solar Energy & Renewable Technologies",
    "Engineering Consulting & Project Management",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#4DA8DA] text-white py-20 lg:py-28 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              About NAZ Engineering Systems
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Building Tomorrow&apos;s Technology
              <span className="block text-[#4DA8DA]">Today</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              With over 15 years of experience, we&apos;ve been at the forefront of technology innovation, helping businesses
              transform their operations through comprehensive engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                    <Target className="h-8 w-8 text-[#4DA8DA]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions that enhance efficiency, security, and
                    sustainability. We are committed to delivering exceptional service and building long-term
                    partnerships with our clients through reliable, cost-effective solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-[#4DA8DA]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading provider of integrated technology and engineering solutions, recognized for our
                    innovation, quality, and commitment to sustainable practices. We envision a future where technology
                    seamlessly enhances business operations while contributing to a greener planet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300">
                      <div className="text-[#4DA8DA] group-hover:text-white transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-6">Industry Experience & Expertise</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of certified professionals brings together decades of combined experience in technology
                  implementation, engineering solutions, and project management. We&apos;ve successfully delivered projects
                  across various industries, from small businesses to large enterprises.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-8 w-8 text-[#4DA8DA]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">50+</h3>
                    <p className="text-gray-600">Expert Team Members</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Award className="h-8 w-8 text-[#4DA8DA]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">25+</h3>
                    <p className="text-gray-600">Industry Certifications</p>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-6">Areas of Expertise</h3>
                  <div className="space-y-3">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#4DA8DA] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client-First Approach */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Client-First Approach</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              We believe that every client is unique, with specific challenges and goals. Our approach begins with
              understanding your business needs, followed by designing customized solutions that deliver measurable
              results. We don&apos;t just implement technology – we partner with you for long-term success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-[#4DA8DA]/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#4DA8DA]">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                <p className="text-white/80 text-sm">Understanding your unique requirements and challenges</p>
              </div>
              <div className="text-center">
                <div className="bg-[#4DA8DA]/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#4DA8DA]">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-white/80 text-sm">Creating tailored solutions that fit your business</p>
              </div>
              <div className="text-center">
                <div className="bg-[#4DA8DA]/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#4DA8DA]">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-white/80 text-sm">Ongoing maintenance and optimization services</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-[#4DA8DA] hover:bg-[#4DA8DA]/90 text-white px-8 py-3 text-lg btn-cursor-effect btn-primary-effect btn-glow">
                <a href="/contact">
                  Ready to Get Started?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
