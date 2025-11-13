'use client'

import { useEffect, useRef } from 'react'

export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true
    })
    if (!ctx) return

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Star {
      x: number
      y: number
      baseY: number
      size: number
      brightness: number
      twinkleSpeed: number
      twinklePhase: number
      depth: number // For parallax (0.1 to 1)
      type: 'small' | 'medium' | 'large' | 'bright'
      color: { r: number; g: number; b: number }
    }

    const stars: Star[] = []
    const starCount = 100

    for (let i = 0; i < starCount; i++) {
      const random = Math.random()
      let size: number
      let type: Star['type']
      let brightness: number
      let depth: number

      if (random < 0.60) {
        // Far background stars (slowest)
        size = Math.random() * 0.7 + 0.3
        type = 'small'
        brightness = Math.random() * 0.3 + 0.3
        depth = Math.random() * 0.3 + 0.05 // 0.05-0.35
      } else if (random < 0.85) {
        // Mid-field stars
        size = Math.random() * 1.2 + 0.8
        type = 'medium'
        brightness = Math.random() * 0.3 + 0.5
        depth = Math.random() * 0.3 + 0.35 // 0.35-0.65
      } else if (random < 0.95) {
        // Foreground stars
        size = Math.random() * 1.8 + 1.2
        type = 'large'
        brightness = Math.random() * 0.2 + 0.6
        depth = Math.random() * 0.2 + 0.65 // 0.65-0.85
      } else {
        // Hero stars (closest, fastest)
        size = Math.random() * 2.2 + 1.8
        type = 'bright'
        brightness = Math.random() * 0.15 + 0.75
        depth = Math.random() * 0.15 + 0.85 // 0.85-1.0
      }

      const colorVariation = Math.random()
      let color
      if (colorVariation < 0.65) {
        color = { r: 96, g: 165, b: 250 }
      } else if (colorVariation < 0.85) {
        color = { r: 180, g: 200, b: 255 }
      } else {
        color = { r: 255, g: 255, b: 255 }
      }

      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        baseY: Math.random() * window.innerHeight,
        size,
        brightness,
        twinkleSpeed: Math.random() * 0.015 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        depth,
        type,
        color
      })
    }

    let scrollY = 0
    let targetScrollY = 0
    let time = 0
    let animationFrame: number

    const handleScroll = () => {
      targetScrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const drawStar = (star: Star, twinkle: number, currentY: number) => {
      const { x, size, brightness, color, type } = star
      const alpha = brightness * twinkle

      // Outer glow
      const outerGradient = ctx.createRadialGradient(x, currentY, 0, x, currentY, size * 5)
      outerGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.5})`)
      outerGradient.addColorStop(0.4, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.25})`)
      outerGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
      
      ctx.fillStyle = outerGradient
      ctx.beginPath()
      ctx.arc(x, currentY, size * 5, 0, Math.PI * 2)
      ctx.fill()

      // Inner glow
      const innerGradient = ctx.createRadialGradient(x, currentY, 0, x, currentY, size * 2)
      innerGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`)
      innerGradient.addColorStop(0.6, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.6})`)
      innerGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
      
      ctx.fillStyle = innerGradient
      ctx.beginPath()
      ctx.arc(x, currentY, size * 2, 0, Math.PI * 2)
      ctx.fill()

      // Sharp core
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`
      ctx.beginPath()
      ctx.arc(x, currentY, size * 0.4, 0, Math.PI * 2)
      ctx.fill()

      // Star flare for bright stars
      if (type === 'bright' && twinkle > 0.75) {
        const flareAlpha = (twinkle - 0.75) * 4 * alpha * 0.5
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${flareAlpha})`
        ctx.lineWidth = 0.8
        
        // Vertical
        ctx.beginPath()
        ctx.moveTo(x, currentY - size * 4)
        ctx.lineTo(x, currentY + size * 4)
        ctx.stroke()

        // Horizontal
        ctx.beginPath()
        ctx.moveTo(x - size * 4, currentY)
        ctx.lineTo(x + size * 4, currentY)
        ctx.stroke()

        // Diagonal 1
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${flareAlpha * 0.6})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(x - size * 3, currentY - size * 3)
        ctx.lineTo(x + size * 3, currentY + size * 3)
        ctx.stroke()

        // Diagonal 2
        ctx.beginPath()
        ctx.moveTo(x + size * 3, currentY - size * 3)
        ctx.lineTo(x - size * 3, currentY + size * 3)
        ctx.stroke()
      }
    }

    const animate = () => {
      time += 0.012

      // Smooth scroll interpolation (easing)
      scrollY += (targetScrollY - scrollY) * 0.08

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Sort stars by depth (back to front)
      const sortedStars = [...stars].sort((a, b) => a.depth - b.depth)

      sortedStars.forEach((star) => {
        // Ultra-slow parallax: multiply by depth (0.05 to 1.0)
        // Background stars barely move, foreground stars move more
        const parallaxOffset = scrollY * star.depth * 0.08 // Very slow multiplier
        
        // Calculate Y position with wrapping
        let currentY = star.baseY + parallaxOffset
        
        // Wrap around viewport
        if (currentY > canvas.height + 100) {
          currentY = currentY % (canvas.height + 200) - 100
        } else if (currentY < -100) {
          currentY = (canvas.height + 100) + (currentY % (canvas.height + 200))
        }

        // Smooth twinkling
        const twinkle = (Math.sin(time * star.twinkleSpeed + star.twinklePhase) + 1) / 2 * 0.4 + 0.6

        drawStar(star, twinkle, currentY)
      })

      // Draw subtle connections between nearby bright stars
      const brightStars = sortedStars.filter(s => s.type === 'bright' || s.type === 'large')
      
      for (let i = 0; i < brightStars.length; i++) {
        const star = brightStars[i]
        const starY = star.baseY + (scrollY * star.depth * 0.08)
        
        for (let j = i + 1; j < brightStars.length; j++) {
          const otherStar = brightStars[j]
          const otherY = otherStar.baseY + (scrollY * otherStar.depth * 0.08)

          const dx = star.x - otherStar.x
          const dy = starY - otherY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.12
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(star.x, starY)
            ctx.lineTo(otherStar.x, otherY)
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  )
}
