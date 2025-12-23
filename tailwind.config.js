// Tailwind CSS configuration for EndModa
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        'luxury': ['Didot', 'serif'],
        'title': ['Oswald', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
      colors: {
        'luxury': {
          'dark': '#0a0a0a',
          'gray': '#1a1a1a',
          'light-gray': '#2a2a2a',
          'white': '#fafafa',
          'accent': '#e11d48',
          'accent-light': '#f43f5e',
        },
        // Añadiendo los colores primarios sin sobrescribir los existentes
        'primary': '#2563eb',
        'secondary': '#1e40af',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}