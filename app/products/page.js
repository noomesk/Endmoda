import ProductGrid from '../../components/ProductGrid'

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestra Colección
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explora cada pieza de nuestra cuidadosamente curada colección de moda premium.
          </p>
        </div>
        
        <ProductGrid />
      </div>
    </div>
  )
}