'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPProvider({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Set up global GSAP defaults
    gsap.defaults({
      duration: 0.8,
      ease: "power2.out"
    })

    // Refresh ScrollTrigger on component mount
    ScrollTrigger.refresh()

    return () => {
      // Clean up all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
}