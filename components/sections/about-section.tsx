"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function AboutSection() {
  const { theme } = useTheme()

  return (
    <section id="about" className={`py-20 relative ${
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
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>About Me</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I am an MSc Artificial Intelligence student at Deggendorf Institute of Technology, specializing in Smart Sensors and Actuators. Passionate about artificial intelligence, machine learning, and intelligent systems, with experience in Python and AI-based projects. Interested in building innovative solutions that combine software, automation, and smart technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
