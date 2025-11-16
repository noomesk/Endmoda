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

      {/* Collection Section - VERSIÓN CON TIPOGRAFÍA ACTUALIZADA */}
      <section id="coleccion" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* CAMBIO: Título con nueva fuente */}
            <h2 className="text-4xl md:text-6xl font-title font-semibold uppercase tracking-wider text-white mb-6">
              Colección Premium
            </h2>
            {/* CAMBIO: Párrafo con nueva fuente */}
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-body">
              Cada pieza de nuestra colección está diseñada para potenciar tu estilo único, moderno y con materiales de la más alta calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- PRIMERA IMAGEN --- */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-luxury-gray">
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                  style={{ backgroundImage: `url('/images/modernidad-liquida.webp')` }}
                />
                <Image
                  src="/images/modernidad-liquida.webp"
                  alt="Modernidad líquida - Piezas atemporales"
                  fill
                  className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <div className="bg-black/70 backdrop-blur-sm p-3 rounded-md">
                    {/* CAMBIO: Título con nueva fuente */}
                    <h3 className="text-white text-lg font-title font-medium">Modernidad líquida</h3>
                    {/* CAMBIO: Párrafo con nueva fuente */}
                    <p className="text-gray-200 text-sm font-body">Piezas atemporales</p>
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
                  className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
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
                  className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
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

      {/* Contact Section - VERSIÓN CON TIPOGRAFÍA ACTUALIZADA */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6 text-center">
          {/* CAMBIO: Título con nueva fuente */}
          <h2 className="text-4xl md:text-6xl font-title font-semibold uppercase tracking-wider text-white mb-6">
            Conecta con Nosotros
          </h2>
          {/* CAMBIO: Párrafo con nueva fuente */}
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-body">
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