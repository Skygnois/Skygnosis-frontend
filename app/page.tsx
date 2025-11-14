"use client"

import { lazy, Suspense } from 'react'
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import Services from "@/components/services"
import TrustedBy from "@/components/trusted-by"
import ValueProp from "@/components/value-prop"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/ScrollProgress"

// Lazy load heavy components
const TechGrid = lazy(() => import("@/components/TechGrid"))
const HolographicGrid = lazy(() => import("@/components/HolographicGrid"))

export default function Page() {
  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      {/* Progress bar - lightweight */}
      <ScrollProgress />
      
      {/* Heavy effects - lazy loaded */}
      <Suspense fallback={null}>
        <TechGrid />
        <HolographicGrid />
      </Suspense>
      
      {/* Content */}
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <ValueProp />
      <CTA />
      <Footer />
    </main>
  )
}
