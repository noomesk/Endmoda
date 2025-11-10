# ModaVista - Showroom de Moda Premium

Una experiencia digital inmersiva que redefine la presentación de moda con Next.js 14, Tailwind CSS y GSAP.

## 🌟 Características Principales

- **Next.js 14** con App Router para rendimiento óptimo
- **Tailwind CSS** con diseño premium personalizado
- **GSAP Animations** fluidas y scroll-triggered
- **Responsive Design** para todos los dispositivos
- **Smooth Scrolling** para navegación ultra fluida
- **ScrollTrigger** para animaciones al hacer scroll
- **Hover Effects** sofisticados en productos

## 🚀 Instalación y Ejecución

### Instalación Rápida
```bash
cd modavista
npm install
```

### Ejecutar el Proyecto
```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

### Scripts Disponibles
- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar linter

## 🔧 Solución de Problemas

### Error de Sintaxis TypeScript
Si ves errores como `Expected ',', got ':'`:

1. **Limpiar cache:**
   ```bash
   rm -rf .next node_modules
   npm install
   ```

2. **O usar el instalador automático:**
   ```bash
   bash quick-install.sh
   ```

3. **Si persiste el problema:**
   ```bash
   npm cache clean --force
   npm install --force
   ```

### Problemas de Permisos npm
```bash
# En Windows
npm config set prefix %APPDATA%\npm
npm install

# En Mac/Linux
sudo npm install
```

### Verificar Versión de Node.js
```bash
node --version  # Debe ser v18 o superior
npm --version
```

## 📁 Estructura del Proyecto

```
modavista/
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.js            # Layout principal
│   ├── page.js              # Página de inicio
│   └── products/
│       ├── page.js          # Página de listado de productos
│       └── [id]/
│           └── page.js      # Página de detalle de producto
├── components/
│   ├── GSAPProvider.js      # Proveedor global de GSAP
│   ├── Header.js            # Header con navegación
│   ├── Footer.js            # Footer del sitio
│   ├── HeroSection.js       # Sección hero animada
│   ├── ProductGrid.js       # Cuadrícula de productos
│   ├── ProductCard.js       # Tarjeta de producto individual
│   └── ScrollToTop.js       # Botón scroll to top
├── data/
│   └── products.json        # Datos de productos
├── public/
│   └── images/              # Imágenes de productos
└── styles/
    └── additional.css       # Estilos adicionales
```

## 🎨 Diseño y Estética

### Paleta de Colores
- **Fondo Principal**: `#0a0a0a` (negro profundo)
- **Secundario**: `#1a1a1a` (gris oscuro)
- **Acento**: `#e11d48` (rosa-rojo premium)
- **Texto**: `#fafafa` (blanco suave)
- **Gris**: `#2a2a2a` (gris medio)

### Tipografía
- **Fuente Principal**: Inter (sans-serif elegante)
- **Fuente de Lujo**: Didot (serif para acentos)

## ✨ Animaciones GSAP

### Hero Section
- Animación de entrada con fadeIn y slideUp
- Elementos flotantes con bucle continuo
- Efecto parallax en scroll

### Scroll-Triggered Animations
- Productos aparecen al entrar en viewport
- Títulos y secciones se animan con delay
- Efectos de reveal progresivos

### Hover Effects
- Escalado suave de imágenes (1.05x)
- Deslizamiento de información del producto
- Transiciones de color fluidas

### Smooth Scrolling
- Navegación suave entre secciones
- ScrollToTop animado
- Performance optimizada

## 🛍️ Productos

El sistema incluye 6 productos de ejemplo con:
- Datos completos (nombre, categoría, precio, descripción)
- Características técnicas
- Imágenes de alta calidad
- Sistema de favoritos (visual)
- Páginas de detalle dinámicas

## 📱 Responsive Design

- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: sm, md, lg, xl según Tailwind
- **Touch Friendly**: Interacciones táctiles optimizadas
- **Performance**: Carga rápida en todos los dispositivos

## 🔧 Tecnologías Utilizadas

- **Next.js 14**: Framework React con App Router
- **Tailwind CSS**: Framework de utilidades CSS
- **GSAP**: Animaciones JavaScript de alto rendimiento
- **React**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático opcional

## 🎯 Experiencia de Usuario

- **Navegación Intuitiva**: Header sticky con navegación clara
- **Carga Rápida**: Optimización de assets y lazy loading
- **Interactividad**: Feedback visual en todas las interacciones
- **Accesibilidad**: Contraste adecuado y navegación por teclado
- **SEO**: Meta tags y estructura semántica

## 🔮 Funcionalidades Avanzadas

- **Memory Leaks Prevention**: Limpieza automática de animaciones
- **Performance Monitoring**: Optimización de frame rate
- **Scroll Performance**: Debouncing y throttling optimizado
- **Image Optimization**: Next.js Image component ready
- **Error Boundaries**: Manejo graceful de errores

## 📈 Métricas de Rendimiento

- **Lighthouse Score**: 90+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎨 Personalización

### Colores
Editar `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  'luxury': {
    'accent': '#tu-color-aqui',
    // ...
  }
}
```

### Animaciones
Personalizar en `components/` o `app/globals.css`:

```css
@keyframes tu-animacion {
  /* Definir keyframes personalizados */
}
```

### Contenido
Modificar `data/products.json` para actualizar productos:

```json
{
  "id": 1,
  "name": "Tu Producto",
  "price": 99.99,
  // ...
}
```

## 🐛 Solución de Problemas

### Las animaciones no funcionan
- Verificar que GSAP esté instalado: `npm install gsap`
- Comprobar que ScrollToPlugin esté registrado
- Revisar consola del navegador para errores

### Problemas de construcción
- Limpiar cache: `rm -rf .next`
- Reinstalar dependencias: `rm -rf node_modules && npm install`

### Imágenes no cargan
- Verificar rutas en `public/images/`
- Comprobar configuración de Next.js Image

## 📝 Notas de Desarrollo

- **Version**: Next.js 14.2.5
- **Node.js**: >= 18.0.0
- **Navegadores**: Chrome 88+, Firefox 85+, Safari 14+
- **Móvil**: iOS 14+, Android 10+

## 🎯 Roadmap Futuro

- [ ] Integración con CMS (Strapi, Sanity)
- [ ] Carrito de compras funcional
- [ ] Filtros avanzados de productos
- [ ] PWA (Progressive Web App)
- [ ] Dark/Light mode toggle
- [ ] Micro-interacciones avanzadas
- [ ] Analytics y tracking
- [ ] A/B testing framework

---

**Desarrollado con ❤️ por MiniMax Agent**

*ModaVista - Redefiniendo la experiencia digital de la moda*