#!/bin/bash

echo "🎨 ModaVista - Instalación Rápida"
echo "================================="
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "💡 Instala Node.js 18+ desde: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Limpiar todo
echo "🧹 Limpiando archivos anteriores..."
rm -rf .next node_modules package-lock.json

# Instalar dependencias
echo "📦 Instalando dependencias (esto puede tomar unos minutos)..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 ¡Instalación completada!"
    echo ""
    echo "🚀 Para ejecutar ModaVista:"
    echo "   npm run dev"
    echo ""
    echo "🌐 La aplicación estará disponible en:"
    echo "   http://localhost:3000"
    echo ""
    echo "🎭 ¡Disfruta de las animaciones GSAP!"
else
    echo ""
    echo "❌ Error en la instalación"
    echo "💡 Intenta: npm cache clean --force"
    echo "           npm install --force"
fi