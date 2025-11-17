"use client";

import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description: "Design and develop intelligent systems that automate decision-making and enhance user experiences."
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Implement scalable and secure cloud infrastructure tailored to your business needs."
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Protect your digital assets with cutting-edge security audits and risk assessments."
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Create seamless mobile applications across platforms using the latest technologies."
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Build responsive, performant websites optimized for growth and engagement."
  },
  {
    icon: "⚙️",
    title: "Automation & Integration",
    description: "Streamline workflows and integrate systems for maximum efficiency and productivity."
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050B16] flex flex-col relative text-white">
      {/* Navbar and Glow */}
      <div className="relative z-10">
        <Navigation />
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 mx-auto"
          style={{
            top: "100%",
            height: "60px",
            width: "100%",
            maxWidth: "100vw",
            filter: "blur(30px)",
            background:
              "radial-gradient(ellipse at center, rgba(56,189,248,0.75) 0%, rgba(56,189,248,0) 80%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </div>

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
          style={{
            background: "linear-gradient(90deg, #38bdf8 10%, #2563eb 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 24px rgba(56,189,248,0.4), 0 0 64px rgba(37,99,235,0.3)",
            display: 'inline-block'
          }}
        >
          Services{" "}
          <span className="skygnosis-heading" style={{
            fontSize: '2.8rem',
            fontWeight: 400,
            letterSpacing: '0.4em',
            color: '#f1f5fd',
            WebkitBackgroundClip: 'initial',
            WebkitTextFillColor: 'initial',
            textShadow:
              "0 2px 18px rgba(96, 165, 250, 0.28), 0 0px 2px rgba(0,0,0,0.14)"
          }}>
            SKYGNOSIS
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Empower your business with our comprehensive technology solutions tailored for innovation and growth.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map(({ icon, title, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-[#0A162B] border border-blue-900 rounded-2xl p-7 shadow-md relative group cursor-default"
              style={{
                boxShadow: "0 0 20px 2px rgba(56,189,248,0.1)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 0 32px 6px rgba(56,189,248,0.4)";
                el.style.borderColor = "#38bdf8";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 0 20px 2px rgba(56,189,248,0.1)";
                el.style.borderColor = "#1e40af";
              }}
            >
              <div
                className="text-4xl mb-6"
                style={{
                  textShadow: "0 0 12px #38bdf8bb, 0 0 28px #2563eb33",
                }}
              >
                {icon}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  background: "linear-gradient(90deg, #38bdf8 20%, #2563eb 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
