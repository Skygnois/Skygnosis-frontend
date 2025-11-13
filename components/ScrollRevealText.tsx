'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.25']
  })

  const words = text.split(' ')

  return (
    <div ref={ref} className={`py-20 ${className}`}>
      <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-center max-w-5xl mx-auto">
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

function Word({
  children,
  progress,
  range
}: {
  children: string
  progress: any
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const color = useTransform(
    progress,
    range,
    ['rgba(156, 163, 175, 0.4)', 'rgba(248, 250, 252, 1)']
  )

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-2 md:mr-3"
    >
      {children}
    </motion.span>
  )
}
