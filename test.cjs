// test.cjs
const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  try {
    console.log('🔌 Intentando conectar a MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ ¡Conexión exitosa a MongoDB!');
    
    // Si llegamos aquí, la conexión fue exitosa
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📚 Colecciones en la base de datos:');
    console.log(collections.map(c => c.name));
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    console.error('Cadena de conexión usada:', process.env.MONGODB_URI);
    process.exit(1);
  }
}

testConnection();