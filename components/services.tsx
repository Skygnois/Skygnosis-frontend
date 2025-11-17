"use client"

import { useState } from "react"
import { Sparkles, Brain, Zap, Shield, Rocket, LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  { icon: Brain, title: "AI Strategy", description: "Develop comprehensive AI roadmaps tailored to your business objectives and competitive landscape." },
  { icon: Zap, title: "Machine Learning", description: "Build and deploy custom ML models that drive insights, automation, and business value." },
  { icon: Shield, title: "AI Security", description: "Implement robust security frameworks to protect your AI systems and sensitive data." },
  { icon: Rocket, title: "Digital Transformation", description: "Modernize your infrastructure and processes with cutting-edge technology solutions." },
]

export default function Services() {
  const [isGrid, setGrid] = useState(false)
  const totalCards = services.length
  const centerIndex = (totalCards - 1) / 2

  const collapsedSpacing = 24
  const expandedSpacing = 240
  const baseY = 0

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">AI & Tech Solutions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We build AI-powered solutions that automate operations, enhance decision-making, and accelerate business growth through intelligent technology
          </p>
        </div>

        <div
          className="hidden md:flex items-center justify-center min-h-[280px] relative"
          onMouseEnter={() => setGrid(true)}
          onMouseLeave={() => setGrid(false)}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const offsetFromCenter = i - centerIndex
            const collapsedX = offsetFromCenter * collapsedSpacing
            const expandedX = offsetFromCenter * expandedSpacing

            const style = isGrid
              ? {
                  transform: `translateX(${expandedX}px) translateY(${baseY}px) scale(1)`,
                  zIndex: 10,
                  transition: "transform 0.7s cubic-bezier(.34,1.56,.64,1), box-shadow 0.5s",
                  boxShadow: "0 12px 48px 0 rgba(56,189,248,0.25)",
                }
              : {
                  transform: `translateX(${collapsedX}px) translateY(${baseY}px) scale(0.98)`,
                  zIndex: totalCards - i,
                  transition: "transform 0.7s cubic-bezier(.34,1.56,.64,1), box-shadow 0.5s",
                  boxShadow:
                    i === totalCards - 1
                      ? "0 16px 48px 0 rgba(56,189,248,0.25),0 2px 8px 0 rgba(0,0,0,0.07)"
                      : "0 3px 18px 0 rgba(56,189,248,0.09)",
                }

            return (
              <div
                key={service.title}
                className="absolute left-1/2 top-1/2 w-[260px] h-[260px] glass flex flex-col justify-center px-6 py-5 opacity-100 backdrop-blur-xl border border-white/10 rounded-2xl transition-shadow transition-[backdrop-filter,background,filter,box-shadow] duration-500 group cursor-pointer"
                style={{
                  ...style,
                  transform: `${style.transform} translate(-50%,-50%)`,
                }}
              >
                <div
                  className={`absolute inset-0 pointer-events-none rounded-2xl transition bg-gradient-to-br from-cyan-400/20 via-blue-600/15 to-blue-900/0 ${isGrid ? "opacity-45" : "opacity-15"}`}
                />
                <div className="flex items-center gap-2 mb-2 z-10 relative">
                  <span className="w-9 h-9 grid place-items-center rounded-xl bg-gradient-to-br from-blue-600/80 to-cyan-400/80 text-white text-xl shadow-lg">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className={`text-lg font-bold ${isGrid ? "text-white" : "text-white/80"}`}>{service.title}</h3>
                </div>
                <p className={`text-sm font-medium transition-colors ${isGrid ? "text-slate-200" : "text-slate-300/70"}`}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Mobile Vertical List */}
        <div className="md:hidden space-y-5">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="glass rounded-2xl p-4 flex items-center gap-3 backdrop-blur-xl border border-white/10 transition shadow-md"
                style={{
                  background: "rgba(32,32,40,0.33)",
                  boxShadow: "0 6px 28px 2px rgba(56,189,248,0.09)",
                }}
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/80 to-cyan-400/75 text-white text-xl shadow-lg">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-slate-300/90">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
