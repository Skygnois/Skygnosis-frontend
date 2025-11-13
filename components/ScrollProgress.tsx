'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Enhanced progress bar with glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ 
          scaleX,
          background: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
          boxShadow: '0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(96, 165, 250, 0.4)'
        }}
      />
      
      {/* Glow layer for extra visibility */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 origin-left z-49 blur-sm"
        style={{ 
          scaleX,
          background: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
          opacity: 0.6
        }}
      />
    </>
  )
}
