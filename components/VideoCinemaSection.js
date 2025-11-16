// components/VideoCinemaSection.js

'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function VideoCinemaSection({ className }) {
  const videoContainerRef = useRef(null)

  useEffect(() => {
    // --- NUEVO: ANIMACIÓN DE FUNDIDO DE ENTRADA ---
    gsap.fromTo(videoContainerRef.current, 
      { opacity: 0 }, // Comienza invisible
      { 
        opacity: 1,    // Se vuelve visible
        ease: 'none',
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: 'top bottom', // Empieza a aparecer cuando el tope del contenedor toca el fondo de la ventana
          end: 'top center',   // Termina de aparecer cuando el tope del contenedor llega al centro
          scrub: true
        }
      }
    )
  }, [])

  return (
    <section ref={videoContainerRef} className={`relative w-full h-screen overflow-hidden bg-black ${className || ''}`}>
      <video
        src="/videos/hxc.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        Tu navegador no soporta la etiqueta de video.
      </video>
    </section>
  );
}