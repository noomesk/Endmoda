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
    // --- Definimos las funciones en el ámbito principal del useEffect ---
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = clientX / innerWidth;
      const yPos = clientY / innerHeight;

      gsap.to("#water-turbulence", {
        attr: { 
          baseFrequency: `${0.01 + xPos * 0.02} ${0.01 + yPos * 0.02}` 
        },
        duration: 0.6,
        ease: "power2.out"
      });
    };

    // --- MEJORADO: Lógica para que el efecto se "asiente" suavemente ---
    const handleMouseLeave = () => {
      // 1. Matamos cualquier animación que estuviera corriendo para evitar conflictos
      gsap.killTweensOf("#water-turbulence");
      
      // 2. Animamos de vuelta al estado original de forma suave y lenta
      gsap.to("#water-turbulence", {
        attr: { baseFrequency: "0.01 0.01" },
        duration: 2.5,       // Más largo para un efecto de "asentamiento"
        ease: "power2.inOut" // Una curva de aceleración más orgánica
      });
    };

    // Añadimos los listeners al elemento del DOM
    const element = heroRef.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    // --- gsap.context se usa solo para las animaciones de GSAP ---
    const ctx = gsap.context(() => {
      // --- ANIMACIONES DE ENTRADA Y SCROLL ---
      gsap.fromTo('.hero-bg', 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
      )
      
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
      )
      
      gsap.fromTo(subtitleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' }
      )
      
      gsap.fromTo(ctaRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.1, ease: 'power2.out' }
      )
      
      gsap.to('.floating-element', {
        y: -20,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      tl.to('.hero-bg-image', {
        yPercent: -30,
        opacity: 0,
        ease: 'none'
      });
      
    }, heroRef)

    // --- La función de limpieza ahora puede acceder a todo ---
    return () => {
      ctx.revert() // Limpia las animaciones de GSAP
      // Limpia los listeners de eventos
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, []) // El array de dependencias vacío

  return (
    <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* --- FILTRO SVG PARA EL EFECTO AGUA --- */}
      <svg className="absolute w-0 h-0">
        <filter id="water-effect">
          <feTurbulence 
            id="water-turbulence" 
            type="fractalNoise" 
            baseFrequency="0.01 0.01" 
            numOctaves="1" 
            result="turbulence" 
            seed="2"
          />
          <feDisplacementMap 
            in2="turbulence" 
            in="SourceGraphic" 
            scale="15" 
            xChannelSelector="R" 
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
        {/* --- APLICAMOS EL FILTRO A LA IMAGEN --- */}
        <div 
          className="absolute inset-0 hero-bg-image bg-[url('/images/hero-bg.webp')] bg-cover bg-center"
          style={{ filter: 'url(#water-effect)' }}
        ></div>
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