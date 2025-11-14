// components/VideoCinemaSection.js

'use client'

// Aceptamos el prop 'className' para poder personalizarlo desde afuera
export default function VideoCinemaSection({ className }) {
  return (
    // Contenedor que ocupa toda la altura y anchura de la pantalla
    // Combinamos las clases por defecto con las que se pasen como prop
    <section className={`relative w-full h-screen overflow-hidden bg-black ${className || ''}`}>
      
      {/* El video que cubre todo el contenedor */}
      <video
        src="/videos/hxc.mp4"
        autoPlay
        muted
        loop
        playsInline // Importante para que funcione bien en móviles (iOS)
        className="absolute inset-0 w-full h-full object-cover"
      >
        Tu navegador no soporta la etiqueta de video.
      </video>
      
    </section>
  );
}