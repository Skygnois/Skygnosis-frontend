"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Brain, Zap, Shield, Rocket, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Strategy",
    description: "Develop comprehensive AI roadmaps tailored to your business objectives and competitive landscape.",
  },
  {
    icon: Zap,
    title: "Machine Learning",
    description: "Build and deploy custom ML models that drive insights, automation, and business value.",
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Implement robust security frameworks to protect your AI systems and sensitive data.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Modernize your infrastructure and processes with cutting-edge technology solutions.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive strategic decision-making.",
  },
  {
    icon: Sparkles,
    title: "Custom Development",
    description: "Build scalable, intelligent applications tailored to your unique business needs.",
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".service-card").forEach((card, i) => {
            setTimeout(() => {
              card.classList.add("animate-fade-in-up")
            }, i * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">AI & Tech Solutions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We build AI-powered solutions that automate operations, enhance decision-making, and accelerate business growth through intelligent technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="service-card opacity-0 glass rounded-xl p-8 hover:glass-accent group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <Icon
                    className="w-12 h-12 text-gradient-to-r from-primary to-secondary"
                    style={{
                      color: "url(#gradient)",
                    }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#ad6df4", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#72a4f4", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
