import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in-up 0.5s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'foundation-primary-blue-primary-blue-50': '#e6e9fa',
        'primary-blue': '#e6e9fa',
        'foundation-rust-accent-rust-accent-500': '#e36414',
        accent: '#e36414',
        linen: '#fcf0e8',
        'foundation-grey-grey-500': '#1e1e1e',
        'foundation-white-white-300': '#fcfcfc',
        'foundation-rust-accent-rust-accent-50': '#fcf0e8',
        'foundation-white-white-900': '#696969',
        gray: '#1c1c1c',
        darkslategray: '#444',
        'foundation-grey-grey-700': '#151515',
        'foundation-grey-grey-100': '#b9b9b9',
        'dark-bistre': '#241909',
        'foundation-grey-grey-400': '#4b4b4b',
        'foundation-white-white-500': '#fafafa',
        'foundation-grey-grey-50': '#e9e9e9',
        'foundation-rust-accent-rust-accent-100': '#f6cfb6',
        'foundation-rust-accent-rust-accent-200': '#f2b893',
        white: '#fff',
        peru: '#e98c3a',
        'foundation-sea-blue-sea-blue-200': '#8cf6ff',
        sandybrown: '#ec9762',
        lightcyan: 'rgba(230, 253, 255, 0.2)',
      },
      spacing: {},
      fontFamily: {
        'h4-semibold': 'Montserrat',
        'body-2': 'Montserrat',
        'caption-1-semibold': 'Clash Display',
        'Clash Display': 'Clash Display',
        'text-medium-normal': 'Roboto',
        // satoshi: 'Satoshi',
        'cute-font': "'Cute Font'",
        satoshi: ['var(--font-satoshi)'],
        clash: ['var(--font-clash)'],
        h3: 'Montserrat',
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        wider: '0.05em', // Custom tracking value
      },
      borderRadius: {
        '80xl': '99px',
        '81xl': '100px',
      },
      fontSize: {
        base: '1rem',
        '5xl': '1.5rem',
        lg: '1.125rem',
        '53xl': '4.5rem',
        xl: '1.25rem',
        '13xl': '2rem',
        '67xl': '5.375rem',
        '25xl': '2.75rem',
        '33xl': '3.25rem',
        '21xl': '2.5rem',
        inherit: 'inherit',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.pause': {
          'animation-play-state': 'paused',
        },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
};
export default config;

