#!/bin/bash

echo "🧹 Limpiando proyecto ModaVista..."

# Limpiar cache de Next.js
if [ -d ".next" ]; then
    echo "🗑️  Eliminando cache de Next.js..."
    rm -rf .next
fi

# Limpiar node_modules si existe
if [ -d "node_modules" ]; then
    echo "🗑️  Eliminando node_modules..."
    rm -rf node_modules
fi

# Eliminar package-lock.json si existe
if [ -f "package-lock.json" ]; then
    echo "🗑️  Eliminando package-lock.json..."
    rm package-lock.json
fi

# Reinstalar dependencias limpias
echo "📦 Reinstalando dependencias..."
npm install

# Verificar instalación
if [ $? -eq 0 ]; then
    echo "✅ ¡Dependencias instaladas correctamente!"
    echo ""
    echo "🚀 Para ejecutar el proyecto:"
    echo "   npm run dev"
    echo ""
    echo "El proyecto estará disponible en: http://localhost:3000"
else
    echo "❌ Error al instalar dependencias"
    echo ""
    echo "💡 Intenta:"
    echo "   npm cache clean --force"
    echo "   npm install --force"
fi

echo ""
echo "🎨 ModaVista - Proyecto de moda premium listo para brillar!"