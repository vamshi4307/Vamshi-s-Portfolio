import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Vamshi Vardhan Mittapally - AI Engineer & Developer",
  description: "MSc AI student specializing in Smart Sensors and Actuators. Experienced in Machine Learning, Python, MATLAB, and innovative technology solutions.",
  keywords: ["AI Engineer", "Machine Learning", "Python", "MATLAB", "Smart Sensors", "Portfolio"],
  authors: [{ name: "Vamshi Vardhan Mittapally" }],
  openGraph: {
    title: "Vamshi Vardhan Mittapally - AI Engineer & Developer",
    description: "MSc AI student specializing in Smart Sensors and Actuators. Experienced in Machine Learning, Python, MATLAB, and innovative technology solutions.",
    type: "website",
  },
    generator: 'senotron'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
