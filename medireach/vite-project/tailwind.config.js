/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', // slate-200
        input: 'var(--color-input)', // slate-200
        ring: 'var(--color-ring)', // blue-600
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // slate-800
        primary: {
          DEFAULT: 'var(--color-primary)', // blue-600
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // teal-700
          foreground: 'var(--color-secondary-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // slate-100
          foreground: 'var(--color-muted-foreground)', // slate-500
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // red-600
          foreground: 'var(--color-accent-foreground)', // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // slate-800
        },
        card: {
          DEFAULT: 'var(--color-card)', // slate-50
          foreground: 'var(--color-card-foreground)', // slate-800
        },
        success: {
          DEFAULT: 'var(--color-success)', // emerald-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-600
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        brand: {
          primary: 'var(--color-brand-primary)', // teal-600
          secondary: 'var(--color-brand-secondary)', // slate-900
          accent: 'var(--color-brand-accent)', // amber-500
          trust: 'var(--color-brand-trust)', // teal-400
        },
      },
      borderRadius: {
        lg: 'var(--radius-lg)', // 1rem
        md: 'var(--radius)', // 0.5rem
        sm: 'var(--radius-sm)', // 0.25rem
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.5rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.875rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2.25rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px rgba(43, 122, 120, 0.07), 0 1px 3px rgba(43, 122, 120, 0.06)',
        'strong': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'consultation': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-health-calm': 'linear-gradient(135deg, #E8F4FD 0%, #F0F9FF 100%)',
        'gradient-health-healthy': 'linear-gradient(135deg, #D4F1E8 0%, #ECFDF5 100%)',
        'gradient-health-attention': 'linear-gradient(135deg, #FFF2E8 0%, #FEF3C7 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}