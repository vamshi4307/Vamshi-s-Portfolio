"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useTheme } from "next-themes"

export default function ExperienceSection() {
  const { theme } = useTheme()

  const experiences = [
    {
      title: "Operations Associate",
      company: "Accenture",
      location: "Remote",
      period: "February 2025 – February 2026",
      description: "Supported Risk & Payments Operations, improving data quality and operational workflows across high-volume transactions. Collaborated with cross-functional teams, followed compliance procedures, and strengthened accuracy for critical operational processes.",
      skills: ["Risk & Payments Operations", "Data Quality", "Operational Workflows", "Cross-functional Collaboration", "Compliance"]
    },
    {
      title: "Research Project - Missile Trajectory Control",
      company: "DRDO Research Centre Imarat",
      location: "India",
      period: "Research Project",
      description: "Developed and implemented PID sliding mode controller for missile trajectory control using MATLAB Simulink. Conducted simulations and analysis of control algorithms for precision guidance systems.",
      skills: ["MATLAB Simulink", "Control Systems", "PID Controllers", "Trajectory Analysis"]
    }
  ]

  return (
    <section id="experience" className={`py-20 relative ${
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
          }`}>Experience</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My professional journey and key projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
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
                  : 'bg-gray-50 border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-8 w-8 text-green-600" />
                      <div>
                        <CardTitle className={`text-xl ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>{exp.title}</CardTitle>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        } font-medium`}>{exp.company}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {exp.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`flex items-center gap-2 mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className={`${
                        theme === 'dark'
                          ? 'bg-blue-900 text-blue-200'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}