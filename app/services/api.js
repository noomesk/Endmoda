// app/services/api.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

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

export const getProducts = async (filters = {}) => {
  try {
    const { category, limit } = filters;
    const params = new URLSearchParams();
    
    if (category) params.append('category', category);
    if (limit) params.append('limit', limit);

    const response = await axios.get(`${API_URL}/products?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    
    // Fallback a datos locales si la API falla
    const localProduct = localProducts.find(p => p.id === parseInt(id));
    if (localProduct) {
      console.log(`Usando datos locales para producto ${id}`);
      return { success: true, data: localProduct };
    }
    
    throw error;
  }
};