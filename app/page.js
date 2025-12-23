'use client'

import HeroSection from '../components/HeroSection'
import VideoCinemaSection from '../components/VideoCinemaSection'
import ProductGrid from '../components/ProductGrid'
import ProductList from '../components/ProductList' // <-- Añadido
import ScrollToTop from '../components/ScrollToTop'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const modernidadImageRef = useRef(null)
  const autenticidadImageRef = useRef(null)
  const exclusividadImageRef = useRef(null)

  const handleMouseMove = (e, imageRef) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    if (imageRef.current) {
      imageRef.current.style.transform = `perspective(1000px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      imageRef.current.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
    }
  };

  const handleMouseLeave = (imageRef) => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
      imageRef.current.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen">
        <HeroSection />
      </section>

      {/* Video Cinema Section */}
      <VideoCinemaSection />

      {/* Products Section - Original */}
      <section id="productos" className="py-20">
        <ProductGrid />
      </section>

      {/* New Products Section from API */}
      <section className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-title font-semibold uppercase tracking-wider text-white mb-6">
              Nuestra Colección
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-body">
              Descubre nuestra exclusiva colección de moda sostenible
            </p>
          </div>
          <ProductList />
        </div>
      </section>

      {/* Collection Section - CON EFECTO 3D TILT AISLADO */}
      <section id="coleccion" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-title font-semibold uppercase tracking-wider text-white mb-6">
              Colección Premium
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-body">
              Cada pieza de nuestra colección está diseñada para potenciar tu estilo único, moderno y con materiales de la más alta calidad priorizando el Upcycling creativo para cuidar nuestro planeta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- PRIMERA IMAGEN CON 3D TILT --- */}
            <div 
              className="group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, modernidadImageRef)}
              onMouseLeave={() => handleMouseLeave(modernidadImageRef)}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/modernidad-liquida.webp')` }}
                />
                <Image
                  ref={modernidadImageRef}
                  src="/images/modernidad-liquida.webp"
                  alt="Modernidad líquida - Piezas atemporales"
                  fill
                  className="relative z-10 object-contain opacity-90 transition-all duration-300 ease-out"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    <h3 className="text-white text-lg font-title font-medium">Modernidad líquida</h3>
                    <p className="text-gray-200 text-sm font-body">Piezas atemporales</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* --- SEGUNDA IMAGEN CON 3D TILT --- */}
            <div 
              className="group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, autenticidadImageRef)}
              onMouseLeave={() => handleMouseLeave(autenticidadImageRef)}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/autenticidad.webp')` }}
                />
                <Image
                  ref={autenticidadImageRef}
                  src="/images/autenticidad.webp"
                  alt="Autenticidad - Diseño contemporáneo"
                  fill
                  className="relative z-10 object-contain opacity-90 transition-all duration-300 ease-out"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    <h3 className="text-white text-lg font-title font-medium">Autenticidad</h3>
                    <p className="text-gray-200 text-sm font-body">Diseño contemporáneo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* --- TERCERA IMAGEN CON 3D TILT --- */}
            <div 
              className="group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, exclusividadImageRef)}
              onMouseLeave={() => handleMouseLeave(exclusividadImageRef)}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/exclusividad.webp')` }}
                />
                <Image
                  ref={exclusividadImageRef}
                  src="/images/exclusividad.webp"
                  alt="Exclusividad - Piezas únicas"
                  fill
                  className="relative z-10 object-contain opacity-90 transition-all duration-300 ease-out"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    <h3 className="text-white text-lg font-title font-medium">Exclusividad</h3>
                    <p className="text-gray-200 text-sm font-body">Piezas únicas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-title font-semibold uppercase tracking-wider text-white mb-6">
            Conecta con Nosotros
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-body">
            Descubre la moda del futuro. Únete a nuestra comunidad de estilo original y alternativo. Cuidamos el planeta con cada elección, abriendo un camino hacia un estilo más consciente y auténtico. HACKEA LA MODA!!! 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-luxury-accent hover:bg-luxury-accent-light text-white px-8 py-3 rounded-none transition-all duration-300 hover:scale-105">
              Suscribirse
            </button>
            <button className="border border-luxury-accent text-luxury-accent hover:bg-luxury-accent hover:text-white px-8 py-3 rounded-none transition-all duration-300">
              Contactar
            </button>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}