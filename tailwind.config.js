// Tailwind CSS configuration for ModaVista
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
      },
      colors: {
        'luxury': {
          'dark': '#0a0a0a',
          'gray': '#1a1a1a',
          'light-gray': '#2a2a2a',
          'white': '#fafafa',
          'accent': '#e11d48', // rose-600
          'accent-light': '#f43f5e', // rose-500
        }
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