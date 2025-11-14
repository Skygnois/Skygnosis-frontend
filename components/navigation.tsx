"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Glowing white text */}
          <Link
            href="/"
            className="text-xl font-bold text-royal-blue tracking-wider uppercase hover:scale-110 transition-all duration-300"
            style={{ transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = '0 0 25px rgba(82, 109, 255, 1.0), 0 0 50px rgba(82, 109, 255, 0.8), 0 0 75px rgba(82, 109, 255, 0.6), 0 0 100px rgba(82, 109, 255, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = 'none'
            }}
          >
            Skygnosis
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-mist-gray hover:text-royal-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Using custom button class */}
          <button className="hidden md:block group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow"
              style={{ backgroundSize: '200% 100%' }} />

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.2)' }} />

            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <div
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <div
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-3 animate-fade-in-up border-t border-white/5 mt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-mist-gray hover:text-royal-blue transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <button
              className="btn-primary w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
