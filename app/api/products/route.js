// app/api/products/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Product from '@/app/models/Product';

// Configuración de caché (opcional, para mejorar rendimiento)
export const revalidate = 3600; // 1 hora

// GET /api/products
export async function GET(request) {
  try {
    // Conectar a la base de datos
    await dbConnect();
    
    // Obtener parámetros de consulta
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit')) || 0;
    
    // Construir el query
    const query = {};
    if (category) {
      query.category = category;
    }
    
    // Obtener productos
    const products = await Product.find(query)
      .limit(limit)
      .lean(); // Convertir a objetos planos de JavaScript
    
    // Devolver respuesta exitosa
    return NextResponse.json({
      success: true,
      count: products.length,
      data: products
    });
    
  } catch (error) {
    // Manejar errores
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener productos',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}