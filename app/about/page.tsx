"use client";

import Navigation from "@/components/navigation"; // Adjust path accordingly
import { motion } from "framer-motion";

interface Value {
  icon: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: "🎯",
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that stay ahead of the curve."
  },
  {
    icon: "🤝",
    title: "Client-Centric",
    description: "Your success is our success. We prioritize understanding and exceeding your expectations."
  },
  {
    icon: "⚡",
    title: "Excellence",
    description: "We maintain the highest standards in every project, from conception to delivery."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050B16] flex flex-col relative text-white">
      {/* Navbar & glow container */}
      <div className="relative z-10">
        <Navigation />

        {/* Tube light glow effect below navbar */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 mx-auto"
          style={{
            top: "100%", // just below navbar
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

      {/* Page Hero Section */}
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
          About{" "}
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
          We’re a team of innovators, problem-solvers, and technology experts dedicated
          to delivering cutting-edge solutions and transforming businesses worldwide.
        </motion.p>
      </section>


      {/* Mission and Vision Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 mb-20">
        {[
          {
            title: "Our Mission",
            description:
              "To empower businesses with innovative technology solutions that drive growth, efficiency, and sustainable success in an ever-evolving digital landscape.",
          },
          {
            title: "Our Vision",
            description:
              "To be the leading catalyst for digital transformation, setting new standards in innovation, reliability, and customer success across industries.",
          },
        ].map(({ title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="bg-[#0A162B] border border-blue-900 rounded-2xl p-8 shadow-md relative group"
            style={{
              boxShadow: "0 0 16px 4px rgba(56,189,248,0.1)",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.boxShadow = "0 0 28px 6px rgba(56,189,248,0.35)";
              el.style.borderColor = "#38bdf8";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.boxShadow = "0 0 16px 4px rgba(56,189,248,0.1)";
              el.style.borderColor = "#1e40af";
            }}
          >
            <h3
              className="text-2xl font-semibold mb-3"
              style={{
                background: "linear-gradient(90deg, #38bdf8 20%, #2563eb 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 8px rgba(56,189,248,0.15), 0 0 20px rgba(37,99,235,0.04)",
              }}
            >
              {title}
            </h3>
            <p className="text-slate-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-extrabold mb-14"
          style={{
            background: "linear-gradient(90deg, #38bdf8 20%, #2563eb 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 24px rgba(56,189,248,0.4), 0 0 64px rgba(37,99,235,0.3)",
          }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-[#0A162B] border border-blue-900 rounded-2xl p-7 shadow-md relative group"
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
                className="text-4xl mb-4"
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
              <p className="text-slate-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
