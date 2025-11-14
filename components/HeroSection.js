'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline()
      
      // Animate background
      gsap.fromTo('.hero-bg', 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
      )
      
      // Animate title
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
      )
      
      // Animate subtitle
      gsap.fromTo(subtitleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' }
      )
      
      // Animate CTA button
      gsap.fromTo(ctaRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.1, ease: 'power2.out' }
      )
      
      // Floating elements animation
      gsap.to('.floating-element', {
        y: -20,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      })
      
      // Scroll-triggered parallax effect
      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
      
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="floating-element absolute top-1/4 left-10 w-2 h-2 bg-luxury-accent rounded-full opacity-30"></div>
        <div className="floating-element absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="floating-element absolute bottom-1/4 left-1/4 w-3 h-3 bg-luxury-accent-light rounded-full opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full opacity-40" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          ENDModa
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Donde la autenticidad se encuentra con la innovación. 
          Descubre una nueva dimensión de la moda digital.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-luxury-accent hover:bg-luxury-accent-light text-white px-8 py-4 text-lg rounded-none transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Explorar Colección
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}