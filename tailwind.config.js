/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#151e2a',
        aBitMoreDarkBlue: '#10161e',
        accentColor: '#0960d1',
        hoverAccentColor: '#064392',
        gray: '#eff9ff',
        hoverGray: '#b9c2c7',
        hoverDisabled: '#868d91',
        transparent: '#18212c27',
      },
      fontFamily: {
        monoTitle: ['var(--font-share-tech-mono)', 'ui-monospace', 'SFMono-Regular'],
        monoText: ['var(--font-share)', 'ui-monospace', 'SFMono-Regular'],
      },
      height: {
        '108': '28rem',
      },
      maxWidth: {
        '8xl': '84rem',
      }
    }, screens: {
      'xsm': '320px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}