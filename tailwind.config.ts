import type { Config } from 'tailwindcss'

const generateSize = (start: number, end: number, step: number) => {
    const size: any = {}
    for (let i = start; i <= end; i += step) {
        size[i] = `${i / 10 }rem`
    }
    return size
}
const sizes = generateSize(0, 2000, 1)
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    width: {
        full: '100%',
        ...sizes
    },
    maxWidth: {
        full: '100%',
        ...sizes
    },
    maxHeight: {
        full: '100%',
        ...sizes
    },
    height: {
        full: '100%',
        ...sizes
    },
    fontSize: {
        xs: '1.2rem',
        sm: '1.4rem',
        base: '1.6rem',
        lg: '1.8rem',
        xl: '2.4rem',
        '2xl': '3.2rem',
        '3xl': '4.2rem',
        '4xl': '7.2rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    colors: {
            neutral: {
                black: '#262D33',
                'dark-grey': '#737373',
                'grey': '#B9B9B9',
                'soft-grey': '#E7E7E7',
                'light-grey': '#F3F3F3',
                white: '#FFFFFF',
            }
        }
    },
  },
  plugins: [],
}
export default config
