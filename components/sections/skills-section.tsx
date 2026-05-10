"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "Machine Learning", level: 85, category: "AI/ML" },
    { name: "MATLAB Simulink", level: 80, category: "Engineering" },
    { name: "Networking Fundamentals", level: 75, category: "Systems" },
    { name: "AI", level: 85, category: "AI/ML" },
    { name: "Smart Sensors", level: 80, category: "IoT" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "JavaScript", level: 70, category: "Programming" },
    { name: "React", level: 65, category: "Web Development" },
    { name: "TensorFlow", level: 75, category: "AI/ML" }
  ]

  const categories = ["All", "Programming", "AI/ML", "Engineering", "Systems", "IoT", "Tools", "Web Development"]

  return (
    <section id="skills" className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black font-sora">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical skills and competencies developed through education and professional experience.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-black">{skill.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
