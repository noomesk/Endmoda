'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animate header on mount
    gsap.fromTo('.header', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-luxury' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-luxury-accent transition-colors duration-300"
          >
            ENDModa
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#inicio" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#productos" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#coleccion" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Colección
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#contacto" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="#productos" 
            className="bg-luxury-accent hover:bg-luxury-accent-light text-white px-6 py-2 rounded-none transition-all duration-300 hover:scale-105"
          >
            Explorar
          </Link>
        </div>
      </nav>
    </header>
  )
}