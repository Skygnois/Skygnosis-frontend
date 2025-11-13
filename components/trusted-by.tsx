"use client"

import { useEffect, useRef } from "react"

export default function TrustedBy() {
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

  const companies = ["TechCorp", "DataFlow", "CloudSync", "NeuralNet", "VelocityAI", "QuantumLeap"]

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-foreground/50 text-sm font-medium uppercase tracking-wider mb-12">
          Trusted by Leading Organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
          {companies.map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 glass rounded-lg hover:glass-accent transition-all duration-300 group cursor-pointer"
            >
              <p className="text-foreground/60 group-hover:text-foreground/80 font-medium transition-colors">
                {company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
