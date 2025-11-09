/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {  
      center: true,
      padding: '1rem',
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024',
        xl: '1280px',
        '2xl': '1440px'
      },

    },
    extend: {
      colors: {
        primary: {
          default: '#ff5a3c',
          light: '#fcd5cfff',
          dark: '#c96a00'
        },
        secondary: {
          default: '#14213d',
          light: '#2c3750',
          dark: '#121e37',
        },
        neutral: {
          light: '#E8E9EC',
          dark: '#434d64'
        },
        background: {
          light: '#F9FAFB',
          dark: '#0F172A'
        },
        success: '#338500',
        danger: '#c1121f',
        warning: '#ffc839'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.5)',
        card: '0 8px 25px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.12)'
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

