"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Send, Github, Linkedin, Globe, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useTheme } from "next-themes"

export default function ContactSection() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Set loading state
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = submitButton.innerHTML
    submitButton.innerHTML = '<div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Sending...'
    submitButton.disabled = true

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully! 🚀",
          description: "Thanks for reaching out. I'll get back to you soon!",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly at vamshivardhan4307@gmail.com",
        variant: "destructive",
      })
    } finally {
      // Reset button state
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }
  }

  return (
    <section id="contact" className={`py-20 relative ${
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
          }`}>Get In Touch</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss how we can work together on innovative AI and engineering projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className={`${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 shadow-lg'
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <CardHeader>
                <CardTitle className={`${
                  theme === 'dark' ? 'text-white' : 'text-black'
                } flex items-center gap-2`}>💬 Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`${
                        theme === 'dark'
                          ? 'border-gray-600 text-white placeholder:text-gray-400 bg-gray-700'
                          : 'border-gray-300 text-black placeholder:text-gray-500'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`${
                        theme === 'dark'
                          ? 'border-gray-600 text-white placeholder:text-gray-400 bg-gray-700'
                          : 'border-gray-300 text-black placeholder:text-gray-500'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${
                        theme === 'dark'
                          ? 'border-gray-600 text-white placeholder:text-gray-400 bg-gray-700 min-h-32'
                          : 'border-gray-300 text-black placeholder:text-gray-500 min-h-32'
                      }`}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card className={`${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 shadow-lg'
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <CardHeader>
                <CardTitle className={`${
                  theme === 'dark' ? 'text-white' : 'text-black'
                } flex items-center gap-2`}>📞 Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>vamshivardhan4307@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Cham, Germany</span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Available for Research & Projects</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className={`${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 shadow-lg'
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <CardHeader>
                <CardTitle className={`${
                  theme === 'dark' ? 'text-white' : 'text-black'
                } flex items-center gap-2`}>🌐 Connect Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    asChild
                    variant={theme === 'dark' ? 'outline' : 'secondary'}
                    className="w-full justify-start gap-3 py-4"
                  >
                    <a href="https://www.linkedin.com/in/vamshi-vardhan-mittapally-b3b69021a/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        LinkedIn
                      </span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant={theme === 'dark' ? 'outline' : 'secondary'}
                    className="w-full justify-start gap-3 py-4"
                  >
                    <a href="https://github.com/vamshi4307" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6 text-gray-700" />
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        GitHub
                      </span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant={theme === 'dark' ? 'outline' : 'secondary'}
                    className="w-full justify-start gap-3 py-4"
                  >
                    <a href="mailto:vamshivardhan4307@gmail.com">
                      <Mail className="h-6 w-6 text-red-600" />
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        Email
                      </span>
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    className="w-full justify-start gap-3 py-4"
                    onClick={() => window.open('/resume/resume.pdf', '_blank')}
                  >
                    <Download className="h-6 w-6" />
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Resume
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`mt-20 pt-8 border-t text-center ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Designed & Developed by Vamshi Vardhan Mittapally
              <br />
              © {new Date().getFullYear()}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              <span className={`${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              } text-sm`}>AI Engineering Portfolio</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
