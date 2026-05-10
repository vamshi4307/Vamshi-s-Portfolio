"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Trust and Safety Associate",
      company: "Accenture",
      location: "Remote",
      period: "February 2025 – February 2026",
      description: "Ensured platform safety and user trust through content moderation, risk assessment, and implementing AI-driven safety measures.",
      skills: ["Content Moderation", "Risk Assessment", "AI Tools"]
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
    <section id="experience" className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sora">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card className="bg-gray-50 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-8 w-8 text-green-600" />
                      <div>
                        <CardTitle className="text-xl text-black">{exp.title}</CardTitle>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {exp.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800">
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