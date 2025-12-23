// app/models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  // Agregamos algunos campos adicionales que podrían ser útiles
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'ropa'
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);