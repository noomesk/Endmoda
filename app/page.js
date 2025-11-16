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

      {/* Collection Section */}
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
            {/* --- PRIMERA IMAGEN CON VIÑETEADO --- */}
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
                  className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Capa 3: VIÑETEADO para suavizar bordes */}
                <div 
                  className="absolute inset-0 z-15 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%)'
                  }}
                />
                {/* Capa 4: Gradiente para el texto */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-30">
                  <h3 className="text-white text-xl font-semibold">Modernidad líquida</h3>
                  <p className="text-gray-200">Piezas atemporales</p>
                </div>
              </div>
            </div>
            
            {/* --- SEGUNDA IMAGEN CON VIÑETEADO --- */}
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
                  className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Capa 3: VIÑETEADO para suavizar bordes */}
                <div 
                  className="absolute inset-0 z-15 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%)'
                  }}
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-30">
                  <h3 className="text-white text-xl font-semibold">Autenticidad</h3>
                  <p className="text-gray-200">Diseño contemporáneo</p>
                </div>
              </div>
            </div>
            
            {/* --- TERCERA IMAGEN CON VIÑETEADO --- */}
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
                  className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Capa 3: VIÑETEADO para suavizar bordes */}
                <div 
                  className="absolute inset-0 z-15 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%)'
                  }}
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-30">
                  <h3 className="text-white text-xl font-semibold">Exclusividad</h3>
                  <p className="text-gray-200">Piezas únicas</p>
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