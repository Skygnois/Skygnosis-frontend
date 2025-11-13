"use client"

import { useEffect, useRef } from "react"

export default function CTA() {
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
    <section id="contact" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-4xl mx-auto">
        <div className="glass-accent rounded-2xl p-12 md:p-16 text-center border border-white/20">
          {/* Gradient line accent */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform Your Business?</h2>

          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of industry leaders who are already leveraging AI to stay ahead of the competition. Let's
            discuss how we can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Schedule Demo
            </button>
            <button className="px-8 py-4 rounded-full glass hover:glass-accent text-foreground font-semibold transition-all duration-300 border border-white/10 hover:border-primary/50">
              Contact Sales
            </button>
          </div>

          {/* Email */}
          <p className="mt-8 text-foreground/50">
            Or reach out: <span className="text-primary font-semibold">hello@braintech.io</span>
          </p>
        </div>
      </div>
    </section>
  )
}
