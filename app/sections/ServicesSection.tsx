"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Server,
  Network,
  Shield,
  Battery,
  Sun,
  Wrench,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "IT Infrastructure",
      description: "Complete IT setup and management solutions",
      serviceId: "service-it-infrastructure",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking",
      description: "Advanced networking and connectivity solutions",
      serviceId: "service-networking-solutions",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "CCTV Systems",
      description: "Comprehensive security and surveillance systems",
      serviceId: "service-cctv-security-systems",
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Power Backup",
      description: "Reliable UPS and backup power solutions",
      serviceId: "service-power-backup-solutions",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Energy",
      description: "Sustainable solar power installations",
      serviceId: "service-solar-energy-systems",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Engineering",
      description: "Professional engineering and consulting services",
      serviceId: "service-engineering-services",
    },
  ]

  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-[#4DA8DA]/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-[#4DA8DA] transition-colors duration-300">
                  <div className="text-[#4DA8DA] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.serviceId}`}
                  className="text-[#4DA8DA] hover:text-[#0B1F3A] font-medium inline-flex items-center group-hover:underline transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
