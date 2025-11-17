"use client";

import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactMethod {
  icon: string;
  title: string;
  details: string;
  link?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: "📧",
    title: "Email Us",
    details: "contact@skygnosis.com",
    link: "mailto:contact@skygnosis.com"
  },
  {
    icon: "📞",
    title: "Call Us",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: "📍",
    title: "Visit Us",
    details: "123 Innovation Street, Tech City, CA 94000",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#050B16] flex flex-col relative text-white">
      {/* Navbar with Glow */}
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

      {/* Hero Section */}
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
          Contact{" "}
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
          Let's collaborate to transform your business with innovative technology solutions.
        </motion.p>
      </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#0A162B] border border-blue-900 rounded-2xl p-6 text-center shadow-md relative group"
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
              <div
                className="text-4xl mb-4"
                style={{
                  textShadow: "0 0 12px #38bdf8bb, 0 0 28px #2563eb33",
                }}
              >
                {method.icon}
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
                {method.title}
              </h3>
              {method.link ? (
                <a
                  href={method.link}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {method.details}
                </a>
              ) : (
                <p className="text-slate-300">{method.details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0A162B] border border-blue-900 rounded-2xl p-8 shadow-md"
          style={{
            boxShadow: "0 0 20px 4px rgba(56,189,248,0.1)",
          }}
        >
          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{
              background: "linear-gradient(90deg, #38bdf8 20%, #2563eb 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#050B16] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#050B16] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#050B16] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-cyan-400/50 hover:scale-[1.02]"
              style={{
                boxShadow: "0 0 20px 4px rgba(56,189,248,0.3)",
              }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
