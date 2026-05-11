"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"

export default function SkillsSection() {
  const { theme } = useTheme()

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
    <section id="skills" className={`py-20 relative ${
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
          }`}>Skills & Expertise</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
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
                <Card className={`${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow'
                    : 'bg-gray-50 border-gray-200 hover:shadow-lg transition-shadow'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}>{skill.name}</h3>
                      <Badge variant="outline" className={`text-xs ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300'
                          : ''
                      }`}>
                        {skill.category}
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className={`text-sm mt-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{skill.level}% Proficiency</p>
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
