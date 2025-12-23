// app/api/products/[id]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Product from '@/app/models/Product';

// GET /api/products/[id]
export async function GET(request, { params }) {
  try {
    await dbConnect();
    
    const product = await Product.findOne({ id: params.id }).lean();
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: product });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener el producto',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}