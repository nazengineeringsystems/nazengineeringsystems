"use client"
import { CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  const whyChooseUs = [
    "15+ Years of Industry Experience",
    "End-to-End Technology Solutions",
    "24/7 Technical Support",
    "Certified Professional Team",
    "Cost-Effective Solutions",
    "Timely Project Delivery",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our professional approach and commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-[#F4F4F4] transition-colors duration-300"
              >
                <CheckCircle className="h-6 w-6 text-[#4DA8DA] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
