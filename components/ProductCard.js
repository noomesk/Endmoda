'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProductCard({ product, index }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out'
    })
    gsap.to('.card-content', {
      y: -10,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
    gsap.to('.card-content', {
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div 
        ref={cardRef}
        className="product-card bg-luxury-gray rounded-sm overflow-hidden hover-lift transition-all duration-300 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <div 
            ref={imageRef}
            className="w-full h-full bg-gradient-to-br from-luxury-light-gray to-luxury-gray transition-all duration-300"
          >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-luxury-accent text-white px-3 py-1 text-sm font-medium">
              {product.category}
            </span>
          </div>
          
          {/* Quick View Button */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-luxury-accent hover:text-white transition-colors duration-300">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="card-content p-6">
          <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-luxury-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-luxury-accent text-lg font-bold">
              €{product.price}
            </span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-luxury-accent hover:text-luxury-accent transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-luxury-accent hover:text-luxury-accent transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}