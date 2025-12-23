// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { Lora } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GSAPProvider from '../components/GSAPProvider';
import { ProductProvider } from './context/ProductContext';

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['600', '700'] });
const lora = Lora({ subsets: ['latin'] });

export const metadata = {
  title: 'ENDModa- Experiencia de Moda personalizada',
  description: 'Descubre ENDModa, un showcase de moda que redefine la experiencia digital con animaciones fluidas y diseño premium.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lora.className}>
        <GSAPProvider>
          <ProductProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ProductProvider>
        </GSAPProvider>
      </body>
    </html>
  );
}