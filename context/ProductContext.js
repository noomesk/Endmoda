'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getProducts } from '../app/services/api';

const ProductContext = createContext();

// Datos locales como fallback
const localProducts = [
  {
    id: 1,
    name: "Saco Oversize//Lana vegan",
    price: 89.99,
    image: "/images/k.webp",
    description: "Saco oversize confeccionado en lana vegana de alta calidad",
    category: "ropa",
    inStock: true
  },
  {
    id: 2,
    name: "Pantalón cargo baggy oversize",
    price: 120.00,
    image: "/images/mm.webp",
    description: "Pantalón cargo estilo baggy con múltiples bolsillos",
    category: "ropa",
    inStock: true
  },
  {
    id: 3,
    name: "Hakama short baggy exclusivo",
    price: 250.50,
    image: "/images/o.webp",
    description: "Short hakama de diseño exclusivo estilo baggy",
    category: "ropa",
    inStock: true
  },
  {
    id: 4,
    name: "Chaqueta de Diseño Contemporáneo",
    price: 180.75,
    image: "/images/cap.webp",
    description: "Chaqueta con diseño contemporáneo y corte moderno",
    category: "ropa",
    inStock: true
  },
  {
    id: 5,
    name: "Conjunto morrigal informal y vintage",
    price: 320.00,
    image: "/images/zx.webp",
    description: "Conjunto completo estilo vintage informal",
    category: "ropa",
    inStock: true
  },
  {
    id: 6,
    name: "Camisa Fluida HX20889B",
    price: 65.00,
    image: "/images/ou.webp",
    description: "Camisa fluida de diseño ligero y versátil",
    category: "ropa",
    inStock: true
  }
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (filters = {}) => {
    try {
      setLoading(true);
      const data = await getProducts(filters);
      
      // Si la API devuelve productos, usarlos
      if (data.data && data.data.length > 0) {
        setProducts(data.data);
      } else {
        // Si no hay productos en la BD, usar datos locales
        console.log('Usando datos locales como fallback');
        setProducts(localProducts);
      }
      
      setError(null);
    } catch (err) {
      // Si hay error con la API, usar datos locales
      console.log('Error con API, usando datos locales:', err.message);
      setProducts(localProducts);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        refetch: fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts debe ser usado dentro de un ProductProvider');
  }
  return context;
};