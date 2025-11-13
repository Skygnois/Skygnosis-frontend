"use client"

import { useEffect, useRef } from "react"

export default function ValueProp() {
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
    <section
      id="case-studies"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden opacity-0"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder */}
          <div className="relative h-96 md:h-full rounded-xl glass overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/30 mb-4">AI</div>
                <p className="text-foreground/40">Strategic Partnership</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Why Choose SKYGNOSIS?</h2>
              <p className="text-lg text-foreground/70">
                We don't just implement technology. We partner with you to understand your unique challenges and create
                sustainable, transformative solutions.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  title: "Expert Team",
                  desc: "PhD-level researchers and industry veterans with 15+ years of experience",
                },
                {
                  title: "Proven Methodology",
                  desc: "Battle-tested frameworks that have driven 500+ successful transformations",
                },
                {
                  title: "24/7 Support",
                  desc: "Dedicated support team ensuring your systems run smoothly around the clock",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-foreground/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
