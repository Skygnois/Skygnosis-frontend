"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-6">

          <div className="text-xl sm:text-2xl font-light tracking-[0.5em] uppercase progressive-glow-text">
            SKYGNOSIS
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-sharp-white animate-glow-heading">
            Elevates Business
          </h1>

          <p className="text-sm sm:text-base text-mist-gray/70 font-extralight tracking-wide max-w-md mt-4">
          Your intelligent AI agent for business transformation
          </p>

          <div className="mt-12">
            <button className="btn-primary text-sm px-8 py-3 font-light tracking-wider">
              Start Consultation
            </button>
          </div>

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
