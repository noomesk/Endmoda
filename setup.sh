#!/bin/bash

echo "🎨 ModaVista - Configuración del Proyecto"
echo "=========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18 o superior."
    echo "   Visita: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versión 18 o superior requerida. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Install dependencies
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

# Create images directory if it doesn't exist
if [ ! -d "public/images" ]; then
    mkdir -p public/images
    echo "📁 Directorio de imágenes creado"
fi

# Check if everything is set up
echo ""
echo "🎉 ¡Configuración completada!"
echo ""
echo "Para ejecutar el proyecto:"
echo "  npm run dev"
echo ""
echo "Para construir para producción:"
echo "  npm run build"
echo ""
echo "El proyecto estará disponible en: http://localhost:3000"
echo ""
echo "🎯 Características del proyecto:"
echo "  ✨ Next.js 14 con App Router"
echo "  🎨 Tailwind CSS con diseño premium"
echo "  ⚡ GSAP animaciones fluidas"
echo "  📱 Responsive design"
echo "  🔥 Performance optimizado"
echo ""