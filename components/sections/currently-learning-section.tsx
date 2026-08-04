"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Brain, Layers, ServerCog } from "lucide-react"
import { useTheme } from "next-themes"

const learningItems = [
  {
    title: "ROS 2",
    description:
      "Learning robotics middleware, communication between nodes, publishers, subscribers, services and robotics application development.",
    icon: Cpu,
  },
  {
    title: "Large Language Models (LLMs)",
    description:
      "Exploring transformer architectures, Retrieval-Augmented Generation (RAG), prompt engineering and AI assistants.",
    icon: Brain,
  },
  {
    title: "Edge AI",
    description:
      "Learning efficient deployment of AI models on embedded systems and resource-constrained devices.",
    icon: Layers,
  },
  {
    title: "MLOps",
    description:
      "Studying model deployment, Docker, CI/CD, experiment tracking and production ML pipelines.",
    icon: ServerCog,
  },
]

export default function CurrentlyLearningSection() {
  const { theme } = useTheme()

  return (
    <section id="currently-learning" className={`py-20 relative ${
      theme === "dark" ? "bg-gray-900" : "bg-white"
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium tracking-wide text-slate-600 shadow-sm dark:text-slate-300 dark:border-slate-700 dark:bg-slate-900/70 bg-slate-100/80">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]">
              Currently Exploring
            </Badge>
            <span className={theme === "dark" ? "text-slate-300" : "text-slate-600"}>
              Staying ahead in robotics middleware, LLMs, Edge AI and MLOps.
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mt-8 font-sora ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>Currently Learning</h2>
          <p className={`max-w-3xl mx-auto mt-4 text-base md:text-lg ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}>
            A curated set of AI and robotics topics I am actively building skills in, with a strong focus on practical deployment and system-level integration.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {learningItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="group"
              >
                <Card
                  className={`rounded-[28px] border-2 bg-transparent p-px transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    theme === "dark"
                      ? "from-cyan-500/20 via-slate-800 to-purple-500/20"
                      : "from-cyan-200 via-slate-100 to-purple-200"
                  } bg-gradient-to-br`}
                >
                  <div className={`rounded-[26px] ${
                    theme === "dark" ? "bg-slate-950/90" : "bg-white"
                  } p-6 h-full`}> 
                    <CardHeader className="p-0 mb-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-3xl shadow-lg ${
                        theme === "dark"
                          ? "bg-slate-800 text-cyan-300"
                          : "bg-slate-100 text-sky-600"
                      }`}>
                        <Icon className="h-7 w-7" />
                      </div>
                    </CardHeader>
                    <CardTitle className={`text-xl font-semibold mb-3 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}>{item.title}</CardTitle>
                    <CardContent className="p-0">
                      <p className={`text-sm leading-7 ${
                        theme === "dark" ? "text-slate-400" : "text-slate-600"
                      }`}>
                        {item.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
