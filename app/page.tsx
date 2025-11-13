"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import Services from "@/components/services"
import TrustedBy from "@/components/trusted-by"
import ValueProp from "@/components/value-prop"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ParticleGrid from "@/components/ParticleGrid"
import ScrollProgress from "@/components/ScrollProgress"
import ScrollRevealText from "@/components/ScrollRevealText"

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      {/* Scroll Effects */}
      <ParticleGrid />
      <ScrollProgress />
      
      <Navigation />
      <Hero />
      
      
      <TrustedBy />
      <Services />
      <ValueProp />
      <CTA />
      <Footer />

      {/* Mouse Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(96, 165, 250, 0.3), transparent 80%)`,
        }}
      />
    </main>
  )
}
