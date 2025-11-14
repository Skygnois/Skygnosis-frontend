"use client"

import { useState, useRef, useEffect } from "react"

export default function TrustedBy() {
  const companies = ["TechCorp", "DataFlow", "CloudSync", "NeuralNet", "VelocityAI", "QuantumLeap"]
  const allCompanies = [...companies, ...companies] // Duplicate for seamless looping
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let lastTimestamp: number | null = null
    const baseSpeed = 50 // pixels per second - adjust for desired speed

    const step = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp
      const dt = (timestamp - lastTimestamp) / 1000 // delta time in seconds
      lastTimestamp = timestamp

      if (!containerRef.current) {
        animationFrame = requestAnimationFrame(step)
        return
      }

      const containerWidth = containerRef.current.scrollWidth
      const visibleWidth = containerRef.current.clientWidth
      const maxScroll = containerWidth / 2 // Halfwidth due to duplication

      setScrollX(prev => {
        let next = prev + baseSpeed * dt
        if (next > maxScroll) next -= maxScroll
        return next
      })

      animationFrame = requestAnimationFrame(step)
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-foreground/50 text-sm font-semibold uppercase tracking-wide mb-12">
          Trusted by Leading Organizations
        </p>

        <div
          ref={containerRef}
          className="relative overflow-hidden select-none"
          aria-label="Trusted companies scrolling list"
        >
          {/* Gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className="flex gap-8 py-4 will-change-transform"
            style={{
              transform: `translateX(${-scrollX}px)`,
              // No CSS transition for transform, handled by requestAnimationFrame for fluidity
            }}
          >
            {allCompanies.map((company, i) => (
              <SimpleCard key={i} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SimpleCard({ company }: { company: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex-shrink-0 px-10 py-6 min-w-[220px] flex items-center justify-center relative group cursor-pointer select-none rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.07)" : "scale(1)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isHovered
          ? "0 12px 28px rgba(59, 130, 246, 0.35), 0 0 20px rgba(96, 165, 250, 0.6)"
          : "none",
        zIndex: isHovered ? 30 : "auto",
      }}
      aria-label={`Trusted by ${company}`}
    >
      <div
        className={`absolute inset-0 glass rounded-xl border transition-colors duration-400 ${
          isHovered ? "border-blue-500/60 bg-blue-500/10" : "border-blue-500/10 bg-transparent"
        }`}
      />

      <p
        className={`relative z-10 font-semibold transition-colors duration-300 ${
          isHovered ? "text-foreground" : "text-foreground/60"
        }`}
      >
        {company}
      </p>
    </div>
  )
}
