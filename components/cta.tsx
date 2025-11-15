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
        {/* Glowing glass block */}
        <div
          className="relative z-20 w-full max-w-6xl mx-auto
            backdrop-blur-[23px] bg-gray-800/70
            px-24 py-4
            border border-gray-300/30 rounded-2xl text-center
            shadow-[0_0_30px_7px_rgba(0,178,255,0.38)]
            hover:shadow-[0_0_42px_18px_rgba(0,178,255,0.54)]
            transition-shadow duration-500"
        >
          {/* Gradient line accent */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6 rounded-full" />

          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
            style={{
              textShadow: "0 0 13px #2583f7, 0 1px 8px #1d4ed8",
            }}
          >
            Let's Elevate Your Business!!!
          </h2>

          <p className="text-lg text-foreground/70 mb-7 max-w-2xl mx-auto">
            Join hundreds of industry leaders who are already leveraging AI to stay ahead of the competition. Let's
            discuss how we can help you achieve your goals.
          </p>

          {/* Bigger Schedule Demo Button */}
          <button
            className="relative mx-auto px-18 py-6 rounded-3xl overflow-hidden group cursor-pointer
              border-2 border-cyan-400/80 shadow-[0_0_38px_rgba(0,200,255,0.45)]
              hover:shadow-[0_0_55px_rgba(0,200,255,0.65)]
              transition duration-500 hover:scale-110 active:scale-105
              max-w-lg w-full"
          >
            {/* Video background */}
            <video
              src="\45961-447087612_small.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover brightness-75 saturate-110"
            />

            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/45 to-cyan-900/40 group-hover:from-black/28 group-hover:via-blue-800/35 group-hover:to-cyan-800/25 transition duration-500 pointer-events-none"></div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"></div>

            {/* Button Text, improved and less glow */}
            <span
              className="relative z-10 text-cyan-300 font-extrabold text-2xl md:text-3xl tracking-wide
                drop-shadow-[1px_1px_0_rgba(0,128,255,0.5)]
                drop-shadow-[1px_1px_1px_rgba(0,64,128,0.34)] select-none"
            >
              Schedule Demo
            </span>
          </button>

          {/* Email */}
          <p className="mt-8 text-foreground/50 text-base">
            Or reach out: <span className="text-primary font-semibold">info@skygnosis.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}
