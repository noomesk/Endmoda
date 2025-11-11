import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen">
        <HeroSection />
      </section>

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
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm">
                <div className="aspect-square bg-gradient-to-br from-luxury-accent to-luxury-accent-light opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-semibold">Modernidad líquida</h3>
                  <p className="text-gray-200">Piezas atemporales</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm">
                <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-semibold">Modernidad</h3>
                  <p className="text-gray-200">Diseño contemporáneo</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm">
                <div className="aspect-square bg-gradient-to-br from-luxury-light-gray to-luxury-gray opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6">
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
            Descubre la moda del futuro. Únete a nuestra comunidad de estilo originalgit .
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