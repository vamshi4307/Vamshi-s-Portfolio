"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section id="home" className={`relative w-full pt-20 pb-20 flex items-center justify-center overflow-hidden min-h-[calc(100vh-80px)] ${
      theme === 'dark' ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-slate-800' : 'bg-gradient-to-br from-slate-50 via-sky-100 to-indigo-100'
    }`}>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className={`w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 shadow-xl ${
              theme === 'dark' ? 'border-blue-400/50' : 'border-blue-500/50'
            }`}>
              <img
                src="/profile-photo.png"
                alt="Vamshi Vardhan Mittapally"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%' }}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/176x176?text=Profile+Photo"
                }}
              />
            </div>
          </motion.div>

          {/* Name with Liquid Gradient */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={`text-6xl md:text-8xl font-bold mb-6 font-sora ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Vamshi Vardhan Mittapally
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={`text-xl md:text-2xl mb-8 font-light ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Master of Engineering Student specializing in Artificial Intelligence for Smart Sensors and Actuators, building practical AI systems with computer vision, embedded intelligence, and smart automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow bg-slate-900 hover:bg-slate-800 text-white"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('/resume/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://github.com/vamshi4307', '_blank')}
            >
              <Github className="h-4 w-4" /> GitHub
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://www.linkedin.com/in/vamshi-vardhan-mittapally-b3b69021a/', '_blank')}
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
