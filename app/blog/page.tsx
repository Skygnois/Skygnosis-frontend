"use client";

import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const categories = ['all', 'technology', 'business', 'innovation', 'tutorials'];

const blogPosts: BlogPost[] = [
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes...",
    category: "Technology",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    image: "/blog/ai-automation.jpg",
    slug: "future-ai-business-automation"
  },
  // Add more BlogPost entries as needed
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-[#050B16] flex flex-col relative text-white">
      {/* Navbar & tube-light glow */}
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

      {/* Blog Hero */}
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
          Blog&nbsp;
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
          Insights, innovation, and perspectives in AI, business, and technology—curated by SKYGNOSIS.
        </motion.p>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 border-b border-slate-700 max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-colors duration-200
                ${activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg text-white"
                  : "bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-blue-900/30 hover:text-cyan-300"}
              `}
              style={activeCategory === category
                ? { boxShadow: "0 0 20px 4px #38bdf8aa" }
                : {}}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0A162B] border border-blue-900 rounded-2xl shadow-md relative group transition-all"
                style={{
                  boxShadow: "0 0 16px 4px rgba(56,189,248,0.1)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 32px 8px rgba(56,189,248,0.30)";
                  el.style.borderColor = "#38bdf8";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 16px 4px rgba(56,189,248,0.1)";
                  el.style.borderColor = "#1e40af";
                }}
              >
                {/* Blog image & category */}
                <div className="rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-400 text-[#060d19] text-xs font-bold capitalize shadow">
                    {post.category}
                  </div>
                </div>
                {/* Blog card info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>&#8226;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{
                      background: "linear-gradient(90deg, #38bdf8 10%, #2563eb 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-cyan-400 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
