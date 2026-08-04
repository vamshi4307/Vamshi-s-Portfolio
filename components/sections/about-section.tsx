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
            I am currently pursuing a Master of Engineering (M.Eng.) in Artificial Intelligence for Smart Sensors and Actuators at Deggendorf Institute of Technology. With a foundation in Electronics & Communication Engineering and professional experience at Accenture, I focus on designing intelligent systems that combine computer vision, embedded sensing, and automation. My work centers on building dependable AI solutions for sensor-driven applications and operational efficiency, while collaborating across engineering teams to deliver results that meet compliance and production readiness requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
