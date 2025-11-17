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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-10 md:py-18 px-2 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-6xl mx-auto">
        {/* Minimal glass container with subtle elevation */}
        <div
          className="relative z-20 w-full max-w-6xl mx-auto
            backdrop-blur-md bg-gray-900/40
            px-8 md:px-16 py-12 md:py-16
            border border-white/10 rounded-3xl text-center
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            hover:shadow-[0_16px_48px_rgba(0,178,255,0.15)]
            hover:-translate-y-2
            transition-all duration-500 ease-out"
        >
          {/* Refined gradient accent */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto mb-8 rounded-full opacity-80" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight hero-heading">
            Let's Elevate Your Business
          </h2>


          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of industry leaders who are already leveraging AI to stay ahead of the competition.
            Let's discuss how we can help you achieve your goals.
          </p>

          {/* Deep black button with glowing text */}
          <button
            className="relative mx-auto px-12 py-5 rounded-2xl overflow-hidden group cursor-pointer
              bg-black border border-cyan-400/40
              shadow-[0_0_20px_rgba(6,182,212,0.25)]
              hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]
              hover:border-cyan-400/60
              transition-all duration-500 hover:scale-105 active:scale-100
              max-w-md w-full"
          >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none"></div>

            {/* Glowing button text */}
            <span
              className="relative z-10 font-bold text-xl md:text-2xl tracking-wide select-none
    bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(37, 99, 235, 0.4)",
                filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
              }}
            >
              Schedule Demo
            </span>
          </button>

          {/* Contact email */}
          <p className="mt-10 text-gray-400 text-sm md:text-base">
            Or reach out: <span className="text-royal-blue font-medium">info@skygnosis.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}
