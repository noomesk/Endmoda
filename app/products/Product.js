import mongoose from 'mongoose';
import dbConnect from '../lib/mongodb';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  features: [{ type: String }],
  stock: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Crear el modelo si no existe, o devolver el existente
export default mongoose.models.Product || mongoose.model('Product', productSchema);