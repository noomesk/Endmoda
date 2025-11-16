import HeroSection from '../components/HeroSection'
import VideoCinemaSection from '../components/VideoCinemaSection'
import ProductGrid from '../components/ProductGrid'
import ScrollToTop from '../components/ScrollToTop'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen">
        <HeroSection />
      </section>

      {/* Video Cinema Section */}
      <VideoCinemaSection />

      {/* Products Section */}
      <section id="productos" className="py-20">
        <ProductGrid />
      </section>

      {/* Collection Section - VERSIÓN LIMPIA Y LEGIBLE */}
      <section id="coleccion" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Colección Premium
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Cada pieza de nuestra colección está diseñada para potenciar tu estilo único, moderno y con materiales de la más alta calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- PRIMERA IMAGEN --- */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                {/* Capa 1: Fondo desenfocado */}
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/modernidad-liquida.webp')` }}
                />
                {/* Capa 2: Imagen principal completa */}
                <Image
                  src="/images/modernidad-liquida.webp"
                  alt="Modernidad líquida - Piezas atemporales"
                  fill
                  className="relative z-10 object-contain transition-all duration-300 group-hover:scale-105"
                />
                {/* Capa 3: Gradiente sutil para el texto */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Capa 4: CAJA DE TEXTO LEGIBLE */}
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    <h3 className="text-white text-lg font-semibold">Modernidad líquida</h3>
                    <p className="text-gray-200 text-sm">Piezas atemporales</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* --- SEGUNDA IMAGEN --- */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/autenticidad.webp')` }}
                />
                <Image
                  src="/images/autenticidad.webp"
                  alt="Autenticidad - Diseño contemporáneo"
                  fill
                  className="relative z-10 object-contain transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    <h3 className="text-white text-lg font-semibold">Autenticidad</h3>
                    <p className="text-gray-200 text-sm">Diseño contemporáneo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* --- TERCERA IMAGEN --- */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/exclusividad.webp')` }}
                />
                <Image
                  src="/images/exclusividad.webp"
                  alt="Exclusividad - Piezas únicas"
                  fill
                  className="relative z-10 object-contain transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    <h3 className="text-white text-lg font-semibold">Exclusividad</h3>
                    <p className="text-gray-200 text-sm">Piezas únicas</p>
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Conecta con Nosotros
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Descubre la moda del futuro. Únete a nuestra comunidad de estilo original
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