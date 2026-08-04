"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { useTheme } from "next-themes"

export default function ProjectsSection() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      title: "Design of Improved Sliding Mode Controller for Electromechanical Actuator Flat-top Correction",
      organization: "Research Centre Imarat (DRDO)",
      description:
        "Developed an improved PID Sliding Mode Controller for an Electromechanical Actuator to compensate for static friction and minimize flat-top effects.",
      achievement:
        "Reduced flat-top duration by 55%, improving position tracking accuracy and control performance.",
      technologies: ["MATLAB", "Simulink", "Control Systems", "Sliding Mode Control", "PID Controller", "Research"],
      githubUrl: "https://github.com/vamshi4307/drdo-smc-controller",
      category: "control"
    },
    {
      title: "AI Resume Analyzer",
      organization: "Personal Project",
      description:
        "Developed an AI-powered resume analysis platform that compares resumes with job descriptions using Natural Language Processing.",
      achievement:
        "Reduced resume evaluation time to under 30 seconds while generating tailored improvement recommendations.",
      technologies: ["Python", "NLP", "Machine Learning", "Semantic Search"],
      githubUrl: "https://github.com/vamshi4307/ai-resume-analyzer",
      category: "ai"
    },
    {
      title: "AI PDF Chatbot",
      organization: "Personal Project",
      description:
        "Built an intelligent document assistant using Retrieval-Augmented Generation (RAG) capable of answering questions directly from uploaded PDF documents.",
      achievement:
        "Enabled semantic search across 100+ pages of technical documents with accurate context-aware responses.",
      technologies: ["Python", "RAG", "LLMs", "Vector Database", "LangChain", "NLP"],
      githubUrl: "https://github.com/vamshi4307/ai-pdf-chatbot",
      category: "ai"
    }
  ]

  const categories = ["all", "control", "ai"]

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
          }`}>Featured Projects</h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            High-impact AI engineering and control systems work with measurable outcomes and practical validation.
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
              <Card
                className={`h-full rounded-[28px] border-2 bg-transparent p-px transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'from-slate-900 via-slate-950 to-cyan-900'
                    : 'from-slate-100 via-slate-50 to-sky-100'
                } bg-gradient-to-br`}
              >
                <div className={`h-full rounded-[26px] p-6 ${
                  theme === 'dark' ? 'bg-slate-950/90' : 'bg-white'
                }`}>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <CardTitle className={`text-xl md:text-2xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>{project.title}</CardTitle>
                        <p className={`mt-3 text-sm md:text-base ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {project.organization}
                        </p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.15em] uppercase ${
                        theme === 'dark' ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-sky-600'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex flex-col h-full">
                    <p className={`text-sm leading-7 mb-5 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className={`text-xs font-medium ${
                            theme === 'dark'
                              ? 'bg-slate-800 text-slate-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className={`mb-6 rounded-3xl border px-4 py-3 text-sm ${
                      theme === 'dark' ? 'border-slate-800 bg-slate-950 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}>
                      <span className="font-semibold text-slate-900 dark:text-white">✔</span>
                      <span className="ml-2">{project.achievement}</span>
                    </div>

                    <div className="mt-auto">
                      <Button
                        size="sm"
                        variant={project.githubUrl ? 'outline' : 'secondary'}
                        onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                        className={`w-full ${
                          theme === 'dark' && project.githubUrl ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : ''
                        }`}
                        disabled={!project.githubUrl}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {project.githubUrl ? 'GitHub' : 'Coming Soon'}
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
