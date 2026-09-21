import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#070A12',
        'deep-navy': '#0D1324',
        'navy-surface': '#121A2E',
        'electric-blue': '#4F8CFF',
        'bright-blue': '#75A7FF',
        cyan: '#22D3EE',
        'soft-violet': '#8B7CFF',
        'light-bg': '#F7F9FC',
        'text-primary': '#0B1020',
        'text-secondary': '#5E6678',
        'border-light': '#E5E9F2',
        'soft-blue-surface': '#EEF4FF',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.08)',
        elevated: '0 20px 60px rgba(0, 0, 0, 0.12)',
        dark: '0 20px 80px rgba(0, 0, 0, 0.35)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F8CFF 0%, #7C6FFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #070A12 0%, #101A32 100%)',
      },
    },
  },
  plugins: [],
}

export default config