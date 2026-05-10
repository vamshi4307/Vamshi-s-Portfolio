"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "MSc in Artificial Intelligence using Smart Sensors and Actuators",
      institution: "Deggendorf Institute of Technology (DIT), Cham Campus",
      location: "Cham, Germany",
      period: "March 2026 – Present",
      description: "Specializing in AI applications for smart sensors and actuators, focusing on machine learning algorithms, sensor integration, and real-time data processing."
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "MVSR Engineering College",
      location: "Hyderabad, India",
      period: "September 2020 – June 2024",
      description: "Comprehensive education in electronics, communication systems, signal processing, and embedded systems with practical project experience."
    }
  ]

  return (
    <section id="education" className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sora">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in engineering and artificial intelligence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl text-black">{edu.degree}</CardTitle>
                        <p className="text-gray-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {edu.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}