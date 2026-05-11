"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

export default function ProjectsSection() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    // Placeholder projects - user will add their own
    {
      title: "AI-Powered Smart Sensor System",
      description: "Developed an intelligent sensor network using machine learning algorithms for real-time data analysis and predictive maintenance.",
      technologies: ["Python", "TensorFlow", "IoT", "MQTT"],
      githubUrl: "https://github.com/vamshi4307/smart-sensor-ai",
      demoUrl: "https://demo-link.com",
      category: "ai"
    },
    {
      title: "MATLAB Control Systems Simulator",
      description: "Created a comprehensive simulation environment for testing PID controllers and sliding mode control algorithms for trajectory optimization.",
      technologies: ["MATLAB", "Simulink", "Control Systems"],
      githubUrl: "https://github.com/vamshi4307/matlab-control-sim",
      demoUrl: "https://demo-link.com",
      category: "control"
    },
    {
      title: "Machine Learning Portfolio Website",
      description: "Built a responsive portfolio website showcasing ML projects with interactive visualizations and deployment on cloud platforms.",
      technologies: ["Next.js", "Python", "Flask", "AWS"],
      githubUrl: "https://github.com/vamshi4307/ml-portfolio",
      demoUrl: "https://demo-link.com",
      category: "web"
    }
  ]

  const categories = ["all", "ai", "control", "web"]

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className={`py-20 relative ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
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
          }`}>Projects</h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my technical projects and implementations.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  theme === 'dark' && selectedCategory !== category
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : ''
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className={`${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col'
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-xl mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>{project.title}</CardTitle>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  } text-sm leading-relaxed`}>{project.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className={`text-xs ${
                        theme === 'dark'
                          ? 'bg-blue-900 text-blue-200'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className={`flex-1 ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                          : ''
                      }`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
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
