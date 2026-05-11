"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useTheme } from "next-themes"

export default function EducationSection() {
  const { theme } = useTheme()

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
    <section id="education" className={`py-20 relative ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-sora ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Education</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
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
              <Card className={`${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow'
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className={`text-xl ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>{edu.degree}</CardTitle>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        } font-medium`}>{edu.institution}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {edu.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`flex items-center gap-2 mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}