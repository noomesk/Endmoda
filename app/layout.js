import './globals.css'
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google' // <-- NUEVO: Fuente para Títulos
import { Lora } from 'next/font/google'   // <-- NUEVO: Fuente para Texto
import Header from '../components/Header'
import Footer from '../components/Footer'
import GSAPProvider from '../components/GSAPProvider'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'], weight: ['600', '700'] }) // <-- NUEVO
const lora = Lora({ subsets: ['latin'] }) // <-- NUEVO

export const metadata = {
  title: 'ENDModa- Experiencia de Moda personalizada',
  description: 'Descubre ENDModa, un showcase de moda que redefine la experiencia digital con animaciones fluidas y diseño premium.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* CAMBIO: Usamos Lora como fuente principal del body */}
      <body className={lora.className}>
        <GSAPProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </GSAPProvider>
      </body>
    </html>
  )
}