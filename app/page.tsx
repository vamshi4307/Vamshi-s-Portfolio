import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import CurrentlyLearningSection from "@/components/sections/currently-learning-section"
import ContactSection from "@/components/sections/contact-section"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CurrentlyLearningSection />
      <ContactSection />
    </main>
  )
}
