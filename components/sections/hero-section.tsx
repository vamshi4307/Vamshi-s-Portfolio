"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full pt-20 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[calc(100vh-80px)]">
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
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-400/50 mx-auto">
              <img
                src="/profile-photo.jpg"
                alt="Vamshi Vardhan Mittapally"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/160x160?text=Profile+Photo"
                }}
              />
            </div>
          </motion.div>

          {/* Name with Liquid Gradient */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-gray-900 font-sora"
          >
            Vamshi Vardhan Mittapally
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 font-light"
          >
            MSc AI Student | Smart Sensors & Actuators | Machine Learning Engineer
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => window.open('/resume/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
            <Button
              size="lg"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => window.open('https://github.com/your-username', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-blue-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
