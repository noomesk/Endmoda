import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GSAPProvider from '../components/GSAPProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ENDModa- Experiencia de Moda personalizada',
  description: 'Descubre ENDModa, un showcase de moda que redefine la experiencia digital con animaciones fluidas y diseño premium.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
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