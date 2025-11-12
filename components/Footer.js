import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-luxury-light-gray mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">ModaVista</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Redefiniendo la experiencia de moda digital con autenticidad, innovación y diseño intervenido.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-gray-300 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#coleccion" className="text-gray-300 hover:text-white transition-colors">
                  Colección
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>angieesgenial@endmoda.com</li>
              <li>+57 300 000 000</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-light-gray mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ENDModa. Todos los derechos reservados. Desarrollado por noomesk.
          </p>
        </div>
      </div>
    </footer>
  )
}