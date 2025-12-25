'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from './ProductCard'
import { useProducts } from '../context/ProductContext'

gsap.registerPlugin(ScrollTrigger)

export default function ProductGrid() {
  const { products, loading, error } = useProducts()

  useEffect(() => {
    if (!products || products.length === 0) return

    // Animate section title
    gsap.fromTo('.section-title', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate product cards with stagger
    gsap.fromTo('.product-card', 
      { opacity: 0, y: 100, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.6, 
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.product-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

  }, [products])

  if (loading) {
    return (
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-accent"></div>
          <p className="text-gray-300 mt-4">Cargando productos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-6">
        <div className="text-center py-8 text-red-500">
          {error}
          <button
            onClick={() => window.location.reload()}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-6">
        <div className="text-center py-8 text-gray-300">
          No hay productos disponibles.
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="section-title text-4xl md:text-6xl font-bold text-white mb-6">
          Productos Destacados
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Descubre nuestra selección de piezas originales, cada una diseñada para redefinir tu estilo personal y alternativo.
        </p>
      </div>
      
      <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}