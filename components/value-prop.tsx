"use client"

export default function WhyChooseUsGlass() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 overflow-hidden"
      aria-label="Why Choose SKYGNOSIS"
    >
      {/* Background Video */}
      <video
        src="\204306-923909642_tiny.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.6] saturate-[1.10] z-0"
      />

      {/* Blue-black-white gradient overlays - adjust gradient stops and opacity for smoother/darker */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-[#072457]/70 to-white/0 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-[#072457]/70 to-white/0 z-10 pointer-events-none" />

      {/* Grey glassmorphic content block */}
      <div className="
        relative z-20 w-full max-w-5xl mx-auto
        flex flex-col items-center justify-center
        backdrop-blur-[23px]
        bg-gray-900/65
        px-16 py-8
        border border-gray-300/30
        shadow-[0_8px_64px_0_rgba(25,50,90,0.3)]
        rounded-2xl
      ">
        <h2 className="mb-6 text-4xl sm:text-5xl font-extrabold text-center text-white"
          style={{
            textShadow: "0 0 10px rgba(37, 131, 247, 0.4), 0 2px 8px rgba(29, 78, 216, 0.3)",
          }}
        >
          Why Choose SKYGNOSIS?
        </h2>

        <p className="mb-7 text-lg text-blue-100 text-center leading-normal font-medium max-w-3xl">
          Empower your business with intelligent automation, proven AI strategies, and seamless support. Focus on growth while our custom agents deliver results—risk management, marketing optimization, and digital transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 w-full max-w-3xl mx-auto mb-5">
          {[
            "AI agents automate, optimize, and secure your processes.",
            "Experts: 15+ years' experience, 500+ projects delivered.",
            "Ready-to-scale tech for finance, SEO, manufacturing & more.",
            "24/7 support for smooth, reliable operation.",
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3 text-blue-100 text-base leading-normal">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md" />
              {point}
            </div>
          ))}
        </div>

        <button className="mt-7 px-12 py-3 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-800 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-300/50 relative">
          <span className="relative z-10">Learn More</span>
          <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[70%] h-2 rounded-full bg-cyan-300/20 blur-[14px] pointer-events-none"></span>
        </button>
      </div>
    </section>
  )
}
