'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from './ProductCard'

gsap.registerPlugin(ScrollTrigger)

export default function ProductGrid() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Load products from JSON file
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading products:', error))
  }, [])

  useEffect(() => {
    if (products.length === 0) return

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

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-accent"></div>
          <p className="text-gray-300 mt-4">Cargando productos...</p>
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
          Descubre nuestra selección de piezas premium, cada una diseñada para redefinir tu estilo personal.
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