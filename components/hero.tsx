"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <h2 className="skygnosis-heading">
            SKYGNOSIS
          </h2>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight glow-text-static">
            Elevates Intelligence
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-mist-gray/70 font-extralight tracking-wide max-w-md mt-4">
            Your intelligent AI Solution for business transformation
          </p>

          {/* CTA Button - Optimized */}
          <button className="btn-main" aria-label="Start Consultation">
            LET'S ELEVATE
          </button>


          {/* Stats */}
          <div className="flex items-center gap-8 mt-20 text-xs text-mist-gray/40">
            <span>500+ Projects</span>
            <span className="w-1 h-1 rounded-full bg-mist-gray/20" />
            <span>98% Satisfaction</span>
            <span className="w-1 h-1 rounded-full bg-mist-gray/20" />
            <span>15+ Years</span>
          </div>
        </div>
      </div>
    </section>
  )
}
