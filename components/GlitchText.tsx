'use client'

import { motion } from 'framer-motion'

export default function GlitchText({ children }: { children: string }) {
  return (
    <div className="relative inline-block">
      {/* Main text */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layer 1 */}
      <motion.span
        className="absolute top-0 left-0 text-blue-500"
        animate={{
          x: [-2, 2, -2],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.span>

      {/* Glitch layer 2 */}
      <motion.span
        className="absolute top-0 left-0 text-red-500"
        animate={{
          x: [2, -2, 2],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
      >
        {children}
      </motion.span>
    </div>
  )
}
