"use client"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 font-sora">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am a dedicated MSc Artificial Intelligence student at Deggendorf Institute of Technology (DIT), Germany, specializing in Smart Sensors and Actuators. With a strong foundation in Electronics and Communication Engineering from MVSR Engineering College, India, I bring hands-on experience in machine learning, Python development, and innovative technology solutions. My professional journey includes roles at Accenture and research projects with DRDO, where I've applied AI and control systems to real-world challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
