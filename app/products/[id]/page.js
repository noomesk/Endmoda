'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load product data
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(params.id))
        setProduct(foundProduct)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading product:', error)
        setIsLoading(false)
      })
  }, [params.id])

  useEffect(() => {
    if (!product) return

    // Page entrance animations
    gsap.fromTo('.product-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )

    gsap.fromTo('.product-image', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    )

    gsap.fromTo('.product-details', 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
    )

    gsap.fromTo('.feature-list', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: 'power2.out' }
    )

  }, [product])

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-accent"></div>
          <p className="text-gray-300 mt-4">Cargando producto...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Producto no encontrado</h1>
          <Link href="/products" className="text-luxury-accent hover:text-luxury-accent-light">
            Volver a productos
          </Link>
        </div>
      </div>
    )
  }

  const images = [
    product.imageUrl,
    '/images/product-2.jpg',
    '/images/product-3.jpg'
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white">Inicio</Link>
          <span className="text-gray-400 mx-2">/</span>
          <Link href="/products" className="text-gray-400 hover:text-white">Productos</Link>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="product-image aspect-[3/4] bg-luxury-gray rounded-sm overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-luxury-gray rounded-sm overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-luxury-accent' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')] bg-cover bg-center"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details space-y-6">
            <div>
              <h1 className="product-title text-4xl md:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-luxury-accent text-3xl font-bold">
                  €{product.price}
                </span>
                <span className="bg-luxury-accent text-white px-3 py-1 text-sm font-medium rounded">
                  {product.category}
                </span>
              </div>
            </div>

            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="feature-list">
              <h3 className="text-white text-xl font-semibold mb-4">Características:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <svg className="w-4 h-4 text-luxury-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-luxury-accent hover:bg-luxury-accent-light text-white py-4 text-lg font-semibold rounded-none transition-all duration-300 hover:scale-105">
                Añadir al Carrito
              </button>
              <button className="w-full border border-luxury-accent text-luxury-accent hover:bg-luxury-accent hover:text-white py-4 text-lg font-semibold rounded-none transition-all duration-300">
                Añadir a Favoritos
              </button>
            </div>

            <div className="border-t border-luxury-light-gray pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Envío:</span>
                  <span className="text-white ml-2">Gratis</span>
                </div>
                <div>
                  <span className="text-gray-400">Devolución:</span>
                  <span className="text-white ml-2">30 días</span>
                </div>
                <div>
                  <span className="text-gray-400">Garantía:</span>
                  <span className="text-white ml-2">2 años</span>
                </div>
                <div>
                  <span className="text-gray-400">Tallas:</span>
                  <span className="text-white ml-2">XS - XL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}