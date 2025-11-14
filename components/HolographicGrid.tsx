'use client'

import { motion } from 'framer-motion'

export default function HolographicGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner brackets (HUD style) */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-500/30" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-blue-500/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-blue-500/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-blue-500/30" />
    </div>
  )
}
