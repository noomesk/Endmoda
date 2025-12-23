// scripts/import-products.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Configurar rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Importar el modelo de Producto
const Product = (await import('../app/models/Product.js')).default;

// Importar la conexión a MongoDB
const dbConnect = (await import('../app/lib/mongodb.js')).default;

async function importProducts() {
  try {
    // Conectar a la base de datos
    await dbConnect();
    console.log('✅ Conectado a MongoDB');

    // Leer el archivo de productos
    const productsPath = path.join(__dirname, '..', 'public', 'data', 'products.json');
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

    // Limpiar la colección existente
    await mongoose.connection.db.dropCollection('products').catch(() => {
      console.log('ℹ️ La colección de productos no existía, se creará una nueva');
    });

    // Insertar los productos
    const products = await Product.insertMany(productsData);
    console.log(`✅ ${products.length} productos importados exitosamente`);

    // Mostrar algunos ejemplos
    console.log('\n📦 Ejemplos de productos importados:');
    products.slice(0, 3).forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error al importar productos:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Ejecutar la función de importación
importProducts();