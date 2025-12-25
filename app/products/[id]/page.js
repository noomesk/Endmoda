'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getProductById } from '../../services/api'

gsap.registerPlugin(ScrollTrigger)

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const productCacheRef = useRef(new Map())

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(null)

        const cached = productCacheRef.current.get(params.id)
        if (cached) {
          setProduct(cached)
          setIsLoading(false)
          return
        }

        setIsLoading(true)
        const data = await getProductById(params.id)
        if (data?.success && data?.data) {
          const mappedProduct = {
            ...data.data,
            // Mapear los campos de la API a los que espera el frontend
            imageUrl: data.data.image,
            features: [
              `Categoría: ${data.data.category}`,
              data.data.inStock ? 'Disponible en stock' : 'Agotado temporalmente'
            ]
          }
          productCacheRef.current.set(params.id, mappedProduct)
          setProduct(mappedProduct)
        } else {
          setError(data?.error || 'Producto no encontrado')
        }
      } catch (err) {
        console.error('Error cargando producto:', err)

        setError('Error al cargar el producto')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchProduct()
    }
  }, [params.id])

  useEffect(() => {
    if (!product) return

    const ctx = gsap.context(() => {
      // Animaciones existentes
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
    })

    return () => ctx.revert()
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

  if (error || !product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{error || 'Producto no encontrado'}</h1>
          <Link href="/products" className="text-luxury-accent hover:text-luxury-accent-light">
            Volver a productos
          </Link>
        </div>
      </div>
    )
  }

  // Usar la imagen del producto como principal y agregar imágenes de ejemplo si es necesario
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
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              ></div>
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
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
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
                  ${product.price.toFixed(2)}
                </span>
                <span className="bg-luxury-accent text-white px-3 py-1 text-sm font-medium rounded">
                  {product.category || 'Sin categoría'}
                </span>
              </div>
            </div>

            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description || 'Descripción no disponible.'}
              </p>
            </div>

            <div className="feature-list">
              <h3 className="text-white text-xl font-semibold mb-4">Detalles:</h3>
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
              <button 
                className="w-full bg-luxury-accent hover:bg-luxury-accent-light text-white py-4 text-lg font-semibold rounded-none transition-all duration-300 hover:scale-105"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Añadir al Carrito' : 'Agotado'}
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
                  <span className="text-gray-400">Disponibilidad:</span>
                  <span className={`ml-2 ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {product.inStock ? 'En stock' : 'Agotado'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Categoría:</span>
                  <span className="text-white ml-2">{product.category || 'No especificada'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}